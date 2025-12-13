"use server";

import prisma from "@/lib/prisma";
import { redis } from "@/lib/redis";
import { calcPrice } from "@/lib/utils";
import { insertCartSchema } from "@/lib/validators";
import { Cart, Product } from "@/types";
import { cookies } from "next/headers";

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
    ...calcPrice(vCart.items), // Use the same calcPrice function
  };

  if (hasAdjustments)
    return {
      success: false,
      adjustedCart: recalculatedCart,
      adjustedItems,
    };

  const sessionCartId = (await cookies()).get("sessionCartId")?.value;
  await redis.set(`cart-${sessionCartId}`, vCart);

  // From here we create the stripe session
}
