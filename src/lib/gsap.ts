import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
  gsap.ticker.lagSmoothing(500, 16);
  registered = true;
}

export { gsap, ScrollTrigger, useGSAP };

export function scrollToId(id: string, scroller?: Element | string) {
  registerGsap();
  const target = document.getElementById(id);
  if (!target) return;
  gsap.to(scroller ?? window, {
    duration: 0.55,
    ease: "power2.out",
    scrollTo: { y: target, offsetY: 72 },
  });
}
