export type FeedbackKind = "press" | "ok" | "good" | "bad" | "start" | "adapt";

const PATTERN: Record<FeedbackKind, number | number[]> = {
  press: 8,
  ok: 12,
  good: [10, 40, 16],
  bad: [24, 32, 18],
  start: 14,
  adapt: [8, 28, 12],
};

export function tapFeedback(kind: FeedbackKind) {
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") return;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  try {
    navigator.vibrate(PATTERN[kind]);
  } catch {
    /* vibration is a hint, never a feature */
  }
}
