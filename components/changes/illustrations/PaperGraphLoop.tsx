"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Card 3 illustration — "Turn Paper Data Sheets Into Instant Graphs".
// Auto-loops: a scanned Accuracy data sheet (correct / total per day) is swept by a
// scan line, then resolves into a clean accuracy-% bar chart. No interaction needed.

const ROWS = [
  { day: "Mon", correct: 8 },
  { day: "Tue", correct: 7 },
  { day: "Wed", correct: 9 },
  { day: "Thu", correct: 8 },
  { day: "Fri", correct: 10 },
];
const TOTAL = 10;

type Phase = "paper" | "scanning" | "chart";
const NEXT: Record<Phase, Phase> = { paper: "scanning", scanning: "chart", chart: "paper" };
const DURATION: Record<Phase, number> = { paper: 1800, scanning: 1150, chart: 2600 };

export default function PaperGraphLoop() {
  const [phase, setPhase] = useState<Phase>("paper");

  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATION[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="relative h-[184px] overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {phase !== "chart" ? (
            <motion.div
              key="paper"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div
                className="h-full w-full rounded-lg border border-[#E7E3D6] p-3"
                style={{ background: "repeating-linear-gradient(#FBFAF6 0 25px, #EFE9D8 25px 26px)" }}
              >
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#B0A88F]">
                  Daily accuracy — paper sheet
                </p>
                <div className="space-y-[5px]">
                  {ROWS.map((r) => (
                    <div key={r.day} className="flex items-center justify-between pr-1">
                      <span className="font-[family-name:var(--font-eb-garamond)] text-[13px] italic text-[#6B6258]">
                        {r.day}
                      </span>
                      <span className="font-[family-name:var(--font-eb-garamond)] text-[15px] italic text-[#3D4046]">
                        {r.correct} / {TOTAL}{" "}
                        <span className="not-italic text-[11px] text-[#9A938F]">
                          ({Math.round((r.correct / TOTAL) * 100)}%)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {phase === "scanning" && (
                <motion.div
                  initial={{ y: -4, opacity: 0 }}
                  animate={{ y: 180, opacity: 1 }}
                  transition={{ duration: 1.05, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 h-9"
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
              className="absolute inset-0 rounded-lg border border-[#EDEDEA] bg-[#FCFCFC] p-3"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <p className="text-[11px] font-semibold text-[#111111]">Accuracy · this week</p>
              </div>
              <div className="flex h-[128px] items-stretch justify-between gap-2.5 px-1">
                {ROWS.map((r, i) => (
                  <div key={r.day} className="flex h-full flex-1 flex-col items-center gap-1">
                    <div className="flex w-full min-h-0 flex-1 items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(r.correct / TOTAL) * 100}%` }}
                        transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: "easeOut" }}
                        className="w-full rounded-t-md bg-gradient-to-t from-[#00A0EB] to-[#46C9FF]"
                      />
                    </div>
                    <span className="text-[10px] text-[#9A938F]">{r.day}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
