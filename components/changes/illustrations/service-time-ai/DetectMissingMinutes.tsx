"use client";

import { motion } from "framer-motion";
import { Window } from "./frame";

// "Detect Missing Minutes" — monitor service-time entries from a dedicated tab and
// refine with filters. Flags students who are behind. Fills the window; the
// "Behind" filter and flagged rows pulse on a loop.

const FILTERS = ["All", "Behind", "This week"];
const ROWS = [
  { name: "Amanda Lee", grade: "3rd Grade", val: "340 / 340", behind: null as string | null },
  { name: "Mary Williams", grade: "4th Grade", val: "300 / 340", behind: "40 min behind" },
  { name: "Jay Cole", grade: "2nd Grade", val: "180 / 240", behind: "60 min behind" },
  { name: "Sofia Rivera", grade: "3rd Grade", val: "240 / 240", behind: null },
  { name: "Noah Kim", grade: "5th Grade", val: "210 / 240", behind: "30 min behind" },
];

export default function DetectMissingMinutes() {
  return (
    <Window className="w-full">
      <div className="flex min-h-[320px] flex-col">
        <div className="mb-3 flex items-center gap-1.5">
          {FILTERS.map((f, i) => {
            const active = i === 1;
            const chip = (
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  active ? "bg-[#4E9D5B] text-white" : "bg-[#F4F3EF] text-[#9A938F]"
                }`}
              >
                {f}
              </span>
            );
            return active ? (
              <motion.span
                key={f}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                {chip}
              </motion.span>
            ) : (
              <span key={f}>{chip}</span>
            );
          })}
          <span className="ml-auto text-[10px] font-medium text-[#9A938F]">Service time</span>
        </div>

        <div className="mb-1.5 flex items-center justify-between px-1 text-[9px] font-semibold uppercase tracking-wide text-[#B0A99D]">
          <span>Students</span>
          <span>Delivered / Required</span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-1.5">
          {ROWS.map((r) => (
            <div
              key={r.name}
              className={`flex items-center justify-between rounded-lg border px-2.5 py-2 ${
                r.behind ? "border-[#F6D9E0] bg-[#FDF4F6]" : "border-[#ECEBE7] bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 flex-shrink-0 rounded-full bg-[#E7F0E4]" />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-[#111111]">{r.name}</p>
                  <p className="text-[9px] text-[#9A938F]">{r.grade}</p>
                </div>
              </div>
              <div className="text-right leading-tight">
                <p className="text-[11px] font-semibold text-[#111111]">
                  {r.val} <span className="text-[9px] font-normal text-[#9A938F]">min</span>
                </p>
                {r.behind ? (
                  <motion.p
                    className="text-[9.5px] font-semibold text-[#D1465F]"
                    animate={{ opacity: [1, 0.55, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ↓ {r.behind}
                  </motion.p>
                ) : (
                  <p className="text-[9.5px] font-semibold text-[#3F9D63]">On track</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
