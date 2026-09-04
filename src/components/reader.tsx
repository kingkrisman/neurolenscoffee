import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Bookmark,
  ChevronsDown,
  Copy,
  Download,
  Languages,
  MoreHorizontal,
  Pause,
  Play,
  Settings2,
  StickyNote,
  Volume2,
  VolumeX,
  ScanEye,
} from "lucide-react";
import { processBionicText } from "@/lib/bionic";
import { simplifyText } from "@/lib/text-simplifier";
import { evaluateScheme, formatContrastRatio } from "@/lib/contrast";
import { FONT_CLASS, TINT_CLASS } from "@/lib/types";
import { useAppStore } from "@/lib/store";
import { tapFeedback } from "@/lib/feedback";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/field";
import { IconSwap } from "@/components/ui/icon-swap";
import { Progress } from "@/components/ui/surfaces";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReaderControls } from "@/components/reader-controls";
import { RecommendationBanner } from "@/components/recommendation-banner";
import { SpeedReader } from "@/components/speed-reader";
import { AccessibleBionic } from "@/components/accessible-bionic";
import { cn, wordCount } from "@/lib/utils";
import { announce } from "@/lib/announce";
import { useReadingTracker } from "@/lib/adaptive/use-reading-tracker";
import { autoScrollDeltaPx, resolveRhythmCurve, tokenContextAtProgress } from "@/lib/rhythm";
import { splitSentenceSpans } from "@/lib/sentences";
import { ReadingFeelBar } from "@/components/reading-feel";
import { GazeFollow } from "@/components/gaze-follow";
import { PdfPager } from "@/components/pdf-pager";
import { ChapterDock } from "@/components/chapter-dock";
import { WordCard } from "@/components/word-card";
import { detectChapters, sliceChapter } from "@/lib/chapters";
import { getPdfPageCount } from "@/lib/pdf-session";

