import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { useState } from "react";
import type { Chapter } from "@/lib/chapters";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ChapterDock({
  chapters,
  index,
  onChange,
}: {
  chapters: Chapter[];
  index: number;
  onChange: (index: number) => void;
}) {
  const [open, setOpen] = useState(false);
  if (chapters.length < 2) return null;
  const current = chapters[index] ?? chapters[0]!;

  return (
    <div className="pointer-events-auto flex max-w-[min(100%,28rem)] items-center gap-1 rounded-lg bg-surface/95 p-1 shadow-[var(--shadow-border)]">
      <Button variant="ghost" size="icon-sm" disabled={index <= 0} onClick={() => onChange(index - 1)} aria-label="Previous chapter">
        <ChevronLeft size={16} />
      </Button>
      <button
        type="button"
        className="min-w-0 flex-1 truncate px-2 text-left text-xs font-medium"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {current.title}
      </button>
      <Button variant="ghost" size="icon-sm" onClick={() => setOpen((v) => !v)} aria-label="Chapter list">
        <List size={16} />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        disabled={index >= chapters.length - 1}
        onClick={() => onChange(index + 1)}
        aria-label="Next chapter"
      >
        <ChevronRight size={16} />
      </Button>
      {open && (
        <div className="absolute bottom-12 left-1/2 z-30 max-h-64 w-[min(20rem,90vw)] -translate-x-1/2 overflow-auto rounded-lg bg-surface p-2 shadow-float">
          {chapters.map((ch) => (
            <button
              key={ch.index}
              type="button"
              onClick={() => {
                onChange(ch.index);
                setOpen(false);
              }}
              className={cn(
                "block w-full truncate rounded-md px-3 py-2 text-left text-sm",
                ch.index === index ? "bg-fg/8 font-medium" : "hover:bg-fg/5",
              )}
            >
              {ch.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
