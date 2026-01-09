import Transition from "react-transition-group/Transition";
import { useUIStore } from "@/lib/store/ui.store";
import { gsap } from "gsap";
import { useRef } from "react";

export default function MenuModal() {
  const { menuOpen } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onEnter = () => {
    gsap
      .timeline()
      .fromTo(
        modalRef.current,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      )
      .to(contentRef.current, {
        x: 0,
        duration: 0.2,
        ease: "power2.out",
      });
  };

  const onExit = () => {
    gsap
      .timeline()
      .to(contentRef.current, {
        x: "100%",
        duration: 0.2,
        ease: "power2.in",
      })
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
  };

  return (
    <Transition
      in={menuOpen}
      timeout={600}
      mountOnEnter
      unmountOnExit
      onEnter={onEnter}
      onExit={onExit}
      nodeRef={modalRef}
    >
      {() => (
        <div
          ref={modalRef}
          className="
            fixed inset-0 z-50 flex justify-end
            bg-neutral-500/40
            backdrop-blur-[50px]
          "
        >
          <div
            ref={contentRef}
            className="w-[35%] h-full"
            style={{ transform: "translateX(100%)" }}
          ></div>
        </div>
      )}
    </Transition>
  );
}
