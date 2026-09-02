import { Command } from "cmdk";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BookOpen, Eye, Library, Settings2, Sparkles } from "lucide-react";
import { SAMPLE_TEXTS } from "@/lib/samples";
import { FEATURED_PASSAGES } from "@/lib/bible";
import { fetchPassage, passageToReaderText } from "@/lib/bible-api";
import { remoteMessage } from "@/lib/remote";
import { useAppStore } from "@/lib/store";
import { Kbd } from "@/components/ui/surfaces";
import { NAMED_PRESETS, READING_PROFILES, TABS, type ReadingMode, type TabId } from "@/lib/types";
import { motionTransition, springs } from "@/lib/springs";
import { toast } from "sonner";

const TAB_ICONS = {
  explore: Sparkles,
  read: BookOpen,
  library: Library,
  insights: Eye,
  settings: Settings2,
} as const;

export function CommandPalette() {
  const open = useAppStore((s) => s.commandOpen);
  const setOpen = useAppStore((s) => s.setCommandOpen);
  const setTab = useAppStore((s) => s.setTab);
  const startReading = useAppStore((s) => s.startReading);
  const sessions = useAppStore((s) => s.sessions);
  const text = useAppStore((s) => s.text);
  const setMode = useAppStore((s) => s.setMode);
  const applySavedProfile = useAppStore((s) => s.applySavedProfile);
  const savedProfiles = useAppStore((s) => s.savedProfiles);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(!useAppStore.getState().commandOpen);
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="command" className="fixed inset-0 z-80">
          <motion.button
            type="button"
            className="absolute inset-0 bg-fg/25"
            aria-label="Close command menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={motionTransition(reduce, springs.ui)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            className="absolute top-[18%] left-1/2 w-[min(32rem,calc(100%-1.5rem))] origin-top overflow-hidden rounded-lg bg-surface shadow-float"
            initial={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 8, scale: 0.98, x: "-50%" }}
            transition={motionTransition(reduce, springs.ui)}
          >
        <Command label="Command menu" className="text-sm">
          <Command.Input
            autoFocus
            aria-label="Search commands"
            placeholder="Go somewhere, open a chapter, or apply a profile"
            className="h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-subtle"
          />
          <Command.List className="max-h-80 overflow-y-auto p-1.5">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
              Nothing matches.
            </Command.Empty>
            <Command.Group
              heading="Navigate"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
            >
              {TABS.map((tab) => {
                const Icon = TAB_ICONS[tab.id];
                return (
                  <Command.Item
                    key={tab.id}
                    disabled={tab.id === "read" && !text}
                    onSelect={() => {
                      setTab(tab.id as TabId);
                      setOpen(false);
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                  >
                    <Icon size={15} className="text-muted" />
                    {tab.label}
                  </Command.Item>
                );
              })}
            </Command.Group>
            <Command.Group
              heading="Reading modes"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
            >
              {(Object.keys(READING_PROFILES) as ReadingMode[]).map((mode) => (
                <Command.Item
                  key={mode}
                  onSelect={() => {
                    setMode(mode);
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                >
                  {READING_PROFILES[mode].name}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group
              heading="Profiles"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
            >
              {[...NAMED_PRESETS, ...savedProfiles].map((preset) => (
                <Command.Item
                  key={preset.id}
                  onSelect={() => {
                    applySavedProfile(preset);
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                >
                  {preset.name}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group
              heading="Samples"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
            >
              {SAMPLE_TEXTS.map((sample) => (
                <Command.Item
                  key={sample.title}
                  onSelect={() => {
                    startReading(sample.text, { title: sample.title, kind: "text" });
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                >
                  {sample.title}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group
              heading="Bible"
              className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
            >
              {FEATURED_PASSAGES.map((passage) => (
                <Command.Item
                  key={passage.id}
                  onSelect={() => {
                    void (async () => {
                      try {
                        const next = await fetchPassage({
                          book: passage.book,
                          chapter: passage.chapter,
                          verse: passage.verse,
                        });
                        startReading(passageToReaderText(next), {
                          title: next.reference,
                          kind: "bible",
                          sourceId: next.reference,
                        });
                        setOpen(false);
                      } catch (err) {
                        toast.error(remoteMessage(err, "Could not load that passage"));
                      }
                    })();
                  }}
                  className="cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                >
                  {passage.label}
                </Command.Item>
              ))}
            </Command.Group>
            {sessions.length > 0 && (
              <Command.Group
                heading="Recent"
                className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle"
              >
                {sessions.map((session) => (
                  <Command.Item
                    key={session.openedAt}
                    onSelect={() => {
                      startReading(session.content, {
                        title: session.title,
                        kind: session.kind,
                        sourceId: session.sourceId,
                      });
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6"
                  >
                    {session.title}
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>
          <div className="flex items-center gap-3 border-t border-border px-3 py-2 text-[11px] text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <Kbd>↵</Kbd> select
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Kbd>esc</Kbd> close
            </span>
          </div>
        </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
