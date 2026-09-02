import { useEffect, useRef, type RefObject } from "react";
import { ADAPTIVE_THRESHOLDS, isMeaningfulProgressChange, isReread, type PauseEvent, type RereadEvent } from "./engine";
import { useAppStore } from "@/lib/store";

export function useReadingTracker(
  scrollRef: RefObject<HTMLDivElement | null>,
  wordTotal: number,
) {
  const reportReading = useAppStore((s) => s.reportReading);
  const tab = useAppStore((s) => s.tab);
  const text = useAppStore((s) => s.text);

  const highWater = useRef(0);
  const lastProgress = useRef(0);
  const lastMeaningfulAt = useRef(Date.now());
  const paused = useRef(false);
  const pauseStartedAt = useRef<number | null>(null);
  const activeAccumulated = useRef(0);
  const runStartedAt = useRef(Date.now());
  const pauses = useRef<PauseEvent[]>([]);
  const rereads = useRef<RereadEvent[]>([]);
  const lastFlush = useRef(0);
  const lastText = useRef(text);

  useEffect(() => {
    const stored = useAppStore.getState().reading;
    if (lastText.current !== text) {
      lastText.current = text;
      highWater.current = 0;
      lastProgress.current = 0;
      lastMeaningfulAt.current = Date.now();
      paused.current = false;
      pauseStartedAt.current = null;
      activeAccumulated.current = 0;
      runStartedAt.current = Date.now();
      pauses.current = [];
      rereads.current = [];
      return;
    }
    highWater.current = Math.max(highWater.current, stored.progress);
    lastProgress.current = stored.progress;
    activeAccumulated.current = stored.elapsedActiveMs;
    pauses.current = stored.pauses;
    rereads.current = stored.rereads;
    runStartedAt.current = Date.now();
    paused.current = false;
    lastMeaningfulAt.current = Date.now();
  }, [text]);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node || tab !== "read") return;

    function elapsedMs() {
      if (paused.current) return activeAccumulated.current;
      return activeAccumulated.current + (Date.now() - runStartedAt.current);
    }

    function beginPause(at: number) {
      if (paused.current) return;
      activeAccumulated.current = elapsedMs();
      paused.current = true;
      pauseStartedAt.current = at;
    }

    function endPause() {
      if (!paused.current) return;
      const started = pauseStartedAt.current;
      const duration = started != null ? Date.now() - started : 0;
      paused.current = false;
      pauseStartedAt.current = null;
      runStartedAt.current = Date.now();
      if (started != null && duration >= ADAPTIVE_THRESHOLDS.pauseMinMs && highWater.current >= 0.05) {
        pauses.current = [
          ...pauses.current,
          { startedAt: started, durationMs: duration, progress: lastProgress.current },
        ].slice(-24);
        return true;
      }
      return false;
    }

    function snapshot(progress: number) {
      const wordsRead = Math.round(Math.min(1, Math.max(0, progress)) * Math.max(wordTotal, 0));
      return {
        progress,
        wordCount: wordTotal,
        wordsRead,
        elapsedActiveMs: elapsedMs(),
        pauses: pauses.current,
        rereads: rereads.current,
      };
    }

    function flush(force = false) {
      const now = performance.now();
      if (!force && now - lastFlush.current < 250) return;
      lastFlush.current = now;
      reportReading(snapshot(lastProgress.current));
    }

    const onScroll = () => {
      const remaining = node.scrollHeight - node.clientHeight;
      const progress = remaining > 1 ? Math.min(1, Math.max(0, node.scrollTop / remaining)) : 1;
      const previous = lastProgress.current;
      if (!isMeaningfulProgressChange(previous, progress)) {
        flush();
        return;
      }

      const recordedPause = endPause();
      lastProgress.current = progress;
      lastMeaningfulAt.current = Date.now();

      if (isReread(highWater.current, progress)) {
        rereads.current = [
          ...rereads.current,
          { at: Date.now(), from: highWater.current, to: progress },
        ].slice(-24);
        highWater.current = progress;
        flush(true);
        return;
      }

      if (progress > highWater.current) highWater.current = progress;
      flush(recordedPause);
    };

    const tick = window.setInterval(() => {
      if (document.hidden) {
        beginPause(Date.now() - ADAPTIVE_THRESHOLDS.pauseIdleMs);
        flush(true);
        return;
      }
      const idle = Date.now() - lastMeaningfulAt.current;
      if (!paused.current && idle >= ADAPTIVE_THRESHOLDS.pauseIdleMs) {
        beginPause(lastMeaningfulAt.current);
        flush(true);
        return;
      }
      flush();
    }, 1000);

    const onVisibility = () => {
      if (document.hidden) {
        beginPause(Date.now());
        flush(true);
      } else {
        lastMeaningfulAt.current = Date.now();
        endPause();
        flush(true);
      }
    };

    node.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    onScroll();
    return () => {
      node.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearInterval(tick);
    };
  }, [scrollRef, wordTotal, tab, reportReading, text]);
}
