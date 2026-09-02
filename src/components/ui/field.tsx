import * as LabelPrimitive from "@radix-ui/react-label";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { type ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Label = forwardRef<
  HTMLLabelElement,
  ComponentProps<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn("text-sm font-medium text-fg", className)}
    {...props}
  />
));
Label.displayName = "Label";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none placeholder:text-subtle transition-[box-shadow] duration-[150ms] ease-[var(--ease-out)] focus:shadow-[0_0_0_1px_var(--color-fg),0_0_0_4px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      suppressHydrationWarning
      className={cn(
        "min-h-40 w-full resize-none rounded-lg bg-transparent text-base leading-relaxed text-fg outline-none placeholder:text-subtle",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export function Slider({
  className,
  ...props
}: ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      className={cn("relative flex h-11 w-full touch-none items-center select-none", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-fg/10">
        <SliderPrimitive.Range className="absolute h-full bg-fg" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-label={typeof props["aria-label"] === "string" ? props["aria-label"] : undefined}
        className="block size-4 rounded-full bg-surface shadow-border-hover outline-none transition-transform duration-[140ms] ease-[var(--ease-out)] focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] active:scale-[0.97]"
      />
    </SliderPrimitive.Root>
  );
}

export function Switch({
  className,
  ...props
}: ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer relative inline-flex h-6 w-10 shrink-0 items-center rounded-full bg-fg/15 shadow-border transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] after:absolute after:top-1/2 after:left-1/2 after:size-10 after:-translate-1/2 data-[state=checked]:bg-fg",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block size-5 translate-x-0.5 rounded-full bg-surface shadow-border transition-transform duration-[200ms] ease-[var(--ease-in-out)] data-[state=checked]:translate-x-[18px]" />
    </SwitchPrimitive.Root>
  );
}
