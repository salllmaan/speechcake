"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, NotebookPen, Users } from "lucide-react";

// Card — "Shared with Families"
// A daily log entry flows from the clinician's notebook straight into the family
// portal feed. On a loop, a new log card slides into the portal, conveying that
// logs reach parents automatically. Passive, no interaction.

const LOGS = [
  { day: "Today", text: "Counted to 20 independently", time: "2:10 PM" },
  { day: "Yesterday", text: "Followed 2-step directions", time: "1:35 PM" },
  { day: "Mon", text: "Used 'more' to request a turn", time: "11:20 AM" },
];

export default function SharedWithFamilies() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % LOGS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="flex items-center gap-2">
        {/* source: clinician log */}
        <div className="flex w-[34%] flex-col items-center gap-1 rounded-lg border border-[#ECEBE7] bg-[#FAFAF9] px-2 py-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#E8F4FE] text-[#0072C6]">
            <NotebookPen className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <p className="text-center text-[10px] font-semibold leading-tight text-[#111111]">Daily log saved</p>
        </div>

        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#00A9F8]"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </motion.span>

        {/* destination: family portal feed */}
        <div className="min-w-0 flex-1 rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] p-2">
          <div className="mb-1.5 flex items-center gap-1 px-0.5">
            <Users className="h-3 w-3 text-[#7B4FA8]" strokeWidth={2.5} />
            <p className="text-[10px] font-semibold text-[#111111]">Family portal feed</p>
          </div>
          <div className="relative h-[58px] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-md border border-[#E8F4FE] bg-[#F4FAFE] px-2 py-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-wide text-[#0072C6]">{LOGS[i].day}</span>
                  <span className="text-[9px] text-[#9A938F]">{LOGS[i].time}</span>
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-[#3D4046]">{LOGS[i].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
