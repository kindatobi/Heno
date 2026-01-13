"use client";

import Transition from "react-transition-group/Transition";
import { useUIStore } from "@/lib/store/ui.store";
import { gsap } from "gsap";

import { useRef, useEffect } from "react";
import { CategoryWithCount } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ShopModal({
  categories,
  categoryCount,
}: {
  categories: CategoryWithCount;
  categoryCount: number;
}) {
  const { shopOpen, toggleShop } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHomepage = pathname === "/";
  const textColor =
    isHomepage || pathname === "/about" ? "text-white" : "text-[#191919]";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && shopOpen) {
        toggleShop();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [shopOpen, toggleShop]);

  const onEnter = () => {
    gsap.timeline().fromTo(
      modalRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const onExit = () => {
    gsap.timeline().to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Transition
      in={shopOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={modalRef}
    >
      {() => (
        <div
          ref={modalRef}
          className="
            fixed inset-0 z-40 flex
            bg-neutral-500/40
            backdrop-blur-xl
            pt-17 md:pt-18.75
          "
        >
          <div ref={contentRef} className="my-x-cont">
            <Link href={"/shop"}>
              <span
                className={`text-5xl md:text-[64px] leading-none font-normal font-neue-haas capitalize ${textColor} hover:opacity-70 transition-opacity`}
              >
                Shop all
                <span className="text-sm align-top ml-1">
                  [{categoryCount}]
                </span>
              </span>
            </Link>

            {categories.map((category, i) => (
              <div key={i}>
                <Link href={`/shop?category=${category.category}`}>
                  <span
                    className={`text-5xl md:text-[64px] leading-none font-normal font-neue-haas capitalize ${textColor} hover:opacity-70 transition-opacity`}
                  >
                    {CATEGORY_LABELS[category.category]}
                    <span className=" text-sm align-top ml-1">
                      {category._count < 10
                        ? `[0${category._count}]`
                        : `[${category._count}]`}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={toggleShop}
            className={`fixed bottom-0 pb-3 md:pb-6 text-3xl md:text-[52px] right-2 md:right-4 ${textColor} font-neue-haas hover:opacity-70 transition-opacity`}
          >
            Close [esc]
          </button>
        </div>
      )}
    </Transition>
  );
}
