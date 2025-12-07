"use client";
import { addItemToCart } from "@/actions/cart.actions";
import { useState } from "react";

export default function AddToCartButton({ productId }: { productId: string }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    const res = await addItemToCart(productId, quantity);
  };

  return (
    <div>
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
