"use client";

import { useUIStore } from "@/lib/store/ui.store";

export default function Bag({ totalItems }: { totalItems: number }) {
  const { toggleCart } = useUIStore();

  return (
    <div className="bg-black rounded-[5.5px] py-1.5 px-5">
      <span className="cursor-pointer" onClick={toggleCart}>
        BAG({totalItems})
      </span>
    </div>
  );
}
