import { useEffect, useState } from "react";
import { BookOpen, ChevronRight, Search } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";
import { Badge, Media, Skeleton } from "@/components/ui/surfaces";
import { Segmented } from "@/components/segmented";
import { BibleLibrary } from "@/components/bible-library";
import { PoetryLibrary } from "@/components/poetry-library";
import { FileDrop } from "@/components/file-drop";
import { LensLoader } from "@/components/ui/loader";
import { RemoteErrorView } from "@/components/remote-state";
import { FEATURED_BNB_QUERIES, fetchBnbReaderText, searchBnb, type BnbBook } from "@/lib/bnb";
import { announce } from "@/lib/announce";
import { isAbortError, isRemoteError } from "@/lib/remote";
import { processDocument } from "@/lib/document-processor";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import type { ContentKind } from "@/lib/types";

function kindLabel(kind?: ContentKind) {
  if (kind === "bible") return "Bible";
  if (kind === "pdf") return "Document";
  if (kind === "poem") return "Poem";
  return "Reading";
}

function Catalog() {
  const startReading = useAppStore((s) => s.startReading);
  const [query, setQuery] = useState("Darwin");
  const [submitted, setSubmitted] = useState("Darwin");
  const [books, setBooks] = useState<BnbBook[]>([]);
  const [source, setSource] = useState<BnbBook["source"] | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<unknown>(null);
  const [retryTick, setRetryTick] = useState(0);
  const [openingId, setOpeningId] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    setError(null);
    searchBnb(submitted, controller.signal)
      .then((result) => {
        setBooks(result.books);
        setSource(result.source);
        setStatus("ready");
        announce(
          result.books.length
            ? `${result.books.length} catalog records for ${submitted}`
            : `No catalog records for ${submitted}`,
        );
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted || isAbortError(err)) return;
        setBooks([]);
        setSource(null);
        setStatus("error");
        setError(err);
        announce("Could not load the catalog");
      });
    return () => controller.abort();
  }, [submitted, retryTick]);

  async function openBook(book: BnbBook) {
    setOpeningId(book.id);
    try {
      const text = await fetchBnbReaderText(book);
      startReading(text, { title: book.title, kind: "text", sourceId: book.bnbId || book.id });
    } catch (err) {
      if (!isAbortError(err)) {
        toast.error(err instanceof Error ? err.message : "Could not open that record");
      }
    } finally {
      setOpeningId(null);
    }
  }

  const emptyMiss =
    status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");

  return (
    <>
      <form
        className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          const next = query.trim();
          if (next) setSubmitted(next);
        }}
      >
        <label className="relative flex-1">
          <span className="sr-only">Search the catalog</span>
          <Search size={16} className="absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Darwin, Austen, Shakespeare"
            className="pl-10"
          />
        </label>
        <Button type="submit" disabled={status === "loading"} className="sm:w-32">
          {status === "loading" ? <LensLoader label="Searching" /> : "Search"}
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {FEATURED_BNB_QUERIES.map((item) => {
          const active = submitted.toLowerCase() === item.toLowerCase();
          return (
            <button
              key={item}
              type="button"
              onClick={() => {
                setQuery(item);
                setSubmitted(item);
              }}
              className={cn(
                "h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]",
                active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6",
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      <section className="mt-10 pb-16">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-xs font-medium tracking-wide text-muted uppercase">
            Catalog · “{submitted}”
          </h2>
          <span className="text-xs tabular-nums text-subtle">{status === "ready" ? books.length : ""}</span>
        </div>

        {status === "loading" ? (
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="rounded-xl bg-surface p-2 shadow-border">
                <Skeleton className="mb-3 aspect-[3/4] rounded-lg" />
                <Skeleton className="mb-2 h-3 w-20" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            ))}
          </div>
        ) : status === "error" && !emptyMiss ? (
          <div className="rounded-xl bg-surface p-2 shadow-border">
            <div className="rounded-lg bg-bg px-4 py-5">
              <RemoteErrorView
                error={error}
                onRetry={() => setRetryTick((n) => n + 1)}
                hint="Open Library is searched directly, with a same-origin proxy if the browser cannot reach it. The British Library SPARQL service is tried in parallel and skipped if it is down."
              />
            </div>
          </div>
        ) : books.length === 0 || emptyMiss ? (
          <div className="overflow-hidden rounded-xl bg-surface p-2 shadow-border">
            <Media
              src="/images/feature-books.jpg"
              alt="A stack of clothbound books on a linen table"
              width={1200}
              height={900}
              className="aspect-[16/9] w-full rounded-lg object-cover"
            />
            <div className="px-6 py-8 text-center">
              <BookOpen size={22} className="mx-auto mb-3 text-muted" />
              <p className="font-medium">No catalog records</p>
              <p className="mt-1 text-sm text-muted">Try Darwin, Austen, or Shakespeare.</p>
              <Button className="mt-4" variant="outline" onClick={() => setRetryTick((n) => n + 1)}>
                Retry
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => void openBook(book)}
                  disabled={openingId === book.id}
                  className="group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.97] disabled:opacity-70"
                >
                  <div className="overflow-hidden rounded-lg bg-bg">
                    {book.cover ? (
                      <Media
                        src={book.cover}
                        alt=""
                        width={400}
                        height={533}
                        zoom
                        className="aspect-[3/4] w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[3/4] items-center justify-center">
                        <BookOpen size={28} className="text-subtle" />
                      </div>
                    )}
                  </div>
                  <div className="px-3 pt-3 pb-3">
                    <p className="text-xs font-medium text-muted">
                      {book.year ?? book.subjects[0] ?? "Catalog record"}
                    </p>
                    <h3 className="mt-1 line-clamp-2 font-medium">{book.title}</h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted">
                      {book.authors.length ? book.authors.join(", ") : "Author unrecorded"}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {book.bnbId ? <Badge>{book.bnbId}</Badge> : <Badge>Open Library</Badge>}
                      {book.year && book.bnbId ? (
                        <span className="text-xs tabular-nums text-subtle">{book.year}</span>
                      ) : null}
                    </div>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                      {openingId === book.id ? "Opening" : "Start reading"}
                      <ChevronRight
                        size={14}
                        className="transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
                      />
                    </p>
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-subtle">
              {source === "bnb-sparql"
                ? "Live from the British Library SPARQL service."
                : "From Open Library. British Library SPARQL is queried in parallel and used when that endpoint is reachable."}
            </p>
          </>
        )}
      </section>
    </>
  );
}

