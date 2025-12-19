"use client";

import { useCartStore } from "@/lib/store/cart.store";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shopImage: string;
}

export default function AddToCartButton({
  product,
  sizes,
  productSizes,
}: {
  product: Product;
  sizes: string[];
  productSizes: string[];
}) {
  const [selectedSize, setSelectedSize] = useState("");
  const addItemToBag = useCartStore((state) => state.addItemToBag);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addItemToBag({
      productId: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      size: selectedSize,
      image: product.shopImage,
    });
  };

  return (
    <div>
      <div>
        <p>size</p>
        <div className="flex gap-1">
          {sizes.map((x, i) => (
            <button
              disabled={!productSizes.includes(x)}
              key={i}
              onClick={() => setSelectedSize(x)}
              className={`cursor-pointer p-2 border ${
                selectedSize === x ? "bg-black text-white" : ""
              } ${
                !productSizes.includes(x) ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-black p-2 rounded-sm text-white cursor-pointer"
      >
        add to cart
      </button>
    </div>
  );
}
