import { i as __toESM } from "../_runtime.mjs";
import { a as Trigger2, b as require_jsx_runtime, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChevronRight, S as ChevronsDown, T as BookOpen, _ as Eye, b as Copy, c as Settings2, d as Pause, f as Maximize2, g as Languages, h as Library, i as Upload, l as Search, m as LockOpen, n as VolumeX, o as StickyNote, p as Lock, r as Volume2, s as Sparkles, t as X, u as Play, v as Ellipsis, w as Bookmark, x as CircleAlert, y as Download } from "../_libs/lucide-react.mjs";
import { a as Card, c as Media, d as PanelWell, f as Progress, g as wordCount, h as cn, i as Badge, l as Panel, m as Skeleton, n as Button, o as Kbd, p as Separator, s as Mark, u as PanelHeader } from "./router-C8C4AVyK.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Trigger, i as Root2$1, n as Item2, r as Portal2, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { t as NumberFlow } from "../_libs/number-flow+number-flow__react.mjs";
import { i as ResponsiveContainer, n as XAxis, r as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-kVWdXKpb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var READING_PROFILES = {
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
		theme: "paper"
	},
	adhd: {
		id: "adhd",
		name: "ADHD",
		fontFamily: "sans",
		fontSize: 20,
		lineHeight: 1.8,
		letterSpacing: .02,
		wordSpacing: .05,
		bionicStrength: .6,
		focusHighlight: true,
		rhythmOptimization: true,
		rhythmCurve: "sentence",
		tint: "adhd",
		align: "left",
		theme: "paper"
	},
	dyslexia: {
		id: "dyslexia",
		name: "Dyslexia",
		fontFamily: "lexend",
		fontSize: 20,
		lineHeight: 2,
		letterSpacing: .05,
		wordSpacing: .1,
		bionicStrength: .4,
		focusHighlight: true,
		rhythmOptimization: true,
		rhythmCurve: "breath",
		tint: "dyslexia",
		align: "left",
		theme: "sage"
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
		theme: "paper"
	},
	academic: {
		id: "academic",
		name: "Academic",
		fontFamily: "serif",
		fontSize: 18,
		lineHeight: 1.7,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .3,
		focusHighlight: false,
		rhythmOptimization: true,
		rhythmCurve: "breath",
		tint: "academic",
		align: "left",
		theme: "sepia"
	},
	speed: {
		id: "speed",
		name: "Speed",
		fontFamily: "sans",
		fontSize: 18,
		lineHeight: 1.5,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .8,
		focusHighlight: true,
		rhythmOptimization: false,
		rhythmCurve: "steady",
		tint: "none",
		align: "left",
		theme: "paper"
	},
	adaptive: {
		id: "adaptive",
		name: "Adaptive",
		fontFamily: "sans",
		fontSize: 18,
		lineHeight: 1.7,
		letterSpacing: 0,
		wordSpacing: 0,
		bionicStrength: .35,
		focusHighlight: false,
		rhythmOptimization: true,
		rhythmCurve: "sentence",
		tint: "none",
		align: "left",
		theme: "paper"
	}
};
var NAMED_PRESETS = [
	{
		id: "deep-study",
		name: "Deep Study",
		targetWpm: 180,
		profile: {
			...READING_PROFILES.academic,
			name: "Deep Study",
			fontSize: 20,
			lineHeight: 1.9
		}
	},
	{
		id: "quick",
		name: "Quick Reading",
		targetWpm: 340,
		profile: {
			...READING_PROFILES.speed,
			name: "Quick Reading"
		}
	},
	{
		id: "night",
		name: "Night Reading",
		targetWpm: 200,
		profile: {
			...READING_PROFILES.default,
			name: "Night Reading",
			theme: "night",
			fontSize: 20,
			lineHeight: 1.8
		}
	},
	{
		id: "bible-study",
		name: "Bible Study",
		targetWpm: 160,
		profile: {
			...READING_PROFILES.academic,
			name: "Bible Study",
			lineHeight: 1.9,
			fontSize: 20
		}
	}
];
var COLOR_SCHEMES = [
	{
		id: "paper",
		label: "Paper",
		swatch: "#f0e8dc",
		ink: "#3d2a1f"
	},
	{
		id: "night",
		label: "Night",
		swatch: "#1a1612",
		ink: "#f3eadf"
	},
	{
		id: "contrast",
		label: "Contrast",
		swatch: "#fffdf6",
		ink: "#100c08"
	},
	{
		id: "sage",
		label: "Sage",
		swatch: "#e7eee6",
		ink: "#2c3f30"
	},
	{
		id: "ink",
		label: "Ink",
		swatch: "#14161a",
		ink: "#f2f4f8"
	},
	{
		id: "sepia",
		label: "Sepia",
		swatch: "#e9dcc8",
		ink: "#3a2818"
	}
];
var DARK_SCHEMES = ["night", "ink"];
var FONT_CHOICES = [
	{
		id: "sans",
		label: "Sans",
		hint: "System UI"
	},
	{
		id: "serif",
		label: "Serif",
		hint: "Newsreader"
	},
	{
		id: "lexend",
		label: "Lexend",
		hint: "Low crowding"
	},
	{
		id: "atkinson",
		label: "Atkinson",
		hint: "Distinct letters"
	},
	{
		id: "inclusive",
		label: "Inclusive",
		hint: "Accessible sans"
	},
	{
		id: "andika",
		label: "Andika",
		hint: "Literacy sans"
	},
	{
		id: "opendyslexic",
		label: "OpenDyslexic",
		hint: "Weighted bases"
	}
];
var RHYTHM_CHOICES = [
	{
		id: "steady",
		label: "Steady",
		hint: "Even pace"
	},
	{
		id: "sentence",
		label: "Sentence",
		hint: "Rest at true sentence ends"
	},
	{
		id: "breath",
		label: "Breath",
		hint: "Rest at clauses"
	}
];
var TABS = [
	{
		id: "explore",
		label: "Explore"
	},
	{
		id: "read",
		label: "Read"
	},
	{
		id: "library",
		label: "Library"
	},
	{
		id: "insights",
		label: "Insights"
	},
	{
		id: "settings",
		label: "Settings"
	}
];
var FONT_CLASS = {
	sans: "font-sans",
	serif: "font-serif",
	lexend: "font-lexend",
	atkinson: "font-atkinson",
	inclusive: "font-inclusive",
	andika: "font-andika",
	opendyslexic: "font-opendyslexic"
};
var TINT_CLASS = {
	none: "bg-bg",
	adhd: "bg-tint-adhd",
	dyslexia: "bg-tint-dyslexia",
	focus: "bg-tint-focus",
	academic: "bg-tint-academic"
};
/**
* WCAG 2.2 contrast (relative luminance, SC 1.4.3 / 1.4.6 / 1.4.11).
*
* Math:
*   1. sRGB 8-bit channel C → cs = C / 255
*   2. Linearize: cs <= 0.04045 ? cs/12.92 : ((cs+0.055)/1.055)^2.4
*   3. L = 0.2126 R + 0.7152 G + 0.0722 B
*   4. Contrast = (Llighter + 0.05) / (Ldarker + 0.05)
*
* Thresholds (normal text / large text ≥18pt or ≥14pt bold):
*   AA  4.5:1 / 3:1
*   AAA 7:1   / 4.5:1
*   UI components and graphics (SC 1.4.11): 3:1
*
* Tokens must stay in sync with html[data-scheme] in styles.css.
*/
var SCHEME_TOKENS = {
	paper: {
		bg: "#f0e8dc",
		fg: "#1c1611",
		muted: "#5c5046",
		subtle: "#7a6d60"
	},
	night: {
		bg: "#1a1612",
		fg: "#f3eadf",
		muted: "#c4b5a4",
		subtle: "#9a8c7c"
	},
	contrast: {
		bg: "#fffdf6",
		fg: "#100c08",
		muted: "#3d342c",
		subtle: "#5c5146"
	},
	sage: {
		bg: "#e7eee6",
		fg: "#1b2319",
		muted: "#4d5a4b",
		subtle: "#6b7868"
	},
	ink: {
		bg: "#14161a",
		fg: "#f2f4f8",
		muted: "#a8b1be",
		subtle: "#88919e"
	},
	sepia: {
		bg: "#e9dcc8",
		fg: "#2a1f14",
		muted: "#5c4a38",
		subtle: "#7a6550"
	}
};
function channel(value) {
	const srgb = value / 255;
	return srgb <= .04045 ? srgb / 12.92 : ((srgb + .055) / 1.055) ** 2.4;
}
/** sRGB 8-bit channel → linearized 0–1, WCAG 2.2. */
function linearizeChannel(value) {
	return channel(value);
}
function parseHex(hex) {
	const raw = hex.replace("#", "").trim();
	const full = raw.length === 3 ? raw.split("").map((ch) => ch + ch).join("") : raw;
	if (!/^[0-9a-fA-F]{6}$/.test(full)) throw new Error(`Invalid hex color: ${hex}`);
	return [
		Number.parseInt(full.slice(0, 2), 16),
		Number.parseInt(full.slice(2, 4), 16),
		Number.parseInt(full.slice(4, 6), 16)
	];
}
function isHexColor(value) {
	const raw = value.replace("#", "").trim();
	return /^[0-9a-fA-F]{3}$/.test(raw) || /^[0-9a-fA-F]{6}$/.test(raw);
}
function normalizeHex(value) {
	const raw = value.replace("#", "").trim();
	return `#${(raw.length === 3 ? raw.split("").map((ch) => ch + ch).join("") : raw).toLowerCase()}`;
}
/** Relative luminance L, 0–1, WCAG 2.2. */
function relativeLuminance(hex) {
	const [r, g, b] = parseHex(hex);
	return .2126 * channel(r) + .7152 * channel(g) + .0722 * channel(b);
}
function contrastRatio(foreground, background) {
	const l1 = relativeLuminance(foreground);
	const l2 = relativeLuminance(background);
	const lighter = Math.max(l1, l2);
	const darker = Math.min(l1, l2);
	return (lighter + .05) / (darker + .05);
}
/** Large text: 18pt (24px) or 14pt (18.67px) bold. */
function isLargeText(fontSizePx, bold = false) {
	if (fontSizePx >= 24) return true;
	return bold && fontSizePx >= 18.67;
}
function textContrastLevel(ratio, fontSizePx, bold = false) {
	const large = isLargeText(fontSizePx, bold);
	const aaa = large ? 4.5 : 7;
	const aa = large ? 3 : 4.5;
	if (ratio >= aaa) return "AAA";
	if (ratio >= aa) return "AA";
	return "fail";
}
/** Non-text UI components and graphics, SC 1.4.11. */
function uiContrastPass(ratio) {
	return ratio >= 3;
}
function describePair(foreground, background) {
	const fg = normalizeHex(foreground);
	const bg = normalizeHex(background);
	const ratio = contrastRatio(fg, bg);
	return {
		fg,
		bg,
		fgRgb: parseHex(fg),
		bgRgb: parseHex(bg),
		fgLum: relativeLuminance(fg),
		bgLum: relativeLuminance(bg),
		ratio,
		normal: textContrastLevel(ratio, 16, false),
		large: textContrastLevel(ratio, 24, false),
		ui: uiContrastPass(ratio)
	};
}
function evaluateScheme(theme, fontSizePx, bold = false) {
	const tokens = SCHEME_TOKENS[theme];
	const body = contrastRatio(tokens.fg, tokens.bg);
	const muted = contrastRatio(tokens.muted, tokens.bg);
	return {
		id: theme,
		body,
		muted,
		subtle: contrastRatio(tokens.subtle, tokens.bg),
		bodyLevel: textContrastLevel(body, fontSizePx, bold),
		mutedLevel: textContrastLevel(muted, fontSizePx, false)
	};
}
function bestContrastTheme(current) {
	return DARK_SCHEMES.includes(current) ? "ink" : "contrast";
}
function formatContrastRatio(ratio) {
	return `${ratio.toFixed(1)}:1`;
}
var MACHADO_2009 = {
	protanopia: [
		[
			.152286,
			1.052583,
			-.204868
		],
		[
			.114503,
			.786281,
			.099216
		],
		[
			-.003882,
			-.048116,
			1.051998
		]
	],
	deuteranopia: [
		[
			.367322,
			.860646,
			-.227968
		],
		[
			.280085,
			.672501,
			.047413
		],
		[
			-.01182,
			.04294,
			.968881
		]
	],
	tritanopia: [
		[
			1.255528,
			-.076749,
			-.178779
		],
		[
			-.078411,
			.930809,
			.147602
		],
		[
			.004733,
			.691367,
			.3039
		]
	]
};
var CVD_LABELS = {
	none: "Typical",
	protanopia: "Protanopia",
	deuteranopia: "Deuteranopia",
	tritanopia: "Tritanopia"
};
var CVD_HINTS = {
	none: "No simulation. Pair as measured.",
	protanopia: "No L-cone (red). Reds collapse toward olive.",
	deuteranopia: "No M-cone (green). Reds and greens meet.",
	tritanopia: "No S-cone (blue). Blues and yellows meet."
};
function isCvdKind(value) {
	return value === "none" || value === "protanopia" || value === "deuteranopia" || value === "tritanopia";
}
/** Inverse of WCAG linearize: linear 0–1 → sRGB 8-bit. */
function delinearizeChannel(linear) {
	const c = Math.min(1, Math.max(0, linear));
	const srgb = c <= .0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - .055;
	return Math.round(Math.min(1, Math.max(0, srgb)) * 255);
}
function multiply(matrix, rgb) {
	return [
		matrix[0][0] * rgb[0] + matrix[0][1] * rgb[1] + matrix[0][2] * rgb[2],
		matrix[1][0] * rgb[0] + matrix[1][1] * rgb[1] + matrix[1][2] * rgb[2],
		matrix[2][0] * rgb[0] + matrix[2][1] * rgb[1] + matrix[2][2] * rgb[2]
	];
}
function simulateLinearRgb(linear, kind) {
	if (kind === "none") return linear;
	const [r, g, b] = multiply(MACHADO_2009[kind], linear);
	return [
		Math.min(1, Math.max(0, r)),
		Math.min(1, Math.max(0, g)),
		Math.min(1, Math.max(0, b))
	];
}
function simulateRgb(rgb, kind) {
	const simulated = simulateLinearRgb([
		linearizeChannel(rgb[0]),
		linearizeChannel(rgb[1]),
		linearizeChannel(rgb[2])
	], kind);
	return [
		delinearizeChannel(simulated[0]),
		delinearizeChannel(simulated[1]),
		delinearizeChannel(simulated[2])
	];
}
function toHex(channel) {
	return channel.toString(16).padStart(2, "0");
}
function rgbToHex(rgb) {
	return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
}
function simulateHex(hex, kind) {
	const rgb = parseHex(hex);
	if (kind === "none") return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
	return rgbToHex(simulateRgb(rgb, kind));
}
function simulatedContrast(foreground, background, kind) {
	return contrastRatio(simulateHex(foreground, kind), simulateHex(background, kind));
}
/** True when two colors were far apart in sRGB and the CVD transform pulls them together. */
function hueDistinctionLost(foreground, background, kind) {
	if (kind === "none") return false;
	const original = rgbDistance(parseHex(foreground), parseHex(background));
	const seen = rgbDistance(parseHex(simulateHex(foreground, kind)), parseHex(simulateHex(background, kind)));
	return original >= 80 && seen < original * .45;
}
/** Euclidean distance in sRGB 8-bit. Used to show hue collapse, not perception. */
function rgbDistance(a, b) {
	const dr = a[0] - b[0];
	const dg = a[1] - b[1];
	const db = a[2] - b[2];
	return Math.sqrt(dr * dr + dg * dg + db * db);
}
/** Hex paints that match html[data-scheme] in styles.css. */
var SCHEME_PAINT = {
	paper: {
		"--color-bg": "#f0e8dc",
		"--color-surface": "#faf4ea",
		"--color-fg": "#1c1611",
		"--color-muted": "#5c5046",
		"--color-subtle": "#7a6d60",
		"--color-primary": "#3d2a1f",
		"--color-primary-fg": "#f4ece1",
		"--color-accent": "#7a4332"
	},
	night: {
		"--color-bg": "#1a1612",
		"--color-surface": "#241e18",
		"--color-fg": "#f3eadf",
		"--color-muted": "#c4b5a4",
		"--color-subtle": "#9a8c7c",
		"--color-primary": "#f3eadf",
		"--color-primary-fg": "#1a1612",
		"--color-accent": "#d4a090"
	},
	contrast: {
		"--color-bg": "#fffdf6",
		"--color-surface": "#ffffff",
		"--color-fg": "#100c08",
		"--color-muted": "#3d342c",
		"--color-subtle": "#5c5146",
		"--color-primary": "#100c08",
		"--color-primary-fg": "#fffdf6",
		"--color-accent": "#6b2e1f"
	},
	sage: {
		"--color-bg": "#e7eee6",
		"--color-surface": "#f3f7f2",
		"--color-fg": "#1b2319",
		"--color-muted": "#4d5a4b",
		"--color-subtle": "#6b7868",
		"--color-primary": "#2c3f30",
		"--color-primary-fg": "#f3f7f2",
		"--color-accent": "#3f5c45"
	},
	ink: {
		"--color-bg": "#14161a",
		"--color-surface": "#1c1f26",
		"--color-fg": "#f2f4f8",
		"--color-muted": "#a8b1be",
		"--color-subtle": "#88919e",
		"--color-primary": "#f2f4f8",
		"--color-primary-fg": "#14161a",
		"--color-accent": "#a8b2c0"
	},
	sepia: {
		"--color-bg": "#e9dcc8",
		"--color-surface": "#f4ead9",
		"--color-fg": "#2a1f14",
		"--color-muted": "#5c4a38",
		"--color-subtle": "#7a6550",
		"--color-primary": "#3a2818",
		"--color-primary-fg": "#f4ead9",
		"--color-accent": "#8a4b32"
	}
};
var PAINT_KEYS = Object.keys(SCHEME_PAINT.paper);
/** Remap the live theme tokens through Machado, or clear the override. */
function applyCvdPaint(theme, kind) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	if (kind === "none") {
		for (const key of PAINT_KEYS) root.style.removeProperty(key);
		delete root.dataset.cvd;
		return;
	}
	const paint = SCHEME_PAINT[theme];
	for (const key of PAINT_KEYS) root.style.setProperty(key, simulateHex(paint[key] ?? "#000000", kind));
	root.dataset.cvd = kind;
}
var SCHEMES = [
	"paper",
	"night",
	"contrast",
	"sage",
	"ink",
	"sepia"
];
function isThemeId(value) {
	return typeof value === "string" && SCHEMES.includes(value);
}
function isDarkScheme(theme) {
	return DARK_SCHEMES.includes(theme);
}
function applyColorScheme(theme, cvd) {
	if (typeof document === "undefined") return;
	document.documentElement.dataset.scheme = theme;
	const stored = document.documentElement.dataset.cvd;
	applyCvdPaint(theme, cvd ?? (isCvdKind(stored) ? stored : "none"));
}
var ADAPTIVE_THRESHOLDS = {
	pauseIdleMs: 8e3,
	pauseMinMs: 4e3,
	progressNoise: .008,
	rereadDrop: .12,
	rereadMinHighWater: .25,
	wpmMinElapsedMs: 8e3,
	wpmMinWords: 8,
	frequentRereadCount: 2,
	frequentPauseCount: 2,
	frequentPauseMinMs: 8e3,
	slowVsTargetRatio: .72,
	lineHeightStep: .1,
	lineHeightMax: 2.2,
	fontSizeStep: 1,
	fontSizeMax: 28,
	wpmStepDown: 20,
	wpmStepUp: 15,
	targetWpmMin: 120,
	targetWpmMax: 480
};
function calcCurrentWpm(wordsRead, elapsedActiveMs) {
	if (wordsRead < ADAPTIVE_THRESHOLDS.wpmMinWords) return null;
	if (elapsedActiveMs < ADAPTIVE_THRESHOLDS.wpmMinElapsedMs) return null;
	const minutes = elapsedActiveMs / 6e4;
	if (minutes <= 0) return null;
	const wpm = Math.max(1, Math.round(wordsRead / minutes));
	if (wpm > ADAPTIVE_THRESHOLDS.targetWpmMax) return null;
	return wpm;
}
function isMeaningfulProgressChange(from, to) {
	return Math.abs(to - from) >= ADAPTIVE_THRESHOLDS.progressNoise;
}
function isReread(highWater, next) {
	if (highWater < ADAPTIVE_THRESHOLDS.rereadMinHighWater) return false;
	return highWater - next >= ADAPTIVE_THRESHOLDS.rereadDrop;
}
function clampTargetWpm(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.targetWpmMax, Math.max(ADAPTIVE_THRESHOLDS.targetWpmMin, Math.round(value / 10) * 10));
}
function clampLineHeight(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.lineHeightMax, Math.max(1.4, Math.round(value * 10) / 10));
}
function clampFontSize(value) {
	return Math.min(ADAPTIVE_THRESHOLDS.fontSizeMax, Math.max(14, Math.round(value)));
}
function prolongedPauses(metrics) {
	return metrics.pauses.filter((pause) => pause.durationMs >= ADAPTIVE_THRESHOLDS.frequentPauseMinMs).length;
}
function isStruggling(metrics) {
	if (metrics.feel === "slow") return true;
	if (metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount) return true;
	return prolongedPauses(metrics) >= ADAPTIVE_THRESHOLDS.frequentPauseCount;
}
/**
* Pure adaptive engine. Never mutates settings.
* Watches pace, pauses, rereads, feel, and contrast. Recommends only.
*/
function recommendAdaptations(metrics, settings, dismissedRules = [], lockedSettings = []) {
	const dismissed = new Set(dismissedRules);
	const locked = new Set(lockedSettings);
	if (metrics.feel === "slow" && !dismissed.has("pace-strain") && !locked.has("targetWpm")) {
		const next = clampTargetWpm(settings.targetWpm - ADAPTIVE_THRESHOLDS.wpmStepDown);
		if (next < settings.targetWpm) return {
			id: "pace-strain:targetWpm",
			rule: "pace-strain",
			setting: "targetWpm",
			recommendedValue: next,
			reason: "NeuroLens recommends slowing your target pace so this passage is easier to follow.",
			why: "You marked this stretch as too fast. A slightly slower target gives the words more room to land."
		};
	}
	if (!dismissed.has("contrast-low") && !locked.has("theme")) {
		const report = evaluateScheme(settings.theme, settings.fontSize);
		const better = bestContrastTheme(settings.theme);
		const failsAa = report.bodyLevel === "fail";
		if (better !== settings.theme && (failsAa || isStruggling(metrics))) {
			const label = better === "ink" ? "Ink" : "Contrast";
			return {
				id: `contrast-low:${better}`,
				rule: "contrast-low",
				setting: "theme",
				recommendedValue: better,
				reason: `NeuroLens recommends the ${label} scheme so the line is easier to hold.`,
				why: failsAa ? `This page is under the WCAG AA contrast bar at ${settings.fontSize}px. ${label} keeps your light or dark room and raises the ink-to-paper ratio.` : `Rereads, pauses, or a rushed feel often mean the page is working too hard. ${label} raises contrast without leaving the palette you already chose.`
			};
		}
	}
	if (metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount && !dismissed.has("rereading") && !locked.has("lineHeight")) {
		const next = clampLineHeight(settings.lineHeight + ADAPTIVE_THRESHOLDS.lineHeightStep);
		if (next > settings.lineHeight) return {
			id: "rereading:lineHeight",
			rule: "rereading",
			setting: "lineHeight",
			recommendedValue: next,
			reason: "Your reading pattern suggests slightly more spacing may improve visual clarity.",
			why: "You moved back through the page several times. Extra line spacing can make it easier to keep your place."
		};
	}
	if (metrics.rereadCount >= ADAPTIVE_THRESHOLDS.frequentRereadCount && settings.lineHeight >= ADAPTIVE_THRESHOLDS.lineHeightMax - .05 && !dismissed.has("type-size") && !locked.has("fontSize")) {
		const next = clampFontSize(settings.fontSize + ADAPTIVE_THRESHOLDS.fontSizeStep);
		if (next > settings.fontSize) return {
			id: "type-size:fontSize",
			rule: "type-size",
			setting: "fontSize",
			recommendedValue: next,
			reason: "NeuroLens recommends a slightly larger type size after repeated rereads.",
			why: "Line spacing is already open. A little more size can reduce crowding on the next pass."
		};
	}
	if (prolongedPauses(metrics) >= ADAPTIVE_THRESHOLDS.frequentPauseCount && !dismissed.has("pauses") && !locked.has("focusHighlight")) {
		if (!settings.focusHighlight) return {
			id: "pauses:focusHighlight",
			rule: "pauses",
			setting: "focusHighlight",
			recommendedValue: true,
			reason: "NeuroLens recommends Focus Mode to make it easier to pick up after a pause.",
			why: "Reading stopped for longer stretches. Highlighting the current line can help you find your place again."
		};
	}
	if ((metrics.feel === "fast" || metrics.feel === "right" && metrics.currentWpm != null && metrics.currentWpm < settings.targetWpm * ADAPTIVE_THRESHOLDS.slowVsTargetRatio) && metrics.rereadCount < ADAPTIVE_THRESHOLDS.frequentRereadCount && !dismissed.has("strong-performance") && !locked.has("targetWpm")) {
		const next = clampTargetWpm(settings.targetWpm + ADAPTIVE_THRESHOLDS.wpmStepUp);
		if (next > settings.targetWpm) return {
			id: "strong-performance:targetWpm",
			rule: "strong-performance",
			setting: "targetWpm",
			recommendedValue: next,
			reason: "You’re reading comfortably, so NeuroLens recommends a small speed increase.",
			why: metrics.feel === "fast" ? "You marked this page as too slow. A slightly higher target matches the pace you already hold." : "Your actual pace is well below the target you set, and the page still felt right."
		};
	}
	return null;
}
/**
* Punkt-inspired sentence boundary detection.
*
* Naive splits on `.!?` break on Dr., U.S., e.g., 3.14, initials, and ellipsis.
* These rules follow Kiss & Strunk (2006): candidate terminator, abbreviation
* lists, initials, decimals, and next-token case / sentence starters.
*/
var TITLES = /* @__PURE__ */ new Set([
	"mr",
	"mrs",
	"ms",
	"mx",
	"dr",
	"prof",
	"sr",
	"jr",
	"st",
	"mt",
	"rev",
	"hon",
	"gen",
	"col",
	"lt",
	"sgt",
	"capt",
	"cmdr",
	"adm",
	"pres",
	"gov",
	"sen",
	"rep",
	"amb"
]);
var NEVER_END = /* @__PURE__ */ new Set([
	...TITLES,
	"vs",
	"v",
	"fig",
	"vol",
	"no",
	"nos",
	"pp",
	"p",
	"ch",
	"sec",
	"eq",
	"approx",
	"ca",
	"cf",
	"viz",
	"dept",
	"univ",
	"assn",
	"inc",
	"ltd",
	"corp",
	"co",
	"jan",
	"feb",
	"mar",
	"apr",
	"jun",
	"jul",
	"aug",
	"sep",
	"sept",
	"oct",
	"nov",
	"dec",
	"mon",
	"tue",
	"wed",
	"thu",
	"fri",
	"sat",
	"sun",
	"est",
	"edt",
	"pst",
	"cst",
	"gmt",
	"utc",
	"am",
	"pm",
	"eg",
	"ie",
	"nb"
]);
var MAY_END = /* @__PURE__ */ new Set([
	"etc",
	"al",
	"us",
	"uk",
	"un",
	"eu",
	"usa",
	"phd",
	"md",
	"ba"
]);
var MULTI_PERIOD = /* @__PURE__ */ new Set([
	"e.g",
	"i.e",
	"u.s",
	"u.k",
	"u.n",
	"e.u",
	"ph.d",
	"m.d",
	"b.a",
	"a.m",
	"p.m",
	"n.b",
	"et.al"
]);
var SENTENCE_STARTERS = /* @__PURE__ */ new Set([
	"the",
	"this",
	"that",
	"these",
	"those",
	"it",
	"its",
	"he",
	"she",
	"we",
	"they",
	"i",
	"you",
	"a",
	"an",
	"in",
	"on",
	"at",
	"for",
	"but",
	"and",
	"or",
	"if",
	"when",
	"while",
	"after",
	"before",
	"although",
	"however",
	"therefore",
	"thus",
	"moreover",
	"furthermore",
	"meanwhile",
	"what",
	"why",
	"how",
	"where",
	"who",
	"which",
	"then",
	"next",
	"later",
	"finally",
	"still",
	"yet",
	"so",
	"because",
	"since",
	"here",
	"there",
	"today",
	"tomorrow",
	"yesterday"
]);
var TRAILING_CLOSERS = /[\]"'”’)\]]+$/;
function parseToken(token) {
	const trimmed = token.trim();
	const closers = trimmed.match(TRAILING_CLOSERS)?.[0] ?? "";
	const core = closers ? trimmed.slice(0, -closers.length) : trimmed;
	const punctMatch = core.match(/^(.*?)([.!?…]+)$/u);
	if (!punctMatch) return {
		word: core,
		punct: "",
		closers
	};
	return {
		word: punctMatch[1] ?? "",
		punct: punctMatch[2] ?? "",
		closers
	};
}
function abbrevKey(word) {
	return word.replace(/[.]/g, "").toLowerCase();
}
function multiKey(word) {
	return word.replace(/\.$/, "").toLowerCase();
}
function isTitleOrNeverEnd(word) {
	const key = abbrevKey(word);
	const dotted = multiKey(word);
	if (MAY_END.has(key)) return false;
	return NEVER_END.has(key) || MULTI_PERIOD.has(dotted) || TITLES.has(key);
}
function isMayEndAbbrev(word) {
	const key = abbrevKey(word);
	const dotted = multiKey(word);
	return MAY_END.has(key) || MULTI_PERIOD.has(dotted) && MAY_END.has(key);
}
function isInitial(word, punct) {
	if (!punct.startsWith(".")) return false;
	return /^[A-Za-z]$/.test(word);
}
function nextLooksLikeName(next) {
	const parsed = parseToken(next);
	if (isInitial(parsed.word, parsed.punct || ".")) return true;
	if (!/^[A-Z]/.test(next)) return false;
	return !isSentenceStarter(next);
}
function isSentenceStarter(next) {
	const letters = (parseToken(next).word || next).replace(/[^A-Za-z]/g, "");
	if (!letters) return false;
	return SENTENCE_STARTERS.has(letters.toLowerCase());
}
function startsLower(next) {
	const letter = next.match(/[A-Za-z]/);
	return Boolean(letter && letter[0] === letter[0].toLowerCase() && letter[0] !== letter[0].toUpperCase());
}
function isDecimalToken(token) {
	return /^\d+[.,]\d+[.,]?\d*$/.test(token.replace(TRAILING_CLOSERS, ""));
}
function nextWordFrom(tokens, index) {
	for (let i = index + 1; i < tokens.length; i += 1) if (!tokens[i]?.space) return tokens[i]?.value ?? "";
	return "";
}
/**
* True when `token` is a real sentence end, not Dr. / U.S. / 3.14 / J. K.
* `next` is the following word (empty at end of text).
*/
function isSentenceBoundary(token, next = "") {
	if (isDecimalToken(token)) return false;
	if (/@|https?:\/\//i.test(token)) return false;
	const { word, punct } = parseToken(token);
	if (!punct) return false;
	if (/[!?]/u.test(punct)) {
		if (next && startsLower(next)) return false;
		return true;
	}
	if (isTitleOrNeverEnd(word) && !isMayEndAbbrev(word)) return false;
	if (isInitial(word, punct)) {
		if (!next) return true;
		if (nextLooksLikeName(next)) return false;
		return isSentenceStarter(next);
	}
	if (isMayEndAbbrev(word)) {
		if (!next) return true;
		if (startsLower(next)) return false;
		return isSentenceStarter(next);
	}
	if (next && startsLower(next)) return false;
	return true;
}
function tokenize(text) {
	const tokens = [];
	let index = 0;
	while (index < text.length) {
		const space = /\s/.test(text[index] ?? "");
		let end = index + 1;
		while (end < text.length && /\s/.test(text[end] ?? "") === space) end += 1;
		tokens.push({
			start: index,
			end,
			value: text.slice(index, end),
			space
		});
		index = end;
	}
	return tokens;
}
/** Original slices, including trailing space after a boundary, so spans join back to the source. */
function splitSentenceSpans(text) {
	if (!text.trim()) return [];
	const tokens = tokenize(text);
	const spans = [];
	let spanStart = 0;
	for (let i = 0; i < tokens.length; i += 1) {
		const token = tokens[i];
		if (token.space) continue;
		const next = nextWordFrom(tokens, i);
		if (!isSentenceBoundary(token.value, next)) continue;
		let end = token.end;
		const following = tokens[i + 1];
		if (following?.space) end = following.end;
		const slice = text.slice(spanStart, end);
		if (slice.trim()) spans.push(slice);
		spanStart = end;
	}
	const rest = text.slice(spanStart);
	if (rest.trim()) spans.push(rest);
	return spans.length > 0 ? spans : [text];
}
function splitSentences(text) {
	return splitSentenceSpans(text.replace(/\s+/g, " ").trim()).map((span) => span.trim()).filter(Boolean);
}
/** Extra dwell at sentence ends vs. a steady tick. */
var SENTENCE_REST = 1.85;
/** Extra dwell at commas / dashes when breathing. */
var CLAUSE_REST = 1.38;
/** Floor so a rest never stalls auto-scroll. */
var MIN_PACE = .42;
function resolveRhythmCurve(curve, optimization) {
	if (curve === "steady" || curve === "sentence" || curve === "breath") return curve;
	return optimization ? "sentence" : "steady";
}
function isSentenceRest(token, next = "") {
	return isSentenceBoundary(token, next);
}
function isClauseRest(token) {
	return /[,;:—–]["'”’)]*$/.test(token.trim());
}
/** How much slower than target this token should be (1 = target). */
function paceMultiplier(token, curve, next = "") {
	if (curve === "steady") return 1;
	if (isSentenceRest(token, next)) return 1 / SENTENCE_REST;
	if (curve === "breath" && isClauseRest(token)) return 1 / CLAUSE_REST;
	return 1;
}
function rsvpDelayMs(token, wpm, curve, next = "") {
	const base = 60 / Math.max(80, wpm) * 1e3;
	const pace = paceMultiplier(token, curve, next);
	return Math.round(base / Math.max(MIN_PACE, pace));
}
/** Spritz-style optimal recognition point inside a token. */
function orpIndex(word) {
	const n = word.length;
	if (n <= 1) return 0;
	if (n <= 3) return 0;
	if (n <= 5) return 1;
	if (n <= 9) return 2;
	if (n <= 13) return 3;
	return 4;
}
function splitOrp(word) {
	if (!word) return {
		before: "",
		orp: "",
		after: ""
	};
	const index = Math.min(word.length - 1, orpIndex(word));
	return {
		before: word.slice(0, index),
		orp: word[index] ?? "",
		after: word.slice(index + 1)
	};
}
/** Pixels to advance this frame so remaining distance maps onto remaining words at target WPM. */
function autoScrollDeltaPx(opts) {
	const { remainingPx, remainingWords, targetWpm, dtSec, focusToken, nextToken = "", curve } = opts;
	if (remainingPx <= 0 || remainingWords <= 0) return 0;
	return remainingPx / remainingWords * (targetWpm / 60) * paceMultiplier(focusToken, curve, nextToken) * dtSec;
}
function tokenContextAtProgress(words, progress) {
	if (words.length === 0) return {
		token: "",
		next: "",
		index: 0
	};
	const index = Math.min(words.length - 1, Math.max(0, Math.floor(progress * words.length)));
	return {
		token: words[index] ?? "",
		next: words[index + 1] ?? "",
		index
	};
}
var SESSIONS_KEY = "neurolens-sessions";
var PROFILE_KEY = "neurolens-profile";
var MODE_KEY = "neurolens-mode";
var TARGET_WPM_KEY = "neurolens-target-wpm";
var LOCKS_KEY = "neurolens-locks";
var SAVED_KEY = "neurolens-saved-profiles";
var BOOKMARKS_KEY = "neurolens-bookmarks";
var HIGHLIGHTS_KEY = "neurolens-highlights";
var CVD_KEY = "neurolens-cvd";
var EMPTY_READING = {
	progress: 0,
	wordCount: 0,
	wordsRead: 0,
	elapsedActiveMs: 0,
	currentWpm: null,
	pauses: [],
	rereads: [],
	startedAt: null
};
var TAB_ORDER = [
	"explore",
	"read",
	"library",
	"insights",
	"settings"
];
function persistProfile(profile, mode) {
	localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
	localStorage.setItem(MODE_KEY, mode);
}
var FONT_IDS = [
	"sans",
	"serif",
	"lexend",
	"atkinson",
	"inclusive",
	"andika",
	"opendyslexic"
];
function normalizeProfile(profile) {
	const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
	return {
		...profile,
		fontFamily: FONT_IDS.includes(profile.fontFamily) ? profile.fontFamily : "sans",
		theme: isThemeId(profile.theme) ? profile.theme : "paper",
		rhythmCurve,
		rhythmOptimization: rhythmCurve !== "steady"
	};
}
function persistAndApply(profile, mode) {
	const next = normalizeProfile(profile);
	persistProfile(next, mode);
	applyColorScheme(next.theme);
	return next;
}
function persistSessions(sessions) {
	localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}
function persistTargetWpm(value) {
	localStorage.setItem(TARGET_WPM_KEY, String(value));
}
function textKey(text) {
	return text.trim().slice(0, 48) || "default";
}
function refreshRecommendation(reading, targetWpm, profile, mode, dismissedRules, existing, feel, lockedSettings) {
	if (mode !== "adaptive") return null;
	if (existing) return existing;
	return recommendAdaptations({
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
		feel
	}, {
		targetWpm,
		lineHeight: profile.lineHeight,
		focusHighlight: profile.focusHighlight,
		theme: profile.theme,
		fontSize: profile.fontSize
	}, dismissedRules, lockedSettings);
}
function withSessionMetrics(sessions, text, reading) {
	if (!text) return sessions;
	return sessions.map((session) => session.content === text ? {
		...session,
		progress: reading.progress,
		currentWpm: reading.currentWpm,
		pauseCount: reading.pauses.length,
		rereadCount: reading.rereads.length
	} : session);
}
function previousFor(setting, profile, targetWpm) {
	if (setting === "targetWpm") return targetWpm;
	if (setting === "lineHeight") return profile.lineHeight;
	if (setting === "theme") return profile.theme;
	if (setting === "fontSize") return profile.fontSize;
	return profile.focusHighlight;
}
var useAppStore = create((set, get) => ({
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
	hydrate: () => {
		if (get().hydrated || typeof window === "undefined") return;
		try {
			const sessions = JSON.parse(localStorage.getItem(SESSIONS_KEY) || "[]");
			const savedProfile = localStorage.getItem(PROFILE_KEY);
			const savedMode = localStorage.getItem(MODE_KEY) ?? "default";
			const mode = READING_PROFILES[savedMode] ? savedMode : "default";
			const profile = normalizeProfile(savedProfile ? {
				...READING_PROFILES[mode],
				...JSON.parse(savedProfile)
			} : READING_PROFILES[mode]);
			const savedWpm = Number(localStorage.getItem(TARGET_WPM_KEY));
			const savedCvd = localStorage.getItem(CVD_KEY);
			const cvdPreview = isCvdKind(savedCvd) ? savedCvd : "none";
			applyColorScheme(profile.theme, cvdPreview);
			const lockedSettings = JSON.parse(localStorage.getItem(LOCKS_KEY) || "[]");
			const savedProfiles = JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
			const bookmarks = JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
			const highlights = JSON.parse(localStorage.getItem(HIGHLIGHTS_KEY) || "{}");
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
				hydrated: true
			});
		} catch {
			set({ hydrated: true });
		}
	},
	setTab: (tab) => {
		const current = get().tab;
		if (tab === "read" && !get().text) return;
		set({
			tab,
			direction: TAB_ORDER.indexOf(tab) >= TAB_ORDER.indexOf(current) ? 1 : -1,
			autoScrolling: false,
			controlsOpen: tab === "read" ? get().controlsOpen : false
		});
	},
	startReading: (raw, meta) => {
		const text = raw.trim();
		if (!text) return;
		const title = meta?.title || text.split(/\n/)[0]?.slice(0, 60) || "Untitled reading";
		const kind = meta?.kind ?? "text";
		const sessions = [{
			title,
			content: text,
			openedAt: Date.now(),
			progress: 0,
			kind,
			sourceId: meta?.sourceId
		}, ...get().sessions.filter((session) => session.content !== text)].slice(0, 12);
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
			reading: {
				...EMPTY_READING,
				startedAt: Date.now()
			},
			recommendation: null,
			dismissedRules: [],
			lastAdaptiveChange: null,
			readingFeel: null
		});
	},
	setMode: (mode) => {
		const current = get().profile;
		const next = persistAndApply({
			...READING_PROFILES[mode],
			theme: current.theme,
			align: current.align
		}, mode);
		const state = get();
		set({
			mode,
			profile: next,
			recommendation: mode === "adaptive" ? refreshRecommendation(state.reading, state.targetWpm, next, mode, state.dismissedRules, null, state.readingFeel, state.lockedSettings) : null
		});
	},
	setProfile: (profile) => {
		set({ profile: persistAndApply(profile, get().mode) });
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
		const reading = {
			...state.reading,
			...patch,
			startedAt: state.reading.startedAt ?? Date.now()
		};
		reading.currentWpm = calcCurrentWpm(reading.wordsRead, reading.elapsedActiveMs);
		const sessions = withSessionMetrics(state.sessions, state.text, reading);
		set({
			reading,
			sessions,
			recommendation: refreshRecommendation(reading, state.targetWpm, state.profile, state.mode, state.dismissedRules, state.recommendation, state.readingFeel, state.lockedSettings)
		});
		const prev = state.sessions.find((session) => session.content === state.text);
		if (!prev || Math.abs((prev.progress ?? 0) - reading.progress) >= .05 || (prev.pauseCount ?? 0) !== reading.pauses.length || (prev.rereadCount ?? 0) !== reading.rereads.length) persistSessions(sessions);
	},
	applyRecommendation: () => {
		const { recommendation, profile, targetWpm, lockedSettings } = get();
		if (!recommendation) return;
		if (lockedSettings.includes(recommendation.setting)) {
			set({
				recommendation: null,
				dismissedRules: [...get().dismissedRules, recommendation.rule]
			});
			return;
		}
		const previousValue = previousFor(recommendation.setting, profile, targetWpm);
		if (recommendation.setting === "targetWpm" && typeof recommendation.recommendedValue === "number") {
			persistTargetWpm(recommendation.recommendedValue);
			set({ targetWpm: recommendation.recommendedValue });
		} else if (recommendation.setting === "lineHeight" && typeof recommendation.recommendedValue === "number") set({ profile: persistAndApply({
			...profile,
			lineHeight: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "fontSize" && typeof recommendation.recommendedValue === "number") set({ profile: persistAndApply({
			...profile,
			fontSize: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "focusHighlight" && typeof recommendation.recommendedValue === "boolean") set({ profile: persistAndApply({
			...profile,
			focusHighlight: recommendation.recommendedValue
		}, get().mode) });
		else if (recommendation.setting === "theme" && typeof recommendation.recommendedValue === "string" && isThemeId(recommendation.recommendedValue)) set({ profile: persistAndApply({
			...profile,
			theme: recommendation.recommendedValue
		}, get().mode) });
		set({
			recommendation: null,
			dismissedRules: [...get().dismissedRules, recommendation.rule],
			lastAdaptiveChange: {
				setting: recommendation.setting,
				previousValue,
				nextValue: recommendation.recommendedValue
			}
		});
	},
	dismissRecommendation: () => {
		const { recommendation, dismissedRules } = get();
		if (!recommendation) return;
		set({
			recommendation: null,
			dismissedRules: [...dismissedRules, recommendation.rule]
		});
	},
	undoAdaptiveChange: () => {
		const change = get().lastAdaptiveChange;
		if (!change) return;
		const profile = get().profile;
		if (change.setting === "targetWpm" && typeof change.previousValue === "number") {
			persistTargetWpm(change.previousValue);
			set({
				targetWpm: change.previousValue,
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "lineHeight" && typeof change.previousValue === "number") {
			set({
				profile: persistAndApply({
					...profile,
					lineHeight: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "fontSize" && typeof change.previousValue === "number") {
			set({
				profile: persistAndApply({
					...profile,
					fontSize: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "focusHighlight" && typeof change.previousValue === "boolean") {
			set({
				profile: persistAndApply({
					...profile,
					focusHighlight: change.previousValue
				}, get().mode),
				lastAdaptiveChange: null
			});
			return;
		}
		if (change.setting === "theme" && typeof change.previousValue === "string" && isThemeId(change.previousValue)) set({
			profile: persistAndApply({
				...profile,
				theme: change.previousValue
			}, get().mode),
			lastAdaptiveChange: null
		});
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
		set({
			profile,
			targetWpm: saved.targetWpm
		});
	},
	saveCurrentProfile: (name) => {
		const trimmed = name.trim();
		if (!trimmed) return;
		const savedProfiles = [{
			id: `user-${Date.now()}`,
			name: trimmed,
			profile: get().profile,
			targetWpm: get().targetWpm
		}, ...get().savedProfiles].slice(0, 8);
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
		const highlights = {
			...get().highlights,
			[key]: nextForKey
		};
		localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(highlights));
		set({ highlights });
	},
	toggleBookmark: () => {
		const { text, reading, bookmarks, sourceKind } = get();
		if (!text) return;
		const next = bookmarks.find((item) => item.content === text) ? bookmarks.filter((item) => item.content !== text) : [{
			id: `bm-${Date.now()}`,
			title: text.split(/\n/)[0]?.slice(0, 60) || "Bookmark",
			content: text,
			progress: reading.progress,
			savedAt: Date.now(),
			kind: sourceKind
		}, ...bookmarks].slice(0, 24);
		localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
		set({ bookmarks: next });
	},
	submitReadingFeel: (feel) => {
		const state = get();
		set({
			readingFeel: feel,
			recommendation: refreshRecommendation(state.reading, state.targetWpm, state.profile, state.mode, state.dismissedRules, null, feel, state.lockedSettings)
		});
	},
	setCvdPreview: (kind) => {
		localStorage.setItem(CVD_KEY, kind);
		applyColorScheme(get().profile.theme, kind);
		set({ cvdPreview: kind });
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
			sourceId: null
		});
		applyColorScheme("paper", "none");
	}
}));
function TooltipProvider({ children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 280,
		skipDelayDuration: 420,
		...props,
		children
	});
}
var Tooltip = Root3;
var TooltipTrigger = Trigger$1;
function TooltipContent({ className, sideOffset = 8, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
		sideOffset,
		className: cn("z-80 rounded-sm bg-fg px-2 py-1 text-xs text-primary-fg shadow-float", "origin-[var(--radix-tooltip-content-transform-origin)]", "data-[state=delayed-open]:animate-[menu-in_125ms_var(--ease-out)]", "data-[state=instant-open]:animate-none", "data-[state=closed]:animate-[menu-out_80ms_var(--ease-out)]", "motion-reduce:data-[state=delayed-open]:animate-[overlay-in_120ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_80ms_ease]", className),
		...props
	}) });
}
var SAMPLE_TEXTS = [
	{
		title: "Academic abstract",
		image: "/images/reading-room.jpg",
		alt: "A sunlit university reading room",
		text: `The phenomenon of cognitive friction in digital reading environments has significant implications for neurodivergent learners. This study investigates how adaptive formatting reduces visual entropy and enhances focus retention in ADHD populations.

When a page presents too many competing cues at once, the reader spends energy on orientation rather than meaning. Dense blocks of even type, low contrast, and a missing sense of place on the line all raise the cost of entry. That cost is not evenly distributed. Readers who already work harder to hold attention, decode letterforms, or recover after a pause pay it more often, and they pay it in shorter sessions.

Adaptive formatting does not rewrite the argument. It changes the conditions under which the argument can be seen. Emphasis on the first letters of a word, slightly more space between lines, and a calmer background are small interventions. In combination they reduce the number of times the eye has to relocate before a sentence becomes available. The hypothesis is straightforward: if visual entropy falls, fixation lasts longer, and the first pass through a difficult paragraph becomes less exhausting.

The present paper reports on a within-subjects design. Participants read matched passages in a conventional layout and in an adapted layout, then answered comprehension items that were written to probe gist rather than trivia. Time on task, backward navigation, and self-reported fatigue were recorded alongside accuracy. We did not assume that faster was better. A reader who finishes quickly but cannot recall the claim has not been helped.

Results are discussed in terms of first-pass fluency rather than speed records. For many participants, the adapted view did not make the prose simpler. It made the prose easier to stay with. That distinction matters for any tool that claims to support attention. A calmer page is not a shorter one. It is a page that asks less of the systems already under load.

Limitations are stated plainly. The sample was small, the passages were academic rather than literary, and the study cannot speak to long-form reading over days. What it can speak to is the first thirty seconds of a hard paragraph — the window in which many readers decide whether to continue. If that window is kinder, more of the argument gets a chance.`
	},
	{
		title: "Complex documentation",
		image: "/images/hands.jpg",
		alt: "Hands turning a paperback on a walnut table",
		text: `NeuroLens utilizes a recursive word-weighting algorithm to transform static strings into fixation-aware content. By dynamically adjusting the contrast ratio of initial graphemes, we optimize the saccadic rhythm of the human eye.

The pipeline is intentionally local. Text is split into paragraphs, then into sentences, then into tokens. Dr. Chen measured 3.14 ms of lag in the U.S. lab. The next trial confirmed it. Each token receives a weight based on length and a profile-selected strength. The first portion of the token is marked for emphasis; the remainder is left to ordinary weight. Nothing is sent to a remote model. The transformation is a deterministic function of the current profile.

Rhythm optimization is a second pass. After weights are assigned, the renderer can insert a slightly stronger break after commas and clause boundaries so the line has a pulse. This is not decoration. It is a way of giving the eye a place to land when a sentence runs long. Profiles that prefer a quieter page can disable it.

Auto-scroll is paced by a target words-per-minute value. That value is a setting, not a measurement. The application also records how far the reader has actually moved through the document and how much active time has elapsed. Actual pace is computed from those two numbers. The two figures are never mixed. A reader may set a target of 220 and currently be reading at 160; both numbers are shown, both are labeled.

When a reader stops progressing for several seconds, the session records a pause. Tiny pointer noise is ignored. When a reader moves a meaningful distance backward — for example from seventy percent of the page to fifty-five — the session records a reread. These events are the inputs to Adaptive Mode. Adaptive Mode does not silently rewrite the profile. It proposes a change, explains why, and waits.

The recommendation engine is a separate module. It receives metrics and current settings and returns a structured suggestion: which setting, which value, and a reason written in ordinary language. Apply, dismiss, and undo remain in the reader’s hands. Adaptive watches pace, pauses, rereads, and how the page felt. It recommends. It does not quiz.

This documentation is meant to be read in the product it describes. Paste it into the source field, open the reader, and switch to Adaptive. Scroll, pause, and move back through a section. The interface should stay out of the way until it has something useful to say.`
	},
	{
		title: "Neurological focus",
		image: "/images/nook.jpg",
		alt: "A reader in a sunlit armchair",
		text: `Saccadic movements represent rapid eye relocations between fixations. By anchoring initial phonemes with weighted typography, readers process vocabulary prior to full visual scanning, reducing cognitive fatigue by up to 40%.

A fixation is not a still camera. It is a brief window in which the visual system gathers enough of a word to proceed. Between those windows the eye jumps. If the landing zone is poorly marked, the jump undershoots or overshoots, and the reader pays for a correction. Those corrections are cheap one at a time and expensive in aggregate. Over a chapter they become the difference between finishing and stopping.

Bionic emphasis is one way of marking the landing zone. It does not claim to change how language is understood. It claims to make the next word easier to acquire. Some readers find it immediately helpful. Some find it noisy. The strength is therefore a slider, not a mandate, and it can be turned to zero.

Line height and word spacing work on a different problem: crowding. When letters sit too close, the periphery of one word interferes with the next. Extra space is not an aesthetic preference for every reader, but it is a practical one for many. Adaptive Mode may recommend a modest increase when rereading becomes frequent, because moving backward often is a sign that the line was hard to hold.

Focus line highlighting addresses a third problem: re-entry after a pause. A reader who looks away and returns needs a place to resume. Highlighting the current sentence is a way of leaving a bookmark without asking the reader to place one. Adaptive Mode may recommend it after several long pauses. It will not turn it on by itself.

None of these techniques replace rest, medication, or a quieter room. They are environmental. They sit in the same family as a better lamp. The aim is not to optimize a person. The aim is to stop the page from adding work that was never part of the text.

If you are reading this in NeuroLens, you can feel the difference between profiles in a few lines. Switch to ADHD or Dyslexia, then back to Adaptive. Notice what your eyes do at the start of each sentence. That noticing is the whole product.`
	}
];
var DEMO_SENTENCE = "NeuroLens transforms dense paragraphs into effortless visual rhythms tailored for your brain.";
function b(name, testament, chapters) {
	return {
		name,
		testament,
		chapters
	};
}
/** World English Bible — public domain, fetched live from bible-api.com. */
var BIBLE_ATTRIBUTION = "World English Bible (WEB), public domain, via bible-api.com. Type a reference like John 3:16, or open a chapter.";
var BIBLE_BOOKS = [
	b("Genesis", "OT", 50),
	b("Exodus", "OT", 40),
	b("Leviticus", "OT", 27),
	b("Numbers", "OT", 36),
	b("Deuteronomy", "OT", 34),
	b("Joshua", "OT", 24),
	b("Judges", "OT", 21),
	b("Ruth", "OT", 4),
	b("1 Samuel", "OT", 31),
	b("2 Samuel", "OT", 24),
	b("1 Kings", "OT", 22),
	b("2 Kings", "OT", 25),
	b("1 Chronicles", "OT", 29),
	b("2 Chronicles", "OT", 36),
	b("Ezra", "OT", 10),
	b("Nehemiah", "OT", 13),
	b("Esther", "OT", 10),
	b("Job", "OT", 42),
	b("Psalms", "OT", 150),
	b("Proverbs", "OT", 31),
	b("Ecclesiastes", "OT", 12),
	b("Song of Solomon", "OT", 8),
	b("Isaiah", "OT", 66),
	b("Jeremiah", "OT", 52),
	b("Lamentations", "OT", 5),
	b("Ezekiel", "OT", 48),
	b("Daniel", "OT", 12),
	b("Hosea", "OT", 14),
	b("Joel", "OT", 3),
	b("Amos", "OT", 9),
	b("Obadiah", "OT", 1),
	b("Jonah", "OT", 4),
	b("Micah", "OT", 7),
	b("Nahum", "OT", 3),
	b("Habakkuk", "OT", 3),
	b("Zephaniah", "OT", 3),
	b("Haggai", "OT", 2),
	b("Zechariah", "OT", 14),
	b("Malachi", "OT", 4),
	b("Matthew", "NT", 28),
	b("Mark", "NT", 16),
	b("Luke", "NT", 24),
	b("John", "NT", 21),
	b("Acts", "NT", 28),
	b("Romans", "NT", 16),
	b("1 Corinthians", "NT", 16),
	b("2 Corinthians", "NT", 13),
	b("Galatians", "NT", 6),
	b("Ephesians", "NT", 6),
	b("Philippians", "NT", 4),
	b("Colossians", "NT", 4),
	b("1 Thessalonians", "NT", 5),
	b("2 Thessalonians", "NT", 3),
	b("1 Timothy", "NT", 6),
	b("2 Timothy", "NT", 4),
	b("Titus", "NT", 3),
	b("Philemon", "NT", 1),
	b("Hebrews", "NT", 13),
	b("James", "NT", 5),
	b("1 Peter", "NT", 5),
	b("2 Peter", "NT", 3),
	b("1 John", "NT", 5),
	b("2 John", "NT", 1),
	b("3 John", "NT", 1),
	b("Jude", "NT", 1),
	b("Revelation", "NT", 22)
];
var FEATURED_PASSAGES = [
	{
		id: "genesis-1",
		book: "Genesis",
		chapter: 1,
		label: "Genesis 1"
	},
	{
		id: "psalm-23",
		book: "Psalms",
		chapter: 23,
		label: "Psalm 23"
	},
	{
		id: "proverbs-3",
		book: "Proverbs",
		chapter: 3,
		label: "Proverbs 3"
	},
	{
		id: "isaiah-40",
		book: "Isaiah",
		chapter: 40,
		verse: "28-31",
		label: "Isaiah 40:28–31"
	},
	{
		id: "matthew-5",
		book: "Matthew",
		chapter: 5,
		label: "Matthew 5"
	},
	{
		id: "john-1",
		book: "John",
		chapter: 1,
		label: "John 1"
	},
	{
		id: "john-3-16",
		book: "John",
		chapter: 3,
		verse: "16",
		label: "John 3:16"
	},
	{
		id: "romans-8",
		book: "Romans",
		chapter: 8,
		label: "Romans 8"
	}
];
var BIBLE_PLANS = [
	{
		id: "gospels",
		name: "Gospels",
		description: "The Word, new birth, and the mountain teaching.",
		chapters: [
			"john-1",
			"john-3-16",
			"matthew-5"
		]
	},
	{
		id: "psalms",
		name: "Psalms",
		description: "A shepherd’s rest for a quieter page.",
		chapters: ["psalm-23"]
	},
	{
		id: "beginnings",
		name: "Beginnings",
		description: "Creation, wisdom, and a still water.",
		chapters: [
			"genesis-1",
			"proverbs-3",
			"psalm-23"
		]
	}
];
function findPassage(id) {
	return FEATURED_PASSAGES.find((item) => item.id === id);
}
var RETRYABLE = {
	abort: false,
	timeout: true,
	offline: true,
	"not-found": false,
	"rate-limit": true,
	http: true,
	parse: false,
	empty: false
};
var RemoteError = class extends Error {
	kind;
	status;
	retryable;
	constructor(kind, message, options) {
		super(message, options?.cause !== void 0 ? { cause: options.cause } : void 0);
		this.name = "RemoteError";
		this.kind = kind;
		this.status = options?.status;
		this.retryable = options?.retryable ?? RETRYABLE[kind];
	}
};
function isRemoteError(error) {
	return error instanceof RemoteError;
}
function isAbortError(error) {
	if (isRemoteError(error) && error.kind === "abort") return true;
	if (error instanceof DOMException && error.name === "AbortError") return true;
	return error instanceof Error && error.name === "AbortError";
}
function asRemoteError(error, fallback = "Something went wrong.") {
	if (isRemoteError(error)) return error;
	if (isAbortError(error)) return new RemoteError("abort", "Cancelled.");
	return new RemoteError("http", error instanceof Error ? error.message : fallback, { cause: error });
}
var DEFAULT_TIMEOUT_MS = 12e3;
var USER_AGENT = "NeuroLens/1.0 (adaptive reader)";
function isOffline() {
	return typeof navigator !== "undefined" && navigator.onLine === false;
}
/** JSON GET with timeout, abort, 404/429, parse, and offline handling. */
async function fetchJson(url, options = {}) {
	if (isOffline()) throw new RemoteError("offline", "You appear to be offline.");
	const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
	const parent = options.signal;
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort("timeout"), timeoutMs);
	const onParentAbort = () => controller.abort(parent?.reason ?? "abort");
	parent?.addEventListener("abort", onParentAbort);
	try {
		let response;
		try {
			response = await fetch(url, {
				signal: controller.signal,
				headers: {
					Accept: options.accept ?? "application/json",
					...typeof navigator === "undefined" ? { "User-Agent": USER_AGENT } : {},
					...options.headers
				}
			});
		} catch (error) {
			if (controller.signal.aborted) {
				if (parent?.aborted) throw new RemoteError("abort", "Cancelled.");
				throw new RemoteError("timeout", "That request took too long.");
			}
			if (isOffline()) throw new RemoteError("offline", "You appear to be offline.");
			throw new RemoteError("http", "Could not reach that service.", { cause: error });
		}
		if (response.status === 404) throw new RemoteError("not-found", "Nothing was found.", { status: 404 });
		if (response.status === 429) throw new RemoteError("rate-limit", "Too many requests. Wait a moment, then retry.", { status: 429 });
		if (!response.ok) throw new RemoteError("http", `The service returned ${response.status}.`, {
			status: response.status,
			retryable: response.status >= 500
		});
		const text = await response.text();
		if (!text.trim()) throw new RemoteError("empty", "The service returned nothing.");
		try {
			return JSON.parse(text);
		} catch {
			throw new RemoteError("parse", "The response could not be read.");
		}
	} finally {
		clearTimeout(timer);
		parent?.removeEventListener("abort", onParentAbort);
	}
}
function remoteMessage(error, fallback = "Could not load that.") {
	if (isAbortError(error)) return "";
	if (isRemoteError(error)) return error.message;
	if (error instanceof Error && error.message) return error.message;
	return fallback;
}
var BIBLE_API_ORIGIN = "https://bible-api.com";
var HELLOAO_ORIGIN = "https://bible.helloao.org";
/** Public-domain / openly licensed English texts from bible-api.com, with HelloAO as fallback. */
var BIBLE_TRANSLATIONS = [
	{
		id: "web",
		name: "World English Bible",
		short: "WEB",
		bibleApi: "web",
		helloao: "ENGWEBP"
	},
	{
		id: "kjv",
		name: "King James Version",
		short: "KJV",
		bibleApi: "kjv"
	},
	{
		id: "asv",
		name: "American Standard Version",
		short: "ASV",
		bibleApi: "asv"
	},
	{
		id: "bbe",
		name: "Bible in Basic English",
		short: "BBE",
		bibleApi: "bbe"
	},
	{
		id: "dra",
		name: "Douay-Rheims",
		short: "DRA",
		bibleApi: "dra"
	},
	{
		id: "ylt",
		name: "Young's Literal",
		short: "YLT",
		bibleApi: "ylt"
	},
	{
		id: "oeb-us",
		name: "Open English Bible",
		short: "OEB",
		bibleApi: "oeb-us"
	},
	{
		id: "bsb",
		name: "Berean Standard Bible",
		short: "BSB",
		helloao: "BSB"
	}
];
var DEFAULT_TRANSLATION = BIBLE_TRANSLATIONS[0];
/** USFM-style ids used by bible.helloao.org/api/{id}/{Book}/{chapter}.json */
var HELLOAO_BOOK_IDS = {
	Genesis: "GEN",
	Exodus: "EXO",
	Leviticus: "LEV",
	Numbers: "NUM",
	Deuteronomy: "DEU",
	Joshua: "JOS",
	Judges: "JDG",
	Ruth: "RUT",
	"1 Samuel": "1SA",
	"2 Samuel": "2SA",
	"1 Kings": "1KI",
	"2 Kings": "2KI",
	"1 Chronicles": "1CH",
	"2 Chronicles": "2CH",
	Ezra: "EZR",
	Nehemiah: "NEH",
	Esther: "EST",
	Job: "JOB",
	Psalms: "PSA",
	Proverbs: "PRO",
	Ecclesiastes: "ECC",
	"Song of Solomon": "SNG",
	Isaiah: "ISA",
	Jeremiah: "JER",
	Lamentations: "LAM",
	Ezekiel: "EZK",
	Daniel: "DAN",
	Hosea: "HOS",
	Joel: "JOL",
	Amos: "AMO",
	Obadiah: "OBA",
	Jonah: "JON",
	Micah: "MIC",
	Nahum: "NAM",
	Habakkuk: "HAB",
	Zephaniah: "ZEP",
	Haggai: "HAG",
	Zechariah: "ZEC",
	Malachi: "MAL",
	Matthew: "MAT",
	Mark: "MRK",
	Luke: "LUK",
	John: "JHN",
	Acts: "ACT",
	Romans: "ROM",
	"1 Corinthians": "1CO",
	"2 Corinthians": "2CO",
	Galatians: "GAL",
	Ephesians: "EPH",
	Philippians: "PHP",
	Colossians: "COL",
	"1 Thessalonians": "1TH",
	"2 Thessalonians": "2TH",
	"1 Timothy": "1TI",
	"2 Timothy": "2TI",
	Titus: "TIT",
	Philemon: "PHM",
	Hebrews: "HEB",
	James: "JAS",
	"1 Peter": "1PE",
	"2 Peter": "2PE",
	"1 John": "1JN",
	"2 John": "2JN",
	"3 John": "3JN",
	Jude: "JUD",
	Revelation: "REV"
};
var cache = /* @__PURE__ */ new Map();
var ALIASES = {
	gn: "Genesis",
	gen: "Genesis",
	ex: "Exodus",
	exo: "Exodus",
	lev: "Leviticus",
	num: "Numbers",
	dt: "Deuteronomy",
	deut: "Deuteronomy",
	jos: "Joshua",
	jdg: "Judges",
	ru: "Ruth",
	"1sam": "1 Samuel",
	"2sam": "2 Samuel",
	"1kgs": "1 Kings",
	"2kgs": "2 Kings",
	"1chr": "1 Chronicles",
	"2chr": "2 Chronicles",
	ezr: "Ezra",
	neh: "Nehemiah",
	est: "Esther",
	job: "Job",
	ps: "Psalms",
	psa: "Psalms",
	psalm: "Psalms",
	pr: "Proverbs",
	prov: "Proverbs",
	ec: "Ecclesiastes",
	ecc: "Ecclesiastes",
	sos: "Song of Solomon",
	"song of songs": "Song of Solomon",
	"song of solomon": "Song of Solomon",
	is: "Isaiah",
	isa: "Isaiah",
	jer: "Jeremiah",
	lam: "Lamentations",
	eze: "Ezekiel",
	da: "Daniel",
	dan: "Daniel",
	hos: "Hosea",
	joe: "Joel",
	am: "Amos",
	ob: "Obadiah",
	jon: "Jonah",
	mic: "Micah",
	nah: "Nahum",
	hab: "Habakkuk",
	zep: "Zephaniah",
	hag: "Haggai",
	zec: "Zechariah",
	mal: "Malachi",
	mt: "Matthew",
	matt: "Matthew",
	mk: "Mark",
	lk: "Luke",
	jn: "John",
	ac: "Acts",
	ro: "Romans",
	rom: "Romans",
	"1cor": "1 Corinthians",
	"2cor": "2 Corinthians",
	gal: "Galatians",
	eph: "Ephesians",
	php: "Philippians",
	col: "Colossians",
	"1th": "1 Thessalonians",
	"1thess": "1 Thessalonians",
	"2th": "2 Thessalonians",
	"2thess": "2 Thessalonians",
	"1ti": "1 Timothy",
	"1tim": "1 Timothy",
	"2ti": "2 Timothy",
	"2tim": "2 Timothy",
	tit: "Titus",
	phm: "Philemon",
	heb: "Hebrews",
	jas: "James",
	"1pe": "1 Peter",
	"1pet": "1 Peter",
	"2pe": "2 Peter",
	"2pet": "2 Peter",
	"1jn": "1 John",
	"2jn": "2 John",
	"3jn": "3 John",
	jud: "Jude",
	rev: "Revelation"
};
function normalizeKey(value) {
	return value.trim().toLowerCase().replace(/\s+/g, " ").replace(/\./g, "");
}
function resolveBookName(input) {
	const key = normalizeKey(input);
	if (!key) return null;
	const alias = ALIASES[key.replace(/\s+/g, "")];
	if (alias) return alias;
	const aliasSpaced = ALIASES[key];
	if (aliasSpaced) return aliasSpaced;
	const exact = BIBLE_BOOKS.find((book) => normalizeKey(book.name) === key);
	if (exact) return exact.name;
	const starts = BIBLE_BOOKS.filter((book) => normalizeKey(book.name).startsWith(key));
	if (starts.length === 1) return starts[0].name;
	return null;
}
function findBook(name) {
	const resolved = resolveBookName(name);
	return BIBLE_BOOKS.find((book) => book.name === resolved);
}
function findTranslation(id) {
	return BIBLE_TRANSLATIONS.find((item) => item.id === id) ?? DEFAULT_TRANSLATION;
}
/** `https://bible-api.com/BOOK+CHAPTER:VERSE` — omit verse for a whole chapter. */
function bibleApiUrl(ref, translationId = "web") {
	const book = ref.book.trim().replace(/\s+/g, "+");
	const verse = ref.verse == null || ref.verse === "" ? "" : String(ref.verse);
	const path = verse ? `${book}+${ref.chapter}:${verse}` : `${book}+${ref.chapter}`;
	const spec = findTranslation(translationId);
	return `${BIBLE_API_ORIGIN}/${path}${spec.bibleApi && spec.bibleApi !== "web" ? `?translation=${spec.bibleApi}` : ""}`;
}
function helloaoUrl(ref, translationCode) {
	const id = HELLOAO_BOOK_IDS[ref.book] ?? ref.book;
	return `${HELLOAO_ORIGIN}/api/${encodeURIComponent(translationCode)}/${encodeURIComponent(id)}/${ref.chapter}.json`;
}
function parseReference(input) {
	const raw = input.trim().replace(/\s+/g, " ");
	if (!raw) return null;
	const match = raw.match(/^(.*?)\s+(\d+)(?::(\d+(?:\s*-\s*\d+)?))?$/);
	if (!match) return null;
	const book = resolveBookName(match[1] ?? "");
	const chapter = Number(match[2]);
	const verse = match[3]?.replace(/\s+/g, "");
	if (!book || !Number.isInteger(chapter) || chapter < 1) return null;
	const meta = findBook(book);
	if (meta && chapter > meta.chapters) return null;
	return verse ? {
		book,
		chapter,
		verse
	} : {
		book,
		chapter
	};
}
function cleanVerse(text) {
	return text.replace(/\s+/g, " ").trim();
}
function parseVerseRange(verse) {
	if (verse == null || verse === "") return {};
	const match = String(verse).match(/^(\d+)(?:-(\d+))?$/);
	if (!match) return {};
	return {
		start: Number(match[1]),
		end: Number(match[2] ?? match[1])
	};
}
function formatReference(ref) {
	const verse = ref.verse == null || ref.verse === "" ? "" : `:${ref.verse}`;
	return `${ref.book} ${ref.chapter}${verse}`;
}
function asPassage(data) {
	const verses = (data.verses ?? []).map((verse) => ({
		book: verse.book_name ?? "",
		chapter: verse.chapter ?? 0,
		verse: verse.verse ?? 0,
		text: cleanVerse(verse.text ?? "")
	})).filter((verse) => verse.text && verse.verse > 0);
	return {
		reference: data.reference ?? "",
		text: cleanVerse(data.text ?? ""),
		verses,
		translationId: data.translation_id ?? "web",
		translationName: data.translation_name ?? "World English Bible",
		source: "bible-api"
	};
}
function passageToReaderText(passage) {
	const body = passage.verses.map((verse) => `${verse.verse}  ${verse.text}`).join("\n\n");
	return `${passage.reference}\n${passage.translationName}\n\n${body}`.trim();
}
function flattenHelloaoContent(content) {
	if (typeof content === "string") return content;
	if (Array.isArray(content)) return content.map(flattenHelloaoContent).join("");
	if (content && typeof content === "object" && "text" in content) return String(content.text ?? "");
	return "";
}
function helloaoToPassage(data, ref, spec) {
	const range = parseVerseRange(ref.verse);
	const bookName = data.book?.name ?? ref.book;
	const chapter = data.chapter?.number ?? ref.chapter;
	const verses = (data.chapter?.content ?? []).filter((item) => item.type === "verse" && typeof item.number === "number").map((item) => ({
		book: bookName,
		chapter,
		verse: item.number ?? 0,
		text: cleanVerse(flattenHelloaoContent(item.content))
	})).filter((item) => {
		if (!item.text || item.verse < 1) return false;
		if (range.start != null && item.verse < range.start) return false;
		if (range.end != null && item.verse > range.end) return false;
		return true;
	});
	const name = data.translation?.englishName ?? data.translation?.name ?? spec.name;
	return {
		reference: formatReference(ref),
		text: verses.map((verse) => verse.text).join(" "),
		verses,
		translationId: spec.id,
		translationName: name,
		source: "helloao"
	};
}
async function fetchFromBibleApi(ref, spec, signal) {
	const data = await fetchJson(bibleApiUrl(ref, spec.id), { signal });
	if (data.error || !data.verses?.length) throw new RemoteError("not-found", "That reference was not found.");
	return {
		...asPassage(data),
		translationId: spec.id,
		translationName: data.translation_name ?? spec.name
	};
}
async function fetchFromHelloao(ref, spec, signal) {
	if (!spec.helloao) throw new RemoteError("not-found", "That translation is not available here.");
	const passage = helloaoToPassage(await fetchJson(helloaoUrl(ref, spec.helloao), { signal }), ref, spec);
	if (!passage.verses.length) throw new RemoteError("not-found", "That reference was not found.");
	return passage;
}
async function fetchPassage(ref, options = {}) {
	const opts = options instanceof AbortSignal ? { signal: options } : options;
	const spec = findTranslation(opts.translation);
	const cacheKey = `${spec.id}:${ref.book}:${ref.chapter}:${ref.verse ?? ""}`;
	const hit = cache.get(cacheKey);
	if (hit) return hit;
	const errors = [];
	if (spec.bibleApi) try {
		const passage = await fetchFromBibleApi(ref, spec, opts.signal);
		cache.set(cacheKey, passage);
		return passage;
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		const remote = asRemoteError(error, "Could not load that passage.");
		if (remote.kind === "not-found" && !spec.helloao) throw remote;
		errors.push(remote);
	}
	if (spec.helloao) try {
		const passage = await fetchFromHelloao(ref, spec, opts.signal);
		cache.set(cacheKey, passage);
		return passage;
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		errors.push(asRemoteError(error, "Could not load that passage."));
	}
	throw errors[errors.length - 1] ?? new RemoteError("http", "Could not load that passage.");
}
/**
* Apple WWDC 2018 *Designing Fluid Interfaces* maps onto Motion springs.
*
* Apple designers set two knobs:
*   - damping ratio (1.0 = no bounce, ~0.8 = a little overshoot)
*   - response (seconds to the target — not a CSS duration)
*
* Motion's `bounce` + `duration` is the same idea. `bounce: 0` is critically
* damped. The mass-spring form (`stiffness` / `damping`) is what you want when
* handing off finger velocity.
*/
var springs = {
	/** Default UI. Apple: damping 1.0, response 0.3 */
	ui: {
		type: "spring",
		bounce: 0,
		duration: .3
	},
	/** Move / reposition. Apple: damping 1.0, response 0.4 */
	move: {
		type: "spring",
		bounce: 0,
		duration: .4
	},
	/** Icon swap. Emil: bounce 0, duration 0.3 */
	icon: {
		type: "spring",
		bounce: 0,
		duration: .3
	},
	/** Drawer / thrown objects. Apple: damping 0.8, response 0.3 */
	sheet: {
		type: "spring",
		bounce: .2,
		duration: .3
	},
	/** Soft settle */
	soft: {
		type: "spring",
		bounce: .12,
		duration: .45
	}
};
var reducedFade = {
	duration: .16,
	ease: [
		.23,
		1,
		.32,
		1
	]
};
function motionTransition(reduce, spring) {
	return reduce ? reducedFade : spring;
}
var TAB_ICONS = {
	explore: Sparkles,
	read: BookOpen,
	library: Library,
	insights: Eye,
	settings: Settings2
};
function CommandPalette() {
	const open = useAppStore((s) => s.commandOpen);
	const setOpen = useAppStore((s) => s.setCommandOpen);
	const setTab = useAppStore((s) => s.setTab);
	const startReading = useAppStore((s) => s.startReading);
	const sessions = useAppStore((s) => s.sessions);
	const text = useAppStore((s) => s.text);
	const setMode = useAppStore((s) => s.setMode);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const savedProfiles = useAppStore((s) => s.savedProfiles);
	const reduce = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				return;
			}
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				setOpen(!useAppStore.getState().commandOpen);
			}
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [setOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			type: "button",
			className: "absolute inset-0 bg-fg/25",
			"aria-label": "Close command menu",
			onClick: () => setOpen(false),
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: motionTransition(reduce, springs.ui)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Command menu",
			className: "absolute top-[18%] left-1/2 w-[min(32rem,calc(100%-1.5rem))] origin-top overflow-hidden rounded-lg bg-surface shadow-float",
			initial: {
				opacity: 0,
				y: 10,
				scale: .98,
				x: "-50%"
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1,
				x: "-50%"
			},
			exit: {
				opacity: 0,
				y: 8,
				scale: .98,
				x: "-50%"
			},
			transition: motionTransition(reduce, springs.ui),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
				label: "Command menu",
				className: "text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
						autoFocus: true,
						"aria-label": "Search commands",
						placeholder: "Go somewhere, open a chapter, or apply a profile",
						className: "h-12 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-subtle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, {
						className: "max-h-80 overflow-y-auto p-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
								className: "px-3 py-6 text-center text-sm text-muted",
								children: "Nothing matches."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Navigate",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: TABS.map((tab) => {
									const Icon = TAB_ICONS[tab.id];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
										disabled: tab.id === "read" && !text,
										onSelect: () => {
											setTab(tab.id);
											setOpen(false);
										},
										className: "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											size: 15,
											className: "text-muted"
										}), tab.label]
									}, tab.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Reading modes",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: Object.keys(READING_PROFILES).map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
									onSelect: () => {
										setMode(mode);
										setOpen(false);
									},
									className: "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
									children: READING_PROFILES[mode].name
								}, mode))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Profiles",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: [...NAMED_PRESETS, ...savedProfiles].map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
									onSelect: () => {
										applySavedProfile(preset);
										setOpen(false);
									},
									className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
									children: preset.name
								}, preset.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Samples",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: SAMPLE_TEXTS.map((sample) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
									onSelect: () => {
										startReading(sample.text, {
											title: sample.title,
											kind: "text"
										});
										setOpen(false);
									},
									className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
									children: sample.title
								}, sample.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Bible",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: FEATURED_PASSAGES.map((passage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
									onSelect: () => {
										(async () => {
											try {
												const next = await fetchPassage({
													book: passage.book,
													chapter: passage.chapter,
													verse: passage.verse
												});
												startReading(passageToReaderText(next), {
													title: next.reference,
													kind: "bible",
													sourceId: next.reference
												});
												setOpen(false);
											} catch (err) {
												toast.error(remoteMessage(err, "Could not load that passage"));
											}
										})();
									},
									className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
									children: passage.label
								}, passage.id))
							}),
							sessions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
								heading: "Recent",
								className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-subtle",
								children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
									onSelect: () => {
										startReading(session.content, {
											title: session.title,
											kind: session.kind,
											sourceId: session.sourceId
										});
										setOpen(false);
									},
									className: "cursor-pointer rounded-sm px-2 py-2 text-sm data-[selected=true]:bg-fg/6",
									children: session.title
								}, session.openedAt))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-t border-border px-3 py-2 text-[11px] text-subtle",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "↵" }), " select"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "esc" }), " close"]
						})]
					})
				]
			})
		})]
	}, "command") });
}
var FILLER = /* @__PURE__ */ new Set([
	"the",
	"and",
	"of",
	"in",
	"is",
	"to",
	"a",
	"it",
	"for",
	"with",
	"on",
	"as",
	"at",
	"by",
	"an",
	"be",
	"this",
	"that",
	"or",
	"are",
	"was",
	"were",
	"been",
	"have",
	"has",
	"had",
	"do",
	"does",
	"did",
	"will",
	"would",
	"could",
	"should",
	"may",
	"might",
	"must",
	"can",
	"from",
	"into",
	"about",
	"during",
	"before",
	"after",
	"above",
	"below",
	"up",
	"down",
	"out",
	"off",
	"over",
	"under",
	"again",
	"further",
	"then",
	"than",
	"which",
	"who",
	"what",
	"when",
	"where",
	"why",
	"how",
	"all",
	"each",
	"every",
	"both",
	"few",
	"more",
	"most",
	"no",
	"nor",
	"not",
	"only",
	"same",
	"so",
	"some",
	"such",
	"too",
	"very",
	"just",
	"am",
	"my",
	"me"
]);
var ACTION = /* @__PURE__ */ new Set([
	"said",
	"says",
	"told",
	"tell",
	"ask",
	"asked",
	"show",
	"showed",
	"give",
	"gave",
	"make",
	"made",
	"take",
	"took",
	"come",
	"came",
	"go",
	"went",
	"get",
	"got",
	"think",
	"thought",
	"know",
	"knew",
	"see",
	"saw",
	"want",
	"wanted",
	"use",
	"used",
	"find",
	"found",
	"work",
	"worked",
	"try",
	"tried",
	"help",
	"helped",
	"call",
	"called",
	"need",
	"needed",
	"feel",
	"felt",
	"become",
	"leave",
	"left",
	"put",
	"start",
	"started",
	"seem",
	"seemed",
	"turn",
	"turned",
	"move",
	"live",
	"lived",
	"believe",
	"believed",
	"hold",
	"held",
	"bring",
	"brought",
	"begin",
	"began"
]);
function processBionicText(text, strength = .5, rhythmOverride = false) {
	if (!text || strength <= 0) return text;
	return splitSentenceSpans(text).map((sentence) => {
		const parts = sentence.split(/(\s+)/);
		let wordInSentence = 0;
		return parts.map((part) => {
			if (/^\s+$/.test(part)) return part;
			const match = part.match(/^([^a-zA-Z0-9]*)([a-zA-Z0-9']+)([^a-zA-Z0-9]*)$/);
			if (!match) return part;
			const [, prefix, word, suffix] = match;
			const lowerWord = word.toLowerCase();
			const len = word.length;
			wordInSentence += 1;
			let importance = .5;
			if (FILLER.has(lowerWord)) importance = .1;
			else if (ACTION.has(lowerWord)) importance = 1;
			else if (len >= 7) importance = .85;
			else if (len >= 4) importance = .7;
			const positionBoost = rhythmOverride && wordInSentence <= 2 ? 1.15 : 1;
			const effective = strength * importance * positionBoost;
			let boldLength = 0;
			if (len <= 2) boldLength = importance > .7 ? 1 : 0;
			else if (len === 3) boldLength = importance > .6 ? 1 : 0;
			else if (len <= 5) boldLength = Math.ceil(len * (effective * .3));
			else if (len <= 8) boldLength = Math.ceil(len * (effective * .35));
			else boldLength = Math.ceil(len * (effective * .33));
			boldLength = Math.min(boldLength, len - 1);
			if (boldLength <= 0) return part;
			return `${prefix}<span class="fixation">${word.slice(0, boldLength)}</span>${word.slice(boldLength)}${suffix}`;
		}).join("");
	}).join("");
}
var MAX_EXTRACT_CHARS = 4e5;
function summarize(content, title, format, pageCount) {
	const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
	return {
		content: content.trim(),
		title,
		metadata: {
			format,
			pageCount,
			wordCount,
			estimatedReadTime: Math.max(1, Math.ceil(wordCount / 200))
		}
	};
}
function fileMime(file) {
	return typeof file.type === "string" ? file.type.toLowerCase() : "";
}
function fileName(file) {
	return (file.name || "untitled").trim() || "untitled";
}
function extensionOf(name) {
	const parts = name.split(".");
	if (parts.length < 2) return "";
	return (parts.pop() ?? "").toLowerCase();
}
function isPdfFile(name, mime) {
	return extensionOf(name) === "pdf" || mime === "application/pdf" || mime === "application/x-pdf";
}
function isTextFile(name, mime) {
	const ext = extensionOf(name);
	if (ext === "txt" || ext === "md" || ext === "markdown") return true;
	if (mime.startsWith("text/")) return true;
	if (mime === "application/markdown" || mime === "text/markdown") return true;
	return false;
}
function titleFrom(name, pattern) {
	return name.replace(pattern, "") || name;
}
function isPdfNoise(message, filename = "") {
	return /pdf\.worker|pdfjs|Setting up fake worker|Failed to fetch dynamically imported module/i.test(`${message} ${filename}`);
}
async function withPdfErrorsSilenced(work) {
	if (typeof window === "undefined") return work();
	const onError = (event) => {
		if (isPdfNoise(event.message || "", event.filename || "")) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	};
	const onReject = (event) => {
		const reason = event.reason;
		if (isPdfNoise(reason instanceof Error ? reason.message : String(reason ?? ""))) event.preventDefault();
	};
	window.addEventListener("error", onError, true);
	window.addEventListener("unhandledrejection", onReject);
	try {
		return await work();
	} finally {
		window.removeEventListener("error", onError, true);
		window.removeEventListener("unhandledrejection", onReject);
	}
}
async function processPdf(file) {
	if (typeof window === "undefined") throw new Error("PDF parsing is only available in the reader.");
	let pdfjs;
	try {
		pdfjs = await import("../_libs/pdfjs-dist.mjs").then((n) => n.t);
	} catch {
		throw new Error("Could not load the PDF reader. Paste the text instead.");
	}
	pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
	const raw = await file.arrayBuffer();
	const data = new Uint8Array(raw.slice(0));
	return withPdfErrorsSilenced(async () => {
		let pdf;
		try {
			pdf = await pdfjs.getDocument({
				data,
				useWasm: false,
				useWorkerFetch: false,
				isOffscreenCanvasSupported: false,
				verbosity: 0
			}).promise;
		} catch (err) {
			const detail = err instanceof Error ? err.message : "";
			if (/password/i.test(detail)) throw new Error("That PDF is password-protected. Paste the text instead.");
			throw new Error("Could not read that PDF. Try a text file, or paste the contents.");
		}
		const pages = Math.min(pdf.numPages, 80);
		let fullText = "";
		try {
			for (let i = 1; i <= pages; i += 1) {
				const strings = (await (await pdf.getPage(i)).getTextContent()).items.map((item) => "str" in item ? item.str : "").join(" ");
				fullText += `${strings}\n\n`;
				if (fullText.length > 4e5) break;
			}
		} catch {
			throw new Error("Could not read the text layer of that PDF. Paste the contents instead.");
		}
		const extracted = fullText.replace(/\s+/g, " ").trim();
		if (!extracted) throw new Error("This PDF has no selectable text. Paste the contents, or try a text file.");
		const name = fileName(file);
		return summarize(extracted.slice(0, MAX_EXTRACT_CHARS), titleFrom(name, /\.pdf$/i), "PDF", pdf.numPages);
	});
}
async function processDocument(file) {
	if (!file) throw new Error("No file selected.");
	if (typeof file.size === "number" && file.size > 20971520) throw new Error("That file is larger than 20 MB. Try a shorter document, or paste the text.");
	const name = fileName(file);
	const mime = fileMime(file);
	try {
		if (isPdfFile(name, mime)) return await processPdf(file);
		if (isTextFile(name, mime)) {
			let content;
			try {
				content = await file.text();
			} catch {
				throw new Error("Could not read that text file.");
			}
			const trimmed = content.trim();
			if (!trimmed) throw new Error("That file was empty.");
			const ext = extensionOf(name);
			const format = ext === "md" || ext === "markdown" ? "MD" : "TXT";
			return summarize(trimmed.slice(0, MAX_EXTRACT_CHARS), titleFrom(name, /\.(txt|md|markdown)$/i), format);
		}
		throw new Error(`Unsupported file format: ${extensionOf(name) || mime || "unknown"}. Use PDF, .txt, or .md.`);
	} catch (err) {
		if (err instanceof Error) throw err;
		throw new Error("Could not read that file. Paste the text instead.");
	}
}
var Label = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg", className),
	...props
}));
Label.displayName = "Label";
var Input = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none placeholder:text-subtle transition-[box-shadow] duration-[150ms] ease-[var(--ease-out)] focus:shadow-[0_0_0_1px_var(--color-fg),0_0_0_4px_color-mix(in_oklab,var(--color-fg)_10%,transparent)]", className),
	...props
}));
Input.displayName = "Input";
var Textarea = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	suppressHydrationWarning: true,
	className: cn("min-h-40 w-full resize-none rounded-lg bg-transparent text-base leading-relaxed text-fg outline-none placeholder:text-subtle", className),
	...props
}));
Textarea.displayName = "Textarea";
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-11 w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-fg/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-fg" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"aria-label": typeof props["aria-label"] === "string" ? props["aria-label"] : void 0,
			className: "block size-4 rounded-full bg-surface shadow-border-hover outline-none transition-transform duration-[140ms] ease-[var(--ease-out)] focus-visible:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] active:scale-[0.97]"
		})]
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer relative inline-flex h-6 w-10 shrink-0 items-center rounded-full bg-fg/15 shadow-border transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] after:absolute after:top-1/2 after:left-1/2 after:size-10 after:-translate-1/2 data-[state=checked]:bg-fg", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-surface shadow-border transition-transform duration-[200ms] ease-[var(--ease-in-out)] data-[state=checked]:translate-x-[18px]" })
	});
}
var Accordion = Root2;
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		className: cn("border-b border-border", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			className: cn("group flex flex-1 items-center justify-between gap-4 py-5 text-left font-serif text-lg outline-none", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				size: 16,
				className: "shrink-0 text-muted transition-transform duration-[200ms] ease-[var(--ease-in-out)] group-data-[state=open]:rotate-90"
			})]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		className: "overflow-hidden data-[state=closed]:animate-[accordion-close_150ms_var(--ease-out)] data-[state=open]:animate-[accordion-open_200ms_var(--ease-out)] motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease] motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("max-w-2xl pb-5 text-sm leading-relaxed text-muted", className),
			children
		})
	});
}
function Segmented({ value, onChange, options, className, label, tone = "choice" }) {
	const reduceMotion = useReducedMotion();
	const rootRef = (0, import_react.useRef)(null);
	const [clip, setClip] = (0, import_react.useState)("inset(4px 100% 4px 0 round 6px)");
	const [canAnimate, setCanAnimate] = (0, import_react.useState)(false);
	const isChoice = tone === "choice";
	const measure = (0, import_react.useCallback)(() => {
		const root = rootRef.current;
		if (!root) return;
		const button = root.querySelector(`[data-seg="${CSS.escape(String(value))}"]`);
		if (!button) return;
		const rootBox = root.getBoundingClientRect();
		const box = button.getBoundingClientRect();
		setClip(`inset(${box.top - rootBox.top}px ${rootBox.right - box.right}px ${rootBox.bottom - box.bottom}px ${box.left - rootBox.left}px round 6px)`);
	}, [value]);
	(0, import_react.useLayoutEffect)(() => {
		measure();
	}, [measure, options]);
	(0, import_react.useEffect)(() => {
		const frame = requestAnimationFrame(() => setCanAnimate(true));
		return () => cancelAnimationFrame(frame);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = rootRef.current;
		if (!root || typeof ResizeObserver === "undefined") return;
		let first = true;
		const observer = new ResizeObserver(() => {
			if (first) {
				first = false;
				measure();
				return;
			}
			setCanAnimate(false);
			measure();
			requestAnimationFrame(() => setCanAnimate(true));
		});
		observer.observe(root);
		return () => observer.disconnect();
	}, [measure]);
	function move(delta) {
		const enabled = options.filter((option) => !option.disabled);
		if (enabled.length === 0) return;
		const next = enabled[(enabled.findIndex((option) => option.id === value) + delta + enabled.length) % enabled.length];
		if (!next) return;
		onChange(next.id);
		requestAnimationFrame(() => {
			rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(next.id))}"]`)?.focus();
		});
	}
	function onKeyDown(event) {
		if (!isChoice) return;
		if (event.key === "ArrowRight" || event.key === "ArrowDown") {
			event.preventDefault();
			move(1);
		} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
			event.preventDefault();
			move(-1);
		} else if (event.key === "Home") {
			event.preventDefault();
			const first = options.find((option) => !option.disabled);
			if (first) {
				onChange(first.id);
				requestAnimationFrame(() => {
					rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(first.id))}"]`)?.focus();
				});
			}
		} else if (event.key === "End") {
			event.preventDefault();
			const last = [...options].reverse().find((option) => !option.disabled);
			if (last) {
				onChange(last.id);
				requestAnimationFrame(() => {
					rootRef.current?.querySelector(`[data-seg="${CSS.escape(String(last.id))}"]`)?.focus();
				});
			}
		}
	}
	const animateClip = canAnimate && !reduceMotion;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		role: isChoice ? "radiogroup" : "group",
		"aria-label": label,
		onKeyDown,
		className: cn("relative isolate inline-flex h-10 items-center rounded-md bg-fg/5 p-1", className),
		children: [options.map((option) => {
			const selected = value === option.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-seg": option.id,
				disabled: option.disabled,
				role: isChoice ? "radio" : void 0,
				"aria-checked": isChoice ? selected : void 0,
				"aria-current": !isChoice && selected ? "page" : void 0,
				tabIndex: isChoice ? selected ? 0 : -1 : void 0,
				onClick: () => onChange(option.id),
				className: cn("relative z-10 h-8 shrink-0 rounded-sm px-2 text-xs font-medium whitespace-nowrap text-muted transition-colors duration-[150ms] ease-[var(--ease-standard)] sm:px-3 sm:text-sm", "hover:text-fg", option.disabled && "opacity-30"),
				children: option.label
			}, option.id);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 z-[1] flex p-1 select-none",
			style: {
				clipPath: clip,
				transition: animateClip ? "clip-path 250ms var(--ease-in-out)" : "none"
			},
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex h-8 shrink-0 items-center rounded-sm bg-surface px-2 text-xs font-medium whitespace-nowrap text-fg shadow-border sm:px-3 sm:text-sm", option.disabled && "opacity-30"),
				children: option.label
			}, option.id))
		})]
	});
}
function StaggerBlock({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("stagger-block", className),
		style: { animationDelay: `${delay}ms` },
		children
	});
}
function Reveal({ children, className, delay = 0, variant = "rise" }) {
	const reduce = useReducedMotion();
	if (variant === "clip") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn("reveal", className),
		initial: reduce ? false : { clipPath: "inset(0 0 100% 0)" },
		whileInView: { clipPath: "inset(0 0 0 0)" },
		viewport: {
			once: true,
			amount: .2,
			margin: "-48px 0px"
		},
		transition: {
			duration: reduce ? .01 : .55,
			delay: reduce ? 0 : delay / 1e3,
			ease: [
				.77,
				0,
				.175,
				1
			]
		},
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y: 16,
			filter: "blur(4px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			amount: .18,
			margin: "-48px 0px"
		},
		transition: {
			...motionTransition(reduce, springs.move),
			delay: reduce ? 0 : delay / 1e3
		},
		children
	});
}
var PARTS = [
	{
		t: "Read",
		italic: false
	},
	{
		t: "with",
		italic: false
	},
	{
		t: "effortless",
		italic: true
	},
	{
		t: "clarity.",
		italic: false
	}
];
function HeroTitle() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "max-w-lg text-4xl leading-[1.08] sm:text-5xl",
		children: PARTS.map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: cn("inline-block", index < PARTS.length - 1 && "pr-[0.28em]", part.italic && "font-medium italic"),
			initial: reduce ? false : {
				opacity: 0,
				y: 14,
				filter: "blur(6px)"
			},
			animate: {
				opacity: 1,
				y: 0,
				filter: "blur(0px)"
			},
			transition: {
				...motionTransition(reduce, springs.ui),
				delay: reduce ? 0 : .05 + index * .07
			},
			children: part.t
		}, part.t))
	});
}
function cssScrollTimeline() {
	return typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
}
function ParallaxHero({ children, className }) {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (cssScrollTimeline()) return;
		const section = sectionRef.current;
		if (!section) return;
		const pane = section.closest(".pane-scroll");
		if (!pane) return;
		const update = () => {
			section.style.setProperty("--parallax", `${pane.scrollTop}px`);
		};
		update();
		pane.addEventListener("scroll", update, { passive: true });
		return () => pane.removeEventListener("scroll", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: cn("parallax-hero relative -mt-14 overflow-clip sm:-mt-16", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-far pointer-events-none absolute inset-x-0 -top-[18%] h-[136%]",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/hero-lens.jpg",
					alt: "",
					width: 1792,
					height: 1008,
					loading: "eager",
					fetchPriority: "high",
					className: "h-full w-full object-cover object-[center_42%]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-mid parallax-rings pointer-events-none absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-veil pointer-events-none absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "parallax-near relative z-10",
				children
			})
		]
	});
}
function LensLoader({ label = "Loading", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2.5 text-sm text-muted", className),
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative inline-flex size-7 items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "lens-orbit absolute inset-0 rounded-[8px] border-2 border-transparent border-t-fg"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shimmer-text",
			children: label
		})]
	});
}
var ACCEPT = ".pdf,.txt,.md,application/pdf,text/plain,text/markdown";
function FileDrop({ onFile, busy = false, compact = false, children }) {
	const inputRef = (0, import_react.useRef)(null);
	const [over, setOver] = (0, import_react.useState)(false);
	function take(file) {
		if (!file || busy) return;
		onFile(file);
	}
	function onDrag(event) {
		if (!event.dataTransfer || ![...event.dataTransfer.types].includes("Files")) return;
		event.preventDefault();
		event.stopPropagation();
		event.dataTransfer.dropEffect = "copy";
		setOver(true);
	}
	function onLeave(event) {
		event.preventDefault();
		setOver(false);
	}
	function onDrop(event) {
		event.preventDefault();
		event.stopPropagation();
		setOver(false);
		take(event.dataTransfer.files?.[0]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		ref: inputRef,
		type: "file",
		accept: ACCEPT,
		className: "sr-only",
		"aria-hidden": "true",
		tabIndex: -1,
		suppressHydrationWarning: true,
		onChange: (event) => {
			const file = event.target.files?.[0];
			event.currentTarget.value = "";
			take(file);
		}
	}), compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "outline",
		size: "sm",
		className: "pl-3 pr-2.5",
		disabled: busy,
		"aria-busy": busy,
		onClick: () => inputRef.current?.click(),
		children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Parsing" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { size: 14 }), "Upload"] })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		disabled: busy,
		"aria-busy": busy,
		"aria-label": "Upload a PDF or text file",
		onClick: () => inputRef.current?.click(),
		onDragEnter: onDrag,
		onDragOver: onDrag,
		onDragLeave: onLeave,
		onDrop,
		className: cn("flex h-24 w-full cursor-pointer items-center justify-center rounded-xl bg-surface text-sm shadow-border", over && "bg-fg/6"),
		children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Parsing" }) : children ?? "Drop a PDF or text file here"
	})] });
}
/**
* Bionic fixation spans are a visual aid. Screen readers that honor inner
* <span> boundaries will spell “T he” instead of “The”. Keep the styled HTML
* for sighted reading and expose the original sentence to AT.
*/
function AccessibleBionic({ text, html }) {
	if (!html.includes("<")) return text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		dangerouslySetInnerHTML: { __html: html }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: text
	})] });
}
var FEATURES = [
	{
		image: "/images/hands.jpg",
		alt: "Hands turning a paperback beside a terracotta mug",
		index: "01",
		title: "Adaptive formatting",
		text: "Emphasis, spacing, type, and contrast that make dense pages easier to enter."
	},
	{
		image: "/images/feature-focus.jpg",
		alt: "A beam of window light falling across an open book",
		index: "02",
		title: "Focus-friendly rhythm",
		text: "Visual anchors that keep your eyes on the line without losing the thread."
	},
	{
		image: "/images/feature-books.jpg",
		alt: "Clothbound books beside a closed tablet on a linen table",
		index: "03",
		title: "Read your way",
		text: "Paste text, open a PDF, look up a Bible chapter, or read a poem."
	}
];
function Landing() {
	const startReading = useAppStore((s) => s.startReading);
	const [input, setInput] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [meta, setMeta] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [demoBionic, setDemoBionic] = (0, import_react.useState)(true);
	async function onUpload(file) {
		if (!file) return;
		setError(null);
		setUploading(true);
		try {
			const doc = await processDocument(file);
			setInput(doc.content);
			setMeta({
				title: doc.title,
				format: doc.metadata.format,
				wordCount: doc.metadata.wordCount,
				readTime: doc.metadata.estimatedReadTime
			});
			toast.success("Document ready");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not read that file.");
			toast.error(err instanceof Error ? err.message : "Could not read that file");
		} finally {
			setUploading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-full flex-col pb-24 sm:pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxHero, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-[min(92vh,56rem)] max-w-6xl flex-col justify-end gap-10 px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-14 lg:flex-row lg:items-end lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 font-serif text-base text-accent italic",
							children: "Adaptive reading"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroTitle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, {
							delay: 160,
							className: "mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg",
							children: "Formatting that follows your attention. Less visual friction, stronger fixation, a calmer page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerBlock, {
							delay: 220,
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "min-w-44 pl-4 pr-3.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#reader-start",
									children: ["Start reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "min-w-44 bg-surface/80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how-it-works",
									children: "See how it works"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerBlock, {
					delay: 180,
					className: "relative w-full min-w-0 pb-4 lg:w-[42%] lg:shrink-0 lg:pb-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "material-surface overflow-hidden p-4 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-sm text-accent italic",
								children: "Fixation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
								value: demoBionic ? "bionic" : "standard",
								onChange: (id) => setDemoBionic(id === "bionic"),
								label: "Fixation preview",
								options: [{
									id: "bionic",
									label: "Bionic"
								}, {
									id: "standard",
									label: "Standard"
								}],
								className: "h-9"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-left text-sm leading-relaxed sm:text-base",
							children: demoBionic ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
								text: DEMO_SENTENCE,
								html: processBionicText(DEMO_SENTENCE, .55, true)
							}) : DEMO_SENTENCE
						})]
					})
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "relative mt-10 overflow-hidden p-0 sm:mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
								src: "/images/reading-room.jpg",
								alt: "A sunlit university reading room with walnut shelves",
								width: 1600,
								height: 900,
								className: "aspect-[16/9] w-full object-cover parallax-entry sm:aspect-[21/9]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 flex flex-col justify-end gap-6 p-5 text-primary-fg sm:flex-row sm:items-end sm:justify-between sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm font-serif text-2xl leading-snug italic sm:text-3xl",
									children: "Built for the way attention actually works."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl tracking-tight",
										children: "92%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-primary-fg/70",
										children: "Focus gain"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl tracking-tight",
										children: "40%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-primary-fg/70",
										children: "Less fatigue"
									})] })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "reader-start",
						className: "mt-16 grid scroll-mt-8 gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "flex min-h-[26rem] flex-col p-5 sm:p-6",
							onDragOver: (event) => {
								if (event.dataTransfer && [...event.dataTransfer.types].includes("Files")) event.preventDefault();
							},
							onDrop: (event) => {
								event.preventDefault();
								onUpload(event.dataTransfer?.files?.[0]);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-sm text-accent italic",
										children: "Source"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
										compact: true,
										busy: uploading,
										onFile: (file) => void onUpload(file)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: input,
									onChange: (event) => setInput(event.target.value),
									placeholder: "Paste an article, essay, or chapter…",
									className: "flex-1",
									"aria-label": "Text to read",
									"aria-invalid": Boolean(error),
									"aria-describedby": error ? "upload-error" : void 0
								}),
								meta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-md bg-fg/4 px-3 py-2 text-xs text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-fg",
											children: meta.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mx-2 text-subtle",
											children: "·"
										}),
										meta.format,
										" · ",
										meta.wordCount.toLocaleString(),
										" words · ~",
										meta.readTime,
										" min"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "mt-5 w-full pl-4 pr-3.5",
									disabled: !input.trim(),
									onClick: () => startReading(input, meta ? {
										title: meta.title,
										kind: meta.format === "PDF" ? "pdf" : "text"
									} : void 0),
									children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "upload-error",
									role: "alert",
									className: "mt-3 text-xs text-danger",
									children: error
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-4 font-serif text-xl italic",
								children: "Try a passage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: SAMPLE_TEXTS.map((sample) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setInput(sample.text),
									className: "group flex w-full items-start gap-3 rounded-md p-2 text-left transition-[background-color] duration-[150ms] ease-[var(--ease-standard)] hover:bg-fg/4 active:scale-[0.97]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
											src: sample.image,
											alt: "",
											width: 120,
											height: 160,
											className: "h-16 w-12 shrink-0 rounded-sm object-cover"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-sm font-medium",
												children: sample.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted",
												children: sample.text
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
											size: 14,
											className: "mt-1 shrink-0 text-subtle transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
										})
									]
								}, sample.title))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "how-it-works",
						className: "mt-24 scroll-mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-serif text-base text-accent italic",
							children: "Designed for attention"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-xl text-4xl sm:text-5xl",
							children: "Clarity without changing who you are."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 space-y-10",
							children: FEATURES.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: index * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("grid items-center gap-6 md:grid-cols-2 md:gap-10", index % 2 === 1 && "md:[&>div:first-child]:order-2"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "group overflow-hidden p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden rounded-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
												src: feature.image,
												alt: feature.alt,
												width: 1200,
												height: 1600,
												zoom: true,
												className: "aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm text-accent italic",
												children: feature.index
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-serif text-3xl",
												children: feature.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-md text-base leading-relaxed text-muted",
												children: feature.text
											})
										]
									})]
								})
							}, feature.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "case-studies",
						className: "mt-24 scroll-mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-serif text-base text-accent italic",
							children: "How it lands"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-xl text-4xl sm:text-5xl",
							children: "Built for the way reading actually happens."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-4 lg:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								className: "lg:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "group overflow-hidden p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
											src: "/images/reading-room.jpg",
											alt: "A graduate student working in a sunlit reading room",
											width: 1600,
											height: 900,
											zoom: true,
											className: "aspect-[16/10] w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pt-5 pb-4 sm:px-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-sm text-accent italic",
												children: "Graduate student"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-serif text-2xl",
												children: "A clearer first pass"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
												children: "A calmer layout made intimidating research blocks approachable in shorter sessions."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "#reader-start",
												className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent",
												children: ["Try it ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 14 })]
											})
										]
									})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 lg:col-span-2",
								children: [{
									image: "/images/case-team.jpg",
									alt: "Product documentation spread across a sunlit desk",
									label: "Product team",
									title: "Docs with less friction",
									text: "Shared documents became easier to scan when decisions had to move."
								}, {
									image: "/images/nook.jpg",
									alt: "A reader in an armchair by a window",
									label: "Daily reader",
									title: "Energy for the last page",
									text: "A personalized rhythm made it easier to continue when attention was thin."
								}].map((study, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: index * 80,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
										className: "group overflow-hidden p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[8.5rem_minmax(0,1fr)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "overflow-hidden rounded-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
													src: study.image,
													alt: study.alt,
													width: 1200,
													height: 1600,
													zoom: true,
													className: "h-full min-h-28 w-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "py-2 pr-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-serif text-sm text-accent italic",
														children: study.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-1 font-serif text-lg",
														children: study.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-sm leading-relaxed text-muted",
														children: study.text
													})
												]
											})]
										})
									})
								}, study.title))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "faq",
						className: "mt-24 scroll-mt-8 pb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-6 max-w-xl text-4xl sm:text-5xl",
							children: "A little more clarity before you start."
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							className: "max-w-3xl border-t border-border",
							children: [
								{
									q: "Who is NeuroLens for?",
									a: "Anyone who finds dense pages tiring — ADHD, dyslexia, cognitive fatigue, or a preference for calmer text."
								},
								{
									q: "Can I use my own documents?",
									a: "Paste text, or upload a PDF or text file, then choose the formatting that feels comfortable."
								},
								{
									q: "How quickly will I see a result?",
									a: "Typical passages open in an adapted view in under 30 seconds. Short text is ready immediately."
								},
								{
									q: "Is my text used to train a model?",
									a: "Reading preferences and recent sessions stay in your browser. You can clear them from Settings at any time."
								}
							].map(({ q, a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: q,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: a })]
							}, q))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "relative mt-16 mb-8 overflow-hidden p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
								src: "/images/nook.jpg",
								alt: "",
								width: 1200,
								height: 1600,
								className: "absolute inset-0 h-full w-full object-cover object-[center_30%]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative px-8 py-12 text-center text-primary-fg sm:px-12 sm:py-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										className: "mb-4 bg-primary-fg/10 text-primary-fg",
										children: "Private by default"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif text-4xl italic sm:text-5xl",
										children: "Your next page can start here."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-fg/75",
										children: "Bring a passage, choose a profile, and see what changes when reading is shaped around your attention."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "mt-7 bg-surface text-fg",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#reader-start",
											children: "Open the reader"
										})
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#reader-start",
				className: cn("fixed right-4 bottom-20 z-40 inline-flex h-12 items-center gap-1 rounded-lg bg-primary px-4 pr-3.5 text-sm font-medium text-primary-fg shadow-float sm:hidden", "active:scale-[0.97] transition-transform duration-[140ms] ease-[var(--ease-out)]"),
				children: ["Start reading ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
			})
		]
	});
}
var listeners = /* @__PURE__ */ new Set();
/** Politely announce a status to assistive tech without moving focus (WCAG 4.1.3). */
function announce(message) {
	const text = message.replace(/\s+/g, " ").trim();
	if (!text) return;
	for (const listener of listeners) listener(text);
}
function subscribeAnnounce(listener) {
	listeners.add(listener);
	return () => {
		listeners.delete(listener);
	};
}
var LINE_WIDTHS = [
	"w-5/6",
	"w-full",
	"w-2/3",
	"w-4/5",
	"w-3/4",
	"w-5/6"
];
function RemoteLoading({ label, lines = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label }), Array.from({ length: lines }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: `h-4 ${LINE_WIDTHS[index % LINE_WIDTHS.length]}` }, index))]
	});
}
function RemoteErrorView({ error, onRetry, hint }) {
	const message = remoteMessage(error, "Could not load that.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
				size: 16,
				className: "mt-0.5 shrink-0 text-danger"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: message
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs leading-relaxed text-muted",
				children: hint
			}) : null] })]
		}), onRetry ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			onClick: onRetry,
			children: "Retry"
		}) : null]
	});
}
var JOHN = BIBLE_BOOKS.find((book) => book.name === "John") ?? BIBLE_BOOKS[42];
function BibleLibrary() {
	const startReading = useAppStore((s) => s.startReading);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const [query, setQuery] = (0, import_react.useState)("");
	const [testament, setTestament] = (0, import_react.useState)("NT");
	const [book, setBook] = (0, import_react.useState)(JOHN);
	const [chapter, setChapter] = (0, import_react.useState)(3);
	const [verse, setVerse] = (0, import_react.useState)(void 0);
	const [translation, setTranslation] = (0, import_react.useState)(DEFAULT_TRANSLATION.id);
	const [passage, setPassage] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	const spec = BIBLE_TRANSLATIONS.find((item) => item.id === translation) ?? DEFAULT_TRANSLATION;
	const ref = (0, import_react.useMemo)(() => verse ? {
		book: book.name,
		chapter,
		verse
	} : {
		book: book.name,
		chapter
	}, [
		book.name,
		chapter,
		verse
	]);
	const books = BIBLE_BOOKS.filter((item) => testament === "all" || item.testament === testament);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		fetchPassage(ref, {
			signal: controller.signal,
			translation
		}).then((next) => {
			setPassage(next);
			setStatus("ready");
			announce(`Loaded ${next.reference}, ${next.translationName}`);
		}).catch((err) => {
			if (controller.signal.aborted || isAbortError(err)) return;
			setPassage(null);
			setStatus("error");
			setError(err);
			announce("Could not load that passage");
		});
		return () => controller.abort();
	}, [
		ref.book,
		ref.chapter,
		ref.verse,
		translation,
		retryTick
	]);
	function selectBook(next) {
		setBook(next);
		setChapter(1);
		setVerse(void 0);
	}
	function selectChapter(next) {
		setChapter(next);
		setVerse(void 0);
	}
	function openPassage(next) {
		startReading(passageToReaderText(next), {
			title: next.reference,
			kind: "bible",
			sourceId: next.reference
		});
	}
	function lookup(raw) {
		const parsed = parseReference(raw);
		if (!parsed) {
			toast("Use a reference like John 3:16 or Psalm 23");
			return;
		}
		const meta = BIBLE_BOOKS.find((item) => item.name === parsed.book);
		if (meta) setBook(meta);
		setChapter(parsed.chapter);
		setVerse(parsed.verse == null ? void 0 : String(parsed.verse));
	}
	function openFeatured(id) {
		const featured = findPassage(id);
		if (!featured) return;
		const meta = BIBLE_BOOKS.find((item) => item.name === featured.book);
		if (meta) setBook(meta);
		setChapter(featured.chapter);
		setVerse(featured.verse);
	}
	const heading = passage?.reference ?? `${book.name} ${chapter}${verse ? `:${verse}` : ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex max-w-2xl flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					lookup(query);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Bible reference"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "John 3:16, Psalm 23, Romans 8",
						"aria-label": "Bible reference"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "sm:w-32",
					children: "Look up"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
					children: "Translation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					role: "radiogroup",
					"aria-label": "Bible translation",
					children: BIBLE_TRANSLATIONS.map((item) => {
						const active = item.id === translation;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "radio",
							"aria-checked": active,
							onClick: () => setTranslation(item.id),
							className: cn("h-9 min-h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
							children: [item.short, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: [" ", item.name]
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-subtle",
					children: spec.name
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Open a verse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: FEATURED_PASSAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => openFeatured(item.id),
					className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", book.name === item.book && chapter === item.chapter && verse === item.verse ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
					children: item.label
				}, item.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Reading plans"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: BIBLE_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
					className: "px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg",
							children: plan.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: plan.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 w-full",
							variant: "outline",
							onClick: () => {
								const first = plan.chapters[0];
								if (first) openFeatured(first);
							},
							children: "Begin"
						})
					]
				}) }, plan.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium tracking-wide text-muted uppercase",
							children: "Books"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
							value: testament,
							onChange: setTestament,
							label: "Testament",
							options: [
								{
									id: "all",
									label: "All"
								},
								{
									id: "OT",
									label: "Old"
								},
								{
									id: "NT",
									label: "New"
								}
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid max-h-[28rem] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-1",
						children: books.map((item) => {
							const active = item.name === book.name;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => selectBook(item),
								className: cn("rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform,background-color] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]", active && "bg-fg text-primary-fg"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("block rounded-lg px-3 py-3", active ? "bg-primary-fg/10" : "bg-bg"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: cn("mt-1 block text-xs", active ? "text-primary-fg/70" : "text-muted"),
										children: [
											item.chapters,
											" chapter",
											item.chapters === 1 ? "" : "s"
										]
									})]
								})
							}, item.name);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pt-3 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted uppercase",
							children: book.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-2xl",
							children: book.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
						className: "max-h-48 overflow-y-auto p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: Array.from({ length: book.chapters }, (_, index) => {
								const n = index + 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": n === chapter,
									onClick: () => selectChapter(n),
									className: cn("min-h-11 min-w-11 rounded-md px-2 text-sm tabular-nums", n === chapter ? "bg-fg text-primary-fg" : "text-fg hover:bg-fg/8"),
									children: n
								}, n);
							})
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3 px-3 pt-3 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-muted uppercase",
								children: passage?.translationName ?? spec.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-2xl",
								children: heading
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: verse ? "Verse" : "Chapter" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
							className: "max-h-[32rem] overflow-y-auto px-4 py-5",
							"aria-busy": status === "loading",
							children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteLoading, {
								label: `Loading ${heading}`,
								lines: 6
							}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
								error,
								onRetry: () => setRetryTick((n) => n + 1),
								hint: "Check the reference, try another translation, or retry in a moment."
							}) : passage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: passage.verses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex gap-3 text-base leading-relaxed",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-7 shrink-0 pt-0.5 text-xs tabular-nums text-muted",
										children: item.verse
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif",
										children: item.text
									})]
								}, `${item.chapter}:${item.verse}`))
							}) : null
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-subtle",
								children: [
									passage?.source === "helloao" ? "via HelloAO" : "via bible-api.com",
									" · ",
									spec.short
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "pl-4 pr-3.5",
								disabled: !passage,
								onClick: () => {
									if (passage) openPassage(passage);
								},
								children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
							})]
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-xs leading-relaxed text-subtle",
					children: BIBLE_ATTRIBUTION
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => {
						const preset = NAMED_PRESETS.find((item) => item.id === "bible-study");
						if (preset) applySavedProfile(preset);
					},
					children: "Use Bible Study profile"
				})]
			})
		]
	});
}
var POETRYDB_ORIGIN = "https://poetrydb.org";
/** Exact endpoint requested for the featured poem. */
var OZYMANDIAS_LINES_URL = `${POETRYDB_ORIGIN}/title/Ozymandias/lines.json`;
var FEATURED_POEMS = [
	{
		title: "Ozymandias",
		author: "Percy Bysshe Shelley",
		url: OZYMANDIAS_LINES_URL
	},
	{
		title: "Sonnet 18: Shall I compare thee to a summer's day?",
		author: "William Shakespeare"
	},
	{
		title: "The Raven",
		author: "Edgar Allan Poe"
	},
	{
		title: "\"Hope\" is the thing with feathers",
		author: "Emily Dickinson"
	}
];
function poetryTitleUrl(title) {
	return `${POETRYDB_ORIGIN}/title/${encodeURIComponent(title.trim())}`;
}
function poetryAuthorUrl(author) {
	return `${POETRYDB_ORIGIN}/author/${encodeURIComponent(author.trim())}`;
}
function poetryRandomUrl(count = 6) {
	return `${POETRYDB_ORIGIN}/random/${count}`;
}
function isMiss(data) {
	return Boolean(data && typeof data === "object" && "status" in data && data.status === 404);
}
function normalize(record, fallback) {
	const lines = (record.lines ?? []).map((line) => line.trimEnd()).filter((line) => line !== void 0);
	if (!lines.length) return null;
	return {
		title: (record.title ?? fallback?.title ?? "Untitled").trim(),
		author: (record.author ?? fallback?.author ?? "Unknown").trim(),
		lines
	};
}
function asList(data) {
	if (isMiss(data)) return [];
	return Array.isArray(data) ? data : [data];
}
async function getPoems(url, signal, fallback) {
	return asList(await fetchJson(url, { signal })).map((item) => normalize(item, fallback)).filter((item) => item !== null);
}
async function fetchOzymandias(signal) {
	const poem = (await getPoems(OZYMANDIAS_LINES_URL, signal, {
		title: "Ozymandias",
		author: "Percy Bysshe Shelley"
	}))[0];
	if (!poem) throw new RemoteError("empty", "Ozymandias could not be loaded from PoetryDB.");
	return poem;
}
async function fetchPoemByTitle(title, signal) {
	const poems = await getPoems(poetryTitleUrl(title), signal, { title });
	if (!poems.length) throw new RemoteError("not-found", `No poem titled “${title}” in PoetryDB.`);
	return poems;
}
async function fetchFeaturedPoem(featured, signal) {
	if (featured.url === OZYMANDIAS_LINES_URL) return fetchOzymandias(signal);
	const poem = (await fetchPoemByTitle(featured.title, signal))[0];
	if (!poem) throw new RemoteError("not-found", `No poem titled “${featured.title}” in PoetryDB.`);
	return {
		...poem,
		author: poem.author === "Unknown" ? featured.author : poem.author
	};
}
async function searchPoems(query, signal) {
	const term = query.trim();
	if (!term) throw new RemoteError("empty", "Type a title or author.");
	try {
		const byTitle = await getPoems(poetryTitleUrl(term), signal);
		if (byTitle.length) return byTitle.slice(0, 12);
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
	}
	try {
		const byAuthor = await getPoems(poetryAuthorUrl(term), signal);
		if (byAuthor.length) return byAuthor.slice(0, 12);
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		throw asRemoteError(error, "PoetryDB could not be reached.");
	}
	throw new RemoteError("not-found", `No poems matching “${term}”. Try Ozymandias, Dickinson, or Keats.`);
}
async function fetchRandomPoems(signal) {
	const poems = await getPoems(poetryRandomUrl(6), signal);
	if (!poems.length) throw new RemoteError("empty", "PoetryDB returned no poems.");
	return poems;
}
function poemToReaderText(poem) {
	return `${poem.title}\n${poem.author}\n\n${poem.lines.join("\n")}`.trim();
}
var DEFAULT_LOAD = {
	type: "featured",
	title: "Ozymandias"
};
function poemKey(poem) {
	return `${poem.title}::${poem.author}`;
}
function PoetryLibrary() {
	const startReading = useAppStore((s) => s.startReading);
	const [query, setQuery] = (0, import_react.useState)("");
	const [load, setLoad] = (0, import_react.useState)(DEFAULT_LOAD);
	const [poem, setPoem] = (0, import_react.useState)(null);
	const [browse, setBrowse] = (0, import_react.useState)([]);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		const request = load.type === "featured" ? FEATURED_POEMS.find((item) => item.title === load.title) ?? FEATURED_POEMS[0] : null;
		const run = async () => {
			if (load.type === "featured" && request) {
				const next = await fetchFeaturedPoem(request, controller.signal);
				setPoem(next);
				setBrowse([]);
				announce(`Loaded ${next.title} by ${next.author}`);
				return;
			}
			const poems = load.type === "search" ? await searchPoems(load.query, controller.signal) : await fetchRandomPoems(controller.signal);
			setBrowse(poems);
			setPoem(poems[0] ?? null);
			announce(load.type === "search" ? `Found ${poems.length} poem${poems.length === 1 ? "" : "s"}` : `Loaded ${poems.length} poems from PoetryDB`);
		};
		run().then(() => {
			if (!controller.signal.aborted) setStatus("ready");
		}).catch((err) => {
			if (controller.signal.aborted || isAbortError(err)) return;
			setPoem(null);
			setBrowse([]);
			setStatus("error");
			setError(err);
			announce("Could not load that poem");
		});
		return () => controller.abort();
	}, [load, retryTick]);
	function openPoem(next) {
		startReading(poemToReaderText(next), {
			title: next.title,
			kind: "poem",
			sourceId: poemKey(next)
		});
	}
	const heading = poem?.title ?? (load.type === "search" ? load.query : "Poetry");
	const emptyMiss = status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex max-w-2xl flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					const next = query.trim();
					if (next) setLoad({
						type: "search",
						query: next
					});
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search poems"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Ozymandias, Keats, Dickinson",
						"aria-label": "Search poems by title or author"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					className: "sm:w-32",
					children: "Search"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Open a poem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => setLoad({ type: "random" }),
					children: "Surprise me"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: FEATURED_POEMS.map((item) => {
					const active = load.type === "featured" && load.title === item.title;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setLoad({
							type: "featured",
							title: item.title
						}),
						className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
						children: item.title === "\"Hope\" is the thing with feathers" ? "Hope" : item.title.replace(/:.*$/, "")
					}, item.title);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3 px-3 pt-3 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: poem?.author ?? "PoetryDB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-serif text-2xl",
						children: heading
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: load.type === "featured" && load.title === "Ozymandias" ? "Featured" : "Poem" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
					className: "max-h-[32rem] overflow-y-auto px-4 py-5",
					"aria-busy": status === "loading",
					children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteLoading, {
						label: `Loading ${heading}`,
						lines: 8
					}) : status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
						error,
						onRetry: () => setRetryTick((n) => n + 1),
						hint: emptyMiss ? "Try Ozymandias, The Raven, or an author such as Keats." : "PoetryDB may be busy. Retry in a moment."
					}) : poem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: poem.lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("font-serif text-base leading-relaxed", !line.trim() && "h-4"),
							children: line || "\xA0"
						}, `${poem.title}-${index}`))
					}) : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: load.type === "featured" && load.title === "Ozymandias" ? "via poetrydb.org/title/Ozymandias/lines.json" : "via PoetryDB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "pl-4 pr-3.5",
						disabled: !poem,
						onClick: () => {
							if (poem) openPoem(poem);
						},
						children: ["Open in reader", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
					})]
				})
			] }),
			browse.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
				children: "Also in this search"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: browse.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPoem(item),
					className: "rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block rounded-lg bg-bg px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm text-muted",
								children: item.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block line-clamp-2 font-serif text-sm text-muted",
								children: item.lines.filter((line) => line.trim()).slice(0, 2).join(" / ")
							})
						]
					})
				}, poemKey(item)))
			})] }) : null
		]
	});
}
var BNB_SPARQL = "https://bnb.data.bl.uk/sparql";
var OPEN_LIBRARY_SEARCH = "https://openlibrary.org/search.json";
var OPEN_LIBRARY_ORIGIN = "https://openlibrary.org";
var OPEN_LIBRARY_COVERS = "https://covers.openlibrary.org";
/** Fail fast — the official BNB SPARQL host is often down. */
var SPARQL_TIMEOUT_MS = 1500;
var OPEN_LIBRARY_TIMEOUT_MS = 1e4;
var OPEN_LIBRARY_FIELDS = "key,title,author_name,first_publish_year,cover_i,id_british_national_bibliography,number_of_pages_median";
var FEATURED_BNB_QUERIES = [
	"Darwin",
	"Austen",
	"Shakespeare",
	"Dickens"
];
function sparqlEscape(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
/** SPARQL regex metacharacters — the BNB endpoint is SPARQL 1.0 (no subqueries). */
function sparqlRegexEscape(value) {
	return sparqlEscape(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}
/**
* Optimized SPARQL 1.0 title search:
* 1. Bound `dcterms:title` before FILTER so the store can use a title index.
* 2. Case-insensitive `regex` instead of `LCASE(CONTAINS(...))` (full scan).
* 3. OPTIONAL joins only after the filter, then LIMIT 12 so contributor
*    cartesian products stay small.
*/
function bnbSparqlQuery(term) {
	const needle = sparqlRegexEscape(term.trim());
	return `PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX bibo: <http://purl.org/ontology/bibo/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
