import { create } from "zustand";
import {
  recommendAdaptations,
  calcCurrentWpm,
  type AdaptiveRecommendation,
  type AdaptiveRule,
  type PauseEvent,
  type RereadEvent,
} from "./adaptive/engine";
import { applyColorScheme, isThemeId } from "./scheme";
import { resolveRhythmCurve } from "./rhythm";
import { isCvdKind, type CvdKind } from "./color-vision";
import {
  READING_PROFILES,
  type Bookmark,
  type ContentKind,
  type FontId,
  type LockableSetting,
  type ReadingFeel,
  type ReadingMode,
  type ReadingProfile,
  type SavedProfile,
  type Session,
  type TabId,
} from "./types";

const SESSIONS_KEY = "neurolens-sessions";
const PROFILE_KEY = "neurolens-profile";
const MODE_KEY = "neurolens-mode";
const TARGET_WPM_KEY = "neurolens-target-wpm";
const LOCKS_KEY = "neurolens-locks";
const SAVED_KEY = "neurolens-saved-profiles";
const BOOKMARKS_KEY = "neurolens-bookmarks";
const HIGHLIGHTS_KEY = "neurolens-highlights";
const CVD_KEY = "neurolens-cvd";
const GAZE_KEY = "neurolens-gaze";

export interface ReadingSnapshot {
  progress: number;
  wordCount: number;
  wordsRead: number;
  elapsedActiveMs: number;
  currentWpm: number | null;
  pauses: PauseEvent[];
  rereads: RereadEvent[];
  startedAt: number | null;
}

export interface AppliedAdaptiveChange {
  setting: AdaptiveRecommendation["setting"];
  previousValue: number | boolean | string;
  nextValue: number | boolean | string;
}

export interface StartReadingMeta {
  title?: string;
  kind?: ContentKind;
  sourceId?: string;
}

const EMPTY_READING: ReadingSnapshot = {
  progress: 0,
  wordCount: 0,
  wordsRead: 0,
  elapsedActiveMs: 0,
  currentWpm: null,
  pauses: [],
  rereads: [],
  startedAt: null,
};

interface AppState {
  hydrated: boolean;
  tab: TabId;
  direction: number;
  text: string;
  sourceKind: ContentKind;
  sourceId: string | null;
  mode: ReadingMode;
  profile: ReadingProfile;
  sessions: Session[];
  controlsOpen: boolean;
  autoScrolling: boolean;
  targetWpm: number;
  commandOpen: boolean;
  reading: ReadingSnapshot;
  recommendation: AdaptiveRecommendation | null;
  dismissedRules: AdaptiveRule[];
  lastAdaptiveChange: AppliedAdaptiveChange | null;
  lockedSettings: LockableSetting[];
  savedProfiles: SavedProfile[];
  bookmarks: Bookmark[];
  highlights: Record<string, number[]>;
  readingFeel: ReadingFeel | null;
  cvdPreview: CvdKind;
  gazeFixation: boolean;
  hydrate: () => void;
  setTab: (tab: TabId) => void;
  startReading: (text: string, meta?: StartReadingMeta) => void;
  setMode: (mode: ReadingMode) => void;
  setProfile: (profile: ReadingProfile) => void;
  setControlsOpen: (open: boolean) => void;
  setAutoScrolling: (value: boolean) => void;
  setTargetWpm: (value: number) => void;
  setCommandOpen: (open: boolean) => void;
  reportReading: (patch: Partial<ReadingSnapshot>) => void;
  applyRecommendation: () => void;
  dismissRecommendation: () => void;
  undoAdaptiveChange: () => void;
  toggleLock: (setting: LockableSetting) => void;
  applySavedProfile: (saved: SavedProfile) => void;
  saveCurrentProfile: (name: string) => void;
  deleteSavedProfile: (id: string) => void;
  toggleHighlight: (lineIdx: number) => void;
  toggleBookmark: () => void;
  submitReadingFeel: (feel: ReadingFeel) => void;
  setCvdPreview: (kind: CvdKind) => void;
  setGazeFixation: (value: boolean) => void;
  clearData: () => void;
}

