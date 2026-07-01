"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

// Card — "Custom Rule Builder" (Coming soon)
// "Create custom rules for specific audit criteria, then edit or update them
// anytime." Auto-loops: a rule is composed field-by-field (criteria → condition →
// priority) and saved, then resets. A subtle "Coming soon" badge stays pinned.

type Phase = "criteria" | "condition" | "priority" | "saved";
const NEXT: Record<Phase, Phase> = {
  criteria: "condition",
  condition: "priority",
  priority: "saved",
  saved: "criteria",
};
const DURATION: Record<Phase, number> = {
  criteria: 1100,
  condition: 1100,
  priority: 1100,
  saved: 1900,
};
const ORDER: Exclude<Phase, "saved">[] = ["criteria", "condition", "priority"];

const FIELDS: Record<Exclude<Phase, "saved">, { label: string; value: string }> = {
  criteria: { label: "Audit criterion", value: "Transition plan present" },
  condition: { label: "Condition", value: "Required if student age ≥ 16" },
  priority: { label: "Priority", value: "High" },
};

export default function CustomRuleBuilder() {
  const [phase, setPhase] = useState<Phase>("criteria");

  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATION[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const activeIndex = phase === "saved" ? ORDER.length : ORDER.indexOf(phase);

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#111111]">
          <Sparkles className="h-3.5 w-3.5 text-[#4E9D5B]" /> New audit rule
        </p>
        <span className="rounded-full border border-[#D9EBDD] bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          Coming soon
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1.5">
        {ORDER.map((key, i) => {
          const f = FIELDS[key];
          const filled = i < activeIndex || phase === "saved";
          const active = i === activeIndex && phase !== "saved";
          return (
            <div
              key={key}
              className="rounded-lg border px-3 py-1.5 transition-colors"
              style={{
                borderColor: active ? "#9ED4AC" : "#ECEBE7",
                backgroundColor: active ? "#F1FAF3" : "#FCFCFC",
              }}
            >
              <p className="text-[9px] font-medium uppercase tracking-wide text-[#9A938F]">
                {f.label}
              </p>
              <div className="mt-0.5 flex h-[16px] items-center">
                {filled || active ? (
                  <motion.span
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[12px] font-medium text-[#111111]"
                  >
                    {f.value}
                  </motion.span>
                ) : (
                  <span className="text-[12px] text-[#C4BDB6]">—</span>
                )}
                {active && (
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    className="ml-1 h-3.5 w-px bg-[#4E9D5B]"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 h-[28px]">
        <AnimatePresence mode="wait">
          {phase === "saved" ? (
            <motion.div
              key="saved"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex h-full items-center justify-center gap-1.5 rounded-lg bg-[#E8F8EE] text-[11px] font-semibold text-[#1A7A4A]"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} /> Rule saved · editable anytime
            </motion.div>
          ) : (
            <motion.div
              key="build"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex h-full items-center justify-center rounded-lg bg-[#4E9D5B] text-[11px] font-semibold text-white"
            >
              Build rule
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
