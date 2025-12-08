"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { Cart } from "@/types";

export default function CartAside({ cart }: { cart: Cart | null }) {
  const { toggleCart } = useUIStore();

  return (
    <aside
      onClick={toggleCart}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      <div
        className="w-[30%] bg-amber-950"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h2>YOUR BAG</h2>
          <p className="cursor-pointer" onClick={toggleCart}>
            CLOSE
          </p>
        </div>
      </div>
    </aside>
  );
}
