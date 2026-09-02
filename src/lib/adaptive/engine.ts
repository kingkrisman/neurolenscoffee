import { bestContrastTheme, evaluateScheme } from "../contrast.ts";
import type { ReadingFeel, ThemeId } from "../types.ts";

export const ADAPTIVE_THRESHOLDS = {
  pauseIdleMs: 8_000,
  pauseMinMs: 4_000,
  progressNoise: 0.008,
  rereadDrop: 0.12,
  rereadMinHighWater: 0.25,
  wpmMinElapsedMs: 8_000,
  wpmMinWords: 8,
  frequentRereadCount: 2,
  frequentPauseCount: 2,
  frequentPauseMinMs: 8_000,
  slowVsTargetRatio: 0.72,
  lineHeightStep: 0.1,
  lineHeightMax: 2.2,
  fontSizeStep: 1,
  fontSizeMax: 28,
  wpmStepDown: 20,
  wpmStepUp: 15,
  targetWpmMin: 120,
  targetWpmMax: 480,
} as const;

export type AdaptiveSetting = "targetWpm" | "lineHeight" | "focusHighlight" | "theme" | "fontSize";
export type AdaptiveRule =
  | "pace-strain"
  | "contrast-low"
  | "rereading"
  | "pauses"
  | "strong-performance"
  | "type-size";

export interface PauseEvent {
  startedAt: number;
  durationMs: number;
  progress: number;
}

export interface RereadEvent {
  at: number;
  from: number;
  to: number;
}

export interface ReadingMetrics {
  wordCount: number;
  wordsRead: number;
  progress: number;
  elapsedActiveMs: number;
  currentWpm: number | null;
  targetWpm: number;
  pauseCount: number;
  pauses: PauseEvent[];
  rereadCount: number;
  rereads: RereadEvent[];
  /** How the last stretch felt, or null until the reader marks it. */
  feel: ReadingFeel | null;
}

export interface AdaptiveSettings {
  targetWpm: number;
  lineHeight: number;
  focusHighlight: boolean;
  theme: ThemeId;
  fontSize: number;
}

export interface AdaptiveRecommendation {
  id: string;
  rule: AdaptiveRule;
  setting: AdaptiveSetting;
  recommendedValue: number | boolean | ThemeId;
  reason: string;
  why: string;
}

export function calcCurrentWpm(wordsRead: number, elapsedActiveMs: number): number | null {
  if (wordsRead < ADAPTIVE_THRESHOLDS.wpmMinWords) return null;
  if (elapsedActiveMs < ADAPTIVE_THRESHOLDS.wpmMinElapsedMs) return null;
  const minutes = elapsedActiveMs / 60_000;
  if (minutes <= 0) return null;
  const wpm = Math.max(1, Math.round(wordsRead / minutes));
  if (wpm > ADAPTIVE_THRESHOLDS.targetWpmMax) return null;
  return wpm;
}

export function isMeaningfulProgressChange(from: number, to: number): boolean {
  return Math.abs(to - from) >= ADAPTIVE_THRESHOLDS.progressNoise;
}

export function isReread(highWater: number, next: number): boolean {
  if (highWater < ADAPTIVE_THRESHOLDS.rereadMinHighWater) return false;
  return highWater - next >= ADAPTIVE_THRESHOLDS.rereadDrop;
}

export function clampTargetWpm(value: number): number {
  return Math.min(
    ADAPTIVE_THRESHOLDS.targetWpmMax,
    Math.max(ADAPTIVE_THRESHOLDS.targetWpmMin, Math.round(value / 10) * 10),
  );
}

function clampLineHeight(value: number): number {
  return Math.min(ADAPTIVE_THRESHOLDS.lineHeightMax, Math.max(1.4, Math.round(value * 10) / 10));
}

function clampFontSize(value: number): number {
  return Math.min(ADAPTIVE_THRESHOLDS.fontSizeMax, Math.max(14, Math.round(value)));
}

function prolongedPauses(metrics: ReadingMetrics): number {
  return metrics.pauses.filter((pause) => pause.durationMs >= ADAPTIVE_THRESHOLDS.frequentPauseMinMs).length;
}

function isStruggling(metrics: ReadingMetrics): boolean {
  if (metrics.feel === "slow") return true;
  if (metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount) return true;
  return prolongedPauses(metrics) >= ADAPTIVE_THRESHOLDS.frequentPauseCount;
}

/**
 * Pure adaptive engine. Never mutates settings.
 * Watches pace, pauses, rereads, feel, and contrast. Recommends only.
 */
