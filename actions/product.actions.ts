"use server";

import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { insertCartSchema } from "@/lib/validators";
import { Cart, Product } from "@/types";
import { cookies } from "next/headers";

export async function getProductBySlug(productSlug: string) {
  const data = (await prisma.product.findFirst({
    where: { slug: productSlug },
  })) as Product;
  return data;
}

export async function checkoutProduct(data: Cart) {
  const vCart = insertCartSchema.parse(data);
  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  await redis.set(`cart-${sessionCartId}`, vCart);
}
