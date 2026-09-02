import { useMemo, useState } from "react";
import { COLOR_SCHEMES, type ThemeId } from "@/lib/types";
import {
  SCHEME_TOKENS,
  describePair,
  evaluateScheme,
  formatContrastRatio,
  isHexColor,
  linearizeChannel,
  normalizeHex,
} from "@/lib/contrast";
import {
  CVD_HINTS,
  CVD_LABELS,
  type CvdKind,
  simulateHex,
  simulatedContrast,
} from "@/lib/color-vision";
import {
  TARGET_SIZE_2_5_8_PX,
  TEXT_SPACING_1_4_12,
  WCAG_22_READER,
  evaluatePairCriteria,
  evaluateTextSpacing,
} from "@/lib/wcag";
import { useAppStore } from "@/lib/store";
import { Input, Label } from "@/components/ui/field";
import { Segmented } from "@/components/segmented";
import { cn } from "@/lib/utils";

function Level({ value }: { value: "fail" | "AA" | "AAA" | "pass" | "info" | boolean }) {
  if (value === true || value === "pass") return <span className="text-success">pass</span>;
  if (value === false || value === "fail") return <span className="text-danger">fail</span>;
  if (value === "info") return <span className="text-muted">note</span>;
  return <span>{value}</span>;
}

const CVD_OPTIONS: { id: CvdKind; label: string }[] = [
  { id: "none", label: "Typical" },
  { id: "protanopia", label: "Protan" },
  { id: "deuteranopia", label: "Deutan" },
  { id: "tritanopia", label: "Tritan" },
];

