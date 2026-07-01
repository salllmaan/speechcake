"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, RefreshCw } from "lucide-react";

// Card — "Keep Everything in Sync"
// "Save time, reduce scheduling chaos, and ensure seamless coordination across
// sessions." A central rotating cycle that syncs out to the surfaces it feeds —
// Calendar, Caseload, Reports — each ticking to "Synced" on a gentle auto-loop.

const TARGETS = [
  { label: "Calendar", detail: "42 sessions aligned" },
  { label: "Caseload", detail: "18 students" },
  { label: "Reports", detail: "Up to date" },
] as const;

export default function KeepEverythingInSync() {
  const [synced, setSynced] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSynced((s) => (s >= TARGETS.length ? 0 : s + 1));
    }, 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Schedule sync</p>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-[#4E9D5B]"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </motion.span>
      </div>

      <div className="mb-3 flex items-center gap-2 rounded-lg border border-[#A7D7B4] bg-[#E8F8EE] px-3 py-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4E9D5B] text-[11px] font-bold text-white">
          AB
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold text-[#1A7A4A]">Rotating cycle</p>
          <p className="text-[10px] text-[#6BA579]">Source of truth</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        {TARGETS.map((t, i) => {
          const done = i < synced;
          return (
            <div key={t.label} className="flex items-center justify-between">
              <div className="leading-tight">
                <p className="text-[12px] font-medium text-[#3D4046]">{t.label}</p>
                <p className="text-[10px] text-[#9A938F]">{t.detail}</p>
              </div>
              <motion.span
                animate={{ opacity: done ? 1 : 0.4 }}
                transition={{ duration: 0.25 }}
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  done ? "bg-[#E8F8EE] text-[#1A7A4A]" : "bg-[#FAFAF9] text-[#9A938F] border border-[#ECEBE7]"
                }`}
              >
                {done ? (
                  <>
                    <Check className="h-2.5 w-2.5" strokeWidth={3} /> Synced
                  </>
                ) : (
                  "Syncing"
                )}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
