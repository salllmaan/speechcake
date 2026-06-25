"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

// Card 2 — "Automatic Service Calculations"
// Session duration × attendance auto-rolls into a running minutes total. Each
// session resolves (present = counted, absent = skipped) and the total ticks up
// on its own. Passive loop.

type Session = { day: string; mins: number; present: boolean };

const SESSIONS: Session[] = [
  { day: "Mon", mins: 30, present: true },
  { day: "Tue", mins: 45, present: true },
  { day: "Wed", mins: 30, present: false },
  { day: "Thu", mins: 30, present: true },
];

const GOAL = 150; // monthly required service minutes (sample IEP target)

export default function AutoMinutes() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= SESSIONS.length) {
      const r = setTimeout(() => setStep(0), 2200);
      return () => clearTimeout(r);
    }
    const t = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [step]);

  const counted = SESSIONS.slice(0, step).filter((s) => s.present).reduce((a, s) => a + s.mins, 0);
  const pct = Math.min(100, Math.round((counted / GOAL) * 100));

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-end justify-between">
        <div>
          <p className="text-[11px] text-[#9A938F]">Service minutes · this month</p>
          <p className="text-[30px] font-extrabold leading-none tracking-tight text-[#111111]">
            {counted}
            <span className="ml-1 text-[13px] font-semibold text-[#9A938F]">/ {GOAL} min</span>
          </p>
        </div>
        <span className="rounded-full bg-[#E8F4FE] px-2 py-0.5 text-[10px] font-semibold text-[#0072C6]">
          Auto-calculated
        </span>
      </div>

      <div className="mb-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F1F0EC]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#00A0EB] to-[#46C9FF]"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-1">
        {SESSIONS.map((s, i) => {
          const resolved = i < step;
          return (
            <div
              key={s.day}
              className="flex items-center justify-between rounded-md border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5 text-[11px]"
            >
              <span className="font-medium text-[#3D4046]">
                {s.day} · {s.mins} min
              </span>
              <AnimatePresence mode="wait">
                {resolved ? (
                  <motion.span
                    key="resolved"
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-1 font-semibold"
                    style={{ color: s.present ? "#1A7A4A" : "#B5436A" }}
                  >
                    {s.present ? (
                      <>
                        <Check className="h-3 w-3" strokeWidth={3} /> +{s.mins}
                      </>
                    ) : (
                      <>
                        <X className="h-3 w-3" strokeWidth={3} /> absent · 0
                      </>
                    )}
                  </motion.span>
                ) : (
                  <span key="pending" className="text-[#C4BDB6]">calculating…</span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
