"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useUIStore } from "@/lib/store/ui.store";
import { ArrowRightIcon, BagIcon } from "@phosphor-icons/react";

interface ProductToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export function ProductToast({ show, message, onClose }: ProductToastProps) {
  const toastRef = useRef<HTMLDivElement | null>(null);
  const { toggleCart } = useUIStore();

  useGSAP(
    () => {
      if (!toastRef.current || !show) return;

      gsap.set(toastRef.current, {
        xPercent: 100,
        willChange: "transform",
        force3D: true,
      });

      const tl = gsap.timeline({
        onComplete: onClose,
      });

      tl.to(toastRef.current, {
        xPercent: 0,
        duration: 0.4,
        ease: "power3.out",
      }).to(
        toastRef.current,
        {
          xPercent: 100,
          duration: 0.4,
          ease: "power3.in",
        },
        "+=1.5"
      );

      return () => tl.kill();
    },
    { dependencies: [show] }
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <div
        ref={toastRef}
        className="bg-[#191919] rounded-[5px] p-3 space-y-1.5 text-white shadow-2xl min-w-[330px] max-w-[500px] pointer-events-auto"
      >
        <p className="text-[16px] leading-relaxed">{message}</p>
        <div className="flex justify-between gap-2">
          <button
            onClick={() => {
              toggleCart();
              onClose();
            }}
            className="w-full px-3 border border-white rounded-full text-[14px] uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            <span>View Cart</span>
            <ArrowRightIcon size={14} />
          </button>
          <button
            onClick={() => {
              onClose();
            }}
            className="w-full px-3 border border-white rounded-full text-[14px] uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors"
          >
            Close message
          </button>
        </div>
      </div>
    </div>
  );
}
