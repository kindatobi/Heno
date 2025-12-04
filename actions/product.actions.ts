"use server";

import prisma from "@/lib/prisma";

export async function getProductBySlug(productSlug: string) {
  const data = await prisma.product.findFirst({
    where: { slug: productSlug },
  });
  return data;
}
