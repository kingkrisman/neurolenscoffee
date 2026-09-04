import { useEffect, useRef } from "react";
import { cameraAvailable, mapGazeToRect, startGaze } from "@/lib/gaze";

export function GazeFollow({
  scroller,
  enabled,
  onLine,
}: {
  scroller: React.RefObject<HTMLElement | null>;
  enabled: boolean;
  onLine: (index: number) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!enabled || !cameraAvailable()) return;
    const video = videoRef.current;
    if (!video) return;
    let stop: (() => void) | undefined;
    let cancelled = false;
    void (async () => {
      try {
        stop = await startGaze(video, (sample) => {
          const root = scroller.current;
          if (!root || !sample.ok) return;
          const point = mapGazeToRect(sample.nx, sample.ny, root.getBoundingClientRect());
          const lines = root.querySelectorAll<HTMLElement>(".reading-line");
          let best = -1;
          let dist = Infinity;
          lines.forEach((node) => {
            const id = node.id.startsWith("line-") ? Number(node.id.slice(5)) : NaN;
            if (!Number.isFinite(id)) return;
            const box = node.getBoundingClientRect();
            const cx = box.left + box.width / 2;
            const cy = box.top + box.height / 2;
            const d = (cx - point.x) ** 2 + (cy - point.y) ** 2 * 1.8;
            if (d < dist) {
              dist = d;
              best = id;
            }
          });
          if (best >= 0) onLine(best);
        });
        if (cancelled) stop();
      } catch {
        /* permission denied */
      }
    })();
    return () => {
      cancelled = true;
      stop?.();
    };
  }, [enabled, onLine, scroller]);

  if (!enabled) return null;
  return (
    <video
      ref={videoRef}
      className="pointer-events-none fixed right-3 bottom-24 z-20 size-10 rounded-full object-cover opacity-70 shadow-[var(--shadow-border)]"
      playsInline
      muted
      aria-hidden
    />
  );
}
