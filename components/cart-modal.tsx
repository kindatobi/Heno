"use client";

import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";
import { Cart } from "@/types";

export default function CartModal({ cart }: { cart: Cart | null }) {
  const { cartOpen, toggleCart } = useUIStore();

  if (!cartOpen) return null;

  return (
    <div
      onClick={toggleCart}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      <CartAside cart={cart ?? null} />
    </div>
  );
}
