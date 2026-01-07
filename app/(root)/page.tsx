export default function Home() {
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

      <div className="absolute bottom-6 left-6 z-10 text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
        <div>
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </div>
        <div>Dec 28,2025 - LAGOS, NG</div>
        <div>Inspired by the ©2025 Usal Project</div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <p className=" text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
          Enter shop?
        </p>
      </div>
    </main>
  );
}
