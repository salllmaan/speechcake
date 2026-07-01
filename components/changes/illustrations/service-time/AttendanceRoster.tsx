"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Card — "Attendance Tracking"
// Matches the service-time bento mockup style: window-chrome card, green-tint student
// avatars, and Present / Absent / Not Tracked shown as a colored dot + label. One row
// auto-cycles its status. Passive, no interaction needed.

type Status = "present" | "absent" | "untracked";

const ROSTER: { name: string; grade: string; status: Status }[] = [
  { name: "Maya R.", grade: "Gr 3 · Speech", status: "present" },
  { name: "Devon K.", grade: "Gr 4 · OT", status: "present" },
  { name: "Liam P.", grade: "Gr 2 · Speech", status: "absent" },
  { name: "Ava S.", grade: "Gr 5 · Counseling", status: "untracked" },
];

const CYCLE: Status[] = ["present", "absent", "untracked"];

const DOT: Record<Status, { label: string; dot: string }> = {
  present: { label: "Present", dot: "#74B488" },
  absent: { label: "Absent", dot: "#E191A0" },
  untracked: { label: "Not Tracked", dot: "#C4C4C4" },
};

function StatusLabel({ status }: { status: Status }) {
  const s = DOT[status];
  return (
    <div className="flex w-[92px] justify-end">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="flex items-center gap-1.5 text-[11px] font-medium text-[#3D4046]"
        >
          <span className="h-2 w-2 rounded-full" style={{ background: s.dot }} />
          {s.label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function AttendanceRoster() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCycle((c) => c + 1), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ECEBE7] bg-white">
      {/* Window chrome header */}
      <div className="flex items-center gap-2 border-b border-[#F1F1EC] px-3.5 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5938E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E8C57E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8FBF9A]" />
        </span>
        <span className="text-[12px] font-semibold text-[#3D4046]">Service time</span>
        <span className="ml-auto text-[10px] font-medium text-[#9A938F]">Tue · 9:30 AM</span>
      </div>

      <div className="divide-y divide-[#F4F4EF]">
        {ROSTER.map((r, i) => {
          const status = i === ROSTER.length - 1 ? CYCLE[cycle % CYCLE.length] : r.status;
          return (
            <div key={r.name} className="flex items-center justify-between px-3.5 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E7F0E4] text-[12px] font-bold text-[#4E9D5B]">
                  {r.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-[#111111]">{r.name}</p>
                  <p className="text-[10.5px] text-[#9A938F]">{r.grade}</p>
                </div>
              </div>
              <StatusLabel status={status} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
