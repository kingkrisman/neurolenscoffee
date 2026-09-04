import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPdfBytes, getPdfPageCount } from "@/lib/pdf-session";
import { Button } from "@/components/ui/button";

export function PdfPager({ page, onPage }: { page: number; onPage: (page: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [busy, setBusy] = useState(true);
  const [failed, setFailed] = useState(false);
  const total = getPdfPageCount();

  useEffect(() => {
    const bytes = getPdfBytes();
    const canvas = canvasRef.current;
    if (!bytes || !canvas || total < 1) {
      setFailed(true);
      setBusy(false);
      return;
    }
    let cancelled = false;
    let renderTask: { cancel: () => void; promise: Promise<unknown> } | null = null;
    void (async () => {
      setBusy(true);
      setFailed(false);
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        const pdf = await pdfjs.getDocument({
          data: new Uint8Array(bytes.slice(0)),
          useWasm: false,
          useWorkerFetch: false,
          isOffscreenCanvasSupported: false,
          verbosity: 0,
        }).promise;
        const target = Math.min(Math.max(1, page), pdf.numPages);
        const pdfPage = await pdf.getPage(target);
        if (cancelled) return;
        const base = pdfPage.getViewport({ scale: 1 });
        const width = Math.min(720, canvas.parentElement?.clientWidth || 720);
        const scale = width / base.width;
        const viewport = pdfPage.getViewport({ scale: Math.min(2.2, scale * (window.devicePixelRatio || 1)) });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = `${viewport.width / (window.devicePixelRatio || 1)}px`;
        canvas.style.height = `${viewport.height / (window.devicePixelRatio || 1)}px`;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("no ctx");
        renderTask = pdfPage.render({ canvasContext: ctx, viewport, canvas });
        await renderTask.promise;
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setBusy(false);
      }
    })();
    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [page, total]);

  if (total < 1) return null;

  return (
    <div className="mx-auto mb-8 w-full max-w-2xl">
      <div className="material-surface overflow-hidden rounded-lg p-2">
        {failed ? (
          <p className="px-4 py-10 text-center text-sm text-muted">Could not draw this page. The text below is still readable.</p>
        ) : (
          <canvas ref={canvasRef} className="mx-auto block max-w-full" aria-label={`PDF page ${page}`} />
        )}
        {busy && <p className="sr-only">Rendering page</p>}
      </div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => onPage(page - 1)} aria-label="Previous page">
          <ChevronLeft size={16} />
        </Button>
        <p className="text-sm tabular-nums text-muted">
          Page {page} of {total}
        </p>
        <Button variant="outline" size="sm" disabled={page >= total} onClick={() => onPage(page + 1)} aria-label="Next page">
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
