"use client";

import AddToCartButton from "@/components/add-to-cart-button";
import { formatCurrency } from "@/lib/utils";
import { ProductItem, ProductSizeString } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductDetail({ product }: { product: ProductItem }) {
  const [selectedSize, setSelectedSize] = useState<ProductSizeString | "">("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMoreImages, setShowMoreImages] = useState(false);

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
      <div className="hidden md:flex pt-32">
        <div className="w-1/2">
          {has360 ? (
            <div className="flex gap-4 mb-8">
              {hasLeft && product.showcaseImages.spin360?.left && (
                <div className="relative h-auto w-full">
                  <Image
                    src={product.showcaseImages.spin360.left[currentIndex]}
                    alt={`${product.name} - left view ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {hasRight && product.showcaseImages.spin360?.right && (
                <div className="relative w-full">
                  <Image
                    src={product.showcaseImages.spin360.right[currentIndex]}
                    alt={`${product.name} - right view ${currentIndex + 1}`}
                    width={250}
                    height={250}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-full mb-8">
              <Image
                src={product.shopImage}
                alt={`${product.name} - shop image`}
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          <div className="flex flex-col gap-3">
            {product.showcaseImages.regular.map((img, i) => (
              <div key={i} className="relative w-full">
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

        <div className="w-1/2 pr-6 space-y-4">
          <h1 className="text-6xl capitalize font-normal tracking-[-0.04em] italic font-neue-haas">
            {product.name}
          </h1>

          <p className="text-[16px] font-neue-haas leading-[1.4em]">
            {product.description}
          </p>

          <hr className="border-t border-black" />

          <div className="space-y-2 pb-1.5">
            <label className="block text-[14px] uppercase tracking-wider">
              SIZE
            </label>
            <div className="flex gap-2">
              {ALL_SIZES.map((size) => {
                const available = productSizes.includes(size);
                const isSelected = selectedSize === size;

                return (
                  <button
                    key={size}
                    onClick={() => available && setSelectedSize(size)}
                    disabled={!available}
                    className={`
                      px-4 py-2 rounded-[5px] text-sm font-medium transition-colors
                      ${isSelected ? "bg-black text-white" : "text-black"}
                      ${
                        !available
                          ? "line-through cursor-not-allowed opacity-50"
                          : ""
                      }
                    `}
                    style={
                      !isSelected ? { backgroundColor: "#D9D9D9" } : undefined
                    }
                  >
                    {size.replace("_", " ")}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-start gap-6 pb-2">
            <div className="shrink-0">
              <p className="text-5xl font-neue-haas font-normal">
                {formatCurrency(product.price)}
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

          <div>
            {/* Sizing Information */}
            {product.sizingInfo && product.sizingInfo.length > 0 && (
              <details className="group border-t border-black py-1">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="text-[14px] uppercase tracking-[-0.03em]">
                    Size chart
                  </span>
                  <span className="text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left font-medium">Size</th>
                        <th className="text-left font-medium">Body Length</th>
                        <th className="text-left font-medium">Chest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizingInfo.map((info, i) => (
                        <tr
                          key={i}
                          className={`${
                            i === product.sizingInfo!.length - 1
                              ? ""
                              : "border-b border-gray-200"
                          }`}
                        >
                          <td>{info.size}</td>
                          <td>{info.bodyLength}</td>
                          <td>{info.chest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
            )}

            {/* Product Details */}
            {product.detail && (
              <details className="border-t border-black group py-1">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="text-[14px] uppercase tracking-[-0.03em]">
                    Product details
                  </span>
                  <span className="text-2xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div>
                  <p className="text-[14px] leading-relaxed">
                    {product.detail}
                  </p>
                </div>
              </details>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className="md:hidden pt-20 my-x-cont">
        {has360 ? (
          <div className="flex gap-4 mb-6">
            {hasLeft && product.showcaseImages.spin360?.left && (
              <div className="relative w-full h-auto">
                <Image
                  src={product.showcaseImages.spin360.left[currentIndex]}
                  alt={`${product.name} - left view ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {hasRight && product.showcaseImages.spin360?.right && (
              <div className="relative w-full h-auto">
                <Image
                  src={product.showcaseImages.spin360.right[currentIndex]}
                  alt={`${product.name} - right view ${currentIndex + 1}`}
                  width={250}
                  height={250}
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="relative w-full aspect-square mb-6">
            <Image
              src={product.shopImage}
              alt={`${product.name} - shop image`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-[42px] capitalize leading-none font-normal tracking-[-0.04em] italic font-neue-haas mb-4">
          {product.name}
        </h1>

        <p className="text-[16px] font-neue-haas leading-[1.4em] mb-6">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p className="uppercase text-[12px] tracking-wider text-gray-600">
              Color
            </p>
            <p className="capitalize font-medium">{product.color}</p>
          </div>
          <div>
            <p className="uppercase text-[12px] tracking-wider text-gray-600">
              Category
            </p>
            <p className="font-medium">{product.category}</p>
          </div>
          <div>
            <p className="uppercase text-[12px] tracking-wider text-gray-600">
              Ships In
            </p>
            <p className="font-medium">Within 2 Weeks</p>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-[12px] uppercase tracking-wider mb-3">
            Size
          </label>
          <div className="flex flex-wrap gap-2">
            {ALL_SIZES.map((size) => {
              const available = productSizes.includes(size);
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  onClick={() => available && setSelectedSize(size)}
                  disabled={!available}
                  className={`
                    px-4 py-2 rounded-[5px] text-sm font-medium transition-colors
                    ${isSelected ? "bg-black text-white" : "text-black"}
                    ${
                      !available
                        ? "line-through cursor-not-allowed opacity-50"
                        : ""
                    }
                  `}
                  style={
                    !isSelected ? { backgroundColor: "#D9D9D9" } : undefined
                  }
                >
                  {size.replace("_", " ")}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0">
            <p className="text-[42px] font-neue-haas font-normal">
              {formatCurrency(product.price)}
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

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setShowMoreImages(!showMoreImages)}
            className="text-sm italic underline"
          >
            {showMoreImages ? "hide images" : "see more images"}
          </button>
        </div>

        {showMoreImages && (
          <div className="flex flex-col gap-4 mb-6">
            {product.showcaseImages.regular.map((img, i) => (
              <div key={i} className="relative w-full aspect-square">
                <Image
                  src={img}
                  alt={`${product.name} - image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {product.sizingInfo && product.sizingInfo.length > 0 && (
          <div className="py-4">
            <h3 className="text-[12px] uppercase tracking-[-0.03em] mb-3">
              Size chart
            </h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left font-medium py-2">Size</th>
                  <th className="text-left font-medium py-2">Body Length</th>
                  <th className="text-left font-medium py-2">Chest</th>
                </tr>
              </thead>
              <tbody>
                {product.sizingInfo.map((info, i) => (
                  <tr
                    key={i}
                    className={`${
                      i === product.sizingInfo!.length - 1
                        ? ""
                        : "border-b border-gray-200"
                    }`}
                  >
                    <td className="py-2">{info.size}</td>
                    <td className="py-2">{info.bodyLength}</td>
                    <td className="py-2">{info.chest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {product.detail && (
          <div className="py-4">
            <h3 className="text-[12px] uppercase tracking-[-0.03em] mb-3">
              Product details
            </h3>
            <p className="text-[12px] leading-relaxed">{product.detail}</p>
          </div>
        )}
      </div>
    </div>
  );
}
