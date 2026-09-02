import { createFileRoute } from "@tanstack/react-router";

const OPEN_LIBRARY_ORIGIN = "https://openlibrary.org";
const USER_AGENT = "NeuroLens/1.0 (adaptive reader)";

function isAllowedSplat(splat: string): boolean {
  if (splat === "search.json") return true;
  return /^works\/OL\d+W\.json$/.test(splat);
}

export const Route = createFileRoute("/api/openlibrary/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const splat = params._splat ?? "";
        if (!isAllowedSplat(splat)) {
          return new Response("Not found", { status: 404 });
        }

        const incoming = new URL(request.url);
        const target = new URL(`${OPEN_LIBRARY_ORIGIN}/${splat}`);
        incoming.searchParams.forEach((value, key) => {
          target.searchParams.set(key, value);
        });

        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 10_000);
        try {
          const response = await fetch(target, {
            signal: controller.signal,
            headers: {
              Accept: "application/json",
              "User-Agent": USER_AGENT,
            },
          });
          const body = await response.arrayBuffer();
          const headers = new Headers();
          headers.set("content-type", response.headers.get("content-type") ?? "application/json");
          headers.set("cache-control", response.ok ? "public, max-age=120" : "no-store");
          return new Response(body, { status: response.status, headers });
        } catch {
          return Response.json({ error: "Open Library is unavailable." }, { status: 502 });
        } finally {
          clearTimeout(timer);
        }
      },
    },
  },
});
