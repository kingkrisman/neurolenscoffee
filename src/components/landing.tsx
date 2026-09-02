import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight } from "lucide-react";
import { processBionicText } from "@/lib/bionic";
import { processDocument } from "@/lib/document-processor";
import { DEMO_SENTENCE, SAMPLE_TEXTS } from "@/lib/samples";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/field";
import { Badge, Card, Media } from "@/components/ui/surfaces";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Segmented, StaggerBlock } from "@/components/segmented";
import { Reveal } from "@/components/reveal";
import { HeroTitle } from "@/components/hero-title";
import { ParallaxHero } from "@/components/parallax-hero";
import { FileDrop } from "@/components/file-drop";
import { AccessibleBionic } from "@/components/accessible-bionic";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    image: "/images/hands.jpg",
    alt: "Hands turning a paperback beside a terracotta mug",
    index: "01",
    title: "Adaptive formatting",
    text: "Emphasis, spacing, type, and contrast that make dense pages easier to enter.",
  },
  {
    image: "/images/feature-focus.jpg",
    alt: "A beam of window light falling across an open book",
    index: "02",
    title: "Focus-friendly rhythm",
    text: "Visual anchors that keep your eyes on the line without losing the thread.",
  },
  {
    image: "/images/feature-books.jpg",
    alt: "Clothbound books beside a closed tablet on a linen table",
    index: "03",
    title: "Read your way",
    text: "Paste text, open a PDF, look up a Bible chapter, or read a poem.",
  },
] as const;

