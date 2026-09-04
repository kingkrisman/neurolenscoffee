import { fetchJson } from "./remote.ts";

export interface GutenbergBook {
  id: number;
  title: string;
  authors: string[];
  downloadCount: number;
  languages: string[];
  cover?: string;
  textUrl?: string;
}

interface GutendexResult {
  results?: Array<{
    id: number;
    title: string;
    download_count?: number;
    languages?: string[];
    authors?: Array<{ name: string }>;
    formats?: Record<string, string>;
  }>;
}

function proxy(path: string) {
  return `/api/gutendex/${path.replace(/^\//, "")}`;
}

export async function searchGutendex(query: string, signal?: AbortSignal): Promise<GutenbergBook[]> {
  const q = query.trim() || "pride";
  const data = await fetchJson<GutendexResult>(
    proxy(`books?search=${encodeURIComponent(q)}`),
    { signal, timeoutMs: 12_000 },
  );
  return (data.results ?? []).slice(0, 18).map((book) => {
    const formats = book.formats ?? {};
    const textUrl =
      formats["text/plain; charset=utf-8"] ||
      formats["text/plain"] ||
      formats["text/plain; charset=us-ascii"];
    return {
      id: book.id,
      title: book.title,
      authors: (book.authors ?? []).map((a) => a.name),
      downloadCount: book.download_count ?? 0,
      languages: book.languages ?? [],
      cover: formats["image/jpeg"],
      textUrl,
    };
  });
}

export async function fetchGutenbergText(book: GutenbergBook, signal?: AbortSignal) {
  if (!book.textUrl) throw new Error("That record has no plain-text edition.");
  const url = `/api/gutendex/text?src=${encodeURIComponent(book.textUrl)}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Could not load that Gutenberg text.");
  const raw = await res.text();
  return stripGutenberg(raw);
}

export function stripGutenberg(raw: string) {
  const start = raw.search(/\*\*\*\s*START OF (THIS|THE) PROJECT GUTENBERG/i);
  const end = raw.search(/\*\*\*\s*END OF (THIS|THE) PROJECT GUTENBERG/i);
  let body = raw;
  if (start >= 0) body = body.slice(raw.indexOf("\n", start) + 1);
  if (end > start) body = raw.slice(start >= 0 ? raw.indexOf("\n", start) + 1 : 0, end);
  return body.replace(/\r/g, "").replace(/\n{3,}/g, "\n\n").trim();
}
