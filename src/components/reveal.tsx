import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motionTransition, springs } from "@/lib/springs";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "clip";
}) {
  const reduce = useReducedMotion();

  if (variant === "clip") {
    return (
      <motion.div
        className={cn("reveal", className)}
        initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0 0)" }}
        viewport={{ once: true, amount: 0.2, margin: "-48px 0px" }}
        transition={{
          duration: reduce ? 0.01 : 0.55,
          delay: reduce ? 0 : delay / 1000,
          ease: [0.77, 0, 0.175, 1],
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "-48px 0px" }}
      transition={{
        ...motionTransition(reduce, springs.move),
        delay: reduce ? 0 : delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
