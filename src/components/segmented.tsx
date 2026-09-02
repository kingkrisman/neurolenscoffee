import { useReducedMotion } from "motion/react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface SegmentedOption<T extends string> {
  id: T;
  label: string;
  disabled?: boolean;
}

export function Segmented<T extends string>({
  value,
  onChange,
  options,
  className,
  label,
  tone = "choice",
}: {
  value: T;
  onChange: (id: T) => void;
  options: SegmentedOption<T>[];
  className?: string;
  label?: string;
  tone?: "choice" | "nav";
}) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState("inset(4px 100% 4px 0 round 6px)");
  const [canAnimate, setCanAnimate] = useState(false);
  const isChoice = tone === "choice";

  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const button = root.querySelector<HTMLElement>(`[data-seg="${CSS.escape(String(value))}"]`);
    if (!button) return;
    const rootBox = root.getBoundingClientRect();
    const box = button.getBoundingClientRect();
    setClip(
      `inset(${box.top - rootBox.top}px ${rootBox.right - box.right}px ${rootBox.bottom - box.bottom}px ${box.left - rootBox.left}px round 6px)`,
    );
  }, [value]);

  useLayoutEffect(() => {
    measure();
  }, [measure, options]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setCanAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    let first = true;
    const observer = new ResizeObserver(() => {
      if (first) {
        first = false;
        measure();
        return;
      }
      setCanAnimate(false);
      measure();
      requestAnimationFrame(() => setCanAnimate(true));
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, [measure]);

  function move(delta: number) {
    const enabled = options.filter((option) => !option.disabled);
    if (enabled.length === 0) return;
    const current = enabled.findIndex((option) => option.id === value);
    const next = enabled[(current + delta + enabled.length) % enabled.length];
    if (!next) return;
    onChange(next.id);
    requestAnimationFrame(() => {
      rootRef.current
        ?.querySelector<HTMLElement>(`[data-seg="${CSS.escape(String(next.id))}"]`)
        ?.focus();
    });
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!isChoice) return;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      const first = options.find((option) => !option.disabled);
      if (first) {
        onChange(first.id);
        requestAnimationFrame(() => {
          rootRef.current
            ?.querySelector<HTMLElement>(`[data-seg="${CSS.escape(String(first.id))}"]`)
            ?.focus();
        });
      }
    } else if (event.key === "End") {
      event.preventDefault();
      const last = [...options].reverse().find((option) => !option.disabled);
      if (last) {
        onChange(last.id);
        requestAnimationFrame(() => {
          rootRef.current
            ?.querySelector<HTMLElement>(`[data-seg="${CSS.escape(String(last.id))}"]`)
            ?.focus();
        });
      }
    }
  }

  const animateClip = canAnimate && !reduceMotion;

  return (
    <div
      ref={rootRef}
      role={isChoice ? "radiogroup" : "group"}
      aria-label={label}
      onKeyDown={onKeyDown}
      className={cn("relative isolate inline-flex h-10 items-center rounded-md bg-fg/5 p-1", className)}
    >
      {options.map((option) => {
        const selected = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            data-seg={option.id}
            disabled={option.disabled}
            role={isChoice ? "radio" : undefined}
            aria-checked={isChoice ? selected : undefined}
            aria-current={!isChoice && selected ? "page" : undefined}
            tabIndex={isChoice ? (selected ? 0 : -1) : undefined}
            onClick={() => onChange(option.id)}
            className={cn(
              "relative z-10 h-8 shrink-0 rounded-sm px-2 text-xs font-medium whitespace-nowrap text-muted transition-colors duration-[150ms] ease-[var(--ease-standard)] sm:px-3 sm:text-sm",
              "hover:text-fg",
              option.disabled && "opacity-30",
            )}
          >
            {option.label}
          </button>
        );
      })}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] flex p-1 select-none"
        style={{
          clipPath: clip,
          transition: animateClip ? "clip-path 250ms var(--ease-in-out)" : "none",
        }}
      >
        {options.map((option) => (
          <span
            key={option.id}
            className={cn(
              "flex h-8 shrink-0 items-center rounded-sm bg-surface px-2 text-xs font-medium whitespace-nowrap text-fg shadow-border sm:px-3 sm:text-sm",
              option.disabled && "opacity-30",
            )}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StaggerWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="stagger-word"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}

export function StaggerBlock({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("stagger-block", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
