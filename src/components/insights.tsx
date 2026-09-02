import NumberFlow from "@number-flow/react";
import { ChevronRight } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import { useAppStore } from "@/lib/store";
import { Media, Panel, PanelWell } from "@/components/ui/surfaces";
import { evaluateScheme, formatContrastRatio } from "@/lib/contrast";
import { wordCount } from "@/lib/utils";

export function Insights() {
  const sessions = useAppStore((s) => s.sessions);
  const text = useAppStore((s) => s.text);
  const startReading = useAppStore((s) => s.startReading);
  const reading = useAppStore((s) => s.reading);
  const targetWpm = useAppStore((s) => s.targetWpm);
  const readingFeel = useAppStore((s) => s.readingFeel);
  const mode = useAppStore((s) => s.mode);
  const profile = useAppStore((s) => s.profile);
  const words = sessions.reduce((sum, session) => sum + wordCount(session.content), 0);
  const sessionCount = sessions.length;
  const progressPct = Math.round(reading.progress * 100);
  const focusScore = Math.max(0, 100 - reading.pauses.length * 12 - reading.rereads.length * 8);
  const feelScore = readingFeel === "right" ? 100 : readingFeel === "slow" || readingFeel === "fast" ? 70 : null;
  const quality =
    progressPct === 0 && feelScore == null
      ? null
      : feelScore == null
        ? Math.round(progressPct * 0.7 + focusScore * 0.3)
        : Math.round(progressPct * 0.4 + feelScore * 0.35 + focusScore * 0.25);
  const series = sessions
    .slice(0, 8)
    .reverse()
    .map((session, index) => ({
      d: String(index + 1),
      v: Math.round((session.progress ?? 0) * 100),
    }));
  const chartData = series.length > 0 ? series : [{ d: "1", v: progressPct }];
  const contrast = evaluateScheme(profile.theme, profile.fontSize);
  const insight =
    readingFeel === "slow"
      ? "You marked this page as too fast. A lower target may help the next pass."
      : readingFeel === "fast"
        ? "You marked this page as too slow. You can raise the target if you want."
        : reading.rereads.length >= 2
          ? profile.theme === "contrast" || profile.theme === "ink"
            ? "You moved back through the page more than once. Extra spacing may help."
            : "You moved back through the page more than once. A higher-contrast scheme can make the line easier to hold."
          : reading.pauses.length >= 2
            ? "Long pauses showed up in this session. Focus line can help you re-enter."
            : text
              ? "Keep reading. Pace, pauses, and rereads fill this log as you go."
              : "Open a passage to start a live reading log.";

  const feelLabel =
    readingFeel === "slow" ? "Too fast" : readingFeel === "fast" ? "Too slow" : readingFeel === "right" ? "Just right" : "—";

  return (
    <div className="mx-auto h-full max-w-5xl overflow-y-auto px-4 py-10 sm:px-8 sm:py-14">
      <h1 className="text-5xl">Insights</h1>
      <p className="mt-3 max-w-lg text-muted">How far you’ve read, the pace you hold, and how the page felt.</p>

      <Panel className="mt-8">
        <div className="relative overflow-hidden rounded-lg">
          <Media
            src="/images/reading-room.jpg"
            alt="Window light in a university reading room"
            width={1600}
            height={900}
            className="aspect-[16/8] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 text-primary-fg sm:p-8">
            <p className="text-xs tracking-wide text-primary-fg/70 uppercase">Session score</p>
            <p className="mt-1 font-serif text-6xl tracking-tight tabular-nums">
              {quality == null ? "—" : <NumberFlow value={quality} />}
            </p>
            <p className="mt-2 max-w-sm text-sm text-primary-fg/75">{insight}</p>
          </div>
        </div>
      </Panel>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <Panel>
          <PanelWell className="bg-primary px-5 py-5 text-primary-fg">
            <p className="text-xs font-medium tracking-wide uppercase opacity-70">Recent progress</p>
            <div className="mt-5 h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap={8}>
                  <XAxis dataKey="d" hide />
                  <Bar dataKey="v" fill="color-mix(in oklab, var(--color-primary-fg) 45%, transparent)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </PanelWell>
        </Panel>
        <StatCard label="How it felt" value={feelLabel} hint="Pace, pauses, rereads, and how the page felt" />
        <StatCard
          label="Current WPM"
          value={reading.currentWpm == null ? "—" : reading.currentWpm}
          hint={`Target ${targetWpm}`}
          numeric
        />
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <StatCard
          label="Words processed"
          value={words}
          hint={`Across ${sessionCount} session${sessionCount === 1 ? "" : "s"}`}
          numeric
        />
        <StatCard
          label="Pauses"
          value={reading.pauses.length}
          hint={`${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}`}
          numeric
        />
        <StatCard
          label="Contrast"
          value={formatContrastRatio(contrast.body)}
          hint={`${profile.name} · WCAG ${contrast.bodyLevel} · ${mode}`}
        />
      </div>

      {sessions.length > 0 && (
        <section className="mt-10 pb-8">
          <h2 className="mb-4 text-lg font-medium">History</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {sessions.map((session) => (
              <button
                key={session.openedAt}
                type="button"
                onClick={() =>
                  startReading(session.content, {
                    title: session.title,
                    kind: session.kind,
                    sourceId: session.sourceId,
                  })
                }
                className="group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
              >
                <span className="flex items-center justify-between gap-3 rounded-lg bg-bg px-4 py-4">
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{session.title}</span>
                    <span className="mt-1 block text-xs text-muted">
                      {new Date(session.openedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      {" · "}
                      {wordCount(session.content)} words
                      {session.progress != null ? ` · ${Math.round(session.progress * 100)}%` : ""}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted">
                    Resume
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
                    />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  numeric,
}: {
  label: string;
  value: string | number;
  hint: string;
  numeric?: boolean;
}) {
  return (
    <Panel>
      <PanelWell className="px-5 py-5">
        <p className="text-xs font-medium tracking-wide text-muted uppercase">{label}</p>
        <p className={`mt-3 font-serif tracking-tight ${numeric ? "text-4xl tabular-nums" : "text-3xl"}`}>
          {typeof value === "number" ? <NumberFlow value={value} /> : value}
        </p>
        <p className="mt-4 text-sm text-muted">{hint}</p>
      </PanelWell>
    </Panel>
  );
}
