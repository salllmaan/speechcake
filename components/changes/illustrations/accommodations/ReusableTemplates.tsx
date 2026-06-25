"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Zap } from "lucide-react";

// Card — "Reusable Templates"
// "Create reusable accommodation templates and apply them in a single click."
// Auto-loops: a saved template ("Testing supports") is applied and three
// accommodations drop into a student's plan one after another. No interaction.

const TEMPLATE = ["Extended time", "Quiet room", "Read-aloud directions"];

export default function ReusableTemplates() {
  const [applied, setApplied] = useState(0);

  useEffect(() => {
    if (applied <= TEMPLATE.length) {
      const t = setTimeout(() => setApplied((n) => (n > TEMPLATE.length ? 0 : n + 1)), applied === 0 ? 1100 : applied > TEMPLATE.length ? 1600 : 650);
      return () => clearTimeout(t);
    }
  }, [applied]);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between rounded-lg border border-[#F0ECFB] bg-[#F0ECFB] px-2.5 py-1.5">
        <div className="flex items-center gap-1.5">
          <Copy className="h-3.5 w-3.5 text-[#7A4FA8]" />
          <span className="text-[11px] font-semibold text-[#7A4FA8]">Testing supports</span>
        </div>
        <motion.span
          animate={applied >= 1 && applied <= TEMPLATE.length ? { scale: [1, 0.92, 1] } : {}}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1 rounded-md bg-[#A769CD] px-1.5 py-0.5 text-[9px] font-semibold text-white"
        >
          <Zap className="h-2.5 w-2.5" /> Apply
        </motion.span>
      </div>

      <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-[#9A938F]">
        Applied to · Devon K.
      </p>

      <div className="space-y-1.5">
        {TEMPLATE.map((item, i) => {
          const on = applied > i;
          return (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 transition-colors ${
                on ? "border-[#D8C9EC] bg-[#F7F3FD]" : "border-[#ECEBE7] bg-[#FAFAF9]"
              }`}
            >
              <motion.span
                initial={false}
                animate={{ scale: on ? 1 : 0.6, opacity: on ? 1 : 0.4 }}
                transition={{ duration: 0.25 }}
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                  on ? "bg-[#A769CD] text-white" : "bg-[#E4E2DC]"
                }`}
              >
                {on && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              </motion.span>
              <span className={`text-[12px] ${on ? "font-medium text-[#111111]" : "text-[#9A938F]"}`}>
                {item}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-auto pt-2 text-center text-[10px] font-medium text-[#9A938F]">
        {applied > TEMPLATE.length ? "3 accommodations added · 1 click" : "Applying template…"}
      </div>
    </div>
  );
}
