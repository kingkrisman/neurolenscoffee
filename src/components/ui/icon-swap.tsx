import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { motionTransition, springs } from "@/lib/springs";

export function IconSwap({
  active,
  ActiveIcon,
  InactiveIcon,
  size = 16,
}: {
  active: boolean;
  ActiveIcon: LucideIcon;
  InactiveIcon: LucideIcon;
  size?: number;
}) {
  const reduce = useReducedMotion();
  const Icon = active ? ActiveIcon : InactiveIcon;

  return (
    <span className="relative inline-flex size-4 items-center justify-center">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={active ? "on" : "off"}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={motionTransition(reduce, springs.icon)}
        >
          <Icon size={size} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
