import ShopProductCard from "@/components/shop-product-card";
import { ProductCategory } from "@/generated/prisma/enums";
import { getAllProducts } from "@/lib/dal";
import { ProductItem } from "@/types";
import { Metadata } from "next";

import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Shop",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
    query?: string;
    category?: ProductCategory;
  }>;
}) {
  const resolvedSearchParams = await searchParams;

  const page = resolvedSearchParams.page
    ? Number(resolvedSearchParams.page)
    : 1;
  const query = resolvedSearchParams.query;
  const category = resolvedSearchParams.category;

  const shopProducts = await getAllProducts({
    page: Number(page),
    query,
    category,
  });

  if (!shopProducts) notFound();

  return (
    <div className="bg-[#F5F6F4] pt-20">
      <p></p>
      <div className=" grid grid-cols-4 md:grid-cols-6 w-full">
        {shopProducts.data.map((product) => (
          <ShopProductCard
            key={product.slug}
            product={product as ProductItem}
          />
        ))}
      </div>
    </div>
  );
}
