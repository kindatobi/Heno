import { getProductBySlug } from "@/actions/product.actions";
import AddToCartButton from "@/components/add-to-cart-button";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";

import { notFound } from "next/navigation";

export default async function ProductDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const ALL_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "ONE_SIZE"];
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const productSizes = product.sizeStock?.map((x) => x.size) ?? [];

  return (
    <div>
      <div className="flex">
        {/* LEFT SIDE - Images */}
        <div className="w-1/2">
          <div className="flex">
            <div className="relative h-[500px] w-full">
              {product.showcaseImages.spin360?.left.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="absolute top-0 left-0"
                />
              ))}
            </div>
            <div className="relative h-[500px] w-full">
              {product.showcaseImages.spin360?.right.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="absolute top-0 left-0"
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

        {/* RIGHT SIDE - Details */}
        <div className="w-1/2">
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

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              slug: product.slug,
              price: product.price,
              shopImage: product.shopImage,
            }}
            sizes={ALL_SIZES}
            productSizes={productSizes}
          />
        </div>
      </div>
    </div>
  );
}
