"use client";

import { useUIStore } from "@/lib/store/ui.store";

export default function Bag({ totalItems }: { totalItems: number }) {
  const { toggleCart } = useUIStore();

  return (
    <span className="cursor-pointer" onClick={toggleCart}>
      BAG({totalItems})
    </span>
  );
}
