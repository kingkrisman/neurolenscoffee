import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { useAppStore } from "@/lib/store";
import { tapFeedback } from "@/lib/feedback";
import { Button } from "@/components/ui/button";
import { motionTransition, springs } from "@/lib/springs";

export function RecommendationBanner() {
  const mode = useAppStore((s) => s.mode);
  const recommendation = useAppStore((s) => s.recommendation);
  const applyRecommendation = useAppStore((s) => s.applyRecommendation);
  const dismissRecommendation = useAppStore((s) => s.dismissRecommendation);
  const undoAdaptiveChange = useAppStore((s) => s.undoAdaptiveChange);
  const [whyOpen, setWhyOpen] = useState(false);
  const reduce = useReducedMotion();
  const show = mode === "adaptive" && recommendation;

  useEffect(() => {
    if (show && recommendation) tapFeedback("adapt");
  }, [show, recommendation?.id]);

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {show && recommendation && (
        <motion.div
          key={recommendation.id}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="pointer-events-auto w-[min(28rem,calc(100vw-1.5rem))] origin-bottom rounded-lg bg-surface p-3 shadow-float"
          initial={{ opacity: 0, y: 12, scale: 0.98, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }}
          transition={motionTransition(reduce, springs.ui)}
        >
          <p className="text-xs font-medium tracking-wide text-muted uppercase">NeuroLens recommendation</p>
          <p className="mt-2 text-sm leading-relaxed">{recommendation.reason}</p>
          <AnimatePresence initial={false}>
            {whyOpen && (
              <motion.p
                key="why"
                className="overflow-hidden text-sm leading-relaxed text-muted"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={motionTransition(reduce, springs.ui)}
              >
                {recommendation.why}
              </motion.p>
            )}
          </AnimatePresence>
          <div className="mt-3 flex flex-wrap items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="sm"
              aria-expanded={whyOpen}
              onClick={() => setWhyOpen((open) => !open)}
            >
              {whyOpen ? "Hide why" : "Why?"}
            </Button>
            <Button variant="outline" size="sm" onClick={dismissRecommendation}>
              Dismiss
            </Button>
            <Button
              size="sm"
              onClick={() => {
                applyRecommendation();
                setWhyOpen(false);
                tapFeedback("adapt");
                toast.success("Recommendation applied", {
                  action: {
                    label: "Undo",
                    onClick: () => undoAdaptiveChange(),
                  },
                });
              }}
            >
              Apply
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
