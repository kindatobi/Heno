"use client";

import CartModal from "./cart-modal";

import Bag from "./bag";
import { useCartStore } from "@/lib/store/cart.store";

export default function Header() {
  const { cart } = useCartStore();
  const totalItems =
    cart?.items.reduce((total, item) => total + item.qty, 0) ?? 0;

  return (
    <header className="p-2">
      <CartModal cart={cart} />
      <div className="flex justify-between">
        <div>HENO</div>
        <div>THINGS</div>
        <Bag totalItems={totalItems} />
        <div>OPEN</div>
      </div>
    </header>
  );
}
