"use client";

import CartModal from "./cart-modal";
import Bag from "./bag";
import { useCartStore } from "@/lib/store/cart.store";

export default function Header() {
  const { cart } = useCartStore();
  const totalItems =
    cart?.items.reduce((total, item) => total + item.qty, 0) ?? 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6">
      <CartModal />
      <div className="flex items-start justify-between">
        <div className="text-white text-9xl font-bold tracking-tight leading-none">
          heno<sup className="text-base">®</sup>
        </div>
        <div className="flex items-center gap-2 text-white text-xs tracking-wider font-mono">
          <button className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors bg-black rounded-[4.5px] py-1.5 px-4">
            Shop
          </button>
          <button className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors rounded-[4.5px] bg-black py-1.5 px-4">
            Menu
          </button>
          <Bag totalItems={totalItems} />
        </div>
      </div>
    </header>
  );
}
