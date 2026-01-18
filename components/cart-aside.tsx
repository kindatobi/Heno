"use client";

import { checkoutProduct } from "@/actions/product.actions";
import { useCartStore } from "@/lib/store/cart.store";
import { useUIStore } from "@/lib/store/ui.store";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, X } from "lucide-react";

export default function CartAside() {
  const { toggleCart } = useUIStore();
  const { clearCart, removeFromBag, cart, syncCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [adjustedItems, setAdjustedItems] = useState<
    Array<{ name: string; size: string; oldQty: number; newQty: number }>
  >([]);

  const handleCheckout = async () => {
    if (!cart || cart.items.length === 0) return;

    setIsProcessing(true);
    try {
      const result = await checkoutProduct(cart);

      if (result.success) {
        window.location.href = result.url;
      } else {
        syncCart(result.adjustedCart);
        setAdjustedItems(result.adjustedItems);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const dismissAdjustmentAlert = () => {
    setAdjustedItems([]);
  };

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className="p-3 bg-[#F5F6F4] flex flex-col h-[100dvh] overflow-hidden"
    >
      <div className="flex border-b border-[#D9D9D9] justify-between items-center pb-3 shrink-0">
        <h2 className="text-black tracking-[0.04em] font-normal font-neue-haas text-base">
          Your Bag ({cart?.items.length || 0})
        </h2>
        <div className="flex items-center justify-center gap-2">
          <p
            className="cursor-pointer tracking-[0.04em] text-black font-neue-haas hover:underline text-base "
            onClick={clearCart}
          >
            Clear
          </p>
          <p>/</p>
          <p
            className="cursor-pointer tracking-[0.04em] text-black font-neue-haas hover:underline text-base"
            onClick={toggleCart}
          >
            Close
          </p>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto min-h-0"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {adjustedItems.length > 0 && (
          <Alert className="mt-4 mb-4 bg-yellow-50 border-yellow-200 relative">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <button
              onClick={dismissAdjustmentAlert}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <AlertTitle className="text-yellow-800 font-bold mb-2">
              Cart Items Adjusted
            </AlertTitle>
            <AlertDescription className="text-gray-700 text-sm">
              <p className="mb-3">
                Some items were adjusted due to stock changes:
              </p>
              <div className="space-y-2">
                {adjustedItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 rounded bg-white border border-yellow-200"
                  >
                    <p className="text-black font-medium text-xs mb-1">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-gray-600 uppercase">
                        {item.size}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-red-500 line-through">
                        {item.oldQty}
                      </span>
                      <span className="text-gray-400">→</span>
                      <span className="text-green-600 font-semibold">
                        {item.newQty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {!cart || cart.items.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-center font-neue-haas tracking-[0.04em]">
              Your cart is empty
            </p>
          </div>
        ) : (
          <ul className="pt-2">
            {cart.items.map((item, i) => (
              <li
                key={i}
                className="flex py-3 gap-4 border-b border-[#D9D9D9] last:border-0"
              >
                <div className="relative h-25 w-12.5 bg-[#F5F6F4] shrink-0">
                  <Image
                    src={item.image}
                    alt={`this is an image of ${item.name}`}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-black font-normal tracking-[0.04em] text-[14px] font-neue-haas capitalize mb-1">
                          {item.name}
                        </p>
                        <p className="font-bcd-diatype text-sm uppercase">
                          SIZE: {item.size}
                        </p>
                      </div>
                      <p className="text-black font-normal text-base">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <p className="font-neue-haas text-[14px] tracking-[0.04em]">
                        {item.qty}X {item.size}
                      </p>
                    </div>
                    <button
                      className="font-bcd-diatype hover:text-black text-sm uppercase tracking-wider transition-colors underline"
                      onClick={() => removeFromBag(item.productId, item.size)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-1.5 md:space-y-2 pt-2 border-t border-[#D9D9D9] shrink-0">
        <div className="flex justify-between items-center">
          <p className="text-black font-neue-haas text-[24px] font-normal">
            Subtotal
          </p>
          <p className="text-black font-bold text-[24px]">
            {formatCurrency(Number(cart?.itemsPrice) || 0)}
          </p>
        </div>

        <p className="tracking-[0.04em] font-neue-haas font-normal text-sm">
          Taxes and shipping calculated at checkout.
        </p>

        <button
          onClick={handleCheckout}
          disabled={isProcessing || !cart || cart.items.length === 0}
          className="bg-black font-bcd-diatype hover:bg-gray-800 text-white font-normal px-6 py-2 rounded cursor-pointer w-full uppercase tracking-widest text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? "Processing..." : "CHECKOUT"}
        </button>
      </div>
    </aside>
  );
}
