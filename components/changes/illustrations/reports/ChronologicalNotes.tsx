"use client";

import { motion } from "framer-motion";

// Card — "Chronological Notes"
// Read observations and anecdotal notes in order, with full context for each session.
// A stacked note feed that fades/slides in on mount, newest first. Auto only.

const NOTES = [
  {
    date: "Mar 18",
    tag: "Observation",
    bg: "#E8F4FE",
    color: "#0072C6",
    text: "Initiated greeting with two peers unprompted during centers.",
  },
  {
    date: "Mar 11",
    tag: "Anecdotal",
    bg: "#F0ECFB",
    color: "#7A4FA8",
    text: "Self-corrected /s/ sound after a single cue. Confidence growing.",
  },
  {
    date: "Mar 4",
    tag: "Observation",
    bg: "#FEF3E2",
    color: "#B5731A",
    text: "Needed redirection to stay on task; shorter sets helped.",
  },
];

export default function ChronologicalNotes() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <p className="mb-2.5 text-[12px] font-semibold text-[#111111]">Notes · Diego M.</p>
      <div className="relative flex-1 space-y-2 pl-3">
        <div className="absolute bottom-1 left-[3px] top-1 w-px bg-[#ECEBE7]" />
        {NOTES.map((n, i) => (
          <motion.div
            key={n.date}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 + i * 0.16 }}
            className="relative rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-2"
          >
            <span className="absolute -left-[14px] top-3.5 h-2 w-2 rounded-full" style={{ background: n.color }} />
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[10px] font-semibold text-[#111111]">{n.date}</span>
              <span className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold" style={{ background: n.bg, color: n.color }}>
                {n.tag}
              </span>
            </div>
            <p className="text-[10px] leading-snug text-[#666666]">{n.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
