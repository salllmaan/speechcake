"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";

// Card — "Quick Setup"
// "Create and manage cycles in just a few clicks. Add a cycle, include holidays, set
// start and end dates, and save in seconds." A mock create-cycle form that auto-fills
// field by field and lands on a Saved state — the "few clicks, seconds" feeling.

const FIELDS = [
  { label: "Cycle name", value: "2025–26 A/B Rotation" },
  { label: "Rotation code", value: "ABCDE" },
  { label: "Start date", value: "Aug 25, 2025" },
  { label: "End date", value: "Jun 12, 2026" },
] as const;

export default function QuickSetup() {
  // number of filled fields; -1..FIELDS.length, then "saved"
  const [step, setStep] = useState(0);
  const saved = step > FIELDS.length;

  useEffect(() => {
    const t = setInterval(() => {
      setStep((s) => (s > FIELDS.length ? 0 : s + 1));
    }, 850);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-[#4E9D5B]" />
        <p className="text-[12px] font-semibold text-[#111111]">New rotating schedule</p>
      </div>

      <div className="flex flex-1 flex-col gap-1.5">
        {FIELDS.map((f, i) => {
          const filled = step > i;
          return (
            <div key={f.label} className="flex items-center justify-between gap-2">
              <span className="text-[11px] text-[#9A938F]">{f.label}</span>
              <div className="flex h-6 min-w-[112px] items-center justify-end rounded-md border border-[#ECEBE7] bg-[#FAFAF9] px-2">
                <motion.span
                  key={`${f.label}-${filled}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: filled ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[11px] font-medium text-[#3D4046]"
                >
                  {filled ? f.value : ""}
                </motion.span>
              </div>
            </div>
          );
        })}
      </div>

      <motion.button
        type="button"
        animate={saved ? { scale: [1, 0.97, 1] } : {}}
        transition={{ duration: 0.3 }}
        className={`mt-2.5 flex items-center justify-center gap-1.5 rounded-lg py-2 text-[12px] font-semibold transition-colors ${
          saved ? "bg-[#E8F8EE] text-[#1A7A4A]" : "bg-[#4E9D5B] text-white"
        }`}
      >
        {saved ? (
          <>
            <Check className="h-3.5 w-3.5" strokeWidth={3} /> Cycle saved
          </>
        ) : (
          "Save cycle"
        )}
      </motion.button>
    </div>
  );
}