export function ContrastLab() {
  const profile = useAppStore((s) => s.profile);
  const setProfile = useAppStore((s) => s.setProfile);
  const cvd = useAppStore((s) => s.cvdPreview);
  const setCvd = useAppStore((s) => s.setCvdPreview);
  const tokens = SCHEME_TOKENS[profile.theme];
  const [fg, setFg] = useState(tokens.fg);
  const [bg, setBg] = useState(tokens.bg);

  const pair = useMemo(() => {
    if (!isHexColor(fg) || !isHexColor(bg)) return null;
    return describePair(fg, bg);
  }, [fg, bg]);

  const seenFg = pair ? simulateHex(pair.fg, cvd) : tokens.fg;
  const seenBg = pair ? simulateHex(pair.bg, cvd) : tokens.bg;
  const seenRatio = pair ? simulatedContrast(pair.fg, pair.bg, cvd) : 0;
  const spacing = evaluateTextSpacing(profile);
  const live = pair
    ? evaluatePairCriteria({
        ratio: pair.ratio,
        fontSizePx: profile.fontSize,
        cvd,
        fg: pair.fg,
        bg: pair.bg,
      })
    : [];
  const liveById = Object.fromEntries(live.map((row) => [row.id, row]));

  function useScheme(id: ThemeId) {
    const next = SCHEME_TOKENS[id];
    setFg(next.fg);
    setBg(next.bg);
    setProfile({ ...profile, theme: id });
  }

  const lighter = pair ? Math.max(pair.fgLum, pair.bgLum) : 0;
  const darker = pair ? Math.min(pair.fgLum, pair.bgLum) : 0;

  return (
    <div>
      <h2 className="font-medium">Contrast lab</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        WCAG 2.2 contrast is a ratio of relative luminance, not a guess about how a color “looks.” Each sRGB channel
        is linearized, mixed into L, then scored as (L<sub>lighter</sub> + 0.05) / (L<sub>darker</sub> + 0.05). Body
        text needs 4.5:1 for AA and 7:1 for AAA. Large type (24px, or 18.67px bold) can pass AA at 3:1. Controls need
        3:1.
      </p>

      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted">
        <li>
          sRGB 8-bit C becomes cs = C / 255.
        </li>
        <li>
          Linearize: cs ≤ 0.04045 ? cs / 12.92 : ((cs + 0.055) / 1.055)<sup>2.4</sup>
        </li>
        <li>
          L = 0.2126R + 0.7152G + 0.0722B
        </li>
        <li>
          Contrast = (L<sub>lighter</sub> + 0.05) / (L<sub>darker</sub> + 0.05)
        </li>
      </ol>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <Label htmlFor="lab-fg">Ink</Label>
          <div className="mt-1 flex items-center gap-2">
            <span className="scheme-dot size-8 shrink-0 rounded-md" style={{ background: isHexColor(fg) ? normalizeHex(fg) : tokens.fg }} />
            <Input id="lab-fg" value={fg} onChange={(event) => setFg(event.target.value)} spellCheck={false} />
          </div>
        </div>
        <div>
          <Label htmlFor="lab-bg">Paper</Label>
          <div className="mt-1 flex items-center gap-2">
            <span className="scheme-dot size-8 shrink-0 rounded-md" style={{ background: isHexColor(bg) ? normalizeHex(bg) : tokens.bg }} />
            <Input id="lab-bg" value={bg} onChange={(event) => setBg(event.target.value)} spellCheck={false} />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">Color vision</p>
        <Segmented
          value={cvd}
          onChange={setCvd}
          label="Color vision simulation"
          options={CVD_OPTIONS}
          className="h-9 w-full"
        />
        <p className="mt-2 text-xs leading-relaxed text-muted">
          Machado 2009, applied to linear sRGB — not a CSS hue shift. Brettel 1997 is the other gold-standard
          simulator (especially for tritanopia). Viénot 1999 is a faster Brettel for red-green only. This view
          remaps the whole NeuroLens palette so you can see the product, not a swatch. {CVD_HINTS[cvd]}
        </p>
      </div>

      {pair && (
        <div
          className="mt-4 rounded-md px-4 py-5"
          style={{ background: seenBg, color: seenFg }}
        >
          <p className="text-lg font-medium">The quick brown fox reads the page.</p>
          <p className="mt-2 text-sm opacity-80">
            {cvd === "none" ? "Typical vision." : `As ${CVD_LABELS[cvd].toLowerCase()} would see this pair.`}
          </p>
        </div>
      )}

      {pair && (
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Ratio</dt>
            <dd className="mt-1 font-medium tabular-nums">{formatContrastRatio(pair.ratio)}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Seen as</dt>
            <dd className="mt-1 font-medium tabular-nums">{formatContrastRatio(seenRatio)}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">Normal AA/AAA</dt>
            <dd className="mt-1 font-medium">
              <Level value={pair.normal} />
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">UI 3:1</dt>
            <dd className="mt-1 font-medium">
              <Level value={pair.ui} />
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs tracking-wide text-muted uppercase">Ink L</dt>
            <dd className="mt-1 tabular-nums">{pair.fgLum.toFixed(3)}</dd>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <dt className="text-xs tracking-wide text-muted uppercase">Paper L</dt>
            <dd className="mt-1 tabular-nums">{pair.bgLum.toFixed(3)}</dd>
          </div>
        </dl>
      )}

      {pair && (
        <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
          Ink RGB({pair.fgRgb.join(", ")}) → linear ({pair.fgRgb.map((c) => linearizeChannel(c).toFixed(3)).join(", ")})
          <br />
          Paper RGB({pair.bgRgb.join(", ")}) → linear ({pair.bgRgb.map((c) => linearizeChannel(c).toFixed(3)).join(", ")})
          <br />
          ({lighter.toFixed(3)} + 0.05) / ({darker.toFixed(3)} + 0.05) = {pair.ratio.toFixed(2)}
          {cvd !== "none" && (
            <>
              <br />
              Machado {CVD_LABELS[cvd]} ink {seenFg} on {seenBg} → {seenRatio.toFixed(2)}:1
            </>
          )}
        </p>
      )}

      <h3 className="mt-8 text-xs font-medium tracking-wide text-muted uppercase">WCAG 2.2 on this page</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Contrast is only three criteria. The rest of 2.2 is about whether the page still works when color, space,
        focus, or target size change.
      </p>
      <div className="mt-3 divide-y divide-border rounded-md bg-fg/4">
        {WCAG_22_READER.map((criterion) => {
          const liveRow = liveById[criterion.id];
          return (
            <div key={criterion.id} className="px-3 py-2.5">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium">
                  <span className="font-mono text-xs text-muted">{criterion.id}</span>
                  <span className="mx-2">{criterion.name}</span>
                  <span className="text-xs text-subtle">{criterion.level}</span>
                  {criterion.addedIn === "2.2" && (
                    <span className="ml-2 text-xs text-accent">2.2</span>
                  )}
                </p>
                {liveRow ? <Level value={liveRow.status} /> : <span className="text-xs text-muted">page</span>}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{criterion.summary}</p>
              {liveRow && <p className="mt-1 text-xs leading-relaxed">{liveRow.detail}</p>}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs font-medium tracking-wide text-muted uppercase">Text spacing · 1.4.12</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        The criterion is not “use these values.” It is “the page still works if someone applies them.” Your current
        profile versus the override test:
      </p>
      <dl className="mt-3 grid grid-cols-3 gap-3 text-sm">
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Line</dt>
          <dd className="mt-1 tabular-nums">
            {spacing.lineHeight.toFixed(1)} / {TEXT_SPACING_1_4_12.lineHeight.toFixed(1)}
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Letter</dt>
          <dd className="mt-1 tabular-nums">
            {spacing.letterSpacingEm.toFixed(2)} / {TEXT_SPACING_1_4_12.letterSpacingEm.toFixed(2)}em
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-muted uppercase">Word</dt>
          <dd className="mt-1 tabular-nums">
            {spacing.wordSpacingEm.toFixed(2)} / {TEXT_SPACING_1_4_12.wordSpacingEm.toFixed(2)}em
          </dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        Target size 2.5.8 is {TARGET_SIZE_2_5_8_PX}×{TARGET_SIZE_2_5_8_PX} CSS pixels. Reader controls are 44px, which
        also meets the older AAA 2.5.5 size.
      </p>

      <p className="mt-6 text-xs font-medium tracking-wide text-muted uppercase">
        Rooms at {profile.fontSize}px{cvd !== "none" ? ` · ${CVD_LABELS[cvd]}` : ""}
      </p>
      <div className="mt-2 divide-y divide-border rounded-md bg-fg/4">
        {COLOR_SCHEMES.map((scheme) => {
          const report = evaluateScheme(scheme.id, profile.fontSize);
          const tokensFor = SCHEME_TOKENS[scheme.id];
          const seen = simulatedContrast(tokensFor.fg, tokensFor.bg, cvd);
          const active = scheme.id === profile.theme;
          return (
            <button
              key={scheme.id}
              type="button"
              aria-pressed={active}
              onClick={() => useScheme(scheme.id)}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm",
                active && "bg-fg text-primary-fg",
              )}
            >
              <span className="inline-flex items-center gap-2">
                <span className="scheme-dot size-3.5 rounded-full" style={{ background: simulateHex(scheme.swatch, cvd) }} />
                {scheme.label}
              </span>
              <span className={cn("tabular-nums", active ? "text-primary-fg/80" : "text-muted")}>
                {formatContrastRatio(cvd === "none" ? report.body : seen)} ·{" "}
                {cvd === "none"
                  ? report.bodyLevel === "fail"
                    ? "below AA"
                    : report.bodyLevel
                  : seen >= 7
                    ? "AAA"
                    : seen >= 4.5
                      ? "AA"
                      : "below AA"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
