import { createFileRoute } from "@tanstack/react-router";

const GUTENDEX = "https://gutendex.com";
const USER_AGENT = "NeuroLens/1.0 (adaptive reader)";

export const Route = createFileRoute("/api/gutendex/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const splat = params._splat ?? "";
        const incoming = new URL(request.url);
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 12_000);

        try {
          if (splat === "text") {
            const src = incoming.searchParams.get("src") ?? "";
            if (!/^https:\/\/([\w.-]+\.)?gutenberg\.org\//i.test(src)) {
              return new Response("Not found", { status: 404 });
            }
            const response = await fetch(src, {
              signal: controller.signal,
              headers: { Accept: "text/plain", "User-Agent": USER_AGENT },
            });
            const body = await response.text();
            return new Response(body, {
              status: response.status,
              headers: {
                "content-type": "text/plain; charset=utf-8",
                "cache-control": response.ok ? "public, max-age=86400" : "no-store",
              },
            });
          }

          if (splat !== "books") return new Response("Not found", { status: 404 });

          const target = new URL(`${GUTENDEX}/books`);
          incoming.searchParams.forEach((value, key) => target.searchParams.set(key, value));
          const response = await fetch(target, {
            signal: controller.signal,
            headers: { Accept: "application/json", "User-Agent": USER_AGENT },
          });
          const body = await response.arrayBuffer();
          const headers = new Headers();
          headers.set("content-type", response.headers.get("content-type") ?? "application/json");
          headers.set("cache-control", response.ok ? "public, max-age=120" : "no-store");
          return new Response(body, { status: response.status, headers });
        } catch {
          return Response.json({ error: "Gutenberg catalog is unavailable." }, { status: 502 });
        } finally {
          clearTimeout(timer);
        }
      },
    },
  },
});
