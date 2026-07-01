"use client";

import { motion } from "framer-motion";
import { Bar, OutputPanel, Signature, Window } from "./frame";

// "Attendance Summaries" — weeks of attendance/service logs → a concise AI summary.
// Content fills the window; the summary skeleton lines shimmer on a loop.

const LOG = [
  { d: "Mon", on: true },
  { d: "Tue", on: true },
  { d: "Wed", on: false },
  { d: "Thu", on: true },
  { d: "Fri", on: true },
];

function Shimmer({ w, delay }: { w: string; delay: number }) {
  return (
    <motion.div
      className="h-2 rounded-full bg-[#E8F0E5]"
      style={{ width: w }}
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function AttendanceSummaries() {
  return (
    <Window className="w-full">
      <div className="flex min-h-[320px] items-stretch gap-4">
        <div className="flex min-w-0 flex-1 flex-col">
          <Bar w="50%" className="mb-3" />
          <div className="flex flex-1 flex-col justify-center gap-2">
            {LOG.map((l) => (
              <div key={l.d} className="flex items-center gap-2 rounded-md border border-[#ECEBE7] bg-white px-2 py-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: l.on ? "#74B488" : "#E191A0" }} />
                <span className="w-7 text-[10px] font-medium text-[#3D4046]">{l.d}</span>
                <Bar w="55%" className="ml-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-[54%] flex-shrink-0">
          <OutputPanel title="Weekly Summary" className="flex w-full flex-col">
            <p className="text-[11px] leading-relaxed text-[#3D4046]">
              Attended 4 of 5 sessions — 120 / 150 service minutes delivered. One absence (illness) documented.
            </p>
            <div className="mt-2.5 flex flex-1 flex-col justify-center gap-1.5">
              <Shimmer w="100%" delay={0} />
              <Shimmer w="86%" delay={0.2} />
              <Shimmer w="92%" delay={0.4} />
              <Shimmer w="60%" delay={0.6} />
            </div>
            <Signature />
          </OutputPanel>
        </div>
      </div>
    </Window>
  );
}