export function Library() {
  const startReading = useAppStore((s) => s.startReading);
  const sessions = useAppStore((s) => s.sessions);
  const bookmarks = useAppStore((s) => s.bookmarks);
  const [section, setSection] = useState<"catalog" | "bible" | "poems" | "yours">("catalog");
  const [uploading, setUploading] = useState(false);

  return (
    <div className="mx-auto h-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14">
      <h1 className="text-5xl">Library</h1>
      <p className="mt-3 text-muted">
        Open Library and British National Bibliography records, a live Bible, PoetryDB, and what you’ve kept.
      </p>
      <div className="mt-8 overflow-x-auto">
        <Segmented
          value={section}
          onChange={setSection}
          label="Library sections"
          options={[
            { id: "catalog", label: "Catalog" },
            { id: "bible", label: "Bible" },
            { id: "poems", label: "Poems" },
            { id: "yours", label: "Yours" },
          ]}
        />
      </div>

      {section === "bible" && (
        <div className="mt-8 pb-16">
          <BibleLibrary />
        </div>
      )}

      {section === "poems" && (
        <div className="mt-8 pb-16">
          <PoetryLibrary />
        </div>
      )}

      {section === "yours" && (
        <div className="mt-8 space-y-10 pb-16">
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Upload</h2>
            <div className="rounded-xl bg-surface p-2 shadow-border">
              <FileDrop
                busy={uploading}
                onFile={(file) => {
                  void (async () => {
                    setUploading(true);
                    try {
                      const doc = await processDocument(file);
                      startReading(doc.content, {
                        title: doc.title,
                        kind: doc.metadata.format === "PDF" ? "pdf" : "text",
                      });
                      toast.success("Opened in the reader");
                    } catch (err) {
                      toast.error(err instanceof Error ? err.message : "Could not read that file");
                    } finally {
                      setUploading(false);
                    }
                  })();
                }}
              />
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Bookmarks</h2>
            {bookmarks.length === 0 ? (
              <p className="text-sm text-muted">Nothing bookmarked yet. Mark a place while you read.</p>
            ) : (
              <div className="grid gap-3">
                {bookmarks.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => startReading(item.content, { title: item.title, kind: item.kind })}
                    className="group flex w-full items-center justify-between rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
                  >
                    <span className="flex w-full items-center justify-between rounded-lg bg-bg px-4 py-4">
                      <span>
                        <span className="block font-medium">{item.title}</span>
                        <span className="mt-1 block text-xs text-muted">{Math.round(item.progress * 100)}% saved</span>
                      </span>
                      <ChevronRight size={16} className="text-muted transition-transform duration-[150ms] group-hover:translate-x-0.5" />
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>
          <section>
            <h2 className="mb-4 text-xs font-medium tracking-wide text-muted uppercase">Recently read</h2>
            {sessions.length === 0 ? (
              <p className="text-sm text-muted">Open a passage and it will land here.</p>
            ) : (
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
                    className="rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]"
                  >
                    <span className="block rounded-lg bg-bg px-4 py-4">
                      <p className="text-xs text-muted">{kindLabel(session.kind)}</p>
                      <h3 className="mt-2 font-medium">{session.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{session.content}</p>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      )}

      {section === "catalog" && <Catalog />}
    </div>
  );
}
