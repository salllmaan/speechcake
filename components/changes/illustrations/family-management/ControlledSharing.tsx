"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sliders } from "lucide-react";

// Card — "Controlled Sharing"
// Per-family sharing controls: a column of toggles that decide exactly what each
// family sees, from full reports down to a single goal. The bottom toggle
// auto-flips to show granular control. Passive.

const ROWS = [
  { name: "Full progress reports", on: true },
  { name: "Daily session logs", on: true },
  { name: "Behavior goals only", on: false },
  { name: "Meeting documents", on: true },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className="relative inline-flex h-4 w-7 items-center rounded-full transition-colors"
      style={{ background: on ? "#4E9D5B" : "#E3E0DA" }}
    >
      <motion.span
        layout
        className="absolute h-3 w-3 rounded-full bg-white shadow-sm"
        animate={{ left: on ? 14 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      />
    </span>
  );
}

export default function ControlledSharing() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setFlip((f) => !f), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E7F0E4] text-[#4E9D5B]">
          <Sliders className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-[#111111]">What the Lopez family sees</p>
          <p className="text-[10px] text-[#9A938F]">Per-family visibility</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {ROWS.map((r, i) => {
          const on = i === ROWS.length - 1 ? flip : r.on;
          return (
            <div
              key={r.name}
              className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-2"
            >
              <span className={`text-[12px] ${on ? "text-[#3D4046]" : "text-[#9A938F]"}`}>{r.name}</span>
              <Toggle on={on} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
