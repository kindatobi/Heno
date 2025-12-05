"use server";

import prisma from "@/lib/prisma";
import { Product } from "@/types";

export async function getProductBySlug(productSlug: string) {
  const data = (await prisma.product.findFirst({
    where: { slug: productSlug },
  })) as Product;
  return data;
}
