"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, RotateCcw, Upload } from "lucide-react";

// Card 3 — "Turn Paper Data Sheets Into Instant Graphs"
// The one orchestrated moment on the page: a scanned tally sheet is swept by a
// scan line, then the page resolves into a clean chart built from the same numbers.

const ROWS = [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 6 },
  { day: "Wed", value: 5 },
  { day: "Thu", value: 8 },
  { day: "Fri", value: 7 },
];
const MAX = 10;

type Phase = "paper" | "scanning" | "chart";

export default function PaperToGraphs() {
  const [phase, setPhase] = useState<Phase>("paper");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const convert = () => {
    setPhase("scanning");
    timer.current = setTimeout(() => setPhase("chart"), 1150);
  };
  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    setPhase("paper");
  };

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-4">
      <div className="relative h-[208px] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {phase !== "chart" ? (
            <motion.div
              key="paper"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {/* Scanned tally sheet */}
              <div
                className="h-full w-full rounded-lg border border-[#E7E3D6] p-4"
                style={{
                  background:
                    "repeating-linear-gradient(#FBFAF6 0 27px, #EFE9D8 27px 28px)",
                }}
              >
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#B0A88F]">
                  Weekly tally — paper sheet
                </p>
                <div className="space-y-[7px]">
                  {ROWS.map((r) => (
                    <div key={r.day} className="flex items-center justify-between pr-1">
                      <span className="font-[family-name:var(--font-eb-garamond)] text-[15px] italic text-[#6B6258]">
                        {r.day}
                      </span>
                      <span className="font-[family-name:var(--font-eb-garamond)] text-[17px] italic text-[#3D4046]">
                        {"|".repeat(r.value)}{" "}
                        <span className="not-italic text-[13px] text-[#9A938F]">({r.value})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scan line sweep */}
              {phase === "scanning" && (
                <motion.div
                  initial={{ y: -4, opacity: 0 }}
                  animate={{ y: 204, opacity: 1 }}
                  transition={{ duration: 1.05, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 h-10"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,169,248,0) 0%, rgba(0,169,248,0.18) 70%, rgba(0,169,248,0.55) 100%)",
                    borderBottom: "2px solid #00A9F8",
                  }}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              key="chart"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 rounded-lg border border-[#EDEDEA] bg-[#FCFCFC] p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[12px] font-semibold text-[#111111]">Frequency · this week</p>
                <span className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
                  <Check className="h-3 w-3" strokeWidth={3} /> No retyping
                </span>
              </div>
              <div className="flex h-[136px] items-end justify-between gap-3 px-1">
                {ROWS.map((r, i) => (
                  <div key={r.day} className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="flex w-full flex-1 items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(r.value / MAX) * 100}%` }}
                        transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: "easeOut" }}
                        className="w-full rounded-t-md bg-gradient-to-t from-[#00A0EB] to-[#46C9FF]"
                      />
                    </div>
                    <span className="text-[11px] text-[#9A938F]">{r.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={phase === "chart" ? reset : convert}
        disabled={phase === "scanning"}
        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 ${
          phase === "chart"
            ? "bg-[#F5F5F3] text-[#666666] hover:bg-[#EFEFEC]"
            : "bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-white hover:opacity-90"
        }`}
      >
        {phase === "paper" && (<><Upload className="h-4 w-4" /> Convert sheet</>)}
        {phase === "scanning" && "Converting…"}
        {phase === "chart" && (<><RotateCcw className="h-4 w-4" /> Convert another</>)}
      </button>
    </div>
  );
}
