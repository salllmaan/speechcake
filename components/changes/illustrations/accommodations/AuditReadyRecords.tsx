"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

// Card — "Audit-Ready Records"
// "Document and update student accommodations in seconds to support audit-ready
// records." Auto-loops: a small accommodation field is updated, saved, and stamped
// with who/when — building the defensible record without any interaction.

type Phase = "editing" | "saving" | "saved";
const NEXT: Record<Phase, Phase> = { editing: "saving", saving: "saved", saved: "editing" };
const DURATION: Record<Phase, number> = { editing: 1700, saving: 900, saved: 2400 };

export default function AuditReadyRecords() {
  const [phase, setPhase] = useState<Phase>("editing");

  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATION[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="flex h-[216px] flex-col overflow-hidden rounded-xl border border-[#EDEDEA] bg-white">
      {/* Window chrome header */}
      <div className="flex items-center gap-2 border-b border-[#F1F1EC] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
        </span>
        <span className="text-[12px] font-semibold text-[#3D4046]">Maya R. · Reading</span>
        <span className="ml-auto rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          IEP-2026
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3">
      <div className="space-y-2">
        <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-3 py-2">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#9A938F]">
            Accommodation
          </p>
          <p className="mt-0.5 text-[12px] font-medium text-[#111111]">Extended time on assessments</p>
        </div>

        <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-3 py-2">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#9A938F]">Allowance</p>
          <div className="mt-1 flex items-center gap-2">
            <motion.span
              key={phase === "saved" ? "new" : "old"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-md bg-[#E8F8EE] px-2 py-0.5 text-[12px] font-semibold text-[#1A7A4A]"
            >
              {phase === "saved" ? "+ 100% (×2)" : "+ 50% (×1.5)"}
            </motion.span>
            {phase === "editing" && (
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="h-3.5 w-px bg-[#4E9D5B]"
              />
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-2">
        <AnimatePresence mode="wait">
          {phase === "saved" ? (
            <motion.div
              key="stamp"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1.5 rounded-lg bg-[#E8F8EE] px-2.5 py-1.5"
            >
              <Check className="h-3.5 w-3.5 text-[#1A7A4A]" strokeWidth={3} />
              <span className="text-[11px] font-semibold text-[#1A7A4A]">Saved</span>
              <span className="ml-auto flex items-center gap-1 text-[10px] text-[#5E7A66]">
                <Clock className="h-3 w-3" /> J. Patel · 9:41 AM
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="save-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center rounded-lg bg-[#4E9D5B] py-1.5 text-[11px] font-semibold text-white"
            >
              {phase === "saving" ? "Saving…" : "Save record"}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}
