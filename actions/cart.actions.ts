"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { formatError } from "@/lib/utils";
import { addItemToCartSchema } from "@/lib/validators";
import { Cart, CartItem } from "@/types";
import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";

function calcPrice(items: CartItem[]) {
  const itemsPrice = items.reduce(
    (acc, item) => acc + Number(item.price) * item.qty,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  };
}

export async function addItemToCart({
  productId,
  size,
  quantity,
}: {
  productId: string;
  size: string;
  quantity: number;
}) {
  try {
    const validatedProduct = addItemToCartSchema.parse({
      productId,
      size,
      quantity,
    });

    const selectedProduct = await prisma.product.findFirst({
      where: { id: validatedProduct.productId },
      include: { sizeStock: true },
    });
    if (!selectedProduct) throw new Error("Product not found");

    const productSizeStock = selectedProduct.sizeStock.find(
      (s) => s.size === validatedProduct.size
    );

    if (!productSizeStock) {
      throw new Error("Size not found");
    }

    if (validatedProduct.quantity > productSizeStock.stock) {
      validatedProduct.quantity = productSizeStock.stock;
    }

    const item = {
      productId: selectedProduct.id,
      name: selectedProduct.name,
      slug: selectedProduct.slug,
      price: selectedProduct.price,
      size: validatedProduct.size,
      qty: validatedProduct.quantity,
      image: selectedProduct.shopImage,
    };

    const session = await auth.api.getSession({
      headers: await headers(),
    });
    const userId = session?.user.id ? (session.user.id as string) : undefined;
    const sessionCartId = (await cookies()).get("sessionCartId")?.value;

    const cart: Cart | null = await redis.get(`cart-${sessionCartId}`);
    if (!cart) {
      const newCart = {
        userId,
        sessionCartId,
        items: [item],
        ...calcPrice([item]),
      };
      await redis.set(`cart-${sessionCartId}`, newCart);
    } else {
      const existItem = cart.items.find((x) => x.productId === productId);
      if (!existItem) {
        cart.items = [...cart.items, item];
      } else {
        cart.items = cart.items.map((item) =>
          item.productId === productId
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      }
      await redis.set(`cart-${sessionCartId}`, cart);
    }

    return { success: true, message: "Item added to cart" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function getMyCart() {
  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  const cart: Cart | null = await redis.get(`cart-${sessionCartId}`);
  return cart;
}
