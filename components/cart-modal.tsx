"use client";

import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";

export default function CartModal() {
  const { cartOpen, toggleCart } = useUIStore();

  if (!cartOpen) return null;

  return (
    <div
      onClick={toggleCart}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      <CartAside />
    </div>
  );
}