export function Reader() {
  const text = useAppStore((s) => s.text);
  const profile = useAppStore((s) => s.profile);
  const mode = useAppStore((s) => s.mode);
  const controlsOpen = useAppStore((s) => s.controlsOpen);
  const setControlsOpen = useAppStore((s) => s.setControlsOpen);
  const autoScrolling = useAppStore((s) => s.autoScrolling);
  const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
  const targetWpm = useAppStore((s) => s.targetWpm);
  const currentWpm = useAppStore((s) => s.reading.currentWpm);
  const progress = useAppStore((s) => s.reading.progress);
  const pauses = useAppStore((s) => s.reading.pauses.length);
  const rereads = useAppStore((s) => s.reading.rereads.length);
  const highlights = useAppStore((s) => s.highlights);
  const toggleHighlight = useAppStore((s) => s.toggleHighlight);
  const toggleBookmark = useAppStore((s) => s.toggleBookmark);
  const bookmarks = useAppStore((s) => s.bookmarks);
  const gazeFixation = useAppStore((s) => s.gazeFixation);
  const setGazeFixation = useAppStore((s) => s.setGazeFixation);
  const pdfPage = useAppStore((s) => s.pdfPage);
  const setPdfPage = useAppStore((s) => s.setPdfPage);
  const chapterIndex = useAppStore((s) => s.chapterIndex);
  const setChapterIndex = useAppStore((s) => s.setChapterIndex);
  const [lookup, setLookup] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const startReading = useAppStore((s) => s.startReading);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");
  const [simplifyOpen, setSimplifyOpen] = useState(false);
  const speechIndex = useRef(0);
  const programmaticScroll = useRef(false);
  const didAnnounceScroll = useRef(false);

  const chapters = useMemo(() => detectChapters(text), [text]);
  const chapterText = useMemo(
    () => (chapters.length > 1 ? sliceChapter(text, chapters, chapterIndex) : text),
    [text, chapters, chapterIndex],
  );
  const paragraphs = useMemo(
    () => chapterText.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()),
    [chapterText],
  );
  const words = useMemo(() => chapterText.trim().split(/\s+/).filter(Boolean), [chapterText]);
  useReadingTracker(scrollRef, words.length);

  const lines = useMemo(() => {
    const list: { text: string; html: string; lineIdx: number; paragraphIndex: number }[] = [];
    paragraphs.forEach((paragraph, paragraphIndex) => {
      splitSentenceSpans(paragraph).forEach((span, index) => {
        const full = span.trim();
        if (!full) return;
        const lineIdx = paragraphIndex * 100 + index;
        list.push({
          text: full,
          html:
            profile.bionicStrength > 0
              ? processBionicText(full, profile.bionicStrength, profile.rhythmOptimization)
              : full,
          lineIdx,
          paragraphIndex,
        });
      });
    });
    return list;
  }, [paragraphs, profile.bionicStrength, profile.rhythmOptimization]);

  useEffect(() => {
    const key = text.trim().slice(0, 40) || "default";
    setNote(localStorage.getItem(`neurolens-note-${key}`) || "");
  }, [text]);

  useEffect(() => {
    const key = text.trim().slice(0, 40) || "default";
    const timer = window.setTimeout(() => {
      localStorage.setItem(`neurolens-note-${key}`, note);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [note, text]);

  function speakAt(index: number) {
    if (!("speechSynthesis" in window)) return;
    if (index < 0 || index >= lines.length) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const item = lines[index];
    speechIndex.current = index;
    setActiveLine(item.lineIdx);
    document.getElementById(`line-${item.lineIdx}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.rate = 0.95;
    utterance.onend = () => {
      if (speechIndex.current === index) speakAt(index + 1);
    };
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  function toggleSpeech() {
    if (!("speechSynthesis" in window)) {
      toast.error("Speech is not available here");
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      announce("Stopped reading aloud");
      return;
    }
    setIsSpeaking(true);
    announce("Reading aloud");
    const start = activeLine == null ? 0 : Math.max(0, lines.findIndex((line) => line.lineIdx === activeLine));
    speakAt(start);
  }

  useEffect(() => () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const simplified = useMemo(() => simplifyText(text), [text]);
  const markKey = text.trim().slice(0, 48) || "default";
  const marked = highlights[markKey] ?? [];
  const bookmarked = bookmarks.some((item) => item.content === text);
  const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
  const contrast = evaluateScheme(profile.theme, profile.fontSize);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node || !autoScrolling) {
      didAnnounceScroll.current = false;
      return;
    }
    let frame = 0;
    let last = performance.now();
    let carry = 0;

    const stopForUser = () => {
      if (programmaticScroll.current) return;
      setAutoScrolling(false);
    };

    const maxAtStart = node.scrollHeight - node.clientHeight - node.scrollTop;
    if (maxAtStart < 8) {
      setAutoScrolling(false);
      toast("You’re already at the end of the page");
      return;
    }

    if (!didAnnounceScroll.current) {
      toast.success(`Scrolling at ${targetWpm} WPM`);
      didAnnounceScroll.current = true;
    }

    const step = (now: number) => {
      const dtSec = Math.min(0.05, (now - last) / 1000);
      last = now;
      const maxScroll = node.scrollHeight - node.clientHeight;
      const remainingPx = maxScroll - node.scrollTop;
      if (maxScroll <= 1 || remainingPx <= 2) {
        setAutoScrolling(false);
        toast.success("End of the page");
        return;
      }
      const localProgress = node.scrollTop / maxScroll;
      const remainingWords = Math.max(1, Math.round((1 - localProgress) * words.length));
      const focus = tokenContextAtProgress(words, localProgress);
      carry += autoScrollDeltaPx({
        remainingPx,
        remainingWords,
        targetWpm,
        dtSec,
        focusToken: focus.token,
        nextToken: focus.next,
        curve: rhythmCurve,
      });
      const px = Math.trunc(carry);
      if (px >= 1) {
        programmaticScroll.current = true;
        node.scrollTop += px;
        programmaticScroll.current = false;
        carry -= px;
      }
      const line = lines[Math.min(lines.length - 1, Math.max(0, Math.floor(localProgress * lines.length)))];
      if (line) setActiveLine(line.lineIdx);
      if (node.scrollTop + node.clientHeight >= node.scrollHeight - 4) {
        setAutoScrolling(false);
        toast.success("End of the page");
        return;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    node.addEventListener("wheel", stopForUser, { passive: true });
    node.addEventListener("pointerdown", stopForUser);
    node.addEventListener("touchmove", stopForUser, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("wheel", stopForUser);
      node.removeEventListener("pointerdown", stopForUser);
      node.removeEventListener("touchmove", stopForUser);
    };
  }, [autoScrolling, targetWpm, words, setAutoScrolling, rhythmCurve, lines]);

  function toggleAutoScroll() {
    if (autoScrolling) {
      setAutoScrolling(false);
      announce("Auto-scroll paused");
      return;
    }
    const node = scrollRef.current;
    const remaining = node ? node.scrollHeight - node.clientHeight - node.scrollTop : 0;
    if (!node || remaining < 8) {
      toast("You’re already at the end of the page");
      return;
    }
    tapFeedback("start");
    setAutoScrolling(true);
  }

  const onRsvpProgress = useCallback(
    (index: number) => {
      const node = scrollRef.current;
      if (!node || words.length < 2) return;
      const max = node.scrollHeight - node.clientHeight;
      if (max <= 1) return;
      programmaticScroll.current = true;
      node.scrollTop = (index / (words.length - 1)) * max;
      programmaticScroll.current = false;
    },
    [words.length],
  );

  const readingTitle = useMemo(
    () => text.split(/\n/).find((line) => line.trim())?.slice(0, 80) || "Untitled reading",
    [text],
  );

  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 flex-1 flex-col",
        TINT_CLASS[profile.tint],
        rhythmCurve === "breath" && "rhythm-breath",
        autoScrolling && "is-autoscrolling",
      )}
    >
      <Sheet open={controlsOpen} onOpenChange={setControlsOpen} title="Reading options">
        <ReaderControls onClose={() => setControlsOpen(false)} />
      </Sheet>

      <div ref={scrollRef} className="reader-scroll relative min-h-0 flex-1 overflow-y-auto">
        <article
          aria-labelledby="reading-title"
          className={cn(
            "mx-auto max-w-2xl px-5 pt-24 pb-36 sm:px-8 sm:pt-28 sm:pb-40",
            FONT_CLASS[profile.fontFamily],
            profile.focusHighlight && "focus-highlight",
            profile.align === "justify" && "text-justify",
          )}
          style={{
            fontSize: profile.fontSize,
            lineHeight: profile.lineHeight,
            letterSpacing: `${profile.letterSpacing}em`,
            wordSpacing: `${profile.wordSpacing}em`,
          }}
        >
          <h1 id="reading-title" className="sr-only">
            {readingTitle}
          </h1>
          {getPdfPageCount() > 0 && <PdfPager page={pdfPage} onPage={setPdfPage} />}
          <p className="mb-8 text-xs font-medium tracking-wide text-muted uppercase">
            <span className="sr-only">
              {wordCount(text).toLocaleString()} words.
              {mode === "adaptive" ? " Adaptive is watching pace, pauses, and rereads." : ""}
              {` Contrast ${formatContrastRatio(contrast.body)}, ${contrast.bodyLevel}.`}
              {pauses > 0 ? ` ${pauses} pause${pauses === 1 ? "" : "s"}.` : ""}
              {rereads > 0 ? ` ${rereads} reread${rereads === 1 ? "" : "s"}.` : ""}
              {autoScrolling ? ` Auto-scrolling at ${targetWpm} words per minute.` : ""}
            </span>
            <span aria-hidden="true">
              {wordCount(text).toLocaleString()} words
              {mode === "adaptive" ? (
                <>
                  {" · "}
                  <span className="watching-dot" />
                  {" watching"}
                </>
              ) : null}
              {` · ${formatContrastRatio(contrast.body)} ${contrast.bodyLevel}`}
              {pauses > 0 ? ` · ${pauses} pause${pauses === 1 ? "" : "s"}` : ""}
              {rereads > 0 ? ` · ${rereads} reread${rereads === 1 ? "" : "s"}` : ""}
              {autoScrolling ? ` · scrolling ${targetWpm}` : ""}
            </span>
          </p>
          {paragraphs.map((_, paragraphIndex) => {
            const sentenceNodes = lines.filter((line) => line.paragraphIndex === paragraphIndex);
            return (
              <p key={paragraphIndex} className="mb-6">
                {sentenceNodes.map((line, index) => (
                  <Fragment key={line.lineIdx}>
                    {index > 0 ? " " : null}
                    <span
                      id={`line-${line.lineIdx}`}
                      className={cn(
                        "reading-line cursor-pointer",
                        rhythmCurve !== "steady" && /[.!?…]["'”’)]*$/.test(line.text.trim()) && "rhythm-cadence",
                        (activeLine === line.lineIdx || (autoScrolling && activeLine === line.lineIdx)) && "active",
                        marked.includes(line.lineIdx) && "marked",
                      )}
                      onClick={(event) => {
                        const range =
                          typeof document.caretRangeFromPoint === "function"
                            ? document.caretRangeFromPoint(event.clientX, event.clientY)
                            : null;
                        const raw = range?.startContainer?.textContent?.slice(
                          Math.max(0, (range.startOffset ?? 0) - 40),
                          (range?.startOffset ?? 0) + 40,
                        );
                        const match = raw?.match(/[A-Za-z][A-Za-z'-]{1,}/);
                        if (match) setLookup(match[0]);
                        if (isSpeaking) {
                          const found = lines.findIndex((item) => item.lineIdx === line.lineIdx);
                          if (found !== -1) speakAt(found);
                        } else if (activeLine === line.lineIdx) {
                          toggleHighlight(line.lineIdx);
                        } else {
                          setActiveLine(line.lineIdx);
                        }
                      }}
                    >
                      <AccessibleBionic text={line.text} html={line.html} />
                    </span>
                  </Fragment>
                ))}
              </p>
            );
          })}
        </article>
      </div>
      <GazeFollow scroller={scrollRef} enabled={gazeFixation} onLine={setActiveLine} />

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex flex-col items-center gap-3 px-3">
        <ChapterDock chapters={chapters} index={chapterIndex} onChange={setChapterIndex} />
        {lookup && <WordCard word={lookup} onClose={() => setLookup(null)} />}
        <ReadingFeelBar />
        <RecommendationBanner />
        <div
          role="toolbar"
          aria-label="Reading tools"
          className="material-surface pointer-events-auto flex items-center gap-1 rounded-lg p-1.5 shadow-float"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" onClick={() => setControlsOpen(true)} aria-label="Reading options">
                <Settings2 size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Options</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={gazeFixation ? "default" : "ghost"}
                size="icon-sm"
                onClick={() => setGazeFixation(!gazeFixation)}
                aria-label="Gaze fixation"
                aria-pressed={gazeFixation}
              >
                <ScanEye size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Gaze fixation</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={toggleBookmark}
                aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
                aria-pressed={bookmarked}
              >
                <Bookmark size={16} className={bookmarked ? "fill-current" : undefined} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{bookmarked ? "Remove bookmark" : "Bookmark"}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={toggleSpeech}
                aria-label={isSpeaking ? "Stop listening" : "Listen"}
                aria-pressed={isSpeaking}
              >
                <IconSwap active={isSpeaking} ActiveIcon={VolumeX} InactiveIcon={Volume2} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isSpeaking ? "Stop listening" : "Listen"}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={autoScrolling ? "default" : "ghost"}
                size="icon-sm"
                onClick={toggleAutoScroll}
                aria-label={autoScrolling ? "Pause auto-scroll" : "Auto-scroll"}
                aria-pressed={autoScrolling}
              >
                <IconSwap active={autoScrolling} ActiveIcon={Pause} InactiveIcon={ChevronsDown} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{autoScrolling ? "Pause scroll" : "Auto-scroll"}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setRsvpOpen(true)}
                aria-label="Speed reader"
              >
                <Play size={16} className="play-icon" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Speed reader</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" onClick={() => setSimplifyOpen(true)} aria-label="Simplify">
                <Languages size={16} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Simplify</TooltipContent>
          </Tooltip>
          <div className="hidden sm:contents">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon-sm" onClick={() => setNoteOpen(true)} aria-label="Note">
                  <StickyNote size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Quick note</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={async () => {
                    await navigator.clipboard.writeText(text);
                    toast.success("Copied");
                  }}
                  aria-label="Copy"
                >
                  <Copy size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => {
                    const blob = new Blob([text], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "neurolens.txt";
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                  aria-label="Download"
                >
                  <Download size={16} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download</TooltipContent>
            </Tooltip>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="sm:hidden" aria-label="More actions">
                <MoreHorizontal size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setNoteOpen(true)}>Quick note</DropdownMenuItem>
              <DropdownMenuItem
                onSelect={async () => {
                  await navigator.clipboard.writeText(text);
                  toast.success("Copied");
                }}
              >
                Copy text
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  const blob = new Blob([text], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "neurolens.txt";
                  link.click();
                  URL.revokeObjectURL(url);
                }}
              >
                Download
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mx-1 hidden items-center gap-1.5 border-l border-border pr-2 pl-2 text-[11px] tabular-nums text-muted sm:flex">
            <span>Target {targetWpm}</span>
            <span className="opacity-40">·</span>
            <span>Now {currentWpm ?? "—"}</span>
          </div>
          <div className="mx-2 hidden w-20 sm:block">
            <Progress value={Math.round(progress * 100)} label="Reading progress" />
          </div>
          <span className="hidden pr-2 text-xs tabular-nums text-muted sm:inline">
            {Math.round(progress * 100)}%
          </span>
        </div>
      </div>

      <SpeedReader open={rsvpOpen} onOpenChange={setRsvpOpen} words={words} onProgress={onRsvpProgress} />

      <Dialog open={simplifyOpen} onOpenChange={setSimplifyOpen}>
        <DialogContent>
          <DialogTitle className="mb-2 text-lg font-medium">Simpler wording</DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted">
            A local rewrite. Dense words become plainer ones. Nothing leaves this device.
          </DialogDescription>
          <p className="text-xs tracking-wide text-muted uppercase">
            {simplified.complexity} · grade {simplified.originalGrade}
            {simplified.simplifiedGrade !== simplified.originalGrade ? ` → ${simplified.simplifiedGrade}` : ""}
            {simplified.replacements > 0 ? ` · ${simplified.replacements} swap${simplified.replacements === 1 ? "" : "s"}` : ""}
          </p>
          <p className="mt-3 max-h-64 overflow-y-auto text-sm leading-relaxed">
            {simplified.simplified}
          </p>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setSimplifyOpen(false)}>
              Keep original
            </Button>
            <Button
              disabled={simplified.replacements === 0 && simplified.simplified === text.trim()}
              onClick={() => {
                tapFeedback("ok");
                startReading(simplified.simplified);
                setSimplifyOpen(false);
                toast.success("Using the simpler version");
              }}
            >
              Use this version
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={noteOpen} onOpenChange={setNoteOpen}>
        <DialogContent>
          <DialogTitle className="mb-3 text-lg font-medium">Quick note</DialogTitle>
          <DialogDescription className="mb-4 text-sm text-muted">
            Saved to this session on this device.
          </DialogDescription>
          <Textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Capture a thought while you read…"
            aria-label="Quick note"
            className="min-h-40 rounded-md bg-bg px-3 py-2 shadow-border"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
