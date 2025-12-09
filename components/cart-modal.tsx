"use client";

import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";
import { Cart } from "@/types";
import { useEffect } from "react";

export default function CartModal({ cart }: { cart: Cart | null }) {
  const { cartOpen, toggleCart } = useUIStore();

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

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
