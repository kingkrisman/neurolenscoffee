import { Lock, Maximize2, Unlock, X } from "lucide-react";
import { FONT_CHOICES, NAMED_PRESETS, READING_PROFILES, RHYTHM_CHOICES, type LockableSetting, type ReadingMode } from "@/lib/types";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input, Label, Slider, Switch } from "@/components/ui/field";
import { Separator } from "@/components/ui/surfaces";
import { SchemePicker, ContrastMeter } from "@/components/scheme-picker";
import { cn } from "@/lib/utils";
import { useState } from "react";

const MODES: ReadingMode[] = ["default", "adhd", "dyslexia", "focus", "academic", "speed", "adaptive"];

function LockToggle({ setting }: { setting: LockableSetting }) {
  const locked = useAppStore((s) => s.lockedSettings.includes(setting));
  const toggleLock = useAppStore((s) => s.toggleLock);
  return (
    <button
      type="button"
      className="text-subtle hover:text-fg"
      aria-label={locked ? "Unlock setting" : "Lock setting from Adaptive"}
      aria-pressed={locked}
      onClick={() => toggleLock(setting)}
    >
      {locked ? <Lock size={13} /> : <Unlock size={13} />}
    </button>
  );
}

export function ReaderControls({ onClose }: { onClose: () => void }) {
  const mode = useAppStore((s) => s.mode);
  const profile = useAppStore((s) => s.profile);
  const setMode = useAppStore((s) => s.setMode);
  const setProfile = useAppStore((s) => s.setProfile);
  const autoScrolling = useAppStore((s) => s.autoScrolling);
  const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
  const targetWpm = useAppStore((s) => s.targetWpm);
  const setTargetWpm = useAppStore((s) => s.setTargetWpm);
  const currentWpm = useAppStore((s) => s.reading.currentWpm);
  const reading = useAppStore((s) => s.reading);
  const lastAdaptiveChange = useAppStore((s) => s.lastAdaptiveChange);
  const undoAdaptiveChange = useAppStore((s) => s.undoAdaptiveChange);
  const applySavedProfile = useAppStore((s) => s.applySavedProfile);
  const saveCurrentProfile = useAppStore((s) => s.saveCurrentProfile);
  const savedProfiles = useAppStore((s) => s.savedProfiles);
  const [profileName, setProfileName] = useState("");

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <p className="text-sm font-medium">Reading options</p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Full screen"
            title="Fullscreen"
            onClick={() => {
              if (document.fullscreenElement) void document.exitFullscreen();
              else void document.documentElement.requestFullscreen();
            }}
          >
            <Maximize2 size={16} />
          </Button>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close options">
            <X size={16} />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex-1 space-y-8 overflow-y-auto px-5 py-5">
        <section>
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">Mode</p>
          <div className="flex flex-col gap-1.5">
            {MODES.map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={mode === id}
                onClick={() => setMode(id)}
                className={cn(
                  "flex h-11 items-center rounded-md px-3 text-sm font-medium transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]",
                  mode === id ? "bg-fg text-primary-fg" : "bg-fg/4 text-fg hover:bg-fg/8",
                )}
              >
                {READING_PROFILES[id].name}
              </button>
            ))}
          </div>
          {mode === "adaptive" && (
            <p className="mt-3 text-xs leading-relaxed text-muted">
              NeuroLens learns how you read and recommends adjustments — pace, spacing, focus, and contrast. Locked
              settings will not be changed.
            </p>
          )}
          {lastAdaptiveChange && (
            <Button variant="outline" className="mt-3 w-full" onClick={undoAdaptiveChange}>
              Undo last recommendation
            </Button>
          )}
        </section>

        <section>
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">Profiles</p>
          <div className="flex flex-col gap-1.5">
            {NAMED_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applySavedProfile(preset)}
                className="flex h-11 items-center rounded-md bg-fg/4 px-3 text-sm font-medium hover:bg-fg/8"
              >
                {preset.name}
              </button>
            ))}
            {savedProfiles.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applySavedProfile(preset)}
                className="flex h-11 items-center rounded-md bg-fg/4 px-3 text-sm font-medium hover:bg-fg/8"
              >
                {preset.name}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Input
              value={profileName}
              onChange={(event) => setProfileName(event.target.value)}
              placeholder="Name this setup"
              aria-label="Name this setup"
              className="h-9"
            />
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                saveCurrentProfile(profileName);
                setProfileName("");
              }}
            >
              Save
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">Typeface</p>
            <div className="grid grid-cols-2 gap-1.5">
              {FONT_CHOICES.map((font) => (
                <button
                  key={font.id}
                  type="button"
                  aria-pressed={profile.fontFamily === font.id}
                  onClick={() => setProfile({ ...profile, fontFamily: font.id })}
                  className={cn(
                    "flex h-11 flex-col items-start justify-center rounded-md px-3 text-left",
                    profile.fontFamily === font.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8",
                  )}
                >
                  <span className="text-sm font-medium">{font.label}</span>
                  <span className={cn("text-[11px]", profile.fontFamily === font.id ? "text-primary-fg/70" : "text-muted")}>
                    {font.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-medium tracking-wide text-muted uppercase">Color scheme</p>
              <LockToggle setting="theme" />
            </div>
            <SchemePicker value={profile.theme} onChange={(theme) => setProfile({ ...profile, theme })} />
            <ContrastMeter theme={profile.theme} fontSize={profile.fontSize} />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2">
                <Label>Size</Label>
                <LockToggle setting="fontSize" />
              </span>
              <span className="tabular-nums text-muted">{profile.fontSize}px</span>
            </div>
            <Slider
              min={14}
              max={28}
              step={1}
              value={[profile.fontSize]}
              onValueChange={([value]) => setProfile({ ...profile, fontSize: value ?? 18 })}
              aria-label="Type size"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2">
                <Label>Line height</Label>
                <LockToggle setting="lineHeight" />
              </span>
              <span className="tabular-nums text-muted">{profile.lineHeight.toFixed(1)}</span>
            </div>
            <Slider
              min={1.4}
              max={2.2}
              step={0.1}
              value={[profile.lineHeight]}
              onValueChange={([value]) => setProfile({ ...profile, lineHeight: value ?? 1.6 })}
              aria-label="Line height"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <Label>Letter spacing</Label>
              <span className="tabular-nums text-muted">{profile.letterSpacing.toFixed(2)}</span>
            </div>
            <Slider
              min={0}
              max={0.12}
              step={0.01}
              value={[profile.letterSpacing]}
              onValueChange={([value]) => setProfile({ ...profile, letterSpacing: value ?? 0 })}
              aria-label="Letter spacing"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <Label>Word spacing</Label>
              <span className="tabular-nums text-muted">{profile.wordSpacing.toFixed(2)}</span>
            </div>
            <Slider
              min={0}
              max={0.2}
              step={0.02}
              value={[profile.wordSpacing]}
              onValueChange={([value]) => setProfile({ ...profile, wordSpacing: value ?? 0 })}
              aria-label="Word spacing"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <Label>Fixation</Label>
              <span className="tabular-nums text-muted">{Math.round(profile.bionicStrength * 100)}%</span>
            </div>
            <Slider
              min={0}
              max={0.8}
              step={0.05}
              value={[profile.bionicStrength]}
              onValueChange={([value]) => setProfile({ ...profile, bionicStrength: value ?? 0 })}
              aria-label="Fixation strength"
            />
            <p className="mt-2 text-xs text-muted">
              Bionic thickens word starts so saccades have a landing. Use Gaze in the reader toolbar to follow the word you look at — the camera never leaves this device.
            </p>
          </div>
          <div className="flex h-11 items-center justify-between">
            <span className="inline-flex items-center gap-2">
              <Label htmlFor="focus-line">Focus line</Label>
              <LockToggle setting="focusHighlight" />
            </span>
            <Switch
              id="focus-line"
              checked={profile.focusHighlight}
              onCheckedChange={(checked) => setProfile({ ...profile, focusHighlight: checked })}
            />
          </div>
          <div className="flex h-11 items-center justify-between">
            <Label htmlFor="justify">Justify text</Label>
            <Switch
              id="justify"
              checked={profile.align === "justify"}
              onCheckedChange={(checked) => setProfile({ ...profile, align: checked ? "justify" : "left" })}
            />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">Rhythm</p>
            <div className="grid grid-cols-3 gap-1.5">
              {RHYTHM_CHOICES.map((curve) => (
                <button
                  key={curve.id}
                  type="button"
                  aria-pressed={profile.rhythmCurve === curve.id}
                  onClick={() =>
                    setProfile({
                      ...profile,
                      rhythmCurve: curve.id,
                      rhythmOptimization: curve.id !== "steady",
                    })
                  }
                  className={cn(
                    "flex h-11 flex-col items-center justify-center rounded-md px-1",
                    profile.rhythmCurve === curve.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8",
                  )}
                >
                  <span className="text-sm font-medium">{curve.label}</span>
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {RHYTHM_CHOICES.find((item) => item.id === profile.rhythmCurve)?.hint ?? "Even pace"}. Auto-scroll and
              speed reader rest on true sentence ends, not abbreviations.
            </p>
          </div>
        </section>

        <section>
          <p className="mb-3 text-xs font-medium tracking-wide text-muted uppercase">Pace</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md bg-fg/4 px-3 py-3">
              <p className="text-[11px] tracking-wide text-muted uppercase">Target WPM</p>
              <p className="mt-1 text-2xl font-medium tabular-nums">{targetWpm}</p>
            </div>
            <div className="rounded-md bg-fg/4 px-3 py-3">
              <p className="text-[11px] tracking-wide text-muted uppercase">Current WPM</p>
              <p className="mt-1 text-2xl font-medium tabular-nums">{currentWpm ?? "—"}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-2">
                <Label>Target WPM</Label>
                <LockToggle setting="targetWpm" />
              </span>
              <span className="tabular-nums text-muted">{targetWpm}</span>
            </div>
            <Slider
              min={120}
              max={480}
              step={10}
              value={[targetWpm]}
              onValueChange={([value]) => setTargetWpm(value ?? 220)}
              aria-label="Target words per minute"
            />
          </div>
          <div className="mt-4 flex h-11 items-center justify-between">
            <Label htmlFor="autoscroll">Scroll at target pace</Label>
            <Switch
              id="autoscroll"
              checked={autoScrolling}
              onCheckedChange={(checked) => {
                setAutoScrolling(checked);
                if (checked) onClose();
              }}
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            {Math.round(reading.progress * 100)}% through this page
            {reading.pauses.length > 0 ? ` · ${reading.pauses.length} pause${reading.pauses.length === 1 ? "" : "s"}` : ""}
            {reading.rereads.length > 0 ? ` · ${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}` : ""}
          </p>
        </section>
      </div>
    </div>
  );
}