export function recommendAdaptations(
  metrics: ReadingMetrics,
  settings: AdaptiveSettings,
  dismissedRules: Iterable<AdaptiveRule> = [],
  lockedSettings: Iterable<string> = [],
): AdaptiveRecommendation | null {
  const dismissed = new Set(dismissedRules);
  const locked = new Set(lockedSettings);

  if (metrics.feel === "slow" && !dismissed.has("pace-strain") && !locked.has("targetWpm")) {
    const next = clampTargetWpm(settings.targetWpm - ADAPTIVE_THRESHOLDS.wpmStepDown);
    if (next < settings.targetWpm) {
      return {
        id: "pace-strain:targetWpm",
        rule: "pace-strain",
        setting: "targetWpm",
        recommendedValue: next,
        reason: "NeuroLens recommends slowing your target pace so this passage is easier to follow.",
        why: "You marked this stretch as too fast. A slightly slower target gives the words more room to land.",
      };
    }
  }

  if (!dismissed.has("contrast-low") && !locked.has("theme")) {
    const report = evaluateScheme(settings.theme, settings.fontSize);
    const better = bestContrastTheme(settings.theme);
    const failsAa = report.bodyLevel === "fail";
    const canStepUp = better !== settings.theme;
    if (canStepUp && (failsAa || isStruggling(metrics))) {
      const label = better === "ink" ? "Ink" : "Contrast";
      return {
        id: `contrast-low:${better}`,
        rule: "contrast-low",
        setting: "theme",
        recommendedValue: better,
        reason: `NeuroLens recommends the ${label} scheme so the line is easier to hold.`,
        why: failsAa
          ? `This page is under the WCAG AA contrast bar at ${settings.fontSize}px. ${label} keeps your light or dark room and raises the ink-to-paper ratio.`
          : `Rereads, pauses, or a rushed feel often mean the page is working too hard. ${label} raises contrast without leaving the palette you already chose.`,
      };
    }
  }

  if (metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount && !dismissed.has("rereading") && !locked.has("lineHeight")) {
    const next = clampLineHeight(settings.lineHeight + ADAPTIVE_THRESHOLDS.lineHeightStep);
    if (next > settings.lineHeight) {
      return {
        id: "rereading:lineHeight",
        rule: "rereading",
        setting: "lineHeight",
        recommendedValue: next,
        reason: "Your reading pattern suggests slightly more spacing may improve visual clarity.",
        why: "You moved back through the page several times. Extra line spacing can make it easier to keep your place.",
      };
    }
  }

  if (
    metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount &&
    settings.lineHeight >= ADAPTIVE_THRESHOLDS.lineHeightMax - 0.05 &&
    !dismissed.has("type-size") &&
    !locked.has("fontSize")
  ) {
    const next = clampFontSize(settings.fontSize + ADAPTIVE_THRESHOLDS.fontSizeStep);
    if (next > settings.fontSize) {
      return {
        id: "type-size:fontSize",
        rule: "type-size",
        setting: "fontSize",
        recommendedValue: next,
        reason: "NeuroLens recommends a slightly larger type size after repeated rereads.",
        why: "Line spacing is already open. A little more size can reduce crowding on the next pass.",
      };
    }
  }

  if (prolongedPauses(metrics) >= ADAPTIVE_THRESHOLDS.frequentPauseCount && !dismissed.has("pauses") && !locked.has("focusHighlight")) {
    if (!settings.focusHighlight) {
      return {
        id: "pauses:focusHighlight",
        rule: "pauses",
        setting: "focusHighlight",
        recommendedValue: true,
        reason: "NeuroLens recommends Focus Mode to make it easier to pick up after a pause.",
        why: "Reading stopped for longer stretches. Highlighting the current line can help you find your place again.",
      };
    }
  }

  const comfortable =
    metrics.feel === "fast" ||
    (metrics.feel === "right" &&
      metrics.currentWpm != null &&
      metrics.currentWpm < settings.targetWpm * ADAPTIVE_THRESHOLDS.slowVsTargetRatio);
  if (
    comfortable &&
    metrics.rereadCount < ADAPTIVE_THRESHOLDS.frequentRereadCount &&
    !dismissed.has("strong-performance") &&
    !locked.has("targetWpm")
  ) {
    const next = clampTargetWpm(settings.targetWpm + ADAPTIVE_THRESHOLDS.wpmStepUp);
    if (next > settings.targetWpm) {
      return {
        id: "strong-performance:targetWpm",
        rule: "strong-performance",
        setting: "targetWpm",
        recommendedValue: next,
        reason: "You’re reading comfortably, so NeuroLens recommends a small speed increase.",
        why:
          metrics.feel === "fast"
            ? "You marked this page as too slow. A slightly higher target matches the pace you already hold."
            : "Your actual pace is well below the target you set, and the page still felt right.",
      };
    }
  }

  return null;
}
