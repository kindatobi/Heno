"use client";

import { useUIStore } from "@/lib/store/ui.store";

export default function Home() {
  const { toggleShop } = useUIStore();
  return (
    <main className="relative h-screen w-screen overflow-hidden">
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

      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
          <p>
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
          </p>
          <p>Dec 28,2025 - LAGOS, NG</p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <button onClick={toggleShop}>
          <p className="text-white underline text-[14px] uppercase tracking-[0.01em] font-light font-mono">
            Click to Enter shop
          </p>
        </button>
      </div>
    </main>
  );
}
