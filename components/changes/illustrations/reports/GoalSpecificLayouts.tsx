"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Card — "Goal-Specific Layouts"
// Sheets adapt to each data type: accuracy, duration, prompting, task analysis.
// Auto-loops through four data-sheet layouts so the "adapts per goal" idea is felt.

type SheetKey = "accuracy" | "duration" | "prompting" | "task";

const ORDER: SheetKey[] = ["accuracy", "duration", "prompting", "task"];
const META: Record<SheetKey, { label: string; bg: string; color: string }> = {
  accuracy: { label: "Accuracy", bg: "#E8F4FE", color: "#0072C6" },
  duration: { label: "Duration", bg: "#F0ECFB", color: "#7A4FA8" },
  prompting: { label: "Prompting", bg: "#FEF3E2", color: "#B5731A" },
  task: { label: "Task Analysis", bg: "#E8F8EE", color: "#1A7A4A" },
};

function AccuracyGrid() {
  const cells = ["+", "+", "−", "+", "+", "+", "−", "+", "+", "+", "+", "−"];
  return (
    <div className="grid grid-cols-6 gap-1.5">
      {cells.map((c, i) => (
        <div
          key={i}
          className={`flex h-7 items-center justify-center rounded-md border text-[13px] font-bold ${
            c === "+" ? "border-[#BEE3FA] bg-[#E8F4FE] text-[#0072C6]" : "border-[#ECEBE7] bg-[#FAFAF9] text-[#C4BDB6]"
          }`}
        >
          {c}
        </div>
      ))}
    </div>
  );
}

function DurationRows() {
  const rows = [
    { t: "Trial 1", v: "0:42" },
    { t: "Trial 2", v: "1:05" },
    { t: "Trial 3", v: "0:58" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.t} className="flex items-center justify-between rounded-md border border-[#ECEBE7] bg-[#FCFCFC] px-3 py-1.5">
          <span className="text-[11px] text-[#666666]">{r.t}</span>
          <span className="font-[family-name:var(--font-eb-garamond)] text-[15px] font-semibold text-[#7A4FA8]">{r.v}</span>
        </div>
      ))}
    </div>
  );
}

function PromptingScale() {
  const levels = ["FP", "PP", "G", "V", "I"];
  return (
    <div className="space-y-2">
      {["Greets peer", "Asks for help"].map((g, gi) => (
        <div key={g}>
          <p className="mb-1 text-[10px] text-[#666666]">{g}</p>
          <div className="flex gap-1.5">
            {levels.map((l, i) => (
              <div
                key={l}
                className={`flex h-7 flex-1 items-center justify-center rounded-md text-[11px] font-semibold ${
                  i === (gi === 0 ? 4 : 3) ? "bg-[#F2A93B] text-white" : "bg-[#FEF3E2] text-[#C99A52]"
                }`}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TaskSteps() {
  const steps = [
    { s: "Wets hands", done: true },
    { s: "Applies soap", done: true },
    { s: "Scrubs 20s", done: true },
    { s: "Rinses & dries", done: false },
  ];
  return (
    <div className="space-y-1.5">
      {steps.map((st, i) => (
        <div key={st.s} className="flex items-center gap-2.5 rounded-md border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5">
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-md text-[10px] font-bold ${
              st.done ? "bg-[#1A7A4A] text-white" : "border border-[#D9D9D6] bg-white text-transparent"
            }`}
          >
            {i + 1}
          </span>
          <span className={`text-[11px] ${st.done ? "text-[#3D4046]" : "text-[#9A938F]"}`}>{st.s}</span>
        </div>
      ))}
    </div>
  );
}

const SHEETS: Record<SheetKey, React.ReactNode> = {
  accuracy: <AccuracyGrid />,
  duration: <DurationRows />,
  prompting: <PromptingScale />,
  task: <TaskSteps />,
};

export default function GoalSpecificLayouts() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % ORDER.length), 2600);
    return () => clearTimeout(t);
  }, [idx]);

  const key = ORDER[idx];
  const meta = META[key];

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Data sheet</p>
        <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: meta.bg, color: meta.color }}>
          {meta.label}
        </span>
      </div>
      <div className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {SHEETS[key]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-2 flex justify-center gap-1.5">
        {ORDER.map((k, i) => (
          <span key={k} className={`h-1 rounded-full transition-all ${i === idx ? "w-4 bg-[#00A9F8]" : "w-1.5 bg-[#E0DDD8]"}`} />
        ))}
      </div>
    </div>
  );
}
