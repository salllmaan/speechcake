"use client";

import { motion } from "framer-motion";
import { Lock, Users } from "lucide-react";

// Card — "Centralized Log"
// "Maintain a centralized, compliant accommodation log accessible to authorized
// teams." One shared log: many students + accommodations in a single place, with a
// quiet "authorized team" indicator. Subtle row-in stagger on mount.

const ROWS = [
  { student: "Maya R.", accom: "Extended time", who: "Patel", tone: "blue" },
  { student: "Devon K.", accom: "Visual schedule", who: "Cho", tone: "purple" },
  { student: "Aisha N.", accom: "Frequent breaks", who: "Lewis", tone: "green" },
  { student: "Liam T.", accom: "Read-aloud", who: "Patel", tone: "amber" },
] as const;

const TONE: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-[#E8F4FE]", text: "text-[#0072C6]" },
  purple: { bg: "bg-[#F0ECFB]", text: "text-[#7A4FA8]" },
  green: { bg: "bg-[#E8F8EE]", text: "text-[#1A7A4A]" },
  amber: { bg: "bg-[#FEF3E2]", text: "text-[#B5731A]" },
};

export default function CentralizedLog() {
  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Accommodation log</p>
        <span className="flex items-center gap-1 rounded-full border border-[#ECEBE7] bg-[#FAFAF9] px-2 py-0.5 text-[10px] font-medium text-[#666666]">
          <Lock className="h-2.5 w-2.5" /> Authorized team
        </span>
      </div>

      <div className="grid grid-cols-[1fr_1.1fr_auto] gap-2 border-b border-[#EDEDEA] pb-1.5 text-[9px] font-semibold uppercase tracking-wide text-[#9A938F]">
        <span>Student</span>
        <span>Accommodation</span>
        <span>Logged by</span>
      </div>

      <div className="mt-1 flex flex-col">
        {ROWS.map((r, i) => (
          <motion.div
            key={r.student}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.12, ease: "easeOut" }}
            className="grid grid-cols-[1fr_1.1fr_auto] items-center gap-2 border-b border-[#F4F3EF] py-[7px]"
          >
            <span className="text-[11px] font-medium text-[#111111]">{r.student}</span>
            <span className={`w-fit rounded-md px-1.5 py-0.5 text-[10px] font-medium ${TONE[r.tone].bg} ${TONE[r.tone].text}`}>
              {r.accom}
            </span>
            <span className="text-[10px] text-[#9A938F]">{r.who}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-1.5 pt-2 text-[10px] text-[#9A938F]">
        <Users className="h-3 w-3" /> 28 students · 1 shared log
      </div>
    </div>
  );
}
