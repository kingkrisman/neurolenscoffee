export interface ProcessedDocument {
  content: string;
  title: string;
  metadata: {
    format: string;
    pageCount?: number;
    wordCount: number;
    estimatedReadTime: number;
  };
}

export const MAX_UPLOAD_BYTES = 20 * 1024 * 1024;
export const MAX_PDF_PAGES = 80;
export const MAX_EXTRACT_CHARS = 400_000;

function summarize(content: string, title: string, format: string, pageCount?: number): ProcessedDocument {
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  return {
    content: content.trim(),
    title,
    metadata: {
      format,
      pageCount,
      wordCount,
      estimatedReadTime: Math.max(1, Math.ceil(wordCount / 200)),
    },
  };
}

function fileMime(file: File): string {
  return typeof file.type === "string" ? file.type.toLowerCase() : "";
}

function fileName(file: File): string {
  return (file.name || "untitled").trim() || "untitled";
}

function extensionOf(name: string): string {
  const parts = name.split(".");
  if (parts.length < 2) return "";
  return (parts.pop() ?? "").toLowerCase();
}

function isPdfFile(name: string, mime: string): boolean {
  return extensionOf(name) === "pdf" || mime === "application/pdf" || mime === "application/x-pdf";
}

function isTextFile(name: string, mime: string): boolean {
  const ext = extensionOf(name);
  if (ext === "txt" || ext === "md" || ext === "markdown") return true;
  if (mime.startsWith("text/")) return true;
  if (mime === "application/markdown" || mime === "text/markdown") return true;
  return false;
}

function titleFrom(name: string, pattern: RegExp): string {
  return name.replace(pattern, "") || name;
}

function isPdfNoise(message: string, filename = ""): boolean {
  return /pdf\.worker|pdfjs|Setting up fake worker|Failed to fetch dynamically imported module/i.test(
    `${message} ${filename}`,
  );
}

async function withPdfErrorsSilenced<T>(work: () => Promise<T>): Promise<T> {
  if (typeof window === "undefined") return work();

  const onError = (event: ErrorEvent) => {
    if (isPdfNoise(event.message || "", event.filename || "")) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
  const onReject = (event: PromiseRejectionEvent) => {
    const reason = event.reason;
    const message = reason instanceof Error ? reason.message : String(reason ?? "");
    if (isPdfNoise(message)) event.preventDefault();
  };

  window.addEventListener("error", onError, true);
  window.addEventListener("unhandledrejection", onReject);
  try {
    return await work();
  } finally {
    window.removeEventListener("error", onError, true);
    window.removeEventListener("unhandledrejection", onReject);
  }
}

async function processPdf(file: File): Promise<ProcessedDocument> {
  if (typeof window === "undefined") {
    throw new Error("PDF parsing is only available in the reader.");
  }

  let pdfjs: typeof import("pdfjs-dist");
  try {
    pdfjs = await import("pdfjs-dist");
  } catch {
    throw new Error("Could not load the PDF reader. Paste the text instead.");
  }

  // Always the public worker — Vite `?url` paths 404 behind the preview proxy
  // and then pdf.js throws outside React's try/catch.
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

  const raw = await file.arrayBuffer();
  const data = new Uint8Array(raw.slice(0));

  return withPdfErrorsSilenced(async () => {
    let pdf: Awaited<ReturnType<typeof pdfjs.getDocument>["promise"]>;
    try {
      pdf = await pdfjs.getDocument({
        data,
        useWasm: false,
        useWorkerFetch: false,
        isOffscreenCanvasSupported: false,
        verbosity: 0,
      }).promise;
    } catch (err) {
      const detail = err instanceof Error ? err.message : "";
      if (/password/i.test(detail)) {
        throw new Error("That PDF is password-protected. Paste the text instead.");
      }
      throw new Error("Could not read that PDF. Try a text file, or paste the contents.");
    }

    const pages = Math.min(pdf.numPages, MAX_PDF_PAGES);
    let fullText = "";
    try {
      for (let i = 1; i <= pages; i += 1) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((item) => ("str" in item ? item.str : "")).join(" ");
        fullText += `${strings}\n\n`;
        if (fullText.length > MAX_EXTRACT_CHARS) break;
      }
    } catch {
      throw new Error("Could not read the text layer of that PDF. Paste the contents instead.");
    }

    const extracted = fullText.replace(/\s+/g, " ").trim();
    if (!extracted) {
      throw new Error("This PDF has no selectable text. Paste the contents, or try a text file.");
    }

    const name = fileName(file);
    const clipped = extracted.slice(0, MAX_EXTRACT_CHARS);
    return summarize(clipped, titleFrom(name, /\.pdf$/i), "PDF", pdf.numPages);
  });
}

export async function processDocument(file: File): Promise<ProcessedDocument> {
  if (!file) throw new Error("No file selected.");
  if (typeof file.size === "number" && file.size > MAX_UPLOAD_BYTES) {
    throw new Error("That file is larger than 20 MB. Try a shorter document, or paste the text.");
  }

  const name = fileName(file);
  const mime = fileMime(file);

  try {
    if (isPdfFile(name, mime)) return await processPdf(file);

    if (isTextFile(name, mime)) {
      let content: string;
      try {
        content = await file.text();
      } catch {
        throw new Error("Could not read that text file.");
      }
      const trimmed = content.trim();
      if (!trimmed) throw new Error("That file was empty.");
      const ext = extensionOf(name);
      const format = ext === "md" || ext === "markdown" ? "MD" : "TXT";
      return summarize(trimmed.slice(0, MAX_EXTRACT_CHARS), titleFrom(name, /\.(txt|md|markdown)$/i), format);
    }

    throw new Error(`Unsupported file format: ${extensionOf(name) || mime || "unknown"}. Use PDF, .txt, or .md.`);
  } catch (err) {
    if (err instanceof Error) throw err;
    throw new Error("Could not read that file. Paste the text instead.");
  }
}
