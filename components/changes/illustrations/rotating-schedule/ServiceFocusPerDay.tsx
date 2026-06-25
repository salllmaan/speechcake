"use client";

import { motion } from "framer-motion";

// Card — "Service Focus per Day"
// "Assign a subject or service focus to each rotation day, like Speech on A days,
// so providers always know what's scheduled." A compact map of rotation day → its
// assigned service focus. Static map, gentle row-in stagger on mount.

const ROWS = [
  { day: "A", focus: "Speech Therapy", tone: "blue" },
  { day: "B", focus: "Occupational Therapy", tone: "purple" },
  { day: "C", focus: "Reading Intervention", tone: "green" },
  { day: "D", focus: "Social Skills Group", tone: "amber" },
  { day: "E", focus: "Counseling", tone: "pink" },
] as const;

const TONE: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-[#E8F4FE]", text: "text-[#0072C6]" },
  purple: { bg: "bg-[#F0ECFB]", text: "text-[#7A4FA8]" },
  green: { bg: "bg-[#E8F8EE]", text: "text-[#1A7A4A]" },
  amber: { bg: "bg-[#FEF3E2]", text: "text-[#B5731A]" },
  pink: { bg: "bg-[#FCEAF0]", text: "text-[#B5436A]" },
};

export default function ServiceFocusPerDay() {
  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Focus by rotation day</p>
        <span className="rounded-full border border-[#ECEBE7] bg-[#FAFAF9] px-2 py-0.5 text-[10px] font-medium text-[#666666]">
          ABCDE cycle
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.day}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08 + i * 0.1, ease: "easeOut" }}
            className="flex items-center gap-2.5"
          >
            <span
              className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-[12px] font-bold ${TONE[r.tone].bg} ${TONE[r.tone].text}`}
            >
              {r.day}
            </span>
            <span className="text-[10px] font-medium text-[#C4BDB6]">→</span>
            <span className="text-[12px] font-medium text-[#3D4046]">{r.focus}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
