import { cn } from "@/lib/utils";
import { Mark } from "@/components/mark";

export function LensLoader({
  label = "Loading",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 text-sm text-muted", className)} role="status">
      <span className="relative inline-flex size-7 items-center justify-center">
        <Mark className="size-6" />
        <span
          aria-hidden
          className="lens-orbit absolute inset-0 rounded-[8px] border-2 border-transparent border-t-fg"
        />
      </span>
      <span className="shimmer-text">{label}</span>
    </div>
  );
}
