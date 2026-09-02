export type ReadingMode =
  | "default"
  | "adhd"
  | "dyslexia"
  | "focus"
  | "academic"
  | "speed"
  | "adaptive";

export type TabId = "explore" | "read" | "library" | "insights" | "settings";

export type AlignId = "left" | "justify";
export type ThemeId = "paper" | "night" | "contrast" | "sage" | "ink" | "sepia";
export type TintId = "none" | "adhd" | "dyslexia" | "focus" | "academic";
export type RhythmCurve = "steady" | "sentence" | "breath";
export type ReadingFeel = "slow" | "right" | "fast";
export type LockableSetting = "targetWpm" | "lineHeight" | "focusHighlight" | "fontSize" | "theme";
export type ContentKind = "text" | "pdf" | "bible" | "poem";
export type FontId = "sans" | "serif" | "lexend" | "atkinson" | "inclusive" | "andika" | "opendyslexic";

export interface ReadingProfile {
  id: ReadingMode;
  name: string;
  fontFamily: FontId;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  bionicStrength: number;
  focusHighlight: boolean;
  rhythmOptimization: boolean;
  rhythmCurve: RhythmCurve;
  tint: TintId;
  align: AlignId;
  theme: ThemeId;
}

export interface SavedProfile {
  id: string;
  name: string;
  profile: ReadingProfile;
  targetWpm: number;
}

export interface Bookmark {
  id: string;
  title: string;
  content: string;
  progress: number;
  savedAt: number;
  kind?: ContentKind;
}

export interface Session {
  title: string;
  content: string;
  openedAt: number;
  progress?: number;
  currentWpm?: number | null;
  pauseCount?: number;
  rereadCount?: number;
  kind?: ContentKind;
  sourceId?: string;
  comprehension?: number | null;
}

export const READING_PROFILES: Record<ReadingMode, ReadingProfile> = {
  default: {
    id: "default",
    name: "Standard",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.6,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0,
    focusHighlight: false,
    rhythmOptimization: false,
    rhythmCurve: "steady",
    tint: "none",
    align: "left",
    theme: "paper",
  },
  adhd: {
    id: "adhd",
    name: "ADHD",
    fontFamily: "sans",
    fontSize: 20,
    lineHeight: 1.8,
    letterSpacing: 0.02,
    wordSpacing: 0.05,
    bionicStrength: 0.6,
    focusHighlight: true,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "adhd",
    align: "left",
    theme: "paper",
  },
  dyslexia: {
    id: "dyslexia",
    name: "Dyslexia",
    fontFamily: "lexend",
    fontSize: 20,
    lineHeight: 2,
    letterSpacing: 0.05,
    wordSpacing: 0.1,
    bionicStrength: 0.4,
    focusHighlight: true,
    rhythmOptimization: true,
    rhythmCurve: "breath",
    tint: "dyslexia",
    align: "left",
    theme: "sage",
  },
  focus: {
    id: "focus",
    name: "Deep Focus",
    fontFamily: "sans",
    fontSize: 22,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0,
    focusHighlight: true,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "focus",
    align: "left",
    theme: "paper",
  },
  academic: {
    id: "academic",
    name: "Academic",
    fontFamily: "serif",
    fontSize: 18,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.3,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "breath",
    tint: "academic",
    align: "left",
    theme: "sepia",
  },
  speed: {
    id: "speed",
    name: "Speed",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.8,
    focusHighlight: true,
    rhythmOptimization: false,
    rhythmCurve: "steady",
    tint: "none",
    align: "left",
    theme: "paper",
  },
  adaptive: {
    id: "adaptive",
    name: "Adaptive",
    fontFamily: "sans",
    fontSize: 18,
    lineHeight: 1.7,
    letterSpacing: 0,
    wordSpacing: 0,
    bionicStrength: 0.35,
    focusHighlight: false,
    rhythmOptimization: true,
    rhythmCurve: "sentence",
    tint: "none",
    align: "left",
    theme: "paper",
  },
};

export const NAMED_PRESETS: SavedProfile[] = [
  {
    id: "deep-study",
    name: "Deep Study",
    targetWpm: 180,
    profile: { ...READING_PROFILES.academic, name: "Deep Study", fontSize: 20, lineHeight: 1.9 },
  },
  {
    id: "quick",
    name: "Quick Reading",
    targetWpm: 340,
    profile: { ...READING_PROFILES.speed, name: "Quick Reading" },
  },
  {
    id: "night",
    name: "Night Reading",
    targetWpm: 200,
    profile: { ...READING_PROFILES.default, name: "Night Reading", theme: "night", fontSize: 20, lineHeight: 1.8 },
  },
  {
    id: "bible-study",
    name: "Bible Study",
    targetWpm: 160,
    profile: { ...READING_PROFILES.academic, name: "Bible Study", lineHeight: 1.9, fontSize: 20 },
  },
];

export const COLOR_SCHEMES: { id: ThemeId; label: string; swatch: string; ink: string }[] = [
  { id: "paper", label: "Paper", swatch: "#f0e8dc", ink: "#3d2a1f" },
  { id: "night", label: "Night", swatch: "#1a1612", ink: "#f3eadf" },
  { id: "contrast", label: "Contrast", swatch: "#fffdf6", ink: "#100c08" },
  { id: "sage", label: "Sage", swatch: "#e7eee6", ink: "#2c3f30" },
  { id: "ink", label: "Ink", swatch: "#14161a", ink: "#f2f4f8" },
  { id: "sepia", label: "Sepia", swatch: "#e9dcc8", ink: "#3a2818" },
];

export const DARK_SCHEMES: ThemeId[] = ["night", "ink"];

export const FONT_CHOICES: { id: FontId; label: string; hint: string }[] = [
  { id: "sans", label: "Sans", hint: "System UI" },
  { id: "serif", label: "Serif", hint: "Newsreader" },
  { id: "lexend", label: "Lexend", hint: "Low crowding" },
  { id: "atkinson", label: "Atkinson", hint: "Distinct letters" },
  { id: "inclusive", label: "Inclusive", hint: "Accessible sans" },
  { id: "andika", label: "Andika", hint: "Literacy sans" },
  { id: "opendyslexic", label: "OpenDyslexic", hint: "Weighted bases" },
];

export const RHYTHM_CHOICES: { id: RhythmCurve; label: string; hint: string }[] = [
  { id: "steady", label: "Steady", hint: "Even pace" },
  { id: "sentence", label: "Sentence", hint: "Rest at true sentence ends" },
  { id: "breath", label: "Breath", hint: "Rest at clauses" },
];

export const TABS: { id: TabId; label: string }[] = [
  { id: "explore", label: "Explore" },
  { id: "read", label: "Read" },
  { id: "library", label: "Library" },
  { id: "insights", label: "Insights" },
  { id: "settings", label: "Settings" },
];

export const FONT_CLASS: Record<FontId, string> = {
  sans: "font-sans",
  serif: "font-serif",
  lexend: "font-lexend",
  atkinson: "font-atkinson",
  inclusive: "font-inclusive",
  andika: "font-andika",
  opendyslexic: "font-opendyslexic",
};

export const TINT_CLASS: Record<TintId, string> = {
  none: "bg-bg",
  adhd: "bg-tint-adhd",
  dyslexia: "bg-tint-dyslexia",
  focus: "bg-tint-focus",
  academic: "bg-tint-academic",
};
