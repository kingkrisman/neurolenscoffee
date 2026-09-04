export interface Chapter {
  index: number;
  title: string;
  start: number;
}

const HEADING =
  /^(?:chapter|chap\.?|ch\.?)\s+([ivxlcdm]+|\d+)(?:[.:)\-\s]+(.+))?$/i;
const NUMBERED = /^(?:part|book|section)\s+([ivxlcdm]+|\d+)(?:[.:)\-\s]+(.+))?$/i;
const ALL_CAPS = /^[A-Z][A-Z0-9 '"’:,.-]{8,60}$/;

function romanOrInt(value: string) {
  const n = Number(value);
  if (Number.isFinite(n)) return n;
  const map: Record<string, number> = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 };
  let total = 0;
  let prev = 0;
  for (const ch of value.toLowerCase().split("").reverse()) {
    const cur = map[ch] ?? 0;
    total += cur < prev ? -cur : cur;
    prev = cur;
  }
  return total || 0;
}

export function detectChapters(text: string): Chapter[] {
  const lines = text.split(/\n/);
  const found: Chapter[] = [];
  let offset = 0;
  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(HEADING) || trimmed.match(NUMBERED);
    if (match) {
      const label = match[2]?.trim();
      found.push({
        index: found.length,
        title: label ? `Chapter ${match[1]} · ${label}` : `Chapter ${match[1]}`.replace(/^\w/, (c) => c.toUpperCase()),
        start: offset,
      });
    } else if (ALL_CAPS.test(trimmed) && trimmed.split(" ").length <= 8 && found.length > 0) {
      found.push({ index: found.length, title: trimmed, start: offset });
    }
    offset += line.length + 1;
  }
  if (found.length >= 2) return found.filter((ch, i, all) => i === 0 || ch.start - all[i - 1]!.start > 80);
  return [{ index: 0, title: "Start", start: 0 }];
}

export function chapterAt(chapters: Chapter[], charOffset: number) {
  let current = chapters[0] ?? { index: 0, title: "Start", start: 0 };
  for (const ch of chapters) {
    if (ch.start <= charOffset) current = ch;
    else break;
  }
  return current;
}

export function sliceChapter(text: string, chapters: Chapter[], index: number) {
  const start = chapters[index]?.start ?? 0;
  const end = chapters[index + 1]?.start ?? text.length;
  return text.slice(start, end).trim();
}
