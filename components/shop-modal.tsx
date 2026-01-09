import Transition from "react-transition-group/Transition";
import { useUIStore } from "@/lib/store/ui.store";
import { gsap } from "gsap";
import { useRef } from "react";
import { CategoryWithCount } from "@/types";
import { CATEGORY_LABELS } from "@/lib/utils";
import Link from "next/link";

export default function ShopModal({
  categories,
  categoryCount,
}: {
  categories: CategoryWithCount;
  categoryCount: number;
}) {
  const { shopOpen } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
            backdrop-blur-[50px]
            pt-17 md:pt-12.5
          "
        >
          <div ref={contentRef} className="my-x-cont">
            <p className="text-5xl md:text-[64px] leading-none font-normal font-neue-haas capitalize text-[#F5F6F4]">
              Shop all
              <span className="text-sm align-top ml-2">[{categoryCount}]</span>
            </p>
            {categories.map((category, i) => (
              <div key={i}>
                <Link href={`/shop?category=${category.category}`}>
                  <h2 className="text-5xl md:text-[64px] leading-none font-normal font-neue-haas capitalize text-[#F5F6F4]">
                    {CATEGORY_LABELS[category.category]}
                    <span className="text-sm align-top ml-2">
                      {category._count < 10
                        ? `[0${category._count}]`
                        : `[${category._count}]`}
                    </span>
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </Transition>
  );
}
