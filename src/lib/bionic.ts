import { splitSentenceSpans } from "./sentences.ts";

const FILLER = new Set([
  "the", "and", "of", "in", "is", "to", "a", "it", "for", "with", "on", "as", "at", "by", "an", "be",
  "this", "that", "or", "are", "was", "were", "been", "have", "has", "had", "do", "does", "did", "will",
  "would", "could", "should", "may", "might", "must", "can", "from", "into", "about", "during", "before",
  "after", "above", "below", "up", "down", "out", "off", "over", "under", "again", "further", "then",
  "than", "which", "who", "what", "when", "where", "why", "how", "all", "each", "every", "both", "few",
  "more", "most", "no", "nor", "not", "only", "same", "so", "some", "such", "too", "very", "just", "am",
  "my", "me",
]);

const ACTION = new Set([
  "said", "says", "told", "tell", "ask", "asked", "show", "showed", "give", "gave", "make", "made",
  "take", "took", "come", "came", "go", "went", "get", "got", "think", "thought", "know", "knew",
  "see", "saw", "want", "wanted", "use", "used", "find", "found", "work", "worked", "try", "tried",
  "help", "helped", "call", "called", "need", "needed", "feel", "felt", "become", "leave", "left",
  "put", "start", "started", "seem", "seemed", "turn", "turned", "move", "live", "lived", "believe",
  "believed", "hold", "held", "bring", "brought", "begin", "began",
]);

export function processBionicText(
  text: string,
  strength = 0.5,
  rhythmOverride = false,
): string {
  if (!text || strength <= 0) return text;

  const sentences = splitSentenceSpans(text);

  return sentences
    .map((sentence) => {
      const parts = sentence.split(/(\s+)/);
      let wordInSentence = 0;

      return parts
        .map((part) => {
          if (/^\s+$/.test(part)) return part;

          const match = part.match(/^([^a-zA-Z0-9]*)([a-zA-Z0-9']+)([^a-zA-Z0-9]*)$/);
          if (!match) return part;

          const [, prefix, word, suffix] = match;
          const lowerWord = word.toLowerCase();
          const len = word.length;
          wordInSentence += 1;

          let importance = 0.5;
          if (FILLER.has(lowerWord)) importance = 0.1;
          else if (ACTION.has(lowerWord)) importance = 1;
          else if (len >= 7) importance = 0.85;
          else if (len >= 4) importance = 0.7;

          const positionBoost = rhythmOverride && wordInSentence <= 2 ? 1.15 : 1;
          const effective = strength * importance * positionBoost;

          let boldLength = 0;
          if (len <= 2) boldLength = importance > 0.7 ? 1 : 0;
          else if (len === 3) boldLength = importance > 0.6 ? 1 : 0;
          else if (len <= 5) boldLength = Math.ceil(len * (effective * 0.3));
          else if (len <= 8) boldLength = Math.ceil(len * (effective * 0.35));
          else boldLength = Math.ceil(len * (effective * 0.33));

          boldLength = Math.min(boldLength, len - 1);
          if (boldLength <= 0) return part;

          return `${prefix}<span class="fixation">${word.slice(0, boldLength)}</span>${word.slice(boldLength)}${suffix}`;
        })
        .join("");
    })
    .join("");
}

/** Strip fixation markup so assistive tech hears the original word, not “T he”. */
export function plainTextFromBionic(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
