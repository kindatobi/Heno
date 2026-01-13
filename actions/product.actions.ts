"use server";

import { ALLOWED_SHIPPING_COUNTRIES } from "@/constants";
import { Prisma } from "@/generated/prisma/client";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { calcPrice, formatError } from "@/lib/utils";
import { createProductSchema, insertCartSchema } from "@/lib/validators";
import { Cart } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";
import Stripe from "stripe";
import { z } from "zod";

type AdjustedItems = {
  name: string;
  size: string;
  oldQty: number;
  newQty: number;
};

type CheckoutResult =
  | { success: false; adjustedCart: Cart; adjustedItems: AdjustedItems[] }
  | { success: true; url: string };

export async function checkoutProduct(
  data: Cart | null
): Promise<CheckoutResult> {
  const userSession = await auth.api.getSession({
    headers: await headers(),
  });
  const user = userSession ? userSession.user : undefined;
  const vCart = insertCartSchema.parse(data);
  const cartProductIds = vCart.items.map((x) => x.productId);
  const selectedProducts = await prisma.product.findMany({
    where: { id: { in: cartProductIds } },
    include: { sizeStock: true },
  });

  const adjustedItems: AdjustedItems[] = [];
  let hasAdjustments = false;

  for (const item of vCart.items) {
    const product = selectedProducts.find((p) => p.id === item.productId);
    const sizeStockInfo = product?.sizeStock.find((s) => s.size === item.size);

    if (sizeStockInfo && sizeStockInfo.stock < item.qty) {
      adjustedItems.push({
        name: item.name,
        size: item.size,
        oldQty: item.qty,
        newQty: sizeStockInfo.stock,
      });
      item.qty = sizeStockInfo.stock;
      hasAdjustments = true;
    }

    if (!sizeStockInfo || sizeStockInfo.stock === 0) {
      adjustedItems.push({
        name: item.name,
        size: item.size,
        oldQty: item.qty,
        newQty: 0,
      });
      item.qty = 0;
      hasAdjustments = true;
    }
  }

  vCart.items = vCart.items.filter((item) => item.qty > 0);

  const recalculatedCart = {
    items: vCart.items,
    ...calcPrice(vCart.items),
  };

  if (hasAdjustments) {
    return {
      success: false,
      adjustedCart: recalculatedCart,
      adjustedItems,
    };
  }

  const sessionCartId = (await cookies()).get("sessionCartId")?.value;

  if (!sessionCartId) {
    throw new Error("Session cart ID not found");
  }

  await redis.set(`cart-${sessionCartId}`, vCart);

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-12-15.clover",
  });

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
    vCart.items.map((item) => ({
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.image],
        },
      },
      quantity: item.qty,
    }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/payment/success",
    cancel_url: "http://localhost:3000",
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: [...ALLOWED_SHIPPING_COUNTRIES],
    },
    metadata: {
      sessionCartId,
      ...(user?.id && { userId: user.id }),
    },
  });

  if (!session.url) {
    throw new Error("Failed to create checkout session URL");
  }

  return { success: true, url: session.url };
}

export async function createProduct(data: z.infer<typeof createProductSchema>) {
  try {
    const validatedProduct = createProductSchema.parse(data);

    const { sizeStock, sizingInfo, ...productData } = validatedProduct;

    await prisma.product.create({
      data: {
        ...productData,
        sizingInfo: sizingInfo === null ? Prisma.JsonNull : sizingInfo,
        sizeStock: {
          create: sizeStock.map((item) => ({
            size: item.size,
            stock: item.stock,
          })),
        },
      },
    });

    return { success: true, message: "Product created successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function updateProduct({
  data,
  id,
}: {
  data: z.infer<typeof createProductSchema>;
  id: string;
}) {
  try {
    const validatedProduct = createProductSchema.parse(data);

    const { sizeStock, sizingInfo, ...productData } = validatedProduct;

    await prisma.product.update({
      where: { id },
      data: {
        ...productData,
        sizingInfo: sizingInfo === null ? Prisma.JsonNull : sizingInfo,
        sizeStock: {
          deleteMany: {},
          create: sizeStock.map((item) => ({
            size: item.size,
            stock: item.stock,
          })),
        },
      },
    });

    return { success: true, message: "Product updated successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id },
    });
    revalidatePath("/admin/products");
    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
