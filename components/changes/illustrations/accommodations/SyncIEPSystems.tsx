"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, FileUp, RefreshCw } from "lucide-react";

// Card — "Sync Seamlessly with IEP Systems"
// "Sync directly from your IEP system or upload files to instantly populate student
// accommodations, no retyping." Auto-loops: source (IEP system) → sync → rows land
// in AbleSpace, pre-filled. No manual entry, no interaction.

const ACCOMS = ["Extended time", "Read-aloud", "Frequent breaks"];

type Phase = "idle" | "syncing" | "done";
const NEXT: Record<Phase, Phase> = { idle: "syncing", syncing: "done", done: "idle" };
const DURATION: Record<Phase, number> = { idle: 1300, syncing: 1300, done: 2400 };

export default function SyncIEPSystems() {
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const t = setTimeout(() => setPhase(NEXT[phase]), DURATION[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-[#ECEBE7] bg-[#FAFAF9] px-2.5 py-1.5">
          <FileUp className="h-3.5 w-3.5 text-[#666666]" />
          <span className="text-[10px] font-semibold text-[#666666]">IEP System</span>
        </div>

        <motion.div
          animate={phase === "syncing" ? { rotate: 360 } : { rotate: 0 }}
          transition={phase === "syncing" ? { duration: 1, repeat: Infinity, ease: "linear" } : { duration: 0.2 }}
          className="flex-shrink-0"
        >
          {phase === "syncing" ? (
            <RefreshCw className="h-4 w-4 text-[#00A9F8]" />
          ) : (
            <ArrowRight className="h-4 w-4 text-[#C4BDB6]" />
          )}
        </motion.div>

        <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-[#9AD9F3] bg-[#E8F4FE] px-2.5 py-1.5">
          <span className="text-[10px] font-semibold text-[#0072C6]">AbleSpace</span>
        </div>
      </div>

      <p className="mb-1 mt-2.5 text-[10px] font-medium uppercase tracking-wide text-[#9A938F]">
        Devon K. · auto-populated
      </p>

      <div className="space-y-1.5">
        {ACCOMS.map((item, i) => {
          const landed = phase === "done";
          return (
            <motion.div
              key={item}
              initial={false}
              animate={
                landed
                  ? { opacity: 1, y: 0 }
                  : { opacity: phase === "syncing" ? 0.4 : 0.25, y: phase === "syncing" ? 2 : 4 }
              }
              transition={{ duration: 0.3, delay: landed ? i * 0.12 : 0 }}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                landed ? "border-[#D7E9D9] bg-[#F1FAF3]" : "border-dashed border-[#E4E2DC] bg-[#FCFCFC]"
              }`}
            >
              <span
                className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                  landed ? "bg-[#1A7A4A] text-white" : "bg-[#E4E2DC]"
                }`}
              >
                {landed && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              </span>
              <span className={`text-[11px] ${landed ? "font-medium text-[#111111]" : "text-[#B6B0A6]"}`}>
                {item}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-auto pt-2 text-center text-[10px] font-medium text-[#9A938F]">
        <AnimatePresence mode="wait">
          <motion.span
            key={phase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {phase === "done" ? "3 accommodations synced · no retyping" : phase === "syncing" ? "Syncing…" : "Ready to sync"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
