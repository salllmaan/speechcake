"use client";

import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

// Card — "Holiday-Aware Cycles"
// "Built-in holiday handling skips non-school days automatically, so your rotation
// always lands on the right date." A week strip with a holiday in the middle — the
// rotation code skips it and resumes on the next school day instead of advancing.

type Cell =
  | { kind: "day"; date: string; code: string }
  | { kind: "holiday"; date: string; name: string };

const WEEK_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Memorial Day (Mon) is a holiday — cycle resumes A on Tue, not skipped forward.
const WEEK: Cell[] = [
  { kind: "holiday", date: "26", name: "Memorial Day" },
  { kind: "day", date: "27", code: "A" },
  { kind: "day", date: "28", code: "B" },
  { kind: "day", date: "29", code: "C" },
  { kind: "day", date: "30", code: "D" },
];

const TONE: Record<string, string> = {
  A: "bg-[#E8F8EE] text-[#1A7A4A]",
  B: "bg-[#E7F0E4] text-[#4E9D5B]",
  C: "bg-[#DEF0E2] text-[#2F8F52]",
  D: "bg-[#FEF3E2] text-[#B5731A]",
};

export default function HolidayAwareCycles() {
  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Week of May 26</p>
        <span className="flex items-center gap-1 rounded-full bg-[#FEF3E2] px-2 py-0.5 text-[10px] font-semibold text-[#B5731A]">
          1 holiday skipped
        </span>
      </div>

      <div className="mb-1.5 grid grid-cols-5 gap-1.5">
        {WEEK_LABELS.map((d) => (
          <span key={d} className="text-center text-[9px] font-semibold uppercase text-[#9A938F]">
            {d}
          </span>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-5 gap-1.5">
        {WEEK.map((c, i) =>
          c.kind === "holiday" ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.07 }}
              className="flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#E6D2A8] bg-[#FEF8EE] px-1"
            >
              <span className="text-[8px] font-medium text-[#C4BDB6]">{c.date}</span>
              <PartyPopper className="h-3.5 w-3.5 text-[#B5731A]" />
              <span className="text-center text-[7px] font-semibold leading-tight text-[#B5731A]">
                {c.name}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.07 }}
              className="flex flex-col items-center justify-center gap-1 rounded-md border border-[#ECEBE7] bg-[#FAFAF9]"
            >
              <span className="text-[8px] font-medium text-[#C4BDB6]">{c.date}</span>
              <span
                className={`flex h-6 w-6 items-center justify-center rounded text-[12px] font-bold ${TONE[c.code]}`}
              >
                {c.code}
              </span>
            </motion.div>
          )
        )}
      </div>

      <p className="mt-2 text-[10px] text-[#9A938F]">
        Cycle pauses for the holiday and resumes on the next school day
      </p>
    </div>
  );
}
