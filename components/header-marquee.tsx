import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function HeaderMarquee({ myStyle }: { myStyle: string }) {
  const slider = useRef(null);

  useGSAP(() => {
    gsap.to(slider.current, {
      xPercent: -50,
      repeat: -1,
      duration: 60,
      ease: "none",
    });
  }, []);
  return (
    <div
      className={`hidden md:flex w-150 overflow-hidden uppercase rounded-[5.5px] py-1.5 px-2 ${myStyle}`}
    >
      <div ref={slider} className="flex">
        <p className="text-nowrap">
          Heno is a contemporary fashion label rooted in Lagos, Nigeria.It was
          inspired by the Usal Project and founded by Tobi Ojo alongside
          Ifeoluwa Ogunseye and Toluwalase Benson in 1921. The collective came
          together with a shared vision: to build a brand that reflects how
          young Africans actually live, think, and dress—unfiltered, expressive,
          and deeply individual.
        </p>
        <p className="text-nowrap">
          Heno is a contemporary fashion label rooted in Lagos, Nigeria.It was
          inspired by the Usal Project and founded by Tobi Ojo alongside
          Ifeoluwa Ogunseye and Toluwalase Benson in 1921. The collective came
          together with a shared vision: to build a brand that reflects how
          young Africans actually live, think, and dress—unfiltered, expressive,
          and deeply individual.
        </p>
      </div>
    </div>
  );
}
