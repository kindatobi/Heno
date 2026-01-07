"use client";

import { usePathname } from "next/navigation";
import CartModal from "./cart-modal";
import Bag from "./bag";
import { useCartStore } from "@/lib/store/cart.store";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCartStore();
  const totalItems =
    cart?.items.reduce((total, item) => total + item.qty, 0) ?? 0;

  const isLightBackground =
    pathname === "/shop" ||
    pathname.startsWith("/shop/") ||
    pathname.startsWith("/product/");

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-1.5 px-6">
      <CartModal />
      <div className="flex items-start justify-between">
        <Link href={"/"}>
          <div
            className={`text-[120px]  font-normal tracking-[-0.08em] leading-[0.65] transition-colors relative ${
              isLightBackground ? "text-black" : "text-white"
            }`}
          >
            heno.
          </div>
        </Link>

        <div className="flex items-center gap-2 text-white text-[14px] tracking-[0.02em] font-light font-mono">
          <button className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors bg-black rounded-[5.5px] py-1.5 px-5">
            Shop
          </button>
          <button className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors rounded-[5.5px] bg-black py-1.5 px-5">
            Menu
          </button>
          <Bag totalItems={totalItems} />
        </div>
      </div>
    </header>
  );
}
