"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

// Card 1 — "Attendance Tracking"
// A live session roster where each student is marked Present / Absent / Not Tracked
// straight from the session. One row auto-cycles its status so the act of marking
// attendance is felt. Passive, no interaction needed.

type Status = "present" | "absent" | "untracked";

const ROSTER: { name: string; grade: string; status: Status }[] = [
  { name: "Maya R.", grade: "Gr 3 · Speech", status: "present" },
  { name: "Devon K.", grade: "Gr 4 · OT", status: "present" },
  { name: "Liam P.", grade: "Gr 2 · Speech", status: "absent" },
  { name: "Ava S.", grade: "Gr 5 · Counseling", status: "untracked" },
];

const STATUS_CYCLE: Status[] = ["present", "absent", "untracked"];

const STYLES: Record<Status, { label: string; bg: string; text: string; icon: typeof Check }> = {
  present: { label: "Present", bg: "#E8F8EE", text: "#1A7A4A", icon: Check },
  absent: { label: "Absent", bg: "#FCEAF0", text: "#B5436A", icon: X },
  untracked: { label: "Not Tracked", bg: "#F0ECFB", text: "#7B4FA8", icon: Minus },
};

function Chip({ status }: { status: Status }) {
  const s = STYLES[status];
  const Icon = s.icon;
  return (
    <motion.span
      key={status}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
      style={{ background: s.bg, color: s.text }}
    >
      <Icon className="h-2.5 w-2.5" strokeWidth={3} /> {s.label}
    </motion.span>
  );
}

export default function AttendanceRoster() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCycle((c) => c + 1), 1700);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Tuesday · Group Session</p>
        <span className="text-[10px] font-medium text-[#9A938F]">9:30 AM</span>
      </div>
      <div className="space-y-1.5">
        {ROSTER.map((r, i) => {
          // Last row cycles its status; others stay fixed.
          const status: Status =
            i === ROSTER.length - 1 ? STATUS_CYCLE[cycle % STATUS_CYCLE.length] : r.status;
          return (
            <div
              key={r.name}
              className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F4FE] text-[11px] font-semibold text-[#0072C6]">
                  {r.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-[12px] font-semibold text-[#111111]">{r.name}</p>
                  <p className="text-[10px] text-[#9A938F]">{r.grade}</p>
                </div>
              </div>
              <Chip status={status} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