SELECT ?book ?title ?isbn13 ?authorName WHERE {
  ?book dcterms:title ?title .
  ${needle ? `FILTER regex(str(?title), "${needle}", "i")` : ""}
  OPTIONAL { ?book bibo:isbn13 ?isbn13 }
  OPTIONAL { ?book dcterms:contributor ?contrib . ?contrib foaf:name ?authorName }
}
LIMIT 12`;
}
function bnbSparqlUrl(term) {
	return `${BNB_SPARQL}?${new URLSearchParams({
		query: bnbSparqlQuery(term),
		output: "json"
	})}`;
}
function openLibrarySearchParams(term) {
	const q = term.trim() || "subject:literature";
	return new URLSearchParams({
		q,
		limit: "12",
		lang: "en",
		fields: OPEN_LIBRARY_FIELDS
	});
}
/** Public Open Library search URL (lean fields, relevance rank, no BNB gate). */
function openLibrarySearchUrl(term) {
	return `${OPEN_LIBRARY_SEARCH}?${openLibrarySearchParams(term)}`;
}
function openLibraryCoverUrl(coverId, size = "M") {
	return `${OPEN_LIBRARY_COVERS}/b/id/${coverId}-${size}.jpg`;
}
function useSameOriginProxy() {
	return typeof window !== "undefined";
}
function openLibraryFetchUrl(term) {
	const query = openLibrarySearchParams(term).toString();
	return useSameOriginProxy() ? `/api/openlibrary/search.json?${query}` : openLibrarySearchUrl(term);
}
function workFetchUrl(workKey) {
	const path = workKey.startsWith("/") ? workKey : `/${workKey}`;
	const jsonPath = path.endsWith(".json") ? path : `${path}.json`;
	return useSameOriginProxy() ? `/api/openlibrary${jsonPath}` : `${OPEN_LIBRARY_ORIGIN}${jsonPath}`;
}
function bindingValue(row, key) {
	return row[key]?.value?.trim() ?? "";
}
function pickSentence(values) {
	if (!values?.length) return void 0;
	const english = values.filter((item) => /[A-Za-z]{12,}/.test(item) && !/[ăâîșțА-я]/.test(item));
	return [...english.length ? english : values].sort((a, b) => b.length - a.length)[0]?.trim() || void 0;
}
function pickIsbn(values) {
	if (!values?.length) return void 0;
	return values.find((item) => item.replace(/-/g, "").length === 13) ?? values[0];
}
function fromSparql(data) {
	const grouped = /* @__PURE__ */ new Map();
	for (const row of data.results?.bindings ?? []) {
		const uri = bindingValue(row, "book");
		const title = bindingValue(row, "title");
		if (!uri || !title) continue;
		const existing = grouped.get(uri);
		const author = bindingValue(row, "authorName");
		const isbn = bindingValue(row, "isbn13");
		const bnbId = uri.replace(/^.*\//, "") || uri;
		if (existing) {
			if (author && !existing.authors.includes(author)) existing.authors.push(author);
			if (isbn && !existing.isbn) existing.isbn = isbn;
			continue;
		}
		grouped.set(uri, {
			id: uri,
			title,
			authors: author ? [author] : [],
			bnbId,
			isbn: isbn || void 0,
			subjects: [],
			source: "bnb-sparql"
		});
	}
	return [...grouped.values()];
}
function fromOpenLibrary(docs) {
	const books = [];
	const seen = /* @__PURE__ */ new Set();
	const ranked = [...docs].sort((a, b) => Number(Boolean(b.cover_i)) - Number(Boolean(a.cover_i)));
	for (const doc of ranked) {
		if (!doc.title) continue;
		const id = doc.key || doc.id_british_national_bibliography?.[0] || doc.title;
		if (seen.has(id)) continue;
		seen.add(id);
		const bnbId = doc.id_british_national_bibliography?.[0] ?? "";
		books.push({
			id,
			title: doc.title,
			authors: doc.author_name ?? [],
			bnbId,
			year: doc.first_publish_year,
			subjects: (doc.subject ?? []).slice(0, 4),
			isbn: pickIsbn(doc.isbn),
			cover: doc.cover_i ? openLibraryCoverUrl(doc.cover_i, "L") : void 0,
			firstSentence: pickSentence(doc.first_sentence),
			pages: doc.number_of_pages_median,
			source: "open-library"
		});
		if (books.length >= 12) break;
	}
	return books;
}
async function searchSparql(term, signal) {
	return fromSparql(await fetchJson(bnbSparqlUrl(term), {
		signal,
		timeoutMs: SPARQL_TIMEOUT_MS,
		accept: "application/sparql-results+json, application/json"
	}));
}
async function searchOpenLibrary(term, signal) {
	const options = {
		signal,
		timeoutMs: OPEN_LIBRARY_TIMEOUT_MS
	};
	try {
		return fromOpenLibrary((await fetchJson(openLibraryFetchUrl(term), options)).docs ?? []);
	} catch (error) {
		if (isAbortError(error) || !useSameOriginProxy()) throw error;
		return fromOpenLibrary((await fetchJson(openLibrarySearchUrl(term), options)).docs ?? []);
	}
}
async function searchBnb(term, signal) {
	const query = term.trim();
	const sparqlAttempt = query ? searchSparql(query, signal).catch((error) => {
		if (isAbortError(error)) throw asRemoteError(error);
		return null;
	}) : Promise.resolve(null);
	let openLibraryError;
	const openLibraryAttempt = searchOpenLibrary(query, signal).catch((error) => {
		if (isAbortError(error)) throw asRemoteError(error);
		openLibraryError = error;
		return [];
	});
	const [sparqlBooks, openLibraryBooks] = await Promise.all([sparqlAttempt, openLibraryAttempt]);
	if (sparqlBooks?.length) return {
		books: sparqlBooks,
		source: "bnb-sparql",
		query
	};
	if (openLibraryBooks.length) return {
		books: openLibraryBooks,
		source: "open-library",
		query
	};
	if (openLibraryError) throw asRemoteError(openLibraryError, "The catalog could not be reached.");
	throw new RemoteError("empty", query ? `No catalog records for “${query}”. Try Austen, Darwin, or Shakespeare.` : "No catalog records were returned.");
}
function bnbToReaderText(book) {
	const authors = book.authors.length ? `By ${book.authors.join(", ")}` : "Author unrecorded";
	const meta = [
		book.bnbId ? `British National Bibliography ${book.bnbId}` : "Open Library catalog",
		book.year ? `First published ${book.year}` : "",
		book.pages ? `${book.pages} pages` : "",
		book.isbn ? `ISBN ${book.isbn}` : ""
	].filter(Boolean);
	const subjects = book.subjects.length ? `Subjects: ${book.subjects.join(", ")}` : "";
	const opening = book.firstSentence ?? "";
	return [
		book.title,
		authors,
		meta.join(" · "),
		subjects,
		opening
	].filter(Boolean).join("\n\n");
}
function workDescription(data) {
	const raw = data.description;
	if (typeof raw === "string") return raw.trim();
	if (raw && typeof raw === "object" && typeof raw.value === "string") return raw.value.trim();
	return "";
}
/** Bibliographic record plus Open Library work notes when the work key is available. */
async function fetchBnbReaderText(book, signal) {
	const base = bnbToReaderText(book);
	if (!book.id.includes("/works/")) return base;
	try {
		const description = workDescription(await fetchJson(workFetchUrl(book.id), { signal }));
		if (!description) return base;
		return `${base}\n\n${description}`;
	} catch (error) {
		if (isAbortError(error)) throw asRemoteError(error);
		return base;
	}
}
function kindLabel(kind) {
	if (kind === "bible") return "Bible";
	if (kind === "pdf") return "Document";
	if (kind === "poem") return "Poem";
	return "Reading";
}
function Catalog() {
	const startReading = useAppStore((s) => s.startReading);
	const [query, setQuery] = (0, import_react.useState)("Darwin");
	const [submitted, setSubmitted] = (0, import_react.useState)("Darwin");
	const [books, setBooks] = (0, import_react.useState)([]);
	const [source, setSource] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("loading");
	const [error, setError] = (0, import_react.useState)(null);
	const [retryTick, setRetryTick] = (0, import_react.useState)(0);
	const [openingId, setOpeningId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const controller = new AbortController();
		setStatus("loading");
		setError(null);
		searchBnb(submitted, controller.signal).then((result) => {
			setBooks(result.books);
			setSource(result.source);
			setStatus("ready");
			announce(result.books.length ? `${result.books.length} catalog records for ${submitted}` : `No catalog records for ${submitted}`);
		}).catch((err) => {
			if (controller.signal.aborted || isAbortError(err)) return;
			setBooks([]);
			setSource(null);
			setStatus("error");
			setError(err);
			announce("Could not load the catalog");
		});
		return () => controller.abort();
	}, [submitted, retryTick]);
	async function openBook(book) {
		setOpeningId(book.id);
		try {
			const text = await fetchBnbReaderText(book);
			startReading(text, {
				title: book.title,
				kind: "text",
				sourceId: book.bnbId || book.id
			});
		} catch (err) {
			if (!isAbortError(err)) toast.error(err instanceof Error ? err.message : "Could not open that record");
		} finally {
			setOpeningId(null);
		}
	}
	const emptyMiss = status === "error" && isRemoteError(error) && (error.kind === "empty" || error.kind === "not-found");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row",
			onSubmit: (event) => {
				event.preventDefault();
				const next = query.trim();
				if (next) setSubmitted(next);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "relative flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Search the catalog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						size: 16,
						className: "absolute top-1/2 left-3.5 -translate-y-1/2 text-subtle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Darwin, Austen, Shakespeare",
						className: "pl-10"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: status === "loading",
				className: "sm:w-32",
				children: status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LensLoader, { label: "Searching" }) : "Search"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-1.5",
			children: FEATURED_BNB_QUERIES.map((item) => {
				const active = submitted.toLowerCase() === item.toLowerCase();
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setQuery(item);
						setSubmitted(item);
					},
					className: cn("h-9 rounded-md px-3 text-sm font-medium shadow-border transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", active ? "bg-fg text-primary-fg" : "bg-surface text-fg hover:bg-fg/6"),
					children: item
				}, item);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: [
						"Catalog · “",
						submitted,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tabular-nums text-subtle",
					children: status === "ready" ? books.length : ""
				})]
			}), status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: 6 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-2 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-3 aspect-[3/4] rounded-lg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-2 h-3 w-20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-4/5" })
					]
				}, index))
			}) : status === "error" && !emptyMiss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl bg-surface p-2 shadow-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg bg-bg px-4 py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteErrorView, {
						error,
						onRetry: () => setRetryTick((n) => n + 1),
						hint: "Open Library is searched directly, with a same-origin proxy if the browser cannot reach it. The British Library SPARQL service is tried in parallel and skipped if it is down."
					})
				})
			}) : books.length === 0 || emptyMiss ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl bg-surface p-2 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/feature-books.jpg",
					alt: "A stack of clothbound books on a linen table",
					width: 1200,
					height: 900,
					className: "aspect-[16/9] w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 22,
							className: "mx-auto mb-3 text-muted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: "No catalog records"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Try Darwin, Austen, or Shakespeare."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4",
							variant: "outline",
							onClick: () => setRetryTick((n) => n + 1),
							children: "Retry"
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
				children: books.map((book) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void openBook(book),
					disabled: openingId === book.id,
					className: "group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.97] disabled:opacity-70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-lg bg-bg",
						children: book.cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
							src: book.cover,
							alt: "",
							width: 400,
							height: 533,
							zoom: true,
							className: "aspect-[3/4] w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[3/4] items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
								size: 28,
								className: "text-subtle"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 pt-3 pb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-muted",
								children: book.year ?? book.subjects[0] ?? "Catalog record"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 line-clamp-2 font-medium",
								children: book.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-1 text-sm text-muted",
								children: book.authors.length ? book.authors.join(", ") : "Author unrecorded"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-center gap-2",
								children: [book.bnbId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: book.bnbId }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Open Library" }), book.year && book.bnbId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tabular-nums text-subtle",
									children: book.year
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 inline-flex items-center gap-1 text-sm font-medium",
								children: [openingId === book.id ? "Opening" : "Start reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 14,
									className: "transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
								})]
							})
						]
					})]
				}, book.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-xs leading-relaxed text-subtle",
				children: source === "bnb-sparql" ? "Live from the British Library SPARQL service." : "From Open Library. British Library SPARQL is queried in parallel and used when that endpoint is reachable."
			})] })]
		})
	] });
}
function Library$1() {
	const startReading = useAppStore((s) => s.startReading);
	const sessions = useAppStore((s) => s.sessions);
	const bookmarks = useAppStore((s) => s.bookmarks);
	const [section, setSection] = (0, import_react.useState)("catalog");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto h-full max-w-5xl px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl",
				children: "Library"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Open Library and British National Bibliography records, a live Bible, PoetryDB, and what you’ve kept."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
					value: section,
					onChange: setSection,
					label: "Library sections",
					options: [
						{
							id: "catalog",
							label: "Catalog"
						},
						{
							id: "bible",
							label: "Bible"
						},
						{
							id: "poems",
							label: "Poems"
						},
						{
							id: "yours",
							label: "Yours"
						}
					]
				})
			}),
			section === "bible" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibleLibrary, {})
			}),
			section === "poems" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoetryLibrary, {})
			}),
			section === "yours" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-10 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-xs font-medium tracking-wide text-muted uppercase",
						children: "Upload"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-surface p-2 shadow-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
							busy: uploading,
							onFile: (file) => {
								(async () => {
									setUploading(true);
									try {
										const doc = await processDocument(file);
										startReading(doc.content, {
											title: doc.title,
											kind: doc.metadata.format === "PDF" ? "pdf" : "text"
										});
										toast.success("Opened in the reader");
									} catch (err) {
										toast.error(err instanceof Error ? err.message : "Could not read that file");
									} finally {
										setUploading(false);
									}
								})();
							}
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-xs font-medium tracking-wide text-muted uppercase",
						children: "Bookmarks"
					}), bookmarks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Nothing bookmarked yet. Mark a place while you read."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: bookmarks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => startReading(item.content, {
								title: item.title,
								kind: item.kind
							}),
							className: "group flex w-full items-center justify-between rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex w-full items-center justify-between rounded-lg bg-bg px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-xs text-muted",
									children: [Math.round(item.progress * 100), "% saved"]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 16,
									className: "text-muted transition-transform duration-[150ms] group-hover:translate-x-0.5"
								})]
							})
						}, item.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 text-xs font-medium tracking-wide text-muted uppercase",
						children: "Recently read"
					}), sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Open a passage and it will land here."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => startReading(session.content, {
								title: session.title,
								kind: session.kind,
								sourceId: session.sourceId
							}),
							className: "rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block rounded-lg bg-bg px-4 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: kindLabel(session.kind)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-medium",
										children: session.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm text-muted",
										children: session.content
									})
								]
							})
						}, session.openedAt))
					})] })
				]
			}),
			section === "catalog" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {})
		]
	});
}
function Insights() {
	const sessions = useAppStore((s) => s.sessions);
	const text = useAppStore((s) => s.text);
	const startReading = useAppStore((s) => s.startReading);
	const reading = useAppStore((s) => s.reading);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const readingFeel = useAppStore((s) => s.readingFeel);
	const mode = useAppStore((s) => s.mode);
	const profile = useAppStore((s) => s.profile);
	const words = sessions.reduce((sum, session) => sum + wordCount(session.content), 0);
	const sessionCount = sessions.length;
	const progressPct = Math.round(reading.progress * 100);
	const focusScore = Math.max(0, 100 - reading.pauses.length * 12 - reading.rereads.length * 8);
	const feelScore = readingFeel === "right" ? 100 : readingFeel === "slow" || readingFeel === "fast" ? 70 : null;
	const quality = progressPct === 0 && feelScore == null ? null : feelScore == null ? Math.round(progressPct * .7 + focusScore * .3) : Math.round(progressPct * .4 + feelScore * .35 + focusScore * .25);
	const series = sessions.slice(0, 8).reverse().map((session, index) => ({
		d: String(index + 1),
		v: Math.round((session.progress ?? 0) * 100)
	}));
	const chartData = series.length > 0 ? series : [{
		d: "1",
		v: progressPct
	}];
	const contrast = evaluateScheme(profile.theme, profile.fontSize);
	const insight = readingFeel === "slow" ? "You marked this page as too fast. A lower target may help the next pass." : readingFeel === "fast" ? "You marked this page as too slow. You can raise the target if you want." : reading.rereads.length >= 2 ? profile.theme === "contrast" || profile.theme === "ink" ? "You moved back through the page more than once. Extra spacing may help." : "You moved back through the page more than once. A higher-contrast scheme can make the line easier to hold." : reading.pauses.length >= 2 ? "Long pauses showed up in this session. Focus line can help you re-enter." : text ? "Keep reading. Pace, pauses, and rereads fill this log as you go." : "Open a passage to start a live reading log.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto h-full max-w-5xl overflow-y-auto px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl",
				children: "Insights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-muted",
				children: "How far you’ve read, the pace you hold, and how the page felt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
							src: "/images/reading-room.jpg",
							alt: "Window light in a university reading room",
							width: 1600,
							height: 900,
							className: "aspect-[16/8] w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/80 to-fg/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 flex flex-col justify-end p-5 text-primary-fg sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-wide text-primary-fg/70 uppercase",
									children: "Session score"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-serif text-6xl tracking-tight tabular-nums",
									children: quality == null ? "—" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberFlow, { value: quality })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-sm text-sm text-primary-fg/75",
									children: insight
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
						className: "bg-primary px-5 py-5 text-primary-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide uppercase opacity-70",
							children: "Recent progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 h-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: chartData,
									barCategoryGap: 8,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "d",
										hide: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "v",
										fill: "color-mix(in oklab, var(--color-primary-fg) 45%, transparent)",
										radius: [
											3,
											3,
											0,
											0
										]
									})]
								})
							})
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "How it felt",
						value: readingFeel === "slow" ? "Too fast" : readingFeel === "fast" ? "Too slow" : readingFeel === "right" ? "Just right" : "—",
						hint: "Pace, pauses, rereads, and how the page felt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Current WPM",
						value: reading.currentWpm == null ? "—" : reading.currentWpm,
						hint: `Target ${targetWpm}`,
						numeric: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Words processed",
						value: words,
						hint: `Across ${sessionCount} session${sessionCount === 1 ? "" : "s"}`,
						numeric: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pauses",
						value: reading.pauses.length,
						hint: `${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}`,
						numeric: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Contrast",
						value: formatContrastRatio(contrast.body),
						hint: `${profile.name} · WCAG ${contrast.bodyLevel} · ${mode}`
					})
				]
			}),
			sessions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-lg font-medium",
					children: "History"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => startReading(session.content, {
							title: session.title,
							kind: session.kind,
							sourceId: session.sourceId
						}),
						className: "group rounded-xl bg-surface p-2 text-left shadow-border transition-[box-shadow,transform] duration-[150ms] ease-[var(--ease-out)] hover:shadow-border-hover active:scale-[0.99]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-3 rounded-lg bg-bg px-4 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-medium",
									children: session.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-xs text-muted",
									children: [
										new Date(session.openedAt).toLocaleTimeString([], {
											hour: "2-digit",
											minute: "2-digit"
										}),
										" · ",
										wordCount(session.content),
										" words",
										session.progress != null ? ` · ${Math.round(session.progress * 100)}%` : ""
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex shrink-0 items-center gap-1 text-sm font-medium text-muted",
								children: ["Resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
									size: 14,
									className: "transition-transform duration-[150ms] ease-[var(--ease-out)] group-hover:translate-x-0.5"
								})]
							})]
						})
					}, session.openedAt))
				})]
			})
		]
	});
}
function StatCard({ label, value, hint, numeric }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
		className: "px-5 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-3 font-serif tracking-tight ${numeric ? "text-4xl tabular-nums" : "text-3xl"}`,
				children: typeof value === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberFlow, { value }) : value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: hint
			})
		]
	}) });
}
function SchemePicker({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Color scheme",
		className: "grid grid-cols-3 gap-1.5",
		children: COLOR_SCHEMES.map((scheme) => {
			const selected = value === scheme.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selected,
				onClick: () => onChange(scheme.id),
				className: cn("flex h-11 items-center gap-2 rounded-md px-2.5 text-left text-sm font-medium transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", selected ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scheme-dot size-3.5 shrink-0 rounded-full",
					style: {
						background: scheme.swatch,
						boxShadow: selected ? `inset 0 0 0 1px ${scheme.ink}` : void 0
					},
					"aria-hidden": true
				}), scheme.label]
			}, scheme.id);
		})
	});
}
function ContrastMeter({ theme, fontSize }) {
	const report = evaluateScheme(theme, fontSize);
	const label = report.bodyLevel === "fail" ? "below AA" : report.bodyLevel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 text-xs leading-relaxed text-muted",
		children: [
			"Body ",
			formatContrastRatio(report.body),
			" at ",
			fontSize,
			"px · WCAG ",
			label,
			". Muted",
			" ",
			formatContrastRatio(report.muted),
			"."
		]
	});
}
var WCAG_22_READER = [
	{
		id: "1.3.1",
		level: "A",
		name: "Info and Relationships",
		addedIn: "2.0",
		summary: "Headings, landmarks, lists, and labels carry structure. Screen readers must not have to guess what a region is from visual layout."
	},
	{
		id: "1.4.1",
		level: "A",
		name: "Use of Color",
		addedIn: "2.0",
		summary: "Color is not the only way to tell things apart. Hue-only emphasis fails when reds and greens collapse."
	},
	{
		id: "1.4.3",
		level: "AA",
		name: "Contrast (Minimum)",
		addedIn: "2.0",
		summary: "Normal text 4.5:1. Large text (24px, or 18.67px bold) 3:1."
	},
	{
		id: "1.4.4",
		level: "AA",
		name: "Resize Text",
		addedIn: "2.0",
		summary: "Text can grow to 200% without clipping or losing meaning."
	},
	{
		id: "1.4.6",
		level: "AAA",
		name: "Contrast (Enhanced)",
		addedIn: "2.0",
		summary: "Normal text 7:1. Large text 4.5:1."
	},
	{
		id: "1.4.10",
		level: "AA",
		name: "Reflow",
		addedIn: "2.1",
		summary: "At 320 CSS pixels wide, reading does not require horizontal scrolling."
	},
	{
		id: "1.4.11",
		level: "AA",
		name: "Non-text Contrast",
		addedIn: "2.1",
		summary: "UI controls and meaningful graphics 3:1 against adjacent colors."
	},
	{
		id: "1.4.12",
		level: "AA",
		name: "Text Spacing",
		addedIn: "2.1",
		summary: "Content still works when line-height is 1.5, letter-spacing 0.12em, word-spacing 0.16em, paragraph 2em."
	},
	{
		id: "2.1.1",
		level: "A",
		name: "Keyboard",
		addedIn: "2.0",
		summary: "Everything you can do with a pointer is reachable from the keyboard."
	},
	{
		id: "2.4.1",
		level: "A",
		name: "Bypass Blocks",
		addedIn: "2.0",
		summary: "A skip link jumps past repeating chrome (header, primary nav) to the main region."
	},
	{
		id: "2.4.3",
		level: "A",
		name: "Focus Order",
		addedIn: "2.0",
		summary: "Tab order follows reading order. Sentences in the reader are not a field of buttons."
	},
	{
		id: "2.4.6",
		level: "AA",
		name: "Headings and Labels",
		addedIn: "2.0",
		summary: "Each view has a heading. Icon-only controls have an accessible name."
	},
	{
		id: "2.4.7",
		level: "AA",
		name: "Focus Visible",
		addedIn: "2.0",
		summary: "Keyboard focus has a visible indicator."
	},
	{
		id: "2.4.11",
		level: "AA",
		name: "Focus Not Obscured (Minimum)",
		addedIn: "2.2",
		summary: "The focused item is at least partly visible — not fully hidden under sticky chrome."
	},
	{
		id: "2.4.13",
		level: "AAA",
		name: "Focus Appearance",
		addedIn: "2.2",
		summary: "Focus indicator is at least 2 CSS px, 3:1 contrast, and encloses the component (or equivalent area)."
	},
	{
		id: "2.5.7",
		level: "AA",
		name: "Dragging Movements",
		addedIn: "2.2",
		summary: "Anything that uses a drag also has a single-pointer alternative. File drop is paired with Upload."
	},
	{
		id: "2.5.8",
		level: "AA",
		name: "Target Size (Minimum)",
		addedIn: "2.2",
		summary: "Pointer targets are at least 24×24 CSS pixels, unless spaced or text-only."
	},
	{
		id: "3.2.6",
		level: "A",
		name: "Consistent Help",
		addedIn: "2.2",
		summary: "Help, if offered, sits in the same relative place across pages."
	},
	{
		id: "3.3.7",
		level: "A",
		name: "Redundant Entry",
		addedIn: "2.2",
		summary: "Do not ask for the same information twice in a process. NeuroLens has no multi-step forms."
	},
	{
		id: "3.3.8",
		level: "AA",
		name: "Accessible Authentication (Minimum)",
		addedIn: "2.2",
		summary: "Sign-in cannot require recalling a password from memory. NeuroLens has no accounts."
	},
	{
		id: "4.1.2",
		level: "A",
		name: "Name, Role, Value",
		addedIn: "2.0",
		summary: "Controls expose a name, a role, and their state (pressed, current page, progress). Bionic markup is hidden from the accessibility tree."
	},
	{
		id: "4.1.3",
		level: "AA",
		name: "Status Messages",
		addedIn: "2.1",
		summary: "Recommendations, listen, and auto-scroll announce through a live region. Focus does not move."
	}
];
/** Overrides a page must still survive under SC 1.4.12. */
var TEXT_SPACING_1_4_12 = {
	lineHeight: 1.5,
	letterSpacingEm: .12,
	wordSpacingEm: .16,
	paragraphEm: 2
};
function evaluateTextSpacing(input) {
	return {
		lineHeight: input.lineHeight,
		letterSpacingEm: input.letterSpacing,
		wordSpacingEm: input.wordSpacing,
		lineMeets: input.lineHeight >= TEXT_SPACING_1_4_12.lineHeight,
		letterMeets: input.letterSpacing >= TEXT_SPACING_1_4_12.letterSpacingEm,
		wordMeets: input.wordSpacing >= TEXT_SPACING_1_4_12.wordSpacingEm
	};
}
function evaluatePairCriteria(input) {
	const large = isLargeText(input.fontSizePx);
	const level = textContrastLevel(input.ratio, input.fontSizePx);
	const simulated = simulatedContrast(input.fg, input.bg, input.cvd);
	const hueLost = hueDistinctionLost(input.fg, input.bg, input.cvd);
	return [
		{
			id: "1.4.1",
			status: input.cvd === "none" ? "info" : hueLost ? "fail" : "pass",
			detail: hueLost ? `Under ${input.cvd} these two colors pull together. Hue was doing the work.` : input.cvd === "none" ? "Run a color-vision view to see if the pair still holds without hue." : `Still separable under ${input.cvd} (${simulated.toFixed(1)}:1 as seen).`
		},
		{
			id: "1.4.3",
			status: level === "fail" ? "fail" : "pass",
			detail: large ? `${input.ratio.toFixed(1)}:1 at ${input.fontSizePx}px (large text, AA is 3:1).` : `${input.ratio.toFixed(1)}:1 at ${input.fontSizePx}px (AA is 4.5:1).`
		},
		{
			id: "1.4.6",
			status: level === "AAA" ? "pass" : "fail",
			detail: large ? `AAA large text needs 4.5:1.` : `AAA normal text needs 7:1.`
		},
		{
			id: "1.4.11",
			status: uiContrastPass(input.ratio) ? "pass" : "fail",
			detail: `${input.ratio.toFixed(1)}:1 against adjacent paper. Controls need 3:1.`
		}
	];
}
function Level({ value }) {
	if (value === true || value === "pass") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-success",
		children: "pass"
	});
	if (value === false || value === "fail") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-danger",
		children: "fail"
	});
	if (value === "info") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-muted",
		children: "note"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value });
}
var CVD_OPTIONS = [
	{
		id: "none",
		label: "Typical"
	},
	{
		id: "protanopia",
		label: "Protan"
	},
	{
		id: "deuteranopia",
		label: "Deutan"
	},
	{
		id: "tritanopia",
		label: "Tritan"
	}
];
function ContrastLab() {
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const cvd = useAppStore((s) => s.cvdPreview);
	const setCvd = useAppStore((s) => s.setCvdPreview);
	const tokens = SCHEME_TOKENS[profile.theme];
	const [fg, setFg] = (0, import_react.useState)(tokens.fg);
	const [bg, setBg] = (0, import_react.useState)(tokens.bg);
	const pair = (0, import_react.useMemo)(() => {
		if (!isHexColor(fg) || !isHexColor(bg)) return null;
		return describePair(fg, bg);
	}, [fg, bg]);
	const seenFg = pair ? simulateHex(pair.fg, cvd) : tokens.fg;
	const seenBg = pair ? simulateHex(pair.bg, cvd) : tokens.bg;
	const seenRatio = pair ? simulatedContrast(pair.fg, pair.bg, cvd) : 0;
	const spacing = evaluateTextSpacing(profile);
	const live = pair ? evaluatePairCriteria({
		ratio: pair.ratio,
		fontSizePx: profile.fontSize,
		cvd,
		fg: pair.fg,
		bg: pair.bg
	}) : [];
	const liveById = Object.fromEntries(live.map((row) => [row.id, row]));
	function useScheme(id) {
		const next = SCHEME_TOKENS[id];
		setFg(next.fg);
		setBg(next.bg);
		setProfile({
			...profile,
			theme: id
		});
	}
	const lighter = pair ? Math.max(pair.fgLum, pair.bgLum) : 0;
	const darker = pair ? Math.min(pair.fgLum, pair.bgLum) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-medium",
			children: "Contrast lab"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: [
				"WCAG 2.2 contrast is a ratio of relative luminance, not a guess about how a color “looks.” Each sRGB channel is linearized, mixed into L, then scored as (L",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "lighter" }),
				" + 0.05) / (L",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "darker" }),
				" + 0.05). Body text needs 4.5:1 for AA and 7:1 for AAA. Large type (24px, or 18.67px bold) can pass AA at 3:1. Controls need 3:1."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "sRGB 8-bit C becomes cs = C / 255." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Linearize: cs ≤ 0.04045 ? cs / 12.92 : ((cs + 0.055) / 1.055)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "2.4" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "L = 0.2126R + 0.7152G + 0.0722B" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Contrast = (L",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "lighter" }),
					" + 0.05) / (L",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "darker" }),
					" + 0.05)"
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "lab-fg",
				children: "Ink"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scheme-dot size-8 shrink-0 rounded-md",
					style: { background: isHexColor(fg) ? normalizeHex(fg) : tokens.fg }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "lab-fg",
					value: fg,
					onChange: (event) => setFg(event.target.value),
					spellCheck: false
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "lab-bg",
				children: "Paper"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "scheme-dot size-8 shrink-0 rounded-md",
					style: { background: isHexColor(bg) ? normalizeHex(bg) : tokens.bg }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "lab-bg",
					value: bg,
					onChange: (event) => setBg(event.target.value),
					spellCheck: false
				})]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
					children: "Color vision"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
					value: cvd,
					onChange: setCvd,
					label: "Color vision simulation",
					options: CVD_OPTIONS,
					className: "h-9 w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs leading-relaxed text-muted",
					children: ["Machado 2009, applied to linear sRGB — not a CSS hue shift. Brettel 1997 is the other gold-standard simulator (especially for tritanopia). Viénot 1999 is a faster Brettel for red-green only. This view remaps the whole NeuroLens palette so you can see the product, not a swatch. ", CVD_HINTS[cvd]]
				})
			]
		}),
		pair && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-md px-4 py-5",
			style: {
				background: seenBg,
				color: seenFg
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-medium",
				children: "The quick brown fox reads the page."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm opacity-80",
				children: cvd === "none" ? "Typical vision." : `As ${CVD_LABELS[cvd].toLowerCase()} would see this pair.`
			})]
		}),
		pair && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Ratio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 font-medium tabular-nums",
					children: formatContrastRatio(pair.ratio)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Seen as"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 font-medium tabular-nums",
					children: formatContrastRatio(seenRatio)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Normal AA/AAA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 font-medium",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Level, { value: pair.normal })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "UI 3:1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 font-medium",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Level, { value: pair.ui })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Ink L"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 tabular-nums",
						children: pair.fgLum.toFixed(3)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-2 sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Paper L"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 tabular-nums",
						children: pair.bgLum.toFixed(3)
					})]
				})
			]
		}),
		pair && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-mono text-xs leading-relaxed text-muted",
			children: [
				"Ink RGB(",
				pair.fgRgb.join(", "),
				") → linear (",
				pair.fgRgb.map((c) => linearizeChannel(c).toFixed(3)).join(", "),
				")",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Paper RGB(",
				pair.bgRgb.join(", "),
				") → linear (",
				pair.bgRgb.map((c) => linearizeChannel(c).toFixed(3)).join(", "),
				")",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"(",
				lighter.toFixed(3),
				" + 0.05) / (",
				darker.toFixed(3),
				" + 0.05) = ",
				pair.ratio.toFixed(2),
				cvd !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Machado ",
					CVD_LABELS[cvd],
					" ink ",
					seenFg,
					" on ",
					seenBg,
					" → ",
					seenRatio.toFixed(2),
					":1"
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-8 text-xs font-medium tracking-wide text-muted uppercase",
			children: "WCAG 2.2 on this page"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "Contrast is only three criteria. The rest of 2.2 is about whether the page still works when color, space, focus, or target size change."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border rounded-md bg-fg/4",
			children: WCAG_22_READER.map((criterion) => {
				const liveRow = liveById[criterion.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-muted",
										children: criterion.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2",
										children: criterion.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-subtle",
										children: criterion.level
									}),
									criterion.addedIn === "2.2" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-xs text-accent",
										children: "2.2"
									})
								]
							}), liveRow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Level, { value: liveRow.status }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: "page"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted",
							children: criterion.summary
						}),
						liveRow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed",
							children: liveRow.detail
						})
					]
				}, criterion.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-xs font-medium tracking-wide text-muted uppercase",
			children: "Text spacing · 1.4.12"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: "The criterion is not “use these values.” It is “the page still works if someone applies them.” Your current profile versus the override test:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "mt-3 grid grid-cols-3 gap-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Line"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "mt-1 tabular-nums",
					children: [
						spacing.lineHeight.toFixed(1),
						" / ",
						TEXT_SPACING_1_4_12.lineHeight.toFixed(1)
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Letter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "mt-1 tabular-nums",
					children: [
						spacing.letterSpacingEm.toFixed(2),
						" / ",
						TEXT_SPACING_1_4_12.letterSpacingEm.toFixed(2),
						"em"
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Word"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
					className: "mt-1 tabular-nums",
					children: [
						spacing.wordSpacingEm.toFixed(2),
						" / ",
						TEXT_SPACING_1_4_12.wordSpacingEm.toFixed(2),
						"em"
					]
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-xs leading-relaxed text-muted",
			children: [
				"Target size 2.5.8 is ",
				24,
				"×",
				24,
				" CSS pixels. Reader controls are 44px, which also meets the older AAA 2.5.5 size."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-xs font-medium tracking-wide text-muted uppercase",
			children: [
				"Rooms at ",
				profile.fontSize,
				"px",
				cvd !== "none" ? ` · ${CVD_LABELS[cvd]}` : ""
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 divide-y divide-border rounded-md bg-fg/4",
			children: COLOR_SCHEMES.map((scheme) => {
				const report = evaluateScheme(scheme.id, profile.fontSize);
				const tokensFor = SCHEME_TOKENS[scheme.id];
				const seen = simulatedContrast(tokensFor.fg, tokensFor.bg, cvd);
				const active = scheme.id === profile.theme;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": active,
					onClick: () => useScheme(scheme.id),
					className: cn("flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm", active && "bg-fg text-primary-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "scheme-dot size-3.5 rounded-full",
							style: { background: simulateHex(scheme.swatch, cvd) }
						}), scheme.label]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("tabular-nums", active ? "text-primary-fg/80" : "text-muted"),
						children: [
							formatContrastRatio(cvd === "none" ? report.body : seen),
							" ·",
							" ",
							cvd === "none" ? report.bodyLevel === "fail" ? "below AA" : report.bodyLevel : seen >= 7 ? "AAA" : seen >= 4.5 ? "AA" : "below AA"
						]
					})]
				}, scheme.id);
			})
		})
	] });
}
function SettingsPanel() {
	const clearData = useAppStore((s) => s.clearData);
	const applySavedProfile = useAppStore((s) => s.applySavedProfile);
	const savedProfiles = useAppStore((s) => s.savedProfiles);
	const deleteSavedProfile = useAppStore((s) => s.deleteSavedProfile);
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const [holding, setHolding] = (0, import_react.useState)(false);
	const timer = (0, import_react.useRef)(null);
	function startHold() {
		setHolding(true);
		timer.current = window.setTimeout(() => {
			clearData();
			setHolding(false);
			toast.success("Local data cleared");
		}, 2e3);
	}
	function endHold() {
		setHolding(false);
		if (timer.current) window.clearTimeout(timer.current);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto h-full max-w-3xl overflow-y-auto px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Profiles, type, and color stay on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
					title: "Color scheme",
					description: "Paper, night, and quieter rooms. Contrast is measured against WCAG 2.2 at your type size. Adaptive can recommend a stronger scheme; it will not leave your light or dark room."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
					className: "px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemePicker, {
						value: profile.theme,
						onChange: (theme) => setProfile({
							...profile,
							theme
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastMeter, {
						theme: profile.theme,
						fontSize: profile.fontSize
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
					className: "px-4 py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastLab, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
					title: "Dyslexia-friendly type",
					description: "Lexend lowers crowding. Atkinson distinguishes similar letters. Andika and Inclusive Sans are built for literacy. OpenDyslexic weights the base of each letter so it is harder to flip."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
					className: "p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1.5",
						children: FONT_CHOICES.map((font) => {
							const selected = profile.fontFamily === font.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => setProfile({
									...profile,
									fontFamily: font.id
								}),
								className: cn("rounded-md px-3 py-3 text-left transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", FONT_CLASS[font.id], selected ? "bg-fg text-primary-fg" : "hover:bg-fg/8"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: font.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-0.5 block text-xs", selected ? "text-primary-fg/70" : "text-muted"),
									children: font.hint
								})]
							}, font.id);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
					title: "Reading profiles",
					description: "Named setups you can return to. Adaptive will not change a locked setting."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
					className: "flex flex-col gap-1.5 p-2",
					children: [NAMED_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "justify-between",
						onClick: () => applySavedProfile(preset),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [preset.targetWpm, " WPM"]
						})]
					}, preset.id)), savedProfiles.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "flex-1 justify-between",
							onClick: () => applySavedProfile(preset),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: preset.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [preset.targetWpm, " WPM"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => deleteSavedProfile(preset.id),
							children: "Remove"
						})]
					}, preset.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, {
					title: "Reset data",
					description: "Hold to clear saved settings, notes, bookmarks, and reading history. Release to cancel."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelWell, {
					className: "px-4 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "destructive",
						className: "relative overflow-hidden",
						onPointerDown: startHold,
						onPointerUp: endHold,
						onPointerLeave: endHold,
						onPointerCancel: endHold,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hold-fill absolute inset-0 bg-danger/20",
							"data-holding": holding ? "true" : "false"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: holding ? "Hold to confirm" : "Clear local data"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-3 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelHeader, { title: "About NeuroLens" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelWell, {
					className: "px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "An adaptive reading environment. Paste text, open a PDF, look up a Bible chapter from bible-api.com (HelloAO as fallback), search Open Library (and British National Bibliography SPARQL when it is up), or open a poem from PoetryDB. Adaptive watches pace, pauses, rereads, feel, and contrast — it recommends, and it never silently rewrites a locked setting. Contrast Lab can simulate protanopia, deuteranopia, and tritanopia using Machado 2009. Skip to content, named landmarks, and a live status region are there for screen readers; bionic fixation stays visual."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-subtle",
						children: "Version 3.8 · WEB via bible-api.com · Open Library · PoetryDB"
					})]
				})]
			})
		]
	});
}
var WORDS = {
	phenomenon: "event",
	phenomena: "events",
	cognitive: "mental",
	significant: "important",
	significantly: "greatly",
	friction: "difficulty",
	implications: "effects",
	implication: "effect",
	neurodivergent: "neurodivergent",
	manifestation: "sign",
	facilitate: "help",
	facilitates: "helps",
	facilitated: "helped",
	utilize: "use",
	utilizes: "uses",
	utilized: "used",
	utilizing: "using",
	demonstrate: "show",
	demonstrates: "shows",
	demonstrated: "showed",
	ameliorate: "improve",
	exacerbate: "worsen",
	arbitrary: "random",
	substantive: "real",
	meticulous: "careful",
	proficient: "skilled",
	ephemeral: "short-lived",
	ubiquitous: "common",
	aggregate: "total",
	culmination: "result",
	discrepancy: "gap",
	empirical: "observed",
	hypothesis: "theory",
	hypotheses: "theories",
	pervasive: "widespread",
	trajectory: "path",
	paradigm: "model",
	dichotomy: "split",
	ambiguous: "unclear",
	coherent: "clear",
	synthesis: "combination",
	comprehensive: "complete",
	constrain: "limit",
	constrained: "limited",
	propensity: "tendency",
	magnitude: "size",
	proliferate: "spread",
	recursive: "repeating",
	algorithm: "method",
	algorithms: "methods",
	transform: "change",
	transforms: "changes",
	dynamically: "as you go",
	graphemes: "letters",
	grapheme: "letter",
	optimize: "improve",
	optimizes: "improves",
	saccadic: "eye-jump",
	conventional: "usual",
	participants: "readers in the study",
	entropy: "clutter",
	orientation: "finding your place",
	retention: "holding on",
	populations: "groups",
	investigations: "studies",
	investigates: "looks at",
	investigate: "look at",
	subsequently: "later",
	approximately: "about",
	sufficient: "enough",
	insufficient: "not enough",
	nevertheless: "still",
	furthermore: "also",
	moreover: "also",
	therefore: "so",
	consequently: "as a result",
	regarding: "about",
	concerning: "about",
	numerous: "many",
	additional: "more",
	previously: "before",
	currently: "now",
	predominantly: "mostly",
	particularly: "especially",
	specifically: "in particular",
	fundamentally: "at root",
	essentially: "basically",
	relatively: "fairly",
	considerably: "a lot",
	enhances: "improves"
};
var PHRASES = [
	[/\bin light of\b/gi, "because of"],
	[/\bin the context of\b/gi, "in"],
	[/\bwith respect to\b/gi, "about"],
	[/\bin order to\b/gi, "to"],
	[/\bin accordance with\b/gi, "following"],
	[/\bit is worth noting that\b/gi, "note that"],
	[/\bit is worth noting\b/gi, "note"],
	[/\bprior to\b/gi, "before"],
	[/\bsubsequent to\b/gi, "after"],
	[/\ba large number of\b/gi, "many"],
	[/\ba number of\b/gi, "some"],
	[/\bdue to the fact that\b/gi, "because"],
	[/\bin the event that\b/gi, "if"],
	[/\bhas the ability to\b/gi, "can"],
	[/\bin addition to\b/gi, "besides"],
	[/\bon the other hand\b/gi, "but"],
	[/\bas a result of\b/gi, "from"],
	[/\bthe majority of\b/gi, "most"]
];
function preserveCase(source, replacement) {
	if (!source) return replacement;
	if (source === source.toUpperCase() && source.length > 1) return replacement.toUpperCase();
	if (source[0] === source[0]?.toUpperCase()) return replacement.charAt(0).toUpperCase() + replacement.slice(1);
	return replacement;
}
function gradeLevel(text) {
	const sentences = splitSentences(text);
	const words = text.trim().split(/\s+/).filter(Boolean);
	const chars = text.replace(/\s/g, "").length;
	const sentenceCount = Math.max(1, sentences.length);
	const wordCount = Math.max(1, words.length);
	const averageSentenceLength = wordCount / sentenceCount;
	const averageWordLength = chars / wordCount;
	const grade = .39 * averageSentenceLength + 11.8 * (averageWordLength / 2.5) - 15.59;
	return Math.max(1, Math.min(18, Math.round(grade)));
}
function complexityOf(text) {
	const hits = Object.keys(WORDS).filter((word) => new RegExp(`\\b${word}\\b`, "i").test(text)).length;
	const long = splitSentences(text).filter((sentence) => sentence.split(/\s+/).length > 24).length;
	if (hits >= 6 || long >= 3) return "complex";
	if (hits >= 2 || long >= 1) return "moderate";
	return "easy";
}
function simplifyPhrases(text) {
	let next = text;
	let count = 0;
	for (const [pattern, simple] of PHRASES) next = next.replace(pattern, () => {
		count += 1;
		return simple;
	});
	return {
		text: next,
		count
	};
}
function simplifyWords(text) {
	let count = 0;
	return {
		text: text.replace(/\b[\p{L}']+\b/gu, (word) => {
			const simple = WORDS[word.toLowerCase()];
			if (!simple || simple.toLowerCase() === word.toLowerCase()) return word;
			count += 1;
			return preserveCase(word, simple);
		}),
		count
	};
}
function shortenSentences(text) {
	return splitSentences(text).map((sentence) => {
		if (sentence.split(/\s+/).length <= 22) return sentence;
		const parts = sentence.split(/,\s+(?=(?:and|but|which|while|although|because)\b)/i);
		if (parts.length < 2) return sentence;
		return parts.map((part, index) => {
			const trimmed = part.trim().replace(/[.!?]+$/, "");
			if (!trimmed) return "";
			return `${index === 0 ? trimmed : trimmed.charAt(0).toUpperCase() + trimmed.slice(1)}.`;
		}).filter(Boolean).join(" ");
	}).join(" ");
}
function simplifyText(originalText) {
	if (!originalText.trim()) return {
		original: originalText,
		simplified: originalText,
		replacements: 0,
		complexity: "easy",
		originalGrade: 1,
		simplifiedGrade: 1
	};
	const phrases = simplifyPhrases(originalText);
	const words = simplifyWords(phrases.text);
	const simplified = shortenSentences(words.text).replace(/\s+/g, " ").trim();
	return {
		original: originalText,
		simplified,
		replacements: phrases.count + words.count,
		complexity: complexityOf(originalText),
		originalGrade: gradeLevel(originalText),
		simplifiedGrade: gradeLevel(simplified)
	};
}
var PATTERN = {
	press: 8,
	ok: 12,
	good: [
		10,
		40,
		16
	],
	bad: [
		24,
		32,
		18
	],
	start: 14,
	adapt: [
		8,
		28,
		12
	]
};
function tapFeedback(kind) {
	if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") return;
	if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	try {
		navigator.vibrate(PATTERN[kind]);
	} catch {}
}
var Dialog = Dialog$1;
var DialogTitle = DialogTitle$1;
var DialogDescription = DialogDescription$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-70 bg-fg/30", "data-[state=open]:animate-[overlay-in_250ms_var(--ease-out)]", "data-[state=closed]:animate-[overlay-out_150ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease]", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-70 w-[min(100%-2rem,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-5 shadow-float origin-center", "data-[state=open]:animate-[modal-in_250ms_var(--ease-out)]", "data-[state=closed]:animate-[modal-out_150ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_160ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_120ms_ease]", className),
		...props,
		children
	})] });
}
function IconSwap({ active, ActiveIcon, InactiveIcon, size = 16 }) {
	const reduce = useReducedMotion();
	const Icon = active ? ActiveIcon : InactiveIcon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative inline-flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			initial: false,
			mode: "popLayout",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "absolute inset-0 flex items-center justify-center",
				initial: {
					opacity: 0,
					scale: .25,
					filter: "blur(4px)"
				},
				animate: {
					opacity: 1,
					scale: 1,
					filter: "blur(0px)"
				},
				exit: {
					opacity: 0,
					scale: .25,
					filter: "blur(4px)"
				},
				transition: motionTransition(reduce, springs.icon),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size })
			}, active ? "on" : "off")
		})
	});
}
function Sheet({ open, onOpenChange, children, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
		open,
		onOpenChange,
		direction: "left",
		shouldScaleBackground: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-60 bg-fg/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
			"aria-describedby": void 0,
			className: cn("fixed top-0 left-0 z-60 flex h-full w-[min(20rem,calc(100vw-1.5rem))] flex-col bg-surface outline-none", "shadow-float"),
			style: { transitionTimingFunction: "var(--ease-drawer)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
				className: "sr-only",
				children: title
			}), children]
		})] })
	});
}
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		sideOffset,
		className: cn("z-80 min-w-44 rounded-md bg-surface p-1 shadow-float", "origin-[var(--radix-dropdown-menu-content-transform-origin)]", "data-[state=open]:animate-[menu-in_180ms_var(--ease-out)]", "data-[state=closed]:animate-[menu-out_120ms_var(--ease-out)]", "motion-reduce:data-[state=open]:animate-[overlay-in_140ms_ease]", "motion-reduce:data-[state=closed]:animate-[overlay-out_100ms_ease]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none", "data-[highlighted]:bg-fg/6", "data-[disabled]:pointer-events-none data-[disabled]:opacity-40", className),
		...props
	});
}
var MODES = [
	"default",
	"adhd",
	"dyslexia",
	"focus",
	"academic",
	"speed",
	"adaptive"
];
function LockToggle({ setting }) {
	const locked = useAppStore((s) => s.lockedSettings.includes(setting));
	const toggleLock = useAppStore((s) => s.toggleLock);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "text-subtle hover:text-fg",
		"aria-label": locked ? "Unlock setting" : "Lock setting from Adaptive",
		"aria-pressed": locked,
		onClick: () => toggleLock(setting),
		children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { size: 13 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { size: 13 })
	});
}
function ReaderControls({ onClose }) {
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
	const [profileName, setProfileName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Reading options"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						"aria-label": "Full screen",
						title: "Fullscreen",
						onClick: () => {
							if (document.fullscreenElement) document.exitFullscreen();
							else document.documentElement.requestFullscreen();
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { size: 16 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon-sm",
						onClick: onClose,
						"aria-label": "Close options",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-8 overflow-y-auto px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
							children: "Mode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-1.5",
							children: MODES.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": mode === id,
								onClick: () => setMode(id),
								className: cn("flex h-11 items-center rounded-md px-3 text-sm font-medium transition-[background-color,transform] duration-[140ms] ease-[var(--ease-out)] active:scale-[0.97]", mode === id ? "bg-fg text-primary-fg" : "bg-fg/4 text-fg hover:bg-fg/8"),
								children: READING_PROFILES[id].name
							}, id))
						}),
						mode === "adaptive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted",
							children: "NeuroLens learns how you read and recommends adjustments — pace, spacing, focus, and contrast. Locked settings will not be changed."
						}),
						lastAdaptiveChange && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "mt-3 w-full",
							onClick: undoAdaptiveChange,
							children: "Undo last recommendation"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
							children: "Profiles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1.5",
							children: [NAMED_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applySavedProfile(preset),
								className: "flex h-11 items-center rounded-md bg-fg/4 px-3 text-sm font-medium hover:bg-fg/8",
								children: preset.name
							}, preset.id)), savedProfiles.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applySavedProfile(preset),
								className: "flex h-11 items-center rounded-md bg-fg/4 px-3 text-sm font-medium hover:bg-fg/8",
								children: preset.name
							}, preset.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: profileName,
								onChange: (event) => setProfileName(event.target.value),
								placeholder: "Name this setup",
								"aria-label": "Name this setup",
								className: "h-9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => {
									saveCurrentProfile(profileName);
									setProfileName("");
								},
								children: "Save"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
								children: "Typeface"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-1.5",
								children: FONT_CHOICES.map((font) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": profile.fontFamily === font.id,
									onClick: () => setProfile({
										...profile,
										fontFamily: font.id
									}),
									className: cn("flex h-11 flex-col items-start justify-center rounded-md px-3 text-left", profile.fontFamily === font.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: font.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-[11px]", profile.fontFamily === font.id ? "text-primary-fg/70" : "text-muted"),
										children: font.hint
									})]
								}, font.id))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-wide text-muted uppercase",
										children: "Color scheme"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "theme" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchemePicker, {
									value: profile.theme,
									onChange: (theme) => setProfile({
										...profile,
										theme
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContrastMeter, {
									theme: profile.theme,
									fontSize: profile.fontSize
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Size" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "fontSize" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [profile.fontSize, "px"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 14,
								max: 28,
								step: 1,
								value: [profile.fontSize],
								onValueChange: ([value]) => setProfile({
									...profile,
									fontSize: value ?? 18
								}),
								"aria-label": "Type size"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Line height" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "lineHeight" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: profile.lineHeight.toFixed(1)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 1.4,
								max: 2.2,
								step: .1,
								value: [profile.lineHeight],
								onValueChange: ([value]) => setProfile({
									...profile,
									lineHeight: value ?? 1.6
								}),
								"aria-label": "Line height"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Letter spacing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: profile.letterSpacing.toFixed(2)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .12,
								step: .01,
								value: [profile.letterSpacing],
								onValueChange: ([value]) => setProfile({
									...profile,
									letterSpacing: value ?? 0
								}),
								"aria-label": "Letter spacing"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Word spacing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: profile.wordSpacing.toFixed(2)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .2,
								step: .02,
								value: [profile.wordSpacing],
								onValueChange: ([value]) => setProfile({
									...profile,
									wordSpacing: value ?? 0
								}),
								"aria-label": "Word spacing"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Fixation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [Math.round(profile.bionicStrength * 100), "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 0,
								max: .8,
								step: .05,
								value: [profile.bionicStrength],
								onValueChange: ([value]) => setProfile({
									...profile,
									bionicStrength: value ?? 0
								}),
								"aria-label": "Fixation strength"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-11 items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "focus-line",
										children: "Focus line"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "focusHighlight" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									id: "focus-line",
									checked: profile.focusHighlight,
									onCheckedChange: (checked) => setProfile({
										...profile,
										focusHighlight: checked
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-11 items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "justify",
									children: "Justify text"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									id: "justify",
									checked: profile.align === "justify",
									onCheckedChange: (checked) => setProfile({
										...profile,
										align: checked ? "justify" : "left"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
									children: "Rhythm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-1.5",
									children: RHYTHM_CHOICES.map((curve) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": profile.rhythmCurve === curve.id,
										onClick: () => setProfile({
											...profile,
											rhythmCurve: curve.id,
											rhythmOptimization: curve.id !== "steady"
										}),
										className: cn("flex h-11 flex-col items-center justify-center rounded-md px-1", profile.rhythmCurve === curve.id ? "bg-fg text-primary-fg" : "bg-fg/4 hover:bg-fg/8"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: curve.label
										})
									}, curve.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted",
									children: [RHYTHM_CHOICES.find((item) => item.id === profile.rhythmCurve)?.hint ?? "Even pace", ". Auto-scroll and speed reader rest on true sentence ends, not abbreviations."]
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
							children: "Pace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-fg/4 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-wide text-muted uppercase",
									children: "Target WPM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-2xl font-medium tabular-nums",
									children: targetWpm
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md bg-fg/4 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-wide text-muted uppercase",
									children: "Current WPM"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-2xl font-medium tabular-nums",
									children: currentWpm ?? "—"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Target WPM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockToggle, { setting: "targetWpm" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: targetWpm
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								min: 120,
								max: 480,
								step: 10,
								value: [targetWpm],
								onValueChange: ([value]) => setTargetWpm(value ?? 220),
								"aria-label": "Target words per minute"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex h-11 items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "autoscroll",
								children: "Scroll at target pace"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								id: "autoscroll",
								checked: autoScrolling,
								onCheckedChange: (checked) => {
									setAutoScrolling(checked);
									if (checked) onClose();
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted",
							children: [
								Math.round(reading.progress * 100),
								"% through this page",
								reading.pauses.length > 0 ? ` · ${reading.pauses.length} pause${reading.pauses.length === 1 ? "" : "s"}` : "",
								reading.rereads.length > 0 ? ` · ${reading.rereads.length} reread${reading.rereads.length === 1 ? "" : "s"}` : ""
							]
						})
					] })
				]
			})
		]
	});
}
function RecommendationBanner() {
	const mode = useAppStore((s) => s.mode);
	const recommendation = useAppStore((s) => s.recommendation);
	const applyRecommendation = useAppStore((s) => s.applyRecommendation);
	const dismissRecommendation = useAppStore((s) => s.dismissRecommendation);
	const undoAdaptiveChange = useAppStore((s) => s.undoAdaptiveChange);
	const [whyOpen, setWhyOpen] = (0, import_react.useState)(false);
	const reduce = useReducedMotion();
	const show = mode === "adaptive" && recommendation;
	(0, import_react.useEffect)(() => {
		if (show && recommendation) tapFeedback("adapt");
	}, [show, recommendation?.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		initial: false,
		mode: "popLayout",
		children: show && recommendation && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "status",
			"aria-live": "polite",
			"aria-atomic": "true",
			className: "pointer-events-auto w-[min(28rem,calc(100vw-1.5rem))] origin-bottom rounded-lg bg-surface p-3 shadow-float",
			initial: {
				opacity: 0,
				y: 12,
				scale: .98,
				filter: "blur(4px)"
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1,
				filter: "blur(0px)"
			},
			exit: {
				opacity: 0,
				y: 10,
				scale: .98,
				filter: "blur(4px)"
			},
			transition: motionTransition(reduce, springs.ui),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "NeuroLens recommendation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed",
					children: recommendation.reason
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					children: whyOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "overflow-hidden text-sm leading-relaxed text-muted",
						initial: {
							opacity: 0,
							height: 0,
							marginTop: 0
						},
						animate: {
							opacity: 1,
							height: "auto",
							marginTop: 8
						},
						exit: {
							opacity: 0,
							height: 0,
							marginTop: 0
						},
						transition: motionTransition(reduce, springs.ui),
						children: recommendation.why
					}, "why")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center justify-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							"aria-expanded": whyOpen,
							onClick: () => setWhyOpen((open) => !open),
							children: whyOpen ? "Hide why" : "Why?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: dismissRecommendation,
							children: "Dismiss"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							onClick: () => {
								applyRecommendation();
								setWhyOpen(false);
								tapFeedback("adapt");
								toast.success("Recommendation applied", { action: {
									label: "Undo",
									onClick: () => undoAdaptiveChange()
								} });
							},
							children: "Apply"
						})
					]
				})
			]
		}, recommendation.id)
	});
}
function SpeedReader({ open, onOpenChange, words, onProgress }) {
	const profile = useAppStore((s) => s.profile);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const progress = useAppStore((s) => s.reading.progress);
	const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [wpm, setWpm] = (0, import_react.useState)(targetWpm);
	const [index, setIndex] = (0, import_react.useState)(0);
	const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const start = Math.min(words.length - 1, Math.max(0, Math.floor(progress * words.length)));
		setIndex(start);
		setWpm(targetWpm);
		setPlaying(words.length > 0);
		setAutoScrolling(false);
		tapFeedback("start");
	}, [
		open,
		words.length,
		progress,
		targetWpm,
		setAutoScrolling
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		onProgress?.(index);
	}, [
		open,
		index,
		onProgress
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.code === "Space") {
				event.preventDefault();
				setPlaying((prev) => !prev);
			} else if (event.code === "ArrowRight") {
				event.preventDefault();
				skipSentence(1);
			} else if (event.code === "ArrowLeft") {
				event.preventDefault();
				skipSentence(-1);
			} else if (event.code === "Escape") onOpenChange(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		open,
		words,
		index,
		onOpenChange
	]);
	(0, import_react.useEffect)(() => {
		if (!open || !playing || words.length === 0) return;
		const delay = rsvpDelayMs(words[index] || "", wpm, rhythmCurve, words[index + 1] || "");
		const timer = window.setTimeout(() => {
			setIndex((prev) => {
				if (prev >= words.length - 1) {
					setPlaying(false);
					announce("End of speed reader");
					return prev;
				}
				return prev + 1;
			});
		}, delay);
		return () => window.clearTimeout(timer);
	}, [
		open,
		playing,
		wpm,
		words,
		index,
		rhythmCurve
	]);
	function skipSentence(direction) {
		if (words.length === 0) return;
		if (direction > 0) {
			let next = index;
			while (next < words.length - 1 && !isSentenceBoundary(words[next] || "", words[next + 1] || "")) next += 1;
			setIndex(Math.min(words.length - 1, next + 1));
			return;
		}
		let prev = index > 0 ? index - 1 : 0;
		while (prev > 0 && !isSentenceBoundary(words[prev - 1] || "", words[prev] || "")) prev -= 1;
		setIndex(prev);
	}
	const parts = splitOrp(words[index] || "");
	const minutes = Math.max(0, words.length - index) / Math.max(80, wpm);
	const pct = words.length ? Math.round((index + 1) / words.length * 100) : 0;
	const done = words.length > 0 && index >= words.length - 1 && !playing;
	const stage = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rsvp-stage mx-auto w-full max-w-lg font-medium tracking-tight",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-before",
				children: parts.before
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-orp",
				children: parts.orp || "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rsvp-after",
				children: parts.after
			})
		]
	}), [
		parts.after,
		parts.before,
		parts.orp
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "w-[min(100%-1.5rem,36rem)] text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm font-medium text-muted",
					children: "Speed reader"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: "Visual one-word display aligned to the recognition point. This is not spoken. Use Listen in the reader for speech. Space pauses. Arrows skip a sentence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "Starts where you left the page. The accent letter is the landing point. Spoken reading lives on Listen."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 min-h-28",
					"aria-hidden": "true",
					children: [stage, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rsvp-tick" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						label: "Speed reader progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-xs tabular-nums text-muted",
						children: [
							index + 1,
							" / ",
							words.length,
							" · ",
							wpm,
							" WPM · ",
							done ? "done" : `~${Math.max(1, Math.ceil(minutes * 60))}s left`
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 120,
						max: 600,
						step: 10,
						value: [wpm],
						onValueChange: ([value]) => setWpm(value ?? targetWpm),
						"aria-label": "Words per minute"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => setPlaying((prev) => !prev),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSwap, {
								active: playing,
								ActiveIcon: Pause,
								InactiveIcon: Play
							}), playing ? "Pause" : "Play"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => skipSentence(-1),
							children: "Last sentence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => skipSentence(1),
							children: "Next sentence"
						})
					]
				})
			]
		})
	});
}
function useReadingTracker(scrollRef, wordTotal) {
	const reportReading = useAppStore((s) => s.reportReading);
	const tab = useAppStore((s) => s.tab);
	const text = useAppStore((s) => s.text);
	const highWater = (0, import_react.useRef)(0);
	const lastProgress = (0, import_react.useRef)(0);
	const lastMeaningfulAt = (0, import_react.useRef)(Date.now());
	const paused = (0, import_react.useRef)(false);
	const pauseStartedAt = (0, import_react.useRef)(null);
	const activeAccumulated = (0, import_react.useRef)(0);
	const runStartedAt = (0, import_react.useRef)(Date.now());
	const pauses = (0, import_react.useRef)([]);
	const rereads = (0, import_react.useRef)([]);
	const lastFlush = (0, import_react.useRef)(0);
	const lastText = (0, import_react.useRef)(text);
	(0, import_react.useEffect)(() => {
		const stored = useAppStore.getState().reading;
		if (lastText.current !== text) {
			lastText.current = text;
			highWater.current = 0;
			lastProgress.current = 0;
			lastMeaningfulAt.current = Date.now();
			paused.current = false;
			pauseStartedAt.current = null;
			activeAccumulated.current = 0;
			runStartedAt.current = Date.now();
			pauses.current = [];
			rereads.current = [];
			return;
		}
		highWater.current = Math.max(highWater.current, stored.progress);
		lastProgress.current = stored.progress;
		activeAccumulated.current = stored.elapsedActiveMs;
		pauses.current = stored.pauses;
		rereads.current = stored.rereads;
		runStartedAt.current = Date.now();
		paused.current = false;
		lastMeaningfulAt.current = Date.now();
	}, [text]);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node || tab !== "read") return;
		function elapsedMs() {
			if (paused.current) return activeAccumulated.current;
			return activeAccumulated.current + (Date.now() - runStartedAt.current);
		}
		function beginPause(at) {
			if (paused.current) return;
			activeAccumulated.current = elapsedMs();
			paused.current = true;
			pauseStartedAt.current = at;
		}
		function endPause() {
			if (!paused.current) return;
			const started = pauseStartedAt.current;
			const duration = started != null ? Date.now() - started : 0;
			paused.current = false;
			pauseStartedAt.current = null;
			runStartedAt.current = Date.now();
			if (started != null && duration >= ADAPTIVE_THRESHOLDS.pauseMinMs && highWater.current >= .05) {
				pauses.current = [...pauses.current, {
					startedAt: started,
					durationMs: duration,
					progress: lastProgress.current
				}].slice(-24);
				return true;
			}
			return false;
		}
		function snapshot(progress) {
			return {
				progress,
				wordCount: wordTotal,
				wordsRead: Math.round(Math.min(1, Math.max(0, progress)) * Math.max(wordTotal, 0)),
				elapsedActiveMs: elapsedMs(),
				pauses: pauses.current,
				rereads: rereads.current
			};
		}
		function flush(force = false) {
			const now = performance.now();
			if (!force && now - lastFlush.current < 250) return;
			lastFlush.current = now;
			reportReading(snapshot(lastProgress.current));
		}
		const onScroll = () => {
			const remaining = node.scrollHeight - node.clientHeight;
			const progress = remaining > 1 ? Math.min(1, Math.max(0, node.scrollTop / remaining)) : 1;
			const previous = lastProgress.current;
			if (!isMeaningfulProgressChange(previous, progress)) {
				flush();
				return;
			}
			const recordedPause = endPause();
			lastProgress.current = progress;
			lastMeaningfulAt.current = Date.now();
			if (isReread(highWater.current, progress)) {
				rereads.current = [...rereads.current, {
					at: Date.now(),
					from: highWater.current,
					to: progress
				}].slice(-24);
				highWater.current = progress;
				flush(true);
				return;
			}
			if (progress > highWater.current) highWater.current = progress;
			flush(recordedPause);
		};
		const tick = window.setInterval(() => {
			if (document.hidden) {
				beginPause(Date.now() - ADAPTIVE_THRESHOLDS.pauseIdleMs);
				flush(true);
				return;
			}
			const idle = Date.now() - lastMeaningfulAt.current;
			if (!paused.current && idle >= ADAPTIVE_THRESHOLDS.pauseIdleMs) {
				beginPause(lastMeaningfulAt.current);
				flush(true);
				return;
			}
			flush();
		}, 1e3);
		const onVisibility = () => {
			if (document.hidden) {
				beginPause(Date.now());
				flush(true);
			} else {
				lastMeaningfulAt.current = Date.now();
				endPause();
				flush(true);
			}
		};
		node.addEventListener("scroll", onScroll, { passive: true });
		document.addEventListener("visibilitychange", onVisibility);
		onScroll();
		return () => {
			node.removeEventListener("scroll", onScroll);
			document.removeEventListener("visibilitychange", onVisibility);
			window.clearInterval(tick);
		};
	}, [
		scrollRef,
		wordTotal,
		tab,
		reportReading,
		text
	]);
}
var OPTIONS = [
	{
		id: "slow",
		label: "Too fast"
	},
	{
		id: "right",
		label: "Just right"
	},
	{
		id: "fast",
		label: "Too slow"
	}
];
function ReadingFeelBar() {
	const progress = useAppStore((s) => s.reading.progress);
	const feel = useAppStore((s) => s.readingFeel);
	const submit = useAppStore((s) => s.submitReadingFeel);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const setTargetWpm = useAppStore((s) => s.setTargetWpm);
	const locked = useAppStore((s) => s.lockedSettings.includes("targetWpm"));
	const mode = useAppStore((s) => s.mode);
	if (progress < .12 || feel) return null;
	function choose(id) {
		tapFeedback(id === "right" ? "good" : "ok");
		submit(id);
		if (id === "right") {
			toast.success("Noted. We’ll keep this pace in mind.");
			return;
		}
		if (locked) {
			toast("Thanks — Target WPM is locked, so nothing will change.");
			return;
		}
		if (mode === "adaptive") {
			toast.success(id === "slow" ? "Adaptive will offer a slower target." : "Adaptive will offer a faster target.");
			return;
		}
		const next = id === "slow" ? Math.max(120, targetWpm - 20) : Math.min(480, targetWpm + 20);
		toast(id === "slow" ? "This stretch felt rushed." : "You had room to go a little faster.", {
			description: `Move target to ${next} WPM?`,
			action: {
				label: "Apply",
				onClick: () => setTargetWpm(next)
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "group",
		"aria-label": "How is this pace?",
		className: "material-surface pointer-events-auto flex max-w-md flex-col gap-2 rounded-lg px-3 py-2.5 shadow-float sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium text-muted",
			children: "How is this pace?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => choose(option.id),
				children: option.label
			}, option.id))
		})]
	});
}
function Reader() {
	const text = useAppStore((s) => s.text);
	const profile = useAppStore((s) => s.profile);
	const mode = useAppStore((s) => s.mode);
	const controlsOpen = useAppStore((s) => s.controlsOpen);
	const setControlsOpen = useAppStore((s) => s.setControlsOpen);
	const autoScrolling = useAppStore((s) => s.autoScrolling);
	const setAutoScrolling = useAppStore((s) => s.setAutoScrolling);
	const targetWpm = useAppStore((s) => s.targetWpm);
	const currentWpm = useAppStore((s) => s.reading.currentWpm);
	const progress = useAppStore((s) => s.reading.progress);
	const pauses = useAppStore((s) => s.reading.pauses.length);
	const rereads = useAppStore((s) => s.reading.rereads.length);
	const highlights = useAppStore((s) => s.highlights);
	const toggleHighlight = useAppStore((s) => s.toggleHighlight);
	const toggleBookmark = useAppStore((s) => s.toggleBookmark);
	const bookmarks = useAppStore((s) => s.bookmarks);
	const scrollRef = (0, import_react.useRef)(null);
	const startReading = useAppStore((s) => s.startReading);
	const [activeLine, setActiveLine] = (0, import_react.useState)(null);
	const [isSpeaking, setIsSpeaking] = (0, import_react.useState)(false);
	const [rsvpOpen, setRsvpOpen] = (0, import_react.useState)(false);
	const [noteOpen, setNoteOpen] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const [simplifyOpen, setSimplifyOpen] = (0, import_react.useState)(false);
	const speechIndex = (0, import_react.useRef)(0);
	const programmaticScroll = (0, import_react.useRef)(false);
	const didAnnounceScroll = (0, import_react.useRef)(false);
	const paragraphs = (0, import_react.useMemo)(() => text.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()), [text]);
	const words = (0, import_react.useMemo)(() => text.trim().split(/\s+/).filter(Boolean), [text]);
	useReadingTracker(scrollRef, words.length);
	const lines = (0, import_react.useMemo)(() => {
		const list = [];
		paragraphs.forEach((paragraph, paragraphIndex) => {
			splitSentenceSpans(paragraph).forEach((span, index) => {
				const full = span.trim();
				if (!full) return;
				const lineIdx = paragraphIndex * 100 + index;
				list.push({
					text: full,
					html: profile.bionicStrength > 0 ? processBionicText(full, profile.bionicStrength, profile.rhythmOptimization) : full,
					lineIdx,
					paragraphIndex
				});
			});
		});
		return list;
	}, [
		paragraphs,
		profile.bionicStrength,
		profile.rhythmOptimization
	]);
	(0, import_react.useEffect)(() => {
		const key = text.trim().slice(0, 40) || "default";
		setNote(localStorage.getItem(`neurolens-note-${key}`) || "");
	}, [text]);
	(0, import_react.useEffect)(() => {
		const key = text.trim().slice(0, 40) || "default";
		const timer = window.setTimeout(() => {
			localStorage.setItem(`neurolens-note-${key}`, note);
		}, 350);
		return () => window.clearTimeout(timer);
	}, [note, text]);
	function speakAt(index) {
		if (!("speechSynthesis" in window)) return;
		if (index < 0 || index >= lines.length) {
			window.speechSynthesis.cancel();
			setIsSpeaking(false);
			return;
		}
		const item = lines[index];
		speechIndex.current = index;
		setActiveLine(item.lineIdx);
		document.getElementById(`line-${item.lineIdx}`)?.scrollIntoView({
			behavior: "smooth",
			block: "center"
		});
		window.speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(item.text);
		utterance.rate = .95;
		utterance.onend = () => {
			if (speechIndex.current === index) speakAt(index + 1);
		};
		utterance.onerror = () => setIsSpeaking(false);
		window.speechSynthesis.speak(utterance);
	}
	function toggleSpeech() {
		if (!("speechSynthesis" in window)) {
			toast.error("Speech is not available here");
			return;
		}
		if (isSpeaking) {
			window.speechSynthesis.cancel();
			setIsSpeaking(false);
			announce("Stopped reading aloud");
			return;
		}
		setIsSpeaking(true);
		announce("Reading aloud");
		speakAt(activeLine == null ? 0 : Math.max(0, lines.findIndex((line) => line.lineIdx === activeLine)));
	}
	(0, import_react.useEffect)(() => () => {
		if ("speechSynthesis" in window) window.speechSynthesis.cancel();
	}, []);
	const simplified = (0, import_react.useMemo)(() => simplifyText(text), [text]);
	const marked = highlights[text.trim().slice(0, 48) || "default"] ?? [];
	const bookmarked = bookmarks.some((item) => item.content === text);
	const rhythmCurve = resolveRhythmCurve(profile.rhythmCurve, profile.rhythmOptimization);
	const contrast = evaluateScheme(profile.theme, profile.fontSize);
	(0, import_react.useEffect)(() => {
		const node = scrollRef.current;
		if (!node || !autoScrolling) {
			didAnnounceScroll.current = false;
			return;
		}
		let frame = 0;
		let last = performance.now();
		let carry = 0;
		const stopForUser = () => {
			if (programmaticScroll.current) return;
			setAutoScrolling(false);
		};
		if (node.scrollHeight - node.clientHeight - node.scrollTop < 8) {
			setAutoScrolling(false);
			toast("You’re already at the end of the page");
			return;
		}
		if (!didAnnounceScroll.current) {
			toast.success(`Scrolling at ${targetWpm} WPM`);
			didAnnounceScroll.current = true;
		}
		const step = (now) => {
			const dtSec = Math.min(.05, (now - last) / 1e3);
			last = now;
			const maxScroll = node.scrollHeight - node.clientHeight;
			const remainingPx = maxScroll - node.scrollTop;
			if (maxScroll <= 1 || remainingPx <= 2) {
				setAutoScrolling(false);
				toast.success("End of the page");
				return;
			}
			const localProgress = node.scrollTop / maxScroll;
			const remainingWords = Math.max(1, Math.round((1 - localProgress) * words.length));
			const focus = tokenContextAtProgress(words, localProgress);
			carry += autoScrollDeltaPx({
				remainingPx,
				remainingWords,
				targetWpm,
				dtSec,
				focusToken: focus.token,
				nextToken: focus.next,
				curve: rhythmCurve
			});
			const px = Math.trunc(carry);
			if (px >= 1) {
				programmaticScroll.current = true;
				node.scrollTop += px;
				programmaticScroll.current = false;
				carry -= px;
			}
			const line = lines[Math.min(lines.length - 1, Math.max(0, Math.floor(localProgress * lines.length)))];
			if (line) setActiveLine(line.lineIdx);
			if (node.scrollTop + node.clientHeight >= node.scrollHeight - 4) {
				setAutoScrolling(false);
				toast.success("End of the page");
				return;
			}
			frame = requestAnimationFrame(step);
		};
		frame = requestAnimationFrame(step);
		node.addEventListener("wheel", stopForUser, { passive: true });
		node.addEventListener("pointerdown", stopForUser);
		node.addEventListener("touchmove", stopForUser, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			node.removeEventListener("wheel", stopForUser);
			node.removeEventListener("pointerdown", stopForUser);
			node.removeEventListener("touchmove", stopForUser);
		};
	}, [
		autoScrolling,
		targetWpm,
		words,
		setAutoScrolling,
		rhythmCurve,
		lines
	]);
	function toggleAutoScroll() {
		if (autoScrolling) {
			setAutoScrolling(false);
			announce("Auto-scroll paused");
			return;
		}
		const node = scrollRef.current;
		const remaining = node ? node.scrollHeight - node.clientHeight - node.scrollTop : 0;
		if (!node || remaining < 8) {
			toast("You’re already at the end of the page");
			return;
		}
		tapFeedback("start");
		setAutoScrolling(true);
	}
	const onRsvpProgress = (0, import_react.useCallback)((index) => {
		const node = scrollRef.current;
		if (!node || words.length < 2) return;
		const max = node.scrollHeight - node.clientHeight;
		if (max <= 1) return;
		programmaticScroll.current = true;
		node.scrollTop = index / (words.length - 1) * max;
		programmaticScroll.current = false;
	}, [words.length]);
	const readingTitle = (0, import_react.useMemo)(() => text.split(/\n/).find((line) => line.trim())?.slice(0, 80) || "Untitled reading", [text]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex h-full min-h-0 flex-1 flex-col", TINT_CLASS[profile.tint], rhythmCurve === "breath" && "rhythm-breath", autoScrolling && "is-autoscrolling"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: controlsOpen,
				onOpenChange: setControlsOpen,
				title: "Reading options",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderControls, { onClose: () => setControlsOpen(false) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollRef,
				className: "reader-scroll min-h-0 flex-1 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					"aria-labelledby": "reading-title",
					className: cn("mx-auto max-w-2xl px-5 pt-24 pb-36 sm:px-8 sm:pt-28 sm:pb-40", FONT_CLASS[profile.fontFamily], profile.focusHighlight && "focus-highlight", profile.align === "justify" && "text-justify"),
					style: {
						fontSize: profile.fontSize,
						lineHeight: profile.lineHeight,
						letterSpacing: `${profile.letterSpacing}em`,
						wordSpacing: `${profile.wordSpacing}em`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: "reading-title",
							className: "sr-only",
							children: readingTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-8 text-xs font-medium tracking-wide text-muted uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "sr-only",
								children: [
									wordCount(text).toLocaleString(),
									" words.",
									mode === "adaptive" ? " Adaptive is watching pace, pauses, and rereads." : "",
									` Contrast ${formatContrastRatio(contrast.body)}, ${contrast.bodyLevel}.`,
									pauses > 0 ? ` ${pauses} pause${pauses === 1 ? "" : "s"}.` : "",
									rereads > 0 ? ` ${rereads} reread${rereads === 1 ? "" : "s"}.` : "",
									autoScrolling ? ` Auto-scrolling at ${targetWpm} words per minute.` : ""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": "true",
								children: [
									wordCount(text).toLocaleString(),
									" words",
									mode === "adaptive" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "watching-dot" }),
										" watching"
									] }) : null,
									` · ${formatContrastRatio(contrast.body)} ${contrast.bodyLevel}`,
									pauses > 0 ? ` · ${pauses} pause${pauses === 1 ? "" : "s"}` : "",
									rereads > 0 ? ` · ${rereads} reread${rereads === 1 ? "" : "s"}` : "",
									autoScrolling ? ` · scrolling ${targetWpm}` : ""
								]
							})]
						}),
						paragraphs.map((_, paragraphIndex) => {
							const sentenceNodes = lines.filter((line) => line.paragraphIndex === paragraphIndex);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-6",
								children: sentenceNodes.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [index > 0 ? " " : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									id: `line-${line.lineIdx}`,
									className: cn("reading-line cursor-pointer", rhythmCurve !== "steady" && /[.!?…]["'”’)]*$/.test(line.text.trim()) && "rhythm-cadence", (activeLine === line.lineIdx || autoScrolling && activeLine === line.lineIdx) && "active", marked.includes(line.lineIdx) && "marked"),
									onClick: () => {
										if (isSpeaking) {
											const found = lines.findIndex((item) => item.lineIdx === line.lineIdx);
											if (found !== -1) speakAt(found);
										} else if (activeLine === line.lineIdx) toggleHighlight(line.lineIdx);
										else setActiveLine(line.lineIdx);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessibleBionic, {
										text: line.text,
										html: line.html
									})
								})] }, line.lineIdx))
							}, paragraphIndex);
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-5 flex flex-col items-center gap-3 px-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingFeelBar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendationBanner, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "toolbar",
						"aria-label": "Reading tools",
						className: "material-surface pointer-events-auto flex items-center gap-1 rounded-lg p-1.5 shadow-float",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: () => setControlsOpen(true),
									"aria-label": "Reading options",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { size: 16 })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Options" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: toggleBookmark,
									"aria-label": bookmarked ? "Remove bookmark" : "Bookmark",
									"aria-pressed": bookmarked,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
										size: 16,
										className: bookmarked ? "fill-current" : void 0
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: bookmarked ? "Remove bookmark" : "Bookmark" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: toggleSpeech,
									"aria-label": isSpeaking ? "Stop listening" : "Listen",
									"aria-pressed": isSpeaking,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSwap, {
										active: isSpeaking,
										ActiveIcon: VolumeX,
										InactiveIcon: Volume2
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: isSpeaking ? "Stop listening" : "Listen" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: autoScrolling ? "default" : "ghost",
									size: "icon-sm",
									onClick: toggleAutoScroll,
									"aria-label": autoScrolling ? "Pause auto-scroll" : "Auto-scroll",
									"aria-pressed": autoScrolling,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSwap, {
										active: autoScrolling,
										ActiveIcon: Pause,
										InactiveIcon: ChevronsDown
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: autoScrolling ? "Pause scroll" : "Auto-scroll" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: () => setRsvpOpen(true),
									"aria-label": "Speed reader",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										size: 16,
										className: "play-icon"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Speed reader" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									onClick: () => setSimplifyOpen(true),
									"aria-label": "Simplify",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { size: 16 })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Simplify" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:contents",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											onClick: () => setNoteOpen(true),
											"aria-label": "Note",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyNote, { size: 16 })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Quick note" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											onClick: async () => {
												await navigator.clipboard.writeText(text);
												toast.success("Copied");
											},
											"aria-label": "Copy",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 16 })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Copy" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "ghost",
											size: "icon-sm",
											onClick: () => {
												const blob = new Blob([text], { type: "text/plain" });
												const url = URL.createObjectURL(blob);
												const link = document.createElement("a");
												link.href = url;
												link.download = "neurolens.txt";
												link.click();
												URL.revokeObjectURL(url);
											},
											"aria-label": "Download",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 16 })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: "Download" })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									className: "sm:hidden",
									"aria-label": "More actions",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { size: 16 })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onSelect: () => setNoteOpen(true),
										children: "Quick note"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onSelect: async () => {
											await navigator.clipboard.writeText(text);
											toast.success("Copied");
										},
										children: "Copy text"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onSelect: () => {
											const blob = new Blob([text], { type: "text/plain" });
											const url = URL.createObjectURL(blob);
											const link = document.createElement("a");
											link.href = url;
											link.download = "neurolens.txt";
											link.click();
											URL.revokeObjectURL(url);
										},
										children: "Download"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-1 hidden items-center gap-1.5 border-l border-border pr-2 pl-2 text-[11px] tabular-nums text-muted sm:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Target ", targetWpm] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-40",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Now ", currentWpm ?? "—"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-2 hidden w-20 sm:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: Math.round(progress * 100),
									label: "Reading progress"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden pr-2 text-xs tabular-nums text-muted sm:inline",
								children: [Math.round(progress * 100), "%"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedReader, {
				open: rsvpOpen,
				onOpenChange: setRsvpOpen,
				words,
				onProgress: onRsvpProgress
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: simplifyOpen,
				onOpenChange: setSimplifyOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-2 text-lg font-medium",
						children: "Simpler wording"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mb-4 text-sm text-muted",
						children: "A local rewrite. Dense words become plainer ones. Nothing leaves this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: [
							simplified.complexity,
							" · grade ",
							simplified.originalGrade,
							simplified.simplifiedGrade !== simplified.originalGrade ? ` → ${simplified.simplifiedGrade}` : "",
							simplified.replacements > 0 ? ` · ${simplified.replacements} swap${simplified.replacements === 1 ? "" : "s"}` : ""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-h-64 overflow-y-auto text-sm leading-relaxed",
						children: simplified.simplified
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setSimplifyOpen(false),
							children: "Keep original"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: simplified.replacements === 0 && simplified.simplified === text.trim(),
							onClick: () => {
								tapFeedback("ok");
								startReading(simplified.simplified);
								setSimplifyOpen(false);
								toast.success("Using the simpler version");
							},
							children: "Use this version"
						})]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: noteOpen,
				onOpenChange: setNoteOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mb-3 text-lg font-medium",
						children: "Quick note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mb-4 text-sm text-muted",
						children: "Saved to this session on this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: note,
						onChange: (event) => setNote(event.target.value),
						placeholder: "Capture a thought while you read…",
						"aria-label": "Quick note",
						className: "min-h-40 rounded-md bg-bg px-3 py-2 shadow-border"
					})
				] })
			})
		]
	});
}
/** Visually hidden polite live region for status messages (WCAG 4.1.3). */
function LiveAnnouncer() {
	const [message, setMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const stop = subscribeAnnounce((next) => {
			setMessage("");
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => setMessage(next));
		});
		return () => {
			cancelAnimationFrame(frame);
			stop();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "status",
		"aria-live": "polite",
		"aria-atomic": "true",
		className: "sr-only",
		children: message
	});
}
var HAS_SCROLL_TIMELINE = typeof CSS !== "undefined" && CSS.supports("animation-timeline: scroll()");
function Pane({ children, className, onProgress }) {
	const ref = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("pane-scroll h-full overflow-y-auto", className),
		onScroll: () => {
			if (HAS_SCROLL_TIMELINE) return;
			const node = ref.current;
			if (!node || !onProgress) return;
			const remaining = node.scrollHeight - node.clientHeight;
			onProgress(remaining > 1 ? Math.min(1, node.scrollTop / remaining) : 1);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-full pt-14 sm:pt-16",
			children
		})
	});
}
function AppShell() {
	const hydrate = useAppStore((s) => s.hydrate);
	const tab = useAppStore((s) => s.tab);
	const direction = useAppStore((s) => s.direction);
	const setTab = useAppStore((s) => s.setTab);
	const text = useAppStore((s) => s.text);
	const setCommandOpen = useAppStore((s) => s.setCommandOpen);
	const theme = useAppStore((s) => s.profile.theme);
	const cvdPreview = useAppStore((s) => s.cvdPreview);
	const setCvdPreview = useAppStore((s) => s.setCvdPreview);
	const reduceMotion = useReducedMotion();
	const progressRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		const stopNav = (event) => {
			if (!event.dataTransfer || ![...event.dataTransfer.types].includes("Files")) return;
			event.preventDefault();
		};
		window.addEventListener("dragover", stopNav);
		window.addEventListener("drop", stopNav);
		return () => {
			window.removeEventListener("dragover", stopNav);
			window.removeEventListener("drop", stopNav);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const label = TABS.find((item) => item.id === tab)?.label ?? "Explore";
		document.title = tab === "explore" ? "NeuroLens" : `${label} · NeuroLens`;
	}, [tab]);
	(0, import_react.useEffect)(() => {
		progressRef.current = 0;
		document.documentElement.style.setProperty("--scroll-progress", "0");
	}, [tab]);
	const enterX = reduceMotion ? 0 : direction >= 0 ? 12 : -12;
	const exitX = reduceMotion ? 0 : direction >= 0 ? -8 : 8;
	const paneSpring = motionTransition(reduceMotion, springs.ui);
	const toastTheme = isDarkScheme(theme) ? "dark" : "light";
	function setProgress(value) {
		progressRef.current = value;
		if (HAS_SCROLL_TIMELINE) return;
		document.documentElement.style.setProperty("--scroll-progress", String(value));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "nl-shell relative flex h-dvh flex-col overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "material pointer-events-none absolute inset-x-0 top-0 z-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-auto flex h-14 items-center gap-1.5 px-2 sm:h-16 sm:gap-2 sm:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": "NeuroLens home",
								className: "flex shrink-0 items-center gap-2.5 text-fg",
								onClick: () => setTab("explore"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7 text-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-sm font-medium tracking-tight sm:inline",
									children: "NeuroLens"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								"aria-label": "Primary",
								className: "min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									tone: "nav",
									value: tab,
									onChange: setTab,
									options: TABS.map((item) => ({
										id: item.id,
										label: item.label,
										disabled: item.id === "read" && !text
									})),
									className: "mx-auto h-10 w-max max-w-full"
								})
							}),
							cvdPreview !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "hidden sm:inline-flex",
								"aria-label": `Turn off ${CVD_LABELS[cvdPreview]} simulation`,
								onClick: () => setCvdPreview("none"),
								children: CVD_LABELS[cvdPreview]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								className: "hidden sm:inline-flex",
								onClick: () => setCommandOpen(true),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 14 }),
									"Search",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kbd, { children: "⌘K" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon-sm",
								className: "sm:hidden",
								"aria-label": "Search",
								onClick: () => setCommandOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "scroll-progress pointer-events-none h-0.5 bg-fg/35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none h-6 bg-gradient-to-b from-bg/80 to-transparent"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				tabIndex: -1,
				"aria-label": TABS.find((item) => item.id === tab)?.label ?? "Explore",
				className: "relative min-h-0 flex-1 outline-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					custom: direction,
					initial: false,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute inset-0 overflow-hidden",
						initial: {
							opacity: 0,
							x: enterX
						},
						animate: {
							opacity: 1,
							x: 0
						},
						exit: {
							opacity: 0,
							x: exitX,
							transition: motionTransition(reduceMotion, springs.ui)
						},
						transition: paneSpring,
						children: [
							tab === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
								onProgress: setProgress,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {})
							}),
							tab === "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reader, {}),
							tab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
								onProgress: setProgress,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library$1, {})
							}),
							tab === "insights" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
								onProgress: setProgress,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Insights, {})
							}),
							tab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
								onProgress: setProgress,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {})
							})
						]
					}, tab)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex min-h-12 shrink-0 flex-col items-center justify-center gap-2 px-4 py-3 text-center text-xs text-muted sm:flex-row sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NeuroLens · Crafted for neurodivergent minds" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden opacity-40 sm:inline",
						"aria-hidden": true,
						children: "·"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Legal",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-fg",
							children: "Privacy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/thank-you",
							className: "hover:text-fg",
							children: "Thank you"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveAnnouncer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: toastTheme,
				position: "bottom-right",
				offset: 24,
				mobileOffset: 16,
				visibleToasts: 3,
				gap: 10,
				toastOptions: { classNames: {
					toast: "!bg-surface !text-fg !border-0 !shadow-[var(--shadow-float)] !rounded-[16px]",
					title: "!text-sm !font-medium !text-fg",
					description: "!text-sm !text-muted"
				} }
			})
		]
	}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
