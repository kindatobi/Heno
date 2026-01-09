"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";
import { Transition } from "react-transition-group";

export default function CartModal() {
  const { cartOpen, toggleCart } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap
      .timeline()
      .fromTo(
        modalRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
      .to(asideRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  };

  const onExit = () => {
    gsap
      .timeline()
      .to(asideRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      })
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
  };

  return (
    <Transition
      in={cartOpen}
      timeout={600}
      mountOnEnter
      unmountOnExit
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={modalRef}
    >
      {() => (
        <div
          ref={modalRef}
          onClick={toggleCart}
          className="
            fixed inset-0 z-50 flex justify-end
            bg-neutral-500/40
            backdrop-blur-[50px]
          "
        >
          <div
            ref={asideRef}
            className="w-[35%] h-full"
            style={{ transform: "translateX(100%)" }}
          >
            <CartAside />
          </div>
        </div>
      )}
    </Transition>
  );
}
