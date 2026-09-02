import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { motionTransition, springs } from "@/lib/springs";

const PARTS = [
  { t: "Read", italic: false },
  { t: "with", italic: false },
  { t: "effortless", italic: true },
  { t: "clarity.", italic: false },
] as const;

export function HeroTitle() {
  const reduce = useReducedMotion();

  return (
    <h1 className="max-w-lg text-4xl leading-[1.08] sm:text-5xl">
      {PARTS.map((part, index) => (
        <motion.span
          key={part.t}
          className={cn("inline-block", index < PARTS.length - 1 && "pr-[0.28em]", part.italic && "font-medium italic")}
          initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            ...motionTransition(reduce, springs.ui),
            delay: reduce ? 0 : 0.05 + index * 0.07,
          }}
        >
          {part.t}
        </motion.span>
      ))}
    </h1>
  );
}
