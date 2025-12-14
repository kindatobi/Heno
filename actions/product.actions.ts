"use server";

import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { calcPrice } from "@/lib/utils";
import { insertCartSchema } from "@/lib/validators";
import { Cart, Product } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export async function getProductBySlug(productSlug: string) {
  const data = (await prisma.product.findFirst({
    where: { slug: productSlug },
  })) as Product;
  return data;
}

export async function checkoutProduct(data: Cart | null) {
  const vCart = insertCartSchema.parse(data);
  const cartProductIds = vCart.items.map((x) => x.productId);
  const selectedProducts = await prisma.product.findMany({
    where: { id: { in: cartProductIds } },
    include: { sizeStock: true },
  });

  const adjustedItems = [];
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

  if (hasAdjustments)
    return {
      success: false,
      adjustedCart: recalculatedCart,
      adjustedItems,
    };

  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  await redis.set(`cart-${sessionCartId}`, vCart);

  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Missing Stripe secret key");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-11-17.clover",
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
    success_url: `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }`,
  });

  if (session.url) {
    redirect(session.url);
  }
}
