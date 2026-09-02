import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Mark } from "@/components/mark";
import { Card, Media } from "@/components/ui/surfaces";

export function PublicLayout({
  eyebrow,
  title,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="grain" aria-hidden />
      <header className="material sticky top-0 z-40">
        <div className="flex h-16 items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="NeuroLens home" className="flex items-center gap-2.5">
            <Mark className="size-7 text-fg" />
            <span className="text-sm font-medium">NeuroLens</span>
          </Link>
          <Link to="/" className="text-sm font-medium hover:opacity-70">
            Open reader
          </Link>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-2xl px-5 py-16 outline-none sm:px-8">
        <p className="font-serif text-base text-accent italic">{eyebrow}</p>
        <h1 className="mt-3 text-5xl">{title}</h1>
        {image && (
          <Card className="mt-8 overflow-hidden p-2">
            <Media
              src={image}
              alt={imageAlt}
              width={1600}
              height={900}
              className="aspect-[16/8] w-full rounded-sm object-cover"
            />
          </Card>
        )}
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">{children}</div>
        <Link to="/" className="mt-10 inline-flex text-sm font-medium text-fg">
          Back to NeuroLens
        </Link>
      </main>
    </div>
  );
}
