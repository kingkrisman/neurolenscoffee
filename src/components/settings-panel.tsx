import { useRef, useState } from "react";
import { toast } from "sonner";
import { FONT_CHOICES, FONT_CLASS, NAMED_PRESETS } from "@/lib/types";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Panel, PanelHeader, PanelWell } from "@/components/ui/surfaces";
import { SchemePicker, ContrastMeter } from "@/components/scheme-picker";
import { ContrastLab } from "@/components/contrast-lab";
import { cn } from "@/lib/utils";

export function SettingsPanel() {
  const clearData = useAppStore((s) => s.clearData);
  const applySavedProfile = useAppStore((s) => s.applySavedProfile);
  const savedProfiles = useAppStore((s) => s.savedProfiles);
  const deleteSavedProfile = useAppStore((s) => s.deleteSavedProfile);
  const profile = useAppStore((s) => s.profile);
  const setProfile = useAppStore((s) => s.setProfile);
  const [holding, setHolding] = useState(false);
  const timer = useRef<number | null>(null);

  function startHold() {
    setHolding(true);
    timer.current = window.setTimeout(() => {
      clearData();
      setHolding(false);
      toast.success("Local data cleared");
    }, 2000);
  }

  function endHold() {
    setHolding(false);
    if (timer.current) window.clearTimeout(timer.current);
  }

  return (
    <div className="mx-auto h-full max-w-3xl overflow-y-auto px-4 py-10 sm:px-8 sm:py-14">
      <h1 className="text-5xl">Settings</h1>
      <p className="mt-3 text-muted">Profiles, type, and color stay on this device.</p>

      <Panel className="mt-10">
        <PanelHeader
          title="Color scheme"
          description="Paper, night, and quieter rooms. Contrast is measured against WCAG 2.2 at your type size. Adaptive can recommend a stronger scheme; it will not leave your light or dark room."
        />
        <PanelWell className="px-4 py-4">
          <SchemePicker value={profile.theme} onChange={(theme) => setProfile({ ...profile, theme })} />
          <ContrastMeter theme={profile.theme} fontSize={profile.fontSize} />
        </PanelWell>
      </Panel>

      <Panel className="mt-3">
        <PanelWell className="px-4 py-5">
          <ContrastLab />
        </PanelWell>
      </Panel>

      <Panel className="mt-3">
        <PanelHeader
          title="Dyslexia-friendly type"
          description="Lexend lowers crowding. Atkinson distinguishes similar letters. Andika and Inclusive Sans are built for literacy. OpenDyslexic weights the base of each letter so it is harder to flip."
        />
        <PanelWell className="p-2">
          <div className="grid grid-cols-2 gap-1.5">
            {FONT_CHOICES.map((font) => {
              const selected = profile.fontFamily === font.id;
              return (
                <button
                  key={font.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setProfile({ ...profile, fontFamily: font.id })}
                  className={cn(
                    "rounded-md px-3 py-3 text-left transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]",
                    FONT_CLASS[font.id],
                    selected ? "bg-fg text-primary-fg" : "hover:bg-fg/8",
                  )}
                >
                  <span className="block text-sm font-medium">{font.label}</span>
                  <span className={cn("mt-0.5 block text-xs", selected ? "text-primary-fg/70" : "text-muted")}>
                    {font.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </PanelWell>
      </Panel>

      <Panel className="mt-3">
        <PanelHeader
          title="Reading profiles"
          description="Named setups you can return to. Adaptive will not change a locked setting."
        />
        <PanelWell className="flex flex-col gap-1.5 p-2">
          {NAMED_PRESETS.map((preset) => (
            <Button key={preset.id} variant="outline" className="justify-between" onClick={() => applySavedProfile(preset)}>
              <span>{preset.name}</span>
              <span className="text-xs text-muted">{preset.targetWpm} WPM</span>
            </Button>
          ))}
          {savedProfiles.map((preset) => (
            <div key={preset.id} className="flex gap-2">
              <Button variant="outline" className="flex-1 justify-between" onClick={() => applySavedProfile(preset)}>
                <span>{preset.name}</span>
                <span className="text-xs text-muted">{preset.targetWpm} WPM</span>
              </Button>
              <Button variant="ghost" onClick={() => deleteSavedProfile(preset.id)}>
                Remove
              </Button>
            </div>
          ))}
        </PanelWell>
      </Panel>

      <Panel className="mt-3">
        <PanelHeader
          title="Reset data"
          description="Hold to clear saved settings, notes, bookmarks, and reading history. Release to cancel."
        />
        <PanelWell className="px-4 py-4">
          <Button
            variant="destructive"
            className="relative overflow-hidden"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onPointerCancel={endHold}
          >
            <span className="hold-fill absolute inset-0 bg-danger/20" data-holding={holding ? "true" : "false"} />
            <span className="relative">{holding ? "Hold to confirm" : "Clear local data"}</span>
          </Button>
        </PanelWell>
      </Panel>

      <Panel className="mt-3 mb-8">
        <PanelHeader title="About NeuroLens" />
        <PanelWell className="px-4 py-4">
          <p className="text-sm leading-relaxed text-muted">
            An adaptive reading environment. Paste text, open a PDF, look up a Bible chapter from bible-api.com
            (HelloAO as fallback), search Open Library (and British National Bibliography SPARQL when it is up), or open a poem from PoetryDB.
            Adaptive watches pace, pauses, rereads, feel, and contrast — it recommends, and it never silently rewrites
            a locked setting. Contrast Lab can simulate protanopia, deuteranopia, and tritanopia using Machado 2009.
            Skip to content, named landmarks, and a live status region are there for screen readers; bionic fixation
            stays visual.
          </p>
          <p className="mt-4 text-xs text-subtle">
            Version 3.8 · WEB via bible-api.com · Open Library · PoetryDB
          </p>
        </PanelWell>
      </Panel>
    </div>
  );
}
