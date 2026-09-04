import { useEffect, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { fetchGutenbergText, searchGutendex, type GutenbergBook } from "@/lib/gutendex";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";
import { Badge, Media, Skeleton } from "@/components/ui/surfaces";
import { toast } from "sonner";

export function GutenbergCatalog() {
  const startReading = useAppStore((s) => s.startReading);
  const [query, setQuery] = useState("Austen");
  const [submitted, setSubmitted] = useState("Austen");
  const [books, setBooks] = useState<GutenbergBook[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [openingId, setOpeningId] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    searchGutendex(submitted, controller.signal)
      .then((list) => {
        setBooks(list);
        setStatus("ready");
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error");
      });
    return () => controller.abort();
  }, [submitted]);

  async function openBook(book: GutenbergBook) {
    setOpeningId(book.id);
    try {
      const text = await fetchGutenbergText(book);
      startReading(text, { title: book.title, kind: "text", sourceId: `pg-${book.id}` });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not open that book");
    } finally {
      setOpeningId(null);
    }
  }

  return (
    <section className="mt-8">
      <form
        className="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(query.trim() || "Austen");
        }}
      >
        <Input value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search Gutenberg" placeholder="Search Project Gutenberg" />
        <Button type="submit" variant="outline" size="icon" aria-label="Search">
          <Search size={16} />
        </Button>
      </form>
      {status === "loading" && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      )}
      {status === "error" && <p className="mt-6 text-sm text-muted">Gutenberg catalog is unavailable right now.</p>}
      {status === "ready" && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <button
              key={book.id}
              type="button"
              onClick={() => void openBook(book)}
              className="material-surface group overflow-hidden rounded-lg text-left"
            >
              {book.cover ? (
                <Media src={book.cover} alt="" className="aspect-[3/2] w-full object-cover" />
              ) : (
                <div className="aspect-[3/2] bg-fg/5" />
              )}
              <div className="p-3">
                <h3 className="line-clamp-2 font-medium">{book.title}</h3>
                <p className="mt-1 line-clamp-1 text-sm text-muted">{book.authors.join(", ") || "Unknown author"}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge>Gutenberg</Badge>
                  <span className="text-xs tabular-nums text-subtle">{book.downloadCount.toLocaleString()} downloads</span>
                </div>
                <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
                  {openingId === book.id ? "Opening" : "Start reading"}
                  <ChevronRight size={14} />
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
