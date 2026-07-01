"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Bar, OutputPanel, Signature, Window } from "./frame";

// "Smart Report Preparation" — AI gathers attendance, service time, accommodations,
// and session info into a report-ready format. Content fills the window; the report
// skeleton lines shimmer on a loop.

const SOURCES = ["Attendance", "Service minutes", "Accommodations"];

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

export default function SmartReportPrep() {
  return (
    <Window className="w-full">
      <div className="flex min-h-[320px] items-stretch gap-4">
        <div className="flex min-w-0 flex-1 flex-col">
          <Bar w="45%" className="mb-3" />
          <div className="flex flex-1 flex-col justify-center gap-2">
            {SOURCES.map((s) => (
              <div key={s} className="flex items-center gap-1.5 rounded-md bg-[#F1F7F2] px-2 py-2">
                <Check className="h-3 w-3 flex-shrink-0 text-[#4E9D5B]" strokeWidth={3} />
                <span className="text-[10px] font-medium text-[#3D4046]">{s}</span>
              </div>
            ))}
            <Bar w="70%" className="mt-1" />
            <Bar w="55%" />
          </div>
        </div>
        <div className="flex w-[54%] flex-shrink-0">
          <OutputPanel title="Service Report" className="flex w-full flex-col">
            <p className="text-[11px] leading-relaxed text-[#3D4046]">Q2 service delivery — all students, audit-ready.</p>
            <div className="mt-2.5 flex flex-1 flex-col justify-center gap-1.5">
              <Shimmer w="92%" delay={0} />
              <Shimmer w="100%" delay={0.2} />
              <Shimmer w="76%" delay={0.4} />
              <Shimmer w="88%" delay={0.6} />
            </div>
            <span className="mt-2.5 inline-flex w-fit items-center gap-1 rounded-md bg-[#4E9D5B] px-2.5 py-1 text-[10px] font-semibold text-white">
              Download PDF
            </span>
          </OutputPanel>
        </div>
      </div>
    </Window>
  );
}
