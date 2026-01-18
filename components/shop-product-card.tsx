import { ProductItem } from "@/types";

import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({ product }: { product: ProductItem }) {
  return (
    <Link className="relative w-full" href={`/product/${product.slug}`}>
      <Image
        src={product.shopImage}
        alt={product.description}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-contain"
        priority
      />
    </Link>
  );
}
