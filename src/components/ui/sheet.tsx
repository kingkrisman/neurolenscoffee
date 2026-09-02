import { Drawer } from "vaul";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Sheet({
  open,
  onOpenChange,
  children,
  title,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  title: string;
}) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} direction="left" shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-60 bg-fg/30" />
        <Drawer.Content
          aria-describedby={undefined}
          className={cn(
            "fixed top-0 left-0 z-60 flex h-full w-[min(20rem,calc(100vw-1.5rem))] flex-col bg-surface outline-none",
            "shadow-float",
          )}
          style={{ transitionTimingFunction: "var(--ease-drawer)" }}
        >
          <Drawer.Title className="sr-only">{title}</Drawer.Title>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
