"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import CartAside from "./cart-aside";
import { useUIStore } from "@/lib/store/ui.store";
import { Transition } from "react-transition-group";

export default function CartModal() {
  const { cartOpen, toggleCart } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

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
          data-lenis-prevent
          className="
            fixed inset-0 z-50 flex justify-end
            bg-neutral-500/40
            backdrop-blur-[50px]
            overflow-hidden
          "
        >
          <div
            ref={asideRef}
            className="w-full md:w-[40%] h-screen overflow-hidden"
            style={{ transform: "translateX(100%)" }}
          >
            <CartAside />
          </div>
        </div>
      )}
    </Transition>
  );
}
