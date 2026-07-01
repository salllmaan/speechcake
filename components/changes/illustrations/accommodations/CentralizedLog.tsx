"use client";

import { motion } from "framer-motion";
import { Lock, Users } from "lucide-react";

// Card — "Centralized Log"
// "Maintain a centralized, compliant accommodation log accessible to authorized
// teams." One shared log: many students + accommodations in a single place, with a
// quiet "authorized team" indicator. Subtle row-in stagger on mount.

const ROWS = [
  { student: "Maya R.", accom: "Extended time", who: "Patel", tone: "green" },
  { student: "Devon K.", accom: "Visual schedule", who: "Cho", tone: "amber" },
  { student: "Aisha N.", accom: "Frequent breaks", who: "Lewis", tone: "green" },
  { student: "Liam T.", accom: "Read-aloud", who: "Patel", tone: "pink" },
] as const;

const TONE: Record<string, { bg: string; text: string }> = {
  green: { bg: "bg-[#E8F8EE]", text: "text-[#1A7A4A]" },
  amber: { bg: "bg-[#FEF3E2]", text: "text-[#B5731A]" },
  pink: { bg: "bg-[#FCEAF0]", text: "text-[#B5436A]" },
};

export default function CentralizedLog() {
  return (
    <div className="flex h-[216px] flex-col overflow-hidden rounded-xl border border-[#EDEDEA] bg-white">
      <div className="flex items-center gap-2 border-b border-[#F1F1EC] px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ED6A5E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5BF4F]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61C554]" />
        </span>
        <span className="text-[12px] font-semibold text-[#3D4046]">Accommodation log</span>
        <span className="ml-auto flex items-center gap-1 rounded-full border border-[#ECEBE7] bg-[#FAFAF9] px-2 py-0.5 text-[10px] font-medium text-[#3D4046]">
          <Lock className="h-2.5 w-2.5" /> Authorized team
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3">
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
    </div>
  );
}
