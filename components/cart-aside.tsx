"use client";

import { checkoutProduct } from "@/actions/product.actions";
import { useCartStore } from "@/lib/store/cart.store";
import { useUIStore } from "@/lib/store/ui.store";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function CartAside() {
  const { toggleCart } = useUIStore();
  const { clearCart, removeFromBag, cart, syncCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (!cart || cart.items.length === 0) return;

    setIsProcessing(true);
    try {
      const result = await checkoutProduct(cart);

      if (result.success) {
        window.location.href = result.url;
      } else {
        syncCart(result.adjustedCart);

        alert(
          `Some items in your cart were adjusted due to stock changes:\n${result.adjustedItems
            .map(
              (item) =>
                `${item.name} (${item.size}): ${item.oldQty} → ${item.newQty}`
            )
            .join("\n")}`
        );
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="w-[35%] p-6 bg-[#000000] flex flex-col h-full border-l border-[#282828]"
    >
      {/* ASIDE NAV */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#282828]">
        <h2 className="text-white font-bold text-lg tracking-wide">YOUR BAG</h2>
        <div className="flex gap-4">
          <p
            className="cursor-pointer text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors uppercase tracking-wide"
            onClick={clearCart}
          >
            CLEAR
          </p>
          <p
            className="cursor-pointer text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors uppercase tracking-wide"
            onClick={toggleCart}
          >
            CLOSE
          </p>
        </div>
      </div>

      {/* CONTENT */}
      {!cart || cart.items.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#B3B3B3] text-center">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#282828] scrollbar-track-transparent pr-2">
          <ul className="space-y-2">
            {cart.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-2 p-2 rounded-md bg-[#181818] hover:bg-[#282828] transition-colors"
              >
                <div className="shrink-0">
                  <Image
                    src={item.image}
                    alt={`this is an image of ${item.name}`}
                    width={48}
                    height={48}
                    className="rounded-sm"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <p className="text-white text-sm font-medium leading-tight">
                    {item.name}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex gap-2 text-[#B3B3B3]">
                      <p className="uppercase">{item.size}</p>
                      <p>{item.qty}X</p>
                    </div>
                    <p className="text-white font-semibold">
                      {formatCurrency(item.price)}
                    </p>
                    <p
                      className="cursor-pointer text-[#B3B3B3] hover:text-white uppercase tracking-wide transition-colors"
                      onClick={() => removeFromBag(item.productId, item.size)}
                    >
                      remove
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FOOTER */}
      <div className="mt-6 pt-4 border-t border-[#282828] space-y-4">
        <div className="flex justify-between items-center text-white">
          <p className="text-[#B3B3B3] uppercase text-sm tracking-wide">
            Subtotal
          </p>
          <p className="font-bold text-lg">
            {formatCurrency(Number(cart?.itemsPrice))}
          </p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={isProcessing || !cart || cart.items.length === 0}
          className="bg-white hover:bg-[#B3B3B3] text-black font-bold p-4 rounded-full cursor-pointer w-full uppercase tracking-wider text-sm transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isProcessing ? "Processing..." : "Continue to Checkout"}
        </button>
      </div>
    </aside>
  );
}
