import Transition from "react-transition-group/Transition";
import { useUIStore } from "@/lib/store/ui.store";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuModal() {
  const { menuOpen, toggleMenu } = useUIStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isHomepage = pathname === "/";
  const textColor =
    isHomepage || pathname === "/about" ? "text-white" : "text-[#191919]";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen, toggleMenu]);

  const onEnter = () => {
    gsap.timeline().fromTo(
      modalRef.current,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  const onExit = () => {
    gsap.timeline().to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Shop", href: "/shop" },
    { label: "Privacy", href: "/privacy" },
    { label: "Refund & Returns", href: "/refund-and-return-policy" },
  ];

  return (
    <Transition
      in={menuOpen}
      timeout={300}
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
            fixed inset-0 z-40 flex
            bg-neutral-500/40
            backdrop-blur-xl
            pt-17 md:pt-18.75
          "
        >
          <div ref={contentRef} className="my-x-cont">
            {menuItems.map((item, i) => (
              <div key={i}>
                <Link href={item.href}>
                  <span
                    className={`text-5xl md:text-[64px] leading-none font-normal font-neue-haas capitalize ${textColor} hover:opacity-70 transition-opacity`}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className={`fixed bottom-0 pb-3 md:pb-6 text-3xl md:text-[52px] right-2 md:right-4 ${textColor} font-neue-haas hover:opacity-70 transition-opacity`}
          >
            Close [esc]
          </button>
        </div>
      )}
    </Transition>
  );
}
