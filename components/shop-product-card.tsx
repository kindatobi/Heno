import { formatCurrency } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ShopProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <Image
          key={product.slug}
          src={product.shopImage}
          alt={product.description}
          width={100}
          height={100}
        />
        <div>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{formatCurrency(product.price)}</p>
        </div>
      </Link>
    </div>
  );
}
