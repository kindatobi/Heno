"use client";

import { useUIStore } from "@/lib/store/ui.store";
import { useEffect, useState } from "react";

export default function Home() {
  const { toggleShop } = useUIStore();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateString = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const [timePart, period] = timeString.split(" ");
  const showColon = Math.floor(time.getSeconds()) % 2 === 0;
  const [hours, minutes] = timePart.split(":");

  return (
    <div className="fixed inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background-vid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <button className="cursor-pointer" onClick={toggleShop}>
          <p className="text-white underline text-[14px] uppercase tracking-[0.01em] font-light font-mono">
            Click to Enter shop
          </p>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5">
        <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
          <p className="m-0" suppressHydrationWarning>
            {hours}
            {showColon ? ":" : " "}
            {minutes} {period}
          </p>
          <p className="m-0" suppressHydrationWarning>
            {dateString} - LAGOS, NG
          </p>
        </div>
      </div>
    </div>
  );
}
