"use client";

import AddToCartButton from "@/components/add-to-cart-button";
import { formatCurrency } from "@/lib/utils";
import { ProductItem, ProductSizeString } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductDetail({ product }: { product: ProductItem }) {
  const [selectedSize, setSelectedSize] = useState<ProductSizeString | "">("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const ALL_SIZES: ProductSizeString[] = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "ONE_SIZE",
  ];

  const productSizes = product.sizeStock?.map((x) => x.size) ?? [];
  const hasLeft = product.showcaseImages.spin360?.left != null;
  const hasRight = product.showcaseImages.spin360?.right != null;
  const has360 = hasLeft || hasRight;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < 7 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          {has360 && (
            <div className="flex gap-4 mb-8">
              {hasLeft && product.showcaseImages.spin360?.left && (
                <div className="relative h-[500px] w-full">
                  <Image
                    src={product.showcaseImages.spin360.left[currentIndex]}
                    alt={`${product.name} - left view ${currentIndex + 1}`}
                    width={250}
                    height={250}
                    className="absolute top-0 left-0"
                    priority
                  />
                </div>
              )}

              {hasRight && product.showcaseImages.spin360?.right && (
                <div className="relative h-[500px] w-full">
                  <Image
                    src={product.showcaseImages.spin360.right[currentIndex]}
                    alt={`${product.name} - right view ${currentIndex + 1}`}
                    width={250}
                    height={250}
                    className="absolute top-0 left-0"
                  />
                </div>
              )}
            </div>
          )}

          {/* Regular Images */}
          <div className="flex flex-col gap-3">
            {product.showcaseImages.regular.map((img, i) => (
              <div key={i} className="relative  w-full">
                <Image
                  src={img}
                  alt={`${product.name} - image ${i + 1}`}
                  width={800}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Details */}
        <div className="w-1/2 pl-16 pt-8">
          <h1 className="text-5xl font-serif mb-6">{product.name}</h1>

          <p className="text-lg leading-relaxed mb-12">{product.description}</p>

          <hr className="border-t border-black mb-8" />

          <div className="mb-6">
            <label className="block text-xs uppercase tracking-wider mb-3">
              SIZE
            </label>
            <div className="flex gap-3">
              {ALL_SIZES.map((size) => {
                const available = productSizes.includes(size);
                const isSelected = selectedSize === size;

                return (
                  <button
                    key={size}
                    onClick={() => available && setSelectedSize(size)}
                    disabled={!available}
                    className={`
                  px-5 py-3 text-sm font-medium transition-colors
                  ${
                    available
                      ? isSelected
                        ? "bg-black text-white"
                        : "bg-gray-200 text-black hover:bg-gray-300"
                      : "bg-gray-100 text-gray-400 line-through cursor-not-allowed"
                  }
                `}
                  >
                    {size.replace("_", " ")}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <p className="text-5xl font-light mb-2">
                {formatCurrency(product.price)}
              </p>
              <p className="text-sm">
                *<span className="uppercase">VAT</span> included
              </p>
            </div>

            <div className="flex-1">
              <AddToCartButton
                product={{
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: product.price,
                  shopImage: product.shopImage,
                }}
                selectedSize={selectedSize}
              />
            </div>
          </div>

          <hr className="border-t border-black my-8" />

          {/* Sizing Information */}
          {product.sizingInfo && product.sizingInfo.length > 0 && (
            <details className="group mb-6">
              <summary className="flex justify-between items-center cursor-pointer py-4">
                <span className="text-lg font-serif">Sizing information</span>
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pt-4 pb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 font-medium">Size</th>
                      <th className="text-left py-2 font-medium">
                        Body Length
                      </th>
                      <th className="text-left py-2 font-medium">Chest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizingInfo.map((info, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3">{info.size}</td>
                        <td className="py-3">{info.bodyLength}</td>
                        <td className="py-3">{info.chest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          )}

          <hr className="border-t border-black my-6" />

          {/* Product Details */}
          {product.detail && (
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-4">
                <span className="text-lg font-serif">Product details</span>
                <span className="text-2xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="pt-4 pb-6">
                <p className="text-base leading-relaxed">{product.detail}</p>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
