// "use client";

// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-0 pb-1.5 right-0 z-10 ">
//         <div className="my-x-cont">
//           <div className="md:w-30 md:h-30">
//             <QrCode className="w-full h-full text-white block" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5 pointer-events-none">
//         <div className="my-x-cont flex justify-end">
//           <div className="w-20 h-20 md:w-24 md:h-24">
//             <QrCode className="w-full h-full text-white block" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont relative text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>

//           <div className="absolute bottom-0 right-0 w-20 h-20 md:w-30 md:h-30">
//             <QrCode className="w-full h-full text-white block" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>
//         </div>
//       </div>

//       <div
//         className="absolute bottom-1.5 md:bottom-5 z-10 w-20 h-20 md:w-24 md:h-24"
//         style={{ right: "var(--my-x-padding, 1rem)" }}
//       >
//         <QrCode className="w-full h-full text-white block" />
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//           <p className="m-0" suppressHydrationWarning>
//             {hours}
//             {showColon ? ":" : " "}
//             {minutes} {period}
//           </p>
//           <p>SEARCHING......</p>
//           <p>VERY GOOD TO BE BACK</p>
//           <p className="m-0" suppressHydrationWarning>
//             {dateString} - LAGOS, NG
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-1.5 md:bottom-5 left-0 right-0 z-10 pointer-events-none">
//         <div className="my-x-cont flex justify-end">
//           <div className="w-20 h-20 md:w-24 md:h-24 pointer-events-auto">
//             <QrCode className="w-full h-full text-white block" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import QrCode from "@/components/qr-code";
// import { useUIStore } from "@/lib/store/ui.store";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const { toggleShop } = useUIStore();
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 300);

//     return () => clearInterval(timer);
//   }, []);

//   const timeString = time.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   const dateString = time.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });

//   const [timePart, period] = timeString.split(" ");
//   const showColon = Math.floor(time.getSeconds()) % 2 === 0;
//   const [hours, minutes] = timePart.split(":");

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/background-vid.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

//       <div className="absolute inset-0 z-10 flex items-center justify-center">
//         <button className="cursor-pointer" onClick={toggleShop}>
//           <p className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono">
//             [ Click on this to Enter shop ]
//           </p>
//         </button>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 z-10 pb-1.5 md:pb-5">
//         <div className="my-x-cont flex justify-between items-end">
//           <div className="text-white text-[14px] uppercase tracking-[0.01em] font-light font-mono leading-tight">
//             <p className="m-0" suppressHydrationWarning>
//               {hours}
//               {showColon ? ":" : " "}
//               {minutes} {period}
//             </p>
//             <p>SEARCHING......</p>
//             <p>VERY GOOD TO BE BACK</p>
//             <p className="m-0" suppressHydrationWarning>
//               {dateString} - LAGOS, NG
//             </p>
//           </div>

//           <div className="w-20 h-20 md:w-24 md:h-24">
//             <QrCode className="w-full h-full text-white block" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import QrCode from "@/components/qr-code";
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
          <p className="text-white text-[14px] uppercase tracking-[0.08em]   font-normal font-bcd-diatype">
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

            <p className="m-0" suppressHydrationWarning>
              FROM LAGOS, NIGERIA
            </p>
            <p>THE ©2026 HENO PROJECT</p>
          </div>

          <div className="w-20 h-20 md:w-24 md:h-24">
            <QrCode className="w-full h-full text-white block" />
          </div>
        </div>
      </div>
    </div>
  );
}
