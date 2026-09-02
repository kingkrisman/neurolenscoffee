import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-medium">The page hit a snag</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || "Reload and try again. If you were opening a file, paste the text instead."}
      </p>
      <button
        type="button"
        className="mt-2 h-11 rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </main>
  );
}
