"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { formatError } from "@/lib/utils";
import { Cart, CartItem } from "@/types";
import { cookies, headers } from "next/headers";
import { success } from "zod";

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

export async function addItemToCart(
  productId: string,
  quantity: number,
  selectedSize: string
) {
  try {
    const selectedProduct = await prisma.product.findFirst({
      where: { id: productId },
      include: { sizeStock: true },
    });
    if (!selectedProduct) throw new Error("Product not found");

    const item = {
      productId: selectedProduct.id,
      name: selectedProduct.name,
      slug: selectedProduct.slug,
      price: selectedProduct.price,
      size: selectedProduct.sizeStock,
      qty: quantity,
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
