import { useEffect, useState } from "react";
import { Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Sense {
  partOfSpeech: string;
  definition: string;
  phonetic?: string;
}

const FALLBACK: Record<string, Sense> = {
  reading: { partOfSpeech: "noun", definition: "The action of looking at and understanding written words." },
  attention: { partOfSpeech: "noun", definition: "The noticing or considering of someone or something." },
};

export function WordCard({ word, onClose }: { word: string; onClose: () => void }) {
  const [sense, setSense] = useState<Sense | null>(FALLBACK[word.toLowerCase()] ?? null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    const q = word.replace(/[^a-zA-Z'-]/g, "");
    if (q.length < 2) {
      setStatus("missing");
      return;
    }
    const controller = new AbortController();
    setStatus("loading");
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q.toLowerCase())}`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("missing"))))
      .then((data) => {
        const entry = data?.[0];
        const meaning = entry?.meanings?.[0];
        const def = meaning?.definitions?.[0]?.definition;
        if (!def) throw new Error("missing");
        setSense({
          partOfSpeech: meaning.partOfSpeech || "word",
          definition: def,
          phonetic: entry.phonetic || entry.phonetics?.[0]?.text,
        });
        setStatus("ready");
      })
      .catch(() => {
        const local = FALLBACK[q.toLowerCase()];
        setSense(local ?? null);
        setStatus(local ? "ready" : "missing");
      });
    return () => controller.abort();
  }, [word]);

  function speak() {
    const utter = new SpeechSynthesisUtterance(word);
    utter.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  }

  return (
    <div className="material-surface pointer-events-auto w-[min(24rem,calc(100vw-1.5rem))] rounded-lg p-4 shadow-float">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-serif text-xl">{word}</p>
          <p className="text-xs text-muted">
            {sense?.partOfSpeech}
            {sense?.phonetic ? ` · ${sense.phonetic}` : ""}
          </p>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon-sm" onClick={speak} aria-label="Pronounce">
            <Volume2 size={16} />
          </Button>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close definition">
            <X size={16} />
          </Button>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed">
        {status === "loading" ? "Looking up…" : sense?.definition ?? "No definition found for this word."}
      </p>
    </div>
  );
}
