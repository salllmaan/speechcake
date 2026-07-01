"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Card — "Consistent Delivery"
// "Maintain rhythm and predictability in service delivery, so every student gets the
// right support on the right day." A two-week calendar strip where the A-day Speech
// session lands reliably on each rotation A day — a steady, repeating rhythm.

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// rotation codes over two school weeks (ABCDE cycle)
const WEEKS = [
  ["A", "B", "C", "D", "E"],
  ["A", "B", "C", "D", "E"],
];

export default function ConsistentDelivery() {
  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Speech · every A day</p>
        <span className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          On rhythm
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {WEEK_DAYS.map((d) => (
          <span key={d} className="text-center text-[9px] font-semibold uppercase tracking-wide text-[#9A938F]">
            {d}
          </span>
        ))}
      </div>

      <div className="mt-1.5 flex flex-1 flex-col gap-1.5">
        {WEEKS.map((week, w) => (
          <div key={w} className="grid flex-1 grid-cols-5 gap-1.5">
            {week.map((code, i) => {
              const isFocus = code === "A";
              return (
                <motion.div
                  key={`${w}-${i}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 + (w * 5 + i) * 0.05 }}
                  className={`flex flex-col items-center justify-center gap-0.5 rounded-md border ${
                    isFocus
                      ? "border-[#A7D7B4] bg-[#E8F8EE]"
                      : "border-[#ECEBE7] bg-[#FAFAF9]"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold ${isFocus ? "text-[#1A7A4A]" : "text-[#C4BDB6]"}`}
                  >
                    {code}
                  </span>
                  {isFocus && (
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#4E9D5B]">
                      <Check className="h-2 w-2 text-white" strokeWidth={3.5} />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      <p className="mt-2 text-[10px] text-[#9A938F]">
        Right support lands on the right day, week after week
      </p>
    </div>
  );
}
