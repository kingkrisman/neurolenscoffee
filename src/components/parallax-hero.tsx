import { useEffect, useRef, type ReactNode } from "react";
import { Media } from "@/components/ui/surfaces";
import { cn } from "@/lib/utils";

function cssScrollTimeline(): boolean {
  return typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
}

export function ParallaxHero({ children, className }: { children: ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (cssScrollTimeline()) return;
    const section = sectionRef.current;
    if (!section) return;
    const pane = section.closest(".pane-scroll") as HTMLElement | null;
    if (!pane) return;

    const update = () => {
      section.style.setProperty("--parallax", `${pane.scrollTop}px`);
    };
    update();
    pane.addEventListener("scroll", update, { passive: true });
    return () => pane.removeEventListener("scroll", update);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("parallax-hero relative -mt-14 overflow-clip sm:-mt-16", className)}
    >
      <div className="parallax-far pointer-events-none absolute inset-x-0 -top-[18%] h-[136%]" aria-hidden>
        <Media
          src="/images/hero-lens.jpg"
          alt=""
          width={1792}
          height={1008}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_42%]"
        />
      </div>
      <div className="parallax-mid parallax-rings pointer-events-none absolute inset-0" aria-hidden />
      <div className="parallax-veil pointer-events-none absolute inset-0" aria-hidden />
      <div className="parallax-near relative z-10">{children}</div>
    </section>
  );
}
