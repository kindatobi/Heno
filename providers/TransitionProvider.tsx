"use client";

import { TransitionRouter } from "next-transition-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { useUIStore } from "@/lib/store/ui.store";
import { useGSAP } from "@gsap/react";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const transitionRectRef = useRef(null);
  const { resetUI } = useUIStore();

  useGSAP(() => {
    gsap.set(transitionRectRef.current, { opacity: 0, pointerEvents: "none" });
  }, []);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        resetUI();
        gsap.to(transitionRectRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
          onComplete: next,
        });
      }}
      enter={(next) => {
        gsap.to(transitionRectRef.current, {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out",
          onComplete: next,
        });
      }}
    >
      <div
        ref={transitionRectRef}
        className="fixed inset-0 z-200 pointer-events-none bg-[#191919]"
      />
      {children}
    </TransitionRouter>
  );
}
