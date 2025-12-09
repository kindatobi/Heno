"use server";

import { redis } from "@/lib/redis";
import { Cart } from "@/types";
import { cookies } from "next/headers";

export async function getMyCart() {
  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  const cart: Cart | null = await redis.get(`cart-${sessionCartId}`);
  return cart;
}
