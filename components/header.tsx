"use client";

import { usePathname } from "next/navigation";
import CartModal from "./cart-modal";
import { gsap } from "gsap";
import Bag from "./bag";
import { useCartStore } from "@/lib/store/cart.store";
import { useUIStore } from "@/lib/store/ui.store";
import Link from "next/link";
import MenuModal from "./menu-modal";
import ShopModal from "./shop-modal";
import { CategoryWithCount } from "@/types";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Header({
  categories,
  categoryCount,
}: {
  categories: CategoryWithCount;
  categoryCount: number;
}) {
  const pathname = usePathname();
  const henoRef = useRef(null);
  const { toggleMenu, toggleCart, shopOpen, menuOpen } = useUIStore();
  const { cart } = useCartStore();

  const totalItems =
    cart?.items.reduce((total, item) => total + item.qty, 0) ?? 0;

  const whenHover = () => {
    if (pathname === "/") return;
    gsap.to(henoRef.current, { y: 0, duration: 0.3 });
  };

  const whenNotHover = () => {
    if (pathname === "/") return;
    gsap.to(henoRef.current, { y: -55, duration: 0.3 });
  };

  useGSAP(() => {
    if (pathname !== "/" || shopOpen || menuOpen) {
      gsap.to(henoRef.current, { y: -35, duration: 0.3 });
    } else {
      gsap.to(henoRef.current, { y: 0, duration: 0.3 });
    }
  }, [pathname, shopOpen, menuOpen]);

  return (
    <>
      <MenuModal />
      <ShopModal categories={categories} categoryCount={categoryCount} />
      <header className="fixed top-0 left-0 right-0 z-50">
        <CartModal />
        <div className="my-x-cont py-1.5 md:py-1.5">
          <div className="flex items-start justify-between">
            <Link
              onMouseEnter={whenHover}
              onMouseLeave={whenNotHover}
              href={"/"}
            >
              <div
                ref={henoRef}
                className={` -ml-[0.04em] text-[100px] md:text-[120px]  font-normal tracking-[-0.08em] leading-[0.65] transition-colors ${
                  pathname === "/" ? "text-white" : "text-[#191919]"
                }`}
              >
                heno.
              </div>
            </Link>

            <div className="flex items-center gap-1 md:gap-2 text-white text-[14px] tracking-[0.02em] font-light font-mono">
              <button
                onClick={toggleMenu}
                className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors rounded-[5.5px] bg-black py-1.5 px-5"
              >
                Menu
              </button>
              <button
                onClick={toggleCart}
                className="uppercase hover:bg-[#F5F6F4] hover:text-black transition-colors bg-black rounded-[5.5px] py-1.5 px-4 md:py-1.5 md:px-5"
              >
                <Bag totalItems={totalItems} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
