"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

// Card — "One-Click Copy & Paste"
// A ready billing note sits with a "Copy Billing" button. The button auto-presses,
// flips to "Copied!", and the note text streams into a Medicaid billing portal
// field below. Passive loop, no interaction needed.

const NOTE_LINES = [
  "Speech-Language Therapy · 30 min · Individual",
  "CPT 92507 · Maya R. · 06/22/2026",
  "Worked on /s/ articulation at sentence level;",
  "78% accuracy across 18 trials with min cues.",
];

const NOTE_TEXT = NOTE_LINES.join(" ");

type Phase = "idle" | "copied" | "pasting" | "done";
const NEXT: Record<Phase, Phase> = { idle: "copied", copied: "pasting", pasting: "done", done: "idle" };
const DURATION: Record<Phase, number> = { idle: 1500, copied: 700, pasting: 1400, done: 1900 };

export default function OneClickCopy() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATION[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const copied = phase === "copied" || phase === "pasting" || phase === "done";
  const showPaste = phase === "pasting" || phase === "done";

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      {/* Billing note card */}
      <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="text-[11px] font-semibold text-[#111111]">Billing Note</p>
          <span className="rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-semibold text-[#1A7A4A]">
            Ready
          </span>
        </div>
        <p className="text-[10px] leading-[1.5] text-[#666666]">{NOTE_LINES[0]}</p>
        <p className="text-[10px] leading-[1.5] text-[#9A938F]">{NOTE_LINES[1]}</p>
      </div>

      {/* Copy Billing button */}
      <motion.button
        animate={phase === "copied" ? { scale: [1, 0.95, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg py-2 text-[12px] font-semibold transition-colors"
        style={{
          background: copied ? "#E8F8EE" : "#00A9F8",
          color: copied ? "#1A7A4A" : "#ffffff",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} /> Copied!
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5"
            >
              <Copy className="h-3.5 w-3.5" /> Copy Billing
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Medicaid portal paste target */}
      <div className="mt-2.5 flex flex-1 flex-col">
        <p className="mb-1 text-[9px] font-semibold uppercase tracking-wider text-[#9A938F]">
          Medicaid Billing Portal
        </p>
        <div className="flex-1 rounded-lg border border-dashed border-[#D9D9D6] bg-[#FAFAF9] px-2.5 py-1.5">
          <AnimatePresence mode="wait">
            {showPaste ? (
              <motion.p
                key="filled"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] leading-[1.45] text-[#3D4046]"
              >
                {NOTE_TEXT}
              </motion.p>
            ) : (
              <span key="empty" className="text-[10px] italic text-[#C4BDB6]">
                Paste service note here…
              </span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
