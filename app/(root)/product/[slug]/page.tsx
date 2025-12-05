import { getProductBySlug } from "@/actions/product.actions";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "ONE_SIZE"];
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              {product.showcaseImages.spin360?.left.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={450}
                  height={450}
                />
              ))}
            </div>
            <div>
              {product.showcaseImages.spin360?.right.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={450}
                  height={450}
                />
              ))}
            </div>
          </div>

          <div>
            {product.showcaseImages.regular.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={product.name}
                width={200}
                height={200}
              />
            ))}
          </div>
        </div>

        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <h3>{formatCurrency(product.price)}</h3>
          <p>
            <span className="uppercase">VAT</span> included
          </p>
        </div>
        <div>
          <p>size</p>
          <div className="flex gap-1">
            {ALL_SIZES.map((x, i) => (
              <p key={i}>{x}</p>
            ))}
          </div>
        </div>
        <button className="bg-black text-white cursor-pointer">
          add to cart
        </button>
      </div>
    </div>
  );
}
