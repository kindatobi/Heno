"use client";
import { addItemToCart } from "@/actions/cart.actions";
import { useState } from "react";

export default function AddToCartButton({ productId }: { productId: string }) {
  const [count, setCount] = useState(1);

  const handleAddToCart = async () => {
    const res = await addItemToCart({ productId, quantity: count });
  };

  return (
    <div>
      {/* Counter */}
      <div className="flex gap-2 items-center select-none">
        <div
          onClick={() => {
            if (count > 1) setCount((s) => s - 1);
          }}
          className="cursor-pointer"
        >
          -
        </div>
        <div>{count}</div>
        <div onClick={() => setCount((s) => s + 1)} className="cursor-pointer">
          +
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="bg-black text-white cursor-pointer"
      >
        add to cart
      </button>
    </div>
  );
}
