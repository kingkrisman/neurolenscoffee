import { useEffect, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const KEY = "neurolens-opening-seen";

function chime() {
  const ctx = new AudioContext();
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.08, now + 0.04);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  master.connect(ctx.destination);
  ;[196, 247, 330].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.connect(master);
    osc.start(now + i * 0.12);
    osc.stop(now + 1.5);
  });
}

export function Opening({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY) === "1" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      onDone();
      return;
    }
    registerGsap();
    try {
      void chime();
    } catch {
      /* autoplay blocked */
    }
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(KEY, "1");
        setVisible(false);
        onDone();
      },
    });
    tl.fromTo(".nl-opening-bar", { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }).to(
      ".nl-opening",
      { opacity: 0, duration: 0.35, ease: "power1.out" },
      "+=0.15",
    );
    return () => {
      tl.kill();
    };
  }, [onDone]);

  if (!visible) return null;
  return (
    <div className="nl-opening pointer-events-none fixed inset-x-0 top-0 z-[80] h-0.5 origin-left">
      <div className="nl-opening-bar h-full origin-left bg-accent" />
    </div>
  );
}
