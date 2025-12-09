"use client";
import { addItemToCart } from "@/actions/cart.actions";
import { useState } from "react";

export default function AddToCartButton({
  productId,
  sizes,
}: {
  productId: string;
  sizes: string[];
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    const res = await addItemToCart({
      productId,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <div>
      <div>
        <p>size</p>
        <div className="flex gap-1">
          {sizes.map((x, i) => (
            <p
              key={i}
              onClick={() => setSelectedSize(x)}
              className={`cursor-pointer p-2 border ${
                selectedSize === x ? "bg-black text-white" : ""
              }`}
            >
              {x}
            </p>
          ))}
        </div>
      </div>
      {/* Counter */}
      <div className="flex gap-2 items-center select-none">
        <div
          onClick={() => {
            if (quantity > 1) setQuantity((q) => q - 1);
          }}
          className="cursor-pointer"
        >
          -
        </div>
        <div>{quantity}</div>
        <div
          onClick={() => setQuantity((q) => q + 1)}
          className="cursor-pointer"
        >
          +
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="bg-black p-2 rounded-sm text-white cursor-pointer"
      >
        add to cart
      </button>
    </div>
  );
}