const TAB_ORDER: TabId[] = ["explore", "read", "library", "insights", "settings"];

function persistProfile(profile: ReadingProfile, mode: ReadingMode) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  localStorage.setItem(MODE_KEY, mode);
}

const FONT_IDS: FontId[] = ["sans", "serif", "lexend", "atkinson", "inclusive", "andika", "opendyslexic"];

function normalizeProfile(profile: ReadingProfile): ReadingProfile {
  const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
  return {
    ...profile,
    fontFamily: FONT_IDS.includes(profile.fontFamily) ? profile.fontFamily : "sans",
    theme: isThemeId(profile.theme) ? profile.theme : "paper",
    rhythmCurve,
    rhythmOptimization: rhythmCurve !== "steady",
  };
}

function persistAndApply(profile: ReadingProfile, mode: ReadingMode) {
  const next = normalizeProfile(profile);
  persistProfile(next, mode);
  applyColorScheme(next.theme);
  return next;
}

function persistSessions(sessions: Session[]) {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

function persistTargetWpm(value: number) {
  localStorage.setItem(TARGET_WPM_KEY, String(value));
}

function textKey(text: string) {
  return text.trim().slice(0, 48) || "default";
}

function refreshRecommendation(
  reading: ReadingSnapshot,
  targetWpm: number,
  profile: ReadingProfile,
  mode: ReadingMode,
  dismissedRules: AdaptiveRule[],
  existing: AdaptiveRecommendation | null,
  feel: ReadingFeel | null,
  lockedSettings: LockableSetting[],
): AdaptiveRecommendation | null {
  if (mode !== "adaptive") return null;
  if (existing) return existing;
  return recommendAdaptations(
    {
      wordCount: reading.wordCount,
      wordsRead: reading.wordsRead,
      progress: reading.progress,
      elapsedActiveMs: reading.elapsedActiveMs,
      currentWpm: reading.currentWpm,
      targetWpm,
      pauseCount: reading.pauses.length,
      pauses: reading.pauses,
      rereadCount: reading.rereads.length,
      rereads: reading.rereads,
      feel,
    },
    {
      targetWpm,
      lineHeight: profile.lineHeight,
      focusHighlight: profile.focusHighlight,
      theme: profile.theme,
      fontSize: profile.fontSize,
    },
    dismissedRules,
    lockedSettings,
  );
}

function withSessionMetrics(sessions: Session[], text: string, reading: ReadingSnapshot): Session[] {
  if (!text) return sessions;
  return sessions.map((session) =>
    session.content === text
      ? {
          ...session,
          progress: reading.progress,
          currentWpm: reading.currentWpm,
          pauseCount: reading.pauses.length,
          rereadCount: reading.rereads.length,
        }
      : session,
  );
}

function previousFor(setting: AdaptiveRecommendation["setting"], profile: ReadingProfile, targetWpm: number) {
  if (setting === "targetWpm") return targetWpm;
  if (setting === "lineHeight") return profile.lineHeight;
  if (setting === "theme") return profile.theme;
  if (setting === "fontSize") return profile.fontSize;
  return profile.focusHighlight;
}

export const useAppStore = create<AppState>((set, get) => ({
  hydrated: false,
  tab: "explore",
  direction: 0,
  text: "",
  sourceKind: "text",
  sourceId: null,
  mode: "default",
  profile: READING_PROFILES.default,
  sessions: [],
  controlsOpen: false,
  autoScrolling: false,
  targetWpm: 220,
  commandOpen: false,
  reading: EMPTY_READING,
  recommendation: null,
  dismissedRules: [],
  lastAdaptiveChange: null,
  lockedSettings: [],
  savedProfiles: [],
  bookmarks: [],
  highlights: {},
  readingFeel: null,
  cvdPreview: "none",
  gazeFixation: false,

  hydrate: () => {
    if (get().hydrated || typeof window === "undefined") return;
    try {
      const sessions = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]") as Session[];
      const savedProfile = localStorage.getItem(PROFILE_KEY);
      const savedMode = (localStorage.getItem(MODE_KEY) as ReadingMode | null) ?? "default";
      const mode = READING_PROFILES[savedMode] ? savedMode : "default";
      const profile = normalizeProfile(
        savedProfile
          ? ({ ...READING_PROFILES[mode], ...JSON.parse(savedProfile) } as ReadingProfile)
          : READING_PROFILES[mode],
      );
      const savedWpm = Number(localStorage.getItem(TARGET_WPM_KEY));
      const savedCvd = localStorage.getItem(CVD_KEY);
      const cvdPreview = isCvdKind(savedCvd) ? savedCvd : "none";
      applyColorScheme(profile.theme, cvdPreview);
      const lockedSettings = JSON.parse(localStorage.getItem(LOCKS_KEY) || "[]") as LockableSetting[];
      const savedProfiles = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]") as SavedProfile[];
      const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]") as Bookmark[];
      const highlights = JSON.parse(localStorage.getItem(HIGHLIGHTS_KEY) || "{}") as Record<string, number[]>;
      set({
        sessions: Array.isArray(sessions) ? sessions : [],
        profile,
        mode,
        targetWpm: Number.isFinite(savedWpm) && savedWpm >= 120 ? savedWpm : 220,
        lockedSettings: Array.isArray(lockedSettings) ? lockedSettings : [],
        savedProfiles: Array.isArray(savedProfiles) ? savedProfiles : [],
        bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
        highlights: highlights && typeof highlights === "object" ? highlights : {},
        cvdPreview,
        gazeFixation: localStorage.getItem(GAZE_KEY) === "1",
        hydrated: true,
      });
    } catch {
      set({ hydrated: true });
    }
  },

  setTab: (tab) => {
    const current = get().tab;
    if (tab === "read" && !get().text) return;
    const direction = TAB_ORDER.indexOf(tab) >= TAB_ORDER.indexOf(current) ? 1 : -1;
    set({ tab, direction, autoScrolling: false, controlsOpen: tab === "read" ? get().controlsOpen : false });
  },

  startReading: (raw, meta) => {
    const text = raw.trim();
    if (!text) return;
    const title = meta?.title || text.split(/\n/)[0]?.slice(0, 60) || "Untitled reading";
    const kind = meta?.kind ?? "text";
    const sessions = [
      { title, content: text, openedAt: Date.now(), progress: 0, kind, sourceId: meta?.sourceId },
      ...get().sessions.filter((session) => session.content !== text),
    ].slice(0, 12);
    persistSessions(sessions);
    const current = get().tab;
    set({
      text,
      sourceKind: kind,
      sourceId: meta?.sourceId ?? null,
      sessions,
      tab: "read",
      direction: TAB_ORDER.indexOf("read") >= TAB_ORDER.indexOf(current) ? 1 : -1,
      autoScrolling: false,
      reading: { ...EMPTY_READING, startedAt: Date.now() },
      recommendation: null,
      dismissedRules: [],
      lastAdaptiveChange: null,
      readingFeel: null,
    });
  },

  setMode: (mode) => {
    const current = get().profile;
    const next = persistAndApply(
      { ...READING_PROFILES[mode], theme: current.theme, align: current.align },
      mode,
    );
    const state = get();
    set({
      mode,
      profile: next,
      recommendation:
        mode === "adaptive"
          ? refreshRecommendation(
              state.reading,
              state.targetWpm,
              next,
              mode,
              state.dismissedRules,
              null,
              state.readingFeel,
              state.lockedSettings,
            )
          : null,
    });
  },

  setProfile: (profile) => {
    const next = persistAndApply(profile, get().mode);
    set({ profile: next });
  },

  setControlsOpen: (controlsOpen) => set({ controlsOpen }),
  setAutoScrolling: (autoScrolling) => set({ autoScrolling }),
  setTargetWpm: (targetWpm) => {
    persistTargetWpm(targetWpm);
    set({ targetWpm });
  },
  setCommandOpen: (commandOpen) => set({ commandOpen }),

  reportReading: (patch) => {
    const state = get();
    const reading: ReadingSnapshot = {
      ...state.reading,
      ...patch,
      startedAt: state.reading.startedAt ?? Date.now(),
    };
    reading.currentWpm = calcCurrentWpm(reading.wordsRead, reading.elapsedActiveMs);
    const sessions = withSessionMetrics(state.sessions, state.text, reading);
    const recommendation = refreshRecommendation(
      reading,
      state.targetWpm,
      state.profile,
      state.mode,
      state.dismissedRules,
      state.recommendation,
      state.readingFeel,
      state.lockedSettings,
    );
    set({ reading, sessions, recommendation });
    const prev = state.sessions.find((session) => session.content === state.text);
    const shouldPersist =
      !prev ||
      Math.abs((prev.progress ?? 0) - reading.progress) >= 0.05 ||
      (prev.pauseCount ?? 0) !== reading.pauses.length ||
      (prev.rereadCount ?? 0) !== reading.rereads.length;
    if (shouldPersist) persistSessions(sessions);
  },

  applyRecommendation: () => {
    const { recommendation, profile, targetWpm, lockedSettings } = get();
    if (!recommendation) return;
    if (lockedSettings.includes(recommendation.setting as LockableSetting)) {
      set({
        recommendation: null,
        dismissedRules: [...get().dismissedRules, recommendation.rule],
      });
      return;
    }
    const previousValue = previousFor(recommendation.setting, profile, targetWpm);
    if (recommendation.setting === "targetWpm" && typeof recommendation.recommendedValue === "number") {
      persistTargetWpm(recommendation.recommendedValue);
      set({ targetWpm: recommendation.recommendedValue });
    } else if (recommendation.setting === "lineHeight" && typeof recommendation.recommendedValue === "number") {
      const next = persistAndApply({ ...profile, lineHeight: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "fontSize" && typeof recommendation.recommendedValue === "number") {
      const next = persistAndApply({ ...profile, fontSize: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "focusHighlight" && typeof recommendation.recommendedValue === "boolean") {
      const next = persistAndApply({ ...profile, focusHighlight: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    } else if (recommendation.setting === "theme" && typeof recommendation.recommendedValue === "string" && isThemeId(recommendation.recommendedValue)) {
      const next = persistAndApply({ ...profile, theme: recommendation.recommendedValue }, get().mode);
      set({ profile: next });
    }
    set({
      recommendation: null,
      dismissedRules: [...get().dismissedRules, recommendation.rule],
      lastAdaptiveChange: {
        setting: recommendation.setting,
        previousValue,
        nextValue: recommendation.recommendedValue,
      },
    });
  },

  dismissRecommendation: () => {
    const { recommendation, dismissedRules } = get();
    if (!recommendation) return;
    set({
      recommendation: null,
      dismissedRules: [...dismissedRules, recommendation.rule],
    });
  },

  undoAdaptiveChange: () => {
    const change = get().lastAdaptiveChange;
    if (!change) return;
    const profile = get().profile;
    if (change.setting === "targetWpm" && typeof change.previousValue === "number") {
      persistTargetWpm(change.previousValue);
      set({ targetWpm: change.previousValue, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "lineHeight" && typeof change.previousValue === "number") {
      const next = persistAndApply({ ...profile, lineHeight: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "fontSize" && typeof change.previousValue === "number") {
      const next = persistAndApply({ ...profile, fontSize: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "focusHighlight" && typeof change.previousValue === "boolean") {
      const next = persistAndApply({ ...profile, focusHighlight: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
      return;
    }
    if (change.setting === "theme" && typeof change.previousValue === "string" && isThemeId(change.previousValue)) {
      const next = persistAndApply({ ...profile, theme: change.previousValue }, get().mode);
      set({ profile: next, lastAdaptiveChange: null });
    }
  },

  toggleLock: (setting) => {
    const locked = get().lockedSettings;
    const next = locked.includes(setting) ? locked.filter((item) => item !== setting) : [...locked, setting];
    localStorage.setItem(LOCKS_KEY, JSON.stringify(next));
    set({ lockedSettings: next });
  },

  applySavedProfile: (saved) => {
    const profile = persistAndApply(saved.profile, get().mode);
    persistTargetWpm(saved.targetWpm);
    set({ profile, targetWpm: saved.targetWpm });
  },

  saveCurrentProfile: (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const saved: SavedProfile = {
      id: `user-${Date.now()}`,
      name: trimmed,
      profile: get().profile,
      targetWpm: get().targetWpm,
    };
    const savedProfiles = [saved, ...get().savedProfiles].slice(0, 8);
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedProfiles));
    set({ savedProfiles });
  },

  deleteSavedProfile: (id) => {
    const savedProfiles = get().savedProfiles.filter((item) => item.id !== id);
    localStorage.setItem(SAVED_KEY, JSON.stringify(savedProfiles));
    set({ savedProfiles });
  },

  toggleHighlight: (lineIdx) => {
    const key = textKey(get().text);
    const current = get().highlights[key] ?? [];
    const nextForKey = current.includes(lineIdx) ? current.filter((item) => item !== lineIdx) : [...current, lineIdx];
    const highlights = { ...get().highlights, [key]: nextForKey };
    localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
    set({ highlights });
  },

  toggleBookmark: () => {
    const { text, reading, bookmarks, sourceKind } = get();
    if (!text) return;
    const existing = bookmarks.find((item) => item.content === text);
    const next = existing
      ? bookmarks.filter((item) => item.content !== text)
      : [
          {
            id: `bm-${Date.now()}`,
            title: text.split(/\n/)[0]?.slice(0, 60) || "Bookmark",
            content: text,
            progress: reading.progress,
            savedAt: Date.now(),
            kind: sourceKind,
          },
          ...bookmarks,
        ].slice(0, 24);
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
    set({ bookmarks: next });
  },

  submitReadingFeel: (feel) => {
    const state = get();
    const recommendation = refreshRecommendation(
      state.reading,
      state.targetWpm,
      state.profile,
      state.mode,
      state.dismissedRules,
      null,
      feel,
      state.lockedSettings,
    );
    set({ readingFeel: feel, recommendation });
  },

  setCvdPreview: (kind) => {
    localStorage.setItem(CVD_KEY, kind);
    applyColorScheme(get().profile.theme, kind);
    set({ cvdPreview: kind });
  },

  setGazeFixation: (gazeFixation) => {
    localStorage.setItem(GAZE_KEY, gazeFixation ? "1" : "0");
    set({ gazeFixation });
  },

  clearData: () => {
    localStorage.removeItem(SESSIONS_KEY);
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(MODE_KEY);
    localStorage.removeItem(TARGET_WPM_KEY);
    localStorage.removeItem(LOCKS_KEY);
    localStorage.removeItem(SAVED_KEY);
    localStorage.removeItem(BOOKMARKS_KEY);
    localStorage.removeItem(HIGHLIGHTS_KEY);
    localStorage.removeItem(CVD_KEY);
    set({
      sessions: [],
      profile: READING_PROFILES.default,
      mode: "default",
      text: "",
      tab: "explore",
      autoScrolling: false,
      targetWpm: 220,
      reading: EMPTY_READING,
      recommendation: null,
      dismissedRules: [],
      lastAdaptiveChange: null,
      lockedSettings: [],
      savedProfiles: [],
      bookmarks: [],
      highlights: {},
      readingFeel: null,
      cvdPreview: "none",
      sourceKind: "text",
      sourceId: null,
    });
    applyColorScheme("paper", "none");
  },
}));
