import ShopProductCard from "@/components/shop-product-card";

import prisma from "@/lib/prisma";
import { ProductItem } from "@/types";

import { notFound } from "next/navigation";

export default async function ShopPage() {
  const shopProducts = await prisma.product.findMany({
    include: { sizeStock: true },
  });
  if (!shopProducts) notFound();
  return (
    <div className="bg-[#F5F6F4]">
      <p> Hey there, what do you wanna get</p>
      <div className="grid grid-cols-6 w-full">
        {shopProducts.map((product) => (
          <ShopProductCard
            key={product.slug}
            product={product as ProductItem}
          />
        ))}
      </div>
    </div>
  );
}
