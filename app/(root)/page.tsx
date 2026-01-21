"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect, useState } from "react";

export default function Home() {
  const { toggleShop } = useUIStore();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setTime(new Date());

    const timeout = setTimeout(
      () => {
        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
      },
      1000 - (Date.now() % 1000),
    );

    return () => clearTimeout(timeout);
  }, []);

  const hours24 = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");

  const period = hours24 >= 12 ? "PM" : "AM";
  const hours = (((hours24 + 11) % 12) + 1).toString().padStart(2, "0");

  const showColon = time.getSeconds() % 2 === 0;

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
            <p className="m-0">
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
