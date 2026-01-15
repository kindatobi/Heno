import ShopProductCard from "@/components/shop-product-card";
import { ProductCategory } from "@/generated/prisma/enums";
import { getAllProducts } from "@/lib/dal";
import { ProductItem } from "@/types";
import { Metadata } from "next";
import Link from "next/link";

import { notFound } from "next/navigation";
import ShopToggleBtn from "./shop-toggle-btn";

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
    <div className="bg-[#F5F6F4] pt-20 md:pt-25">
      <div className="my-x-cont">
        <div className="flex font-bcd-diatype tracking-[0.08em] justify-between pb-2">
          <button className="uppercase underline">
            <Link href="/shop">shop</Link>
          </button>
          <ShopToggleBtn />
        </div>
      </div>
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
