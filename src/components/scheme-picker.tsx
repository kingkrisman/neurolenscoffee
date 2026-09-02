import { COLOR_SCHEMES, type ThemeId } from "@/lib/types";
import { evaluateScheme, formatContrastRatio } from "@/lib/contrast";
import { cn } from "@/lib/utils";

export function SchemePicker({
  value,
  onChange,
}: {
  value: ThemeId;
  onChange: (id: ThemeId) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Color scheme" className="grid grid-cols-3 gap-1.5">
      {COLOR_SCHEMES.map((scheme) => {
        const selected = value === scheme.id;
        return (
          <button
            key={scheme.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(scheme.id)}
            className={cn(
              "flex h-11 items-center gap-2 rounded-md px-2.5 text-left text-sm font-medium transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]",
              selected ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8",
            )}
          >
            <span
              className="scheme-dot size-3.5 shrink-0 rounded-full"
              style={{ background: scheme.swatch, boxShadow: selected ? `inset 0 0 0 1px ${scheme.ink}` : undefined }}
              aria-hidden
            />
            {scheme.label}
          </button>
        );
      })}
    </div>
  );
}

export function ContrastMeter({ theme, fontSize }: { theme: ThemeId; fontSize: number }) {
  const report = evaluateScheme(theme, fontSize);
  const label = report.bodyLevel === "fail" ? "below AA" : report.bodyLevel;
  return (
    <p className="mt-2 text-xs leading-relaxed text-muted">
      Body {formatContrastRatio(report.body)} at {fontSize}px · WCAG {label}. Muted{" "}
      {formatContrastRatio(report.muted)}.
    </p>
  );
}
