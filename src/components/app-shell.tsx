import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Toaster } from "sonner";
import { Search } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { TABS } from "@/lib/types";
import { isDarkScheme } from "@/lib/scheme";
import { CVD_LABELS } from "@/lib/color-vision";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/surfaces";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CommandPalette } from "@/components/command-palette";
import { Landing } from "@/components/landing";
import { Library } from "@/components/library";
import { Insights } from "@/components/insights";
import { SettingsPanel } from "@/components/settings-panel";
import { Reader } from "@/components/reader";
import { Mark } from "@/components/mark";
import { Segmented } from "@/components/segmented";
import { LiveAnnouncer } from "@/components/live-announcer";
import { cn } from "@/lib/utils";
import { motionTransition, springs } from "@/lib/springs";

const HAS_SCROLL_TIMELINE =
  typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");

function Pane({
  children,
  className,
  onProgress,
}: {
  children: ReactNode;
  className?: string;
  onProgress?: (value: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("pane-scroll h-full overflow-y-auto", className)}
      onScroll={() => {
        if (HAS_SCROLL_TIMELINE) return;
        const node = ref.current;
        if (!node || !onProgress) return;
        const remaining = node.scrollHeight - node.clientHeight;
        onProgress(remaining > 1 ? Math.min(1, node.scrollTop / remaining) : 1);
      }}
    >
      <div className="min-h-full pt-14 sm:pt-16">{children}</div>
    </div>
  );
}

export function AppShell() {
  const hydrate = useAppStore((s) => s.hydrate);
  const tab = useAppStore((s) => s.tab);
  const direction = useAppStore((s) => s.direction);
  const setTab = useAppStore((s) => s.setTab);
  const text = useAppStore((s) => s.text);
  const setCommandOpen = useAppStore((s) => s.setCommandOpen);
  const theme = useAppStore((s) => s.profile.theme);
  const cvdPreview = useAppStore((s) => s.cvdPreview);
  const setCvdPreview = useAppStore((s) => s.setCvdPreview);
  const reduceMotion = useReducedMotion();
  const progressRef = useRef(0);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    const stopNav = (event: DragEvent) => {
      if (!event.dataTransfer || ![...event.dataTransfer.types].includes("Files")) return;
      event.preventDefault();
    };
    window.addEventListener("dragover", stopNav);
    window.addEventListener("drop", stopNav);
    return () => {
      window.removeEventListener("dragover", stopNav);
      window.removeEventListener("drop", stopNav);
    };
  }, []);

  useEffect(() => {
    const label = TABS.find((item) => item.id === tab)?.label ?? "Explore";
    document.title = tab === "explore" ? "NeuroLens" : `${label} · NeuroLens`;
  }, [tab]);

  useEffect(() => {
    progressRef.current = 0;
    document.documentElement.style.setProperty("--scroll-progress", "0");
  }, [tab]);

  const enterX = reduceMotion ? 0 : direction >= 0 ? 12 : -12;
  const exitX = reduceMotion ? 0 : direction >= 0 ? -8 : 8;
  const paneSpring = motionTransition(reduceMotion, springs.ui);
  const toastTheme = isDarkScheme(theme) ? "dark" : "light";

  function setProgress(value: number) {
    progressRef.current = value;
    if (HAS_SCROLL_TIMELINE) return;
    document.documentElement.style.setProperty("--scroll-progress", String(value));
  }

  return (
    <TooltipProvider>
      <div className="nl-shell relative flex h-dvh flex-col overflow-hidden bg-bg text-fg">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <header className="material pointer-events-none absolute inset-x-0 top-0 z-40">
          <div className="pointer-events-auto flex h-14 items-center gap-1.5 px-2 sm:h-16 sm:gap-2 sm:px-6">
            <button
              type="button"
              aria-label="NeuroLens home"
              className="flex shrink-0 items-center gap-2.5 text-fg"
              onClick={() => setTab("explore")}
            >
              <Mark className="size-7 text-fg" />
              <span className="hidden text-sm font-medium tracking-tight sm:inline">NeuroLens</span>
            </button>
            <nav aria-label="Primary" className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Segmented
                tone="nav"
                value={tab}
                onChange={setTab}
                options={TABS.map((item) => ({
                  id: item.id,
                  label: item.label,
                  disabled: item.id === "read" && !text,
                }))}
                className="mx-auto h-10 w-max max-w-full"
              />
            </nav>
            {cvdPreview !== "none" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex"
                aria-label={`Turn off ${CVD_LABELS[cvdPreview]} simulation`}
                onClick={() => setCvdPreview("none")}
              >
                {CVD_LABELS[cvdPreview]}
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => setCommandOpen(true)}
            >
              <Search size={14} />
              Search
              <Kbd>⌘K</Kbd>
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="sm:hidden"
              aria-label="Search"
              onClick={() => setCommandOpen(true)}
            >
              <Search size={16} />
            </Button>
          </div>
          <div
            aria-hidden
            className="scroll-progress pointer-events-none h-0.5 bg-fg/35"
          />
          <div
            aria-hidden
            className="pointer-events-none h-6 bg-gradient-to-b from-bg/80 to-transparent"
          />
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          aria-label={TABS.find((item) => item.id === tab)?.label ?? "Explore"}
          className="relative min-h-0 flex-1 outline-none"
        >
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={tab}
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0, x: enterX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: exitX,
                transition: motionTransition(reduceMotion, springs.ui),
              }}
              transition={paneSpring}
            >
              {tab === "explore" && (
                <Pane onProgress={setProgress}>
                  <Landing />
                </Pane>
              )}
              {tab === "read" && <Reader />}
              {tab === "library" && (
                <Pane onProgress={setProgress}>
                  <Library />
                </Pane>
              )}
              {tab === "insights" && (
                <Pane onProgress={setProgress}>
                  <Insights />
                </Pane>
              )}
              {tab === "settings" && (
                <Pane onProgress={setProgress}>
                  <SettingsPanel />
                </Pane>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="flex min-h-12 shrink-0 flex-col items-center justify-center gap-2 px-4 py-3 text-center text-xs text-muted sm:flex-row sm:gap-4">
          <span>NeuroLens · Crafted for neurodivergent minds</span>
          <span className="hidden opacity-40 sm:inline" aria-hidden>
            ·
          </span>
          <nav aria-label="Legal" className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-fg">
              Privacy
            </Link>
            <Link to="/thank-you" className="hover:text-fg">
              Thank you
            </Link>
          </nav>
        </footer>
        <LiveAnnouncer />
        <CommandPalette />
        <Toaster
          theme={toastTheme}
          position="bottom-right"
          offset={24}
          mobileOffset={16}
          visibleToasts={3}
          gap={10}
          toastOptions={{
            classNames: {
              toast: "!bg-surface !text-fg !border-0 !shadow-[var(--shadow-float)] !rounded-[16px]",
              title: "!text-sm !font-medium !text-fg",
              description: "!text-sm !text-muted",
            },
          }}
        />
      </div>
    </TooltipProvider>
  );
}
