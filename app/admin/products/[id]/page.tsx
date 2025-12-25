import ProductForm from "@/components/admin-product-form";
import { requireAdmin } from "@/lib/auth-guard";
import { getProductById } from "@/lib/dal";

import { notFound } from "next/navigation";

export default async function AdminProductUpdatePage(props: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await props.params;
  const product = await getProductById(id);
  if (!product) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold"></h1>
      <ProductForm type="Update" product={product} productId={product.id} />
    </div>
  );
}
