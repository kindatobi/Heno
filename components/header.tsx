"use client";

import { useUIStore } from "@/lib/store/ui.store";
import CartModal from "./cart-modal";

export default function Header() {
  const { cartOpen, toggleCart } = useUIStore();

  return (
    <header className="p-2">
      {cartOpen && <CartModal />}
      <div className="flex justify-between">
        {/* LOGO */}
        <div>HENO</div>
        {/* OTHER THINGS */}
        <div>THINGS</div>
        {/* BAG */}
        <div>
          <span className="cursor-pointer" onClick={toggleCart}>
            BAG(0)
          </span>
        </div>
        {/* FUGA */}
        <div>OPEN</div>
      </div>
    </header>
  );
}
