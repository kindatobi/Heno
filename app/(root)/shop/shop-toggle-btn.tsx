"use client";

import { useUIStore } from "@/lib/store/ui.store";

export default function ShopToggleBtn() {
  const { toggleShop } = useUIStore();
  return (
    <button onClick={toggleShop} className="uppercase underline">
      filters
    </button>
  );
}
