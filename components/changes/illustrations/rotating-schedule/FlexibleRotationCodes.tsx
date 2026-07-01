"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Card — "Flexible Rotation Codes"
// "Use rotation codes like AB, ABCDE, or A2B2C2D2E2 to match any cycle your program
// runs." Auto-cycles between three real code patterns, expanding each into its
// repeating day sequence so the flexibility is shown, not just stated.

type Pattern = {
  code: string;
  label: string;
  // expanded day sequence for the cycle
  days: string[];
};

const PATTERNS: Pattern[] = [
  { code: "AB", label: "Two-day cycle", days: ["A", "B", "A", "B", "A", "B"] },
  { code: "ABCDE", label: "Five-day cycle", days: ["A", "B", "C", "D", "E"] },
  { code: "A2B2C2", label: "Doubled blocks", days: ["A", "A", "B", "B", "C", "C"] },
];

const TONE: Record<string, { bg: string; text: string }> = {
  A: { bg: "bg-[#E8F8EE]", text: "text-[#1A7A4A]" },
  B: { bg: "bg-[#E7F0E4]", text: "text-[#4E9D5B]" },
  C: { bg: "bg-[#DEF0E2]", text: "text-[#2F8F52]" },
  D: { bg: "bg-[#FEF3E2]", text: "text-[#B5731A]" },
  E: { bg: "bg-[#FCEAF0]", text: "text-[#B5436A]" },
};

export default function FlexibleRotationCodes() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PATTERNS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const pattern = PATTERNS[idx];

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Rotation code</p>
        <div className="flex gap-1">
          {PATTERNS.map((p, i) => (
            <span
              key={p.code}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === idx ? "bg-[#4E9D5B]" : "bg-[#E4E2DD]"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pattern.code}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="flex flex-1 flex-col"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-[26px] font-extrabold tracking-tight text-[#111111]">
              {pattern.code}
            </span>
            <span className="text-[11px] text-[#9A938F]">{pattern.label}</span>
          </div>

          <p className="mt-3 mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#9A938F]">
            Repeats as
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {pattern.days.map((d, i) => (
              <motion.span
                key={`${pattern.code}-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.06 }}
                className={`flex h-7 w-7 items-center justify-center rounded-md text-[12px] font-bold ${TONE[d].bg} ${TONE[d].text}`}
              >
                {d}
              </motion.span>
            ))}
            <span className="ml-1 text-[14px] font-bold text-[#C4BDB6]">…</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <p className="mt-auto pt-2 text-[10px] text-[#9A938F]">
        Cycle loops automatically through every school day
      </p>
    </div>
  );
}
