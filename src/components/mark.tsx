import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M9 23V9h3.1l7.7 10.4V9H23v14h-3.1L12.2 12.6V23H9z"
        fill="var(--color-surface)"
      />
    </svg>
  );
}
