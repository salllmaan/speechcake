"use client";

import { motion } from "framer-motion";

// Card — "Session Timeline"
// Follow a student's journey across weeks and months chronologically.
// A vertical timeline of sessions that staggers in on mount. Auto only.

const EVENTS = [
  { date: "Feb 3", type: "Speech", note: "Initial baseline · 54%", color: "#A9D2B4", bg: "#EFF6EE" },
  { date: "Feb 17", type: "Speech", note: "/r/ blends introduced", color: "#74B488", bg: "#E8F8EE" },
  { date: "Mar 2", type: "OT", note: "Fine-motor goal added", color: "#4E9D5B", bg: "#E7F0E4" },
  { date: "Mar 16", type: "Speech", note: "Mastery 82% reached", color: "#1A7A4A", bg: "#E8F8EE" },
];

export default function SessionTimeline() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <p className="mb-3 text-[12px] font-semibold text-[#111111]">Session timeline · Ava T.</p>
      <div className="relative flex-1 pl-1">
        <div className="absolute bottom-1 left-[7px] top-1 w-px bg-[#ECEBE7]" />
        <div className="space-y-3">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.date}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.18 }}
              className="relative flex items-start gap-3"
            >
              <span
                className="z-10 mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded-full border-2 border-white"
                style={{ background: e.color, boxShadow: `0 0 0 1px ${e.color}40` }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#111111]">{e.date}</span>
                  <span className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold" style={{ background: e.bg, color: e.color }}>
                    {e.type}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-[10px] text-[#666666]">{e.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
