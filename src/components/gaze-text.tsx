import { useEffect, useRef, useState } from "react";
import { cameraAvailable, mapGazeToRect, nearestWord, startGaze } from "@/lib/gaze";
import { cn } from "@/lib/utils";

export function GazeText({
  text,
  className,
  onStatus,
}: {
  text: string;
  className?: string;
  onStatus?: (status: "live" | "denied" | "missing") => void;
}) {
  const rootRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hit, setHit] = useState<string | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (!cameraAvailable()) {
      onStatus?.("missing");
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    let stop: (() => void) | undefined;
    let cancelled = false;
    void (async () => {
      try {
        stop = await startGaze(video, (sample) => {
          const root = rootRef.current;
          if (!root || !sample.ok) return;
          const point = mapGazeToRect(sample.nx, sample.ny, root.getBoundingClientRect());
          const word = nearestWord(point.x, point.y, root);
          setHit(word?.getAttribute("data-gaze-word") ?? null);
        });
        if (cancelled) {
          stop();
          return;
        }
        setLive(true);
        onStatus?.("live");
      } catch {
        onStatus?.("denied");
      }
    })();
    return () => {
      cancelled = true;
      stop?.();
    };
  }, [onStatus]);

  const tokens = text.split(/(\s+)/);

  return (
    <span className="relative block">
      <p ref={rootRef} className={cn("text-left leading-relaxed", className)}>
        {tokens.map((token, index) =>
          /^\s+$/.test(token) ? (
            <span key={index}>{token}</span>
          ) : (
            <span
              key={index}
              data-gaze-word={String(index)}
              className={cn("gaze-word", hit === String(index) && "is-gazed")}
            >
              {token}
            </span>
          ),
        )}
      </p>
      <video
        ref={videoRef}
        className={cn(
          "pointer-events-none absolute right-0 -bottom-8 size-8 rounded-full object-cover opacity-70",
          !live && "invisible",
        )}
        playsInline
        muted
        aria-hidden
      />
    </span>
  );
}
