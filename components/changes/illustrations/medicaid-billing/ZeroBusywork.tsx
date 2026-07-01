"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

// Card — "Zero Busywork"
// The manual billing chores (formatting, typing, looking up codes) auto-complete
// one by one, and a "hours saved this week" counter climbs as they clear. The idea
// "smart automation that saves hours" is shown happening on its own. Passive loop.

const TASKS = [
  "Format session note",
  "Type billing details",
  "Look up CPT code",
  "Check compliance fields",
];

const HOURS_TARGET = 6.5; // hours saved this week (sample)

export default function ZeroBusywork() {
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (done >= TASKS.length) {
      const r = setTimeout(() => setDone(0), 2100);
      return () => clearTimeout(r);
    }
    const t = setTimeout(() => setDone((d) => d + 1), 800);
    return () => clearTimeout(t);
  }, [done]);

  const hours = ((done / TASKS.length) * HOURS_TARGET).toFixed(1);

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-end justify-between">
        <div>
          <p className="text-[11px] text-[#9A938F]">Time saved · this week</p>
          <p className="text-[30px] font-extrabold leading-none tracking-tight text-[#111111]">
            {hours}
            <span className="ml-1 text-[13px] font-semibold text-[#9A938F]">hrs</span>
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          <Sparkles className="h-2.5 w-2.5" /> Automated
        </span>
      </div>

      <div className="mb-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#F1F0EC]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#4E9D5B] to-[#74B488]"
          animate={{ width: `${(done / TASKS.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        {TASKS.map((task, i) => {
          const resolved = i < done;
          return (
            <div
              key={task}
              className="flex items-center gap-2.5 rounded-md border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5"
            >
              <motion.span
                animate={{
                  background: resolved ? "#4E9D5B" : "#ffffff",
                  borderColor: resolved ? "#4E9D5B" : "#D9D9D6",
                }}
                className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md border"
              >
                {resolved && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />
                  </motion.span>
                )}
              </motion.span>
              <span
                className={`text-[11px] transition-colors ${
                  resolved ? "text-[#9A938F] line-through" : "text-[#3D4046]"
                }`}
              >
                {task}
              </span>
              <span className="ml-auto text-[9px] font-medium text-[#C4BDB6]">
                {resolved ? "auto" : "manual"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
