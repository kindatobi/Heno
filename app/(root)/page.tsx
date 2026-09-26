"use client";

import { useLagosTime } from "@/hooks/use-lagos-time";
import { useUIStore } from "@/lib/store/ui.store";

export default function Home() {
  const { toggleShop } = useUIStore();
  const { hours, minutes, seconds, period } = useLagosTime();

  const showColon = Number(seconds) % 2 === 0;

  return (
    <div className="fixed inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover bg-black"
      >
        <source src="/back-vid1.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <button className="cursor-pointer" onClick={toggleShop}>
          <p className="text-white text-[14px] uppercase tracking-[0.08em] font-normal font-bcd-diatype">
            [ click to enter shop ]
          </p>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
        <div className="my-x-cont flex justify-between items-baseline">
          <div className="text-white text-[14px] uppercase tracking-[0.01em] font-300 font-bcd-diatype leading-tight">
            <p className="m-0" suppressHydrationWarning>
              {hours}
              {showColon ? ":" : " "}
              {minutes} {period}
            </p>

            <p>WELCOME TO HENO</p>

            <p className="m-0">FROM LAGOS, NIGERIA</p>
            <p>THE ©2026 HENO PROJECT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
