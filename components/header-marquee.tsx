import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function HeaderMarquee({ myStyle }: { myStyle: string }) {
  const slider = useRef(null);

  useGSAP(() => {
    gsap.to(slider.current, {
      xPercent: -50,
      repeat: -1,
      duration: 70,
      ease: "none",
    });
  }, []);
  return (
    <div
      className={`hidden md:flex w-150 overflow-hidden uppercase rounded-[5.5px] py-1.5 px-2 ${myStyle}`}
    >
      {/* Clip and fade here, not on the pill, so the pill's background stays solid. pl-6 starts the text past the fade without affecting the loop */}
      <div className="overflow-hidden pl-6 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]">
        {/* w-max: size to the text, not the wrapper, so xPercent -50 is exactly one copy */}
        <div ref={slider} className="flex w-max whitespace-nowrap">
          {/* Spacing sits on each copy so both stay equal width and xPercent -50 loops seamlessly */}
          <p className="text-nowrap pr-1">
            Heno is a contemporary fashion label rooted in Lagos, Nigeria. It
            was inspired by the Usal Project and founded by Tobi Ojo alongside
            Ifeoluwa Ogunseye and Toluwalase Benson in 1921. The collective
            came together with a shared vision: to build a brand that reflects
            how young Africans actually live, think, and dress—unfiltered,
            expressive, and deeply individual.
          </p>
          <p className="text-nowrap pr-1">
            Heno is a contemporary fashion label rooted in Lagos, Nigeria. It
            was inspired by the Usal Project and founded by Tobi Ojo alongside
            Ifeoluwa Ogunseye and Toluwalase Benson in 1921. The collective
            came together with a shared vision: to build a brand that reflects
            how young Africans actually live, think, and dress—unfiltered,
            expressive, and deeply individual.
          </p>
        </div>
      </div>
    </div>
  );
}
