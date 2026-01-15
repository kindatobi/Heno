"use client";

import { useUIStore } from "@/lib/store/ui.store";

export default function ShopToggleBtn() {
  const { toggleShop } = useUIStore();
  return (
    <button
      onClick={toggleShop}
      className="uppercase font-bcd-diatype tracking-[0.08em] underline"
    >
      filters
    </button>
  );
}
