"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Card — "Applying Rotating Schedules"
// "Activate your schedule directly in the AbleSpace Calendar to keep all your
// sessions aligned." A calendar month grid where, once the cycle is activated, each
// school day fills with its rotation code in a quick left-to-right sweep.

// 4 weeks × 5 school days, ABCDE rotation continuing across weeks
const CODES = ["A", "B", "C", "D", "E"];
const WEEKS = 4;
const DAYS_PER_WEEK = 5;
const DAY_LABELS = ["M", "T", "W", "T", "F"];

const TONE: Record<string, string> = {
  A: "bg-[#E8F8EE] text-[#1A7A4A]",
  B: "bg-[#E7F0E4] text-[#4E9D5B]",
  C: "bg-[#DEF0E2] text-[#2F8F52]",
  D: "bg-[#FEF3E2] text-[#B5731A]",
  E: "bg-[#FCEAF0] text-[#B5436A]",
};

export default function ApplyingRotatingSchedules() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => !a), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">AbleSpace Calendar · May</p>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors ${
            active ? "bg-[#E8F8EE] text-[#1A7A4A]" : "bg-[#FAFAF9] text-[#9A938F] border border-[#ECEBE7]"
          }`}
        >
          {active ? "Cycle active" : "Not applied"}
        </span>
      </div>

      <div className="mb-1 grid grid-cols-5 gap-1.5">
        {DAY_LABELS.map((d, i) => (
          <span key={i} className="text-center text-[9px] font-semibold uppercase text-[#9A938F]">
            {d}
          </span>
        ))}
      </div>

      <div className="grid flex-1 grid-cols-5 grid-rows-4 gap-1.5">
        {Array.from({ length: WEEKS * DAYS_PER_WEEK }).map((_, idx) => {
          const code = CODES[idx % CODES.length];
          const dayNum = idx + 1;
          return (
            <div
              key={idx}
              className="relative flex items-center justify-center rounded-md border border-[#ECEBE7] bg-[#FAFAF9]"
            >
              <span className="absolute left-1 top-0.5 text-[7px] font-medium text-[#C4BDB6]">
                {dayNum}
              </span>
              <motion.span
                initial={false}
                animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
                transition={{ duration: 0.25, delay: active ? idx * 0.03 : 0 }}
                className={`flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold ${TONE[code]}`}
              >
                {code}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
