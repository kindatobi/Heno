import sampleData from "@/db/sample-data";
import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({ product }) {
  const shopProducts = sampleData.products;
  return (
    <div>
      <Link href={`/product/${product.slug}`}></Link>
      <Image
        key={product.slug}
        src={product.images[0]}
        alt={product.description}
      />
    </div>
  );
}
