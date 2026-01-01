import { getProductBySlug } from "@/lib/dal";

import { notFound } from "next/navigation";
import ProductDetail from "./product-detail";

export default async function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="bg-[#F5F6F4]">
      <ProductDetail product={product} />
    </div>
  );
}
