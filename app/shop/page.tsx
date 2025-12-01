import ShopProductCard from "@/components/shop-product-card";

import prisma from "@/lib/prisma";

export default async function ShopPage() {
  const shopProducts = await prisma.product.findMany({
    include: { sizeStock: true },
  });
  return (
    <div>
      <p> Hey there, what do you wanna get</p>
      <div>
        {shopProducts.map((product) => (
          <ShopProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