export function Landing() {
  const startReading = useAppStore((s) => s.startReading);
  const [input, setInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const [meta, setMeta] = useState<{ title: string; format: string; wordCount: number; readTime: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [demoBionic, setDemoBionic] = useState(true);

  async function onUpload(file: File | undefined) {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const doc = await processDocument(file);
      setInput(doc.content);
      setMeta({
        title: doc.title,
        format: doc.metadata.format,
        wordCount: doc.metadata.wordCount,
        readTime: doc.metadata.estimatedReadTime,
      });
      toast.success("Document ready");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not read that file.");
      toast.error(err instanceof Error ? err.message : "Could not read that file");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-col pb-24 sm:pb-16">
      <ParallaxHero>
        <div className="mx-auto flex min-h-[min(92vh,56rem)] max-w-6xl flex-col justify-end gap-10 px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-14 lg:flex-row lg:items-end lg:gap-12">
          <div className="min-w-0 flex-1">
            <StaggerBlock>
              <p className="mb-4 font-serif text-base text-accent italic">Adaptive reading</p>
            </StaggerBlock>
            <HeroTitle />
            <StaggerBlock delay={160} className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Formatting that follows your attention. Less visual friction, stronger fixation, a calmer page.
            </StaggerBlock>
            <StaggerBlock delay={220} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="min-w-44 pl-4 pr-3.5">
                <a href="#reader-start">
                  Start reading
                  <ChevronRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="min-w-44 bg-surface/80">
                <a href="#how-it-works">See how it works</a>
              </Button>
            </StaggerBlock>
          </div>

          <StaggerBlock delay={180} className="relative w-full min-w-0 pb-4 lg:w-[42%] lg:shrink-0 lg:pb-0">
            <Card className="material-surface overflow-hidden p-4 sm:p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="font-serif text-sm text-accent italic">Fixation</span>
                <Segmented
                  value={demoBionic ? "bionic" : "standard"}
                  onChange={(id) => setDemoBionic(id === "bionic")}
                  label="Fixation preview"
                  options={[
                    { id: "bionic", label: "Bionic" },
                    { id: "standard", label: "Standard" },
                  ]}
                  className="h-9"
                />
              </div>
              <p className="text-left text-sm leading-relaxed sm:text-base">
                {demoBionic ? (
                  <AccessibleBionic text={DEMO_SENTENCE} html={processBionicText(DEMO_SENTENCE, 0.55, true)} />
                ) : (
                  DEMO_SENTENCE
                )}
              </p>
            </Card>
          </StaggerBlock>
        </div>
      </ParallaxHero>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6">
      <Card className="relative mt-10 overflow-hidden p-0 sm:mt-16">
        <Media
          src="/images/reading-room.jpg"
          alt="A sunlit university reading room with walnut shelves"
          width={1600}
          height={900}
          className="aspect-[16/9] w-full object-cover parallax-entry sm:aspect-[21/9]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/15" />
        <div className="absolute inset-0 flex flex-col justify-end gap-6 p-5 text-primary-fg sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <p className="max-w-sm font-serif text-2xl leading-snug italic sm:text-3xl">
            Built for the way attention actually works.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="font-serif text-4xl tracking-tight">92%</p>
              <p className="mt-1 text-xs text-primary-fg/70">Focus gain</p>
            </div>
            <div>
              <p className="font-serif text-4xl tracking-tight">40%</p>
              <p className="mt-1 text-xs text-primary-fg/70">Less fatigue</p>
            </div>
          </div>
        </div>
      </Card>

      <div id="reader-start" className="mt-16 grid scroll-mt-8 gap-6 md:grid-cols-2">
        <Card
          className="flex min-h-[26rem] flex-col p-5 sm:p-6"
          onDragOver={(event) => {
            if (event.dataTransfer && [...event.dataTransfer.types].includes("Files")) event.preventDefault();
          }}
          onDrop={(event) => {
            event.preventDefault();
            void onUpload(event.dataTransfer?.files?.[0]);
          }}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-serif text-sm text-accent italic">Source</span>
            <FileDrop compact busy={uploading} onFile={(file) => void onUpload(file)} />
          </div>
          <Textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Paste an article, essay, or chapter…"
            className="flex-1"
            aria-label="Text to read"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "upload-error" : undefined}
          />
          {meta && (
            <div className="mt-4 rounded-md bg-fg/4 px-3 py-2 text-xs text-muted">
              <span className="font-medium text-fg">{meta.title}</span>
              <span className="mx-2 text-subtle">·</span>
              {meta.format} · {meta.wordCount.toLocaleString()} words · ~{meta.readTime} min
            </div>
          )}
          <Button
            className="mt-5 w-full pl-4 pr-3.5"
            disabled={!input.trim()}
            onClick={() =>
              startReading(input, meta ? { title: meta.title, kind: meta.format === "PDF" ? "pdf" : "text" } : undefined)
            }
          >
            Open in reader
            <ChevronRight size={16} />
          </Button>
          {error && (
            <p id="upload-error" role="alert" className="mt-3 text-xs text-danger">
              {error}
            </p>
          )}
        </Card>

        <Card className="p-5 sm:p-6">
          <h2 className="mb-4 font-serif text-xl italic">Try a passage</h2>
          <div className="space-y-2">
            {SAMPLE_TEXTS.map((sample) => (
              <button
                key={sample.title}
                type="button"
                onClick={() => setInput(sample.text)}
                className="group flex w-full items-start gap-3 rounded-md p-2 text-left transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] hover:bg-fg/4 active:scale-[0.97]"
              >
                <Media
                  src={sample.image}
                  alt=""
                  width={120}
                  height={160}
                  className="h-16 w-12 shrink-0 rounded-sm object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">{sample.title}</span>
                  <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                    {sample.text}
                  </span>
                </span>
                <ChevronRight
                  size={14}
                  className="mt-1 shrink-0 text-subtle transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
                />
              </button>
            ))}
          </div>
        </Card>
      </div>

      <section id="how-it-works" className="mt-24 scroll-mt-8">
        <Reveal>
          <p className="mb-3 font-serif text-base text-accent italic">Designed for attention</p>
          <h2 className="max-w-xl text-4xl sm:text-5xl">
            Clarity without changing who you are.
          </h2>
        </Reveal>
        <div className="mt-12 space-y-10">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 60}>
              <div
                className={cn(
                  "grid items-center gap-6 md:grid-cols-2 md:gap-10",
                  index % 2 === 1 && "md:[&>div:first-child]:order-2",
                )}
              >
                <Card className="group overflow-hidden p-2">
                  <div className="overflow-hidden rounded-sm">
                    <Media
                      src={feature.image}
                      alt={feature.alt}
                      width={1200}
                      height={1600}
                      zoom
                      className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                    />
                  </div>
                </Card>
                <div className="px-1">
                  <p className="font-serif text-sm text-accent italic">{feature.index}</p>
                  <h3 className="mt-3 font-serif text-3xl">{feature.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{feature.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="case-studies" className="mt-24 scroll-mt-8">
        <Reveal>
          <p className="mb-3 font-serif text-base text-accent italic">How it lands</p>
          <h2 className="max-w-xl text-4xl sm:text-5xl">
            Built for the way reading actually happens.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="group overflow-hidden p-2">
            <div className="overflow-hidden rounded-sm">
              <Media
                src="/images/reading-room.jpg"
                alt="A graduate student working in a sunlit reading room"
                width={1600}
                height={900}
                zoom
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="px-4 pt-5 pb-4 sm:px-5">
              <p className="font-serif text-sm text-accent italic">Graduate student</p>
              <h3 className="mt-2 font-serif text-2xl">A clearer first pass</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                A calmer layout made intimidating research blocks approachable in shorter sessions.
              </p>
              <a href="#reader-start" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Try it <ChevronRight size={14} />
              </a>
            </div>
          </Card>
          </Reveal>
          <div className="grid gap-4 lg:col-span-2">
            {[
              {
                image: "/images/case-team.jpg",
                alt: "Product documentation spread across a sunlit desk",
                label: "Product team",
                title: "Docs with less friction",
                text: "Shared documents became easier to scan when decisions had to move.",
              },
              {
                image: "/images/nook.jpg",
                alt: "A reader in an armchair by a window",
                label: "Daily reader",
                title: "Energy for the last page",
                text: "A personalized rhythm made it easier to continue when attention was thin.",
              },
            ].map((study, index) => (
              <Reveal key={study.title} delay={index * 80}>
              <Card className="group overflow-hidden p-2">
                <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
                  <div className="overflow-hidden rounded-sm">
                    <Media
                      src={study.image}
                      alt={study.alt}
                      width={1200}
                      height={1600}
                      zoom
                      className="h-full min-h-28 w-full object-cover"
                    />
                  </div>
                  <div className="py-2 pr-2">
                    <p className="font-serif text-sm text-accent italic">{study.label}</p>
                    <h3 className="mt-1 font-serif text-lg">{study.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{study.text}</p>
                  </div>
                </div>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mt-24 scroll-mt-8 pb-8">
        <Reveal>
          <h2 className="mb-6 max-w-xl text-4xl sm:text-5xl">
            A little more clarity before you start.
          </h2>
        </Reveal>
        <Accordion type="single" collapsible className="max-w-3xl border-t border-border">
          {[
            { q: "Who is NeuroLens for?", a: "Anyone who finds dense pages tiring — ADHD, dyslexia, cognitive fatigue, or a preference for calmer text." },
            { q: "Can I use my own documents?", a: "Paste text, or upload a PDF or text file, then choose the formatting that feels comfortable." },
            { q: "How quickly will I see a result?", a: "Typical passages open in an adapted view in under 30 seconds. Short text is ready immediately." },
            { q: "Is my text used to train a model?", a: "Reading preferences and recent sessions stay in your browser. You can clear them from Settings at any time." },
          ].map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Card className="relative mt-16 mb-8 overflow-hidden p-0">
        <Media
          src="/images/nook.jpg"
          alt=""
          width={1200}
          height={1600}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/25" />
        <div className="relative px-8 py-12 text-center text-primary-fg sm:px-12 sm:py-16">
          <Badge className="mb-4 bg-primary-fg/10 text-primary-fg">Private by default</Badge>
          <h2 className="font-serif text-4xl italic sm:text-5xl">Your next page can start here.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-fg/75">
            Bring a passage, choose a profile, and see what changes when reading is shaped around your attention.
          </p>
          <Button asChild variant="outline" className="mt-7 bg-surface text-fg">
            <a href="#reader-start">Open the reader</a>
          </Button>
        </div>
      </Card>
      </div>

      <a
        href="#reader-start"
        className={cn(
          "fixed right-4 bottom-20 z-40 inline-flex h-12 items-center gap-1 rounded-lg bg-primary px-4 pr-3.5 text-sm font-medium text-primary-fg shadow-float sm:hidden",
          "active:scale-[0.97] transition-transform duration-[140ms] ease-[var(--ease-out)]",
        )}
      >
        Start reading <ChevronRight size={16} />
      </a>
    </div>
  );
}
