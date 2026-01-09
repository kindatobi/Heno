import { ProductItem } from "@/types";

import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="relative h-[200px] md:h-[500px] w-full">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.shopImage}
          alt={product.description}
          fill
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
}
