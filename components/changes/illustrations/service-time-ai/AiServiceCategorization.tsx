"use client";

import { motion } from "framer-motion";
import { Check, FileText } from "lucide-react";
import { Bar, OutputPanel, Signature, Window } from "./frame";

// "AI Service Time Categorization" — upload student/IEP details, AI suggests
// service types, frequencies, and minute allocations. Content fills the window;
// the suggested rows pulse on a loop.

const SERVICES = [
  { name: "Speech Therapy", freq: "2×/week · 30 min" },
  { name: "Occupational", freq: "1×/week · 30 min" },
  { name: "Counseling", freq: "1×/week · 20 min" },
];

export default function AiServiceCategorization() {
  return (
    <Window className="w-full">
      <div className="flex min-h-[320px] items-stretch gap-4">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#E7F0E4]">
              <FileText className="h-3 w-3 text-[#4E9D5B]" />
            </span>
            <Bar w="55%" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2.5">
            <Bar w="90%" />
            <Bar w="80%" />
            <Bar w="86%" />
            <Bar w="62%" />
            <Bar w="72%" />
            <Bar w="48%" />
          </div>
        </div>
        <div className="flex w-[52%] flex-shrink-0">
          <OutputPanel title="Suggested Services" className="flex w-full flex-col">
            <div className="flex flex-1 flex-col justify-center gap-1.5">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="rounded-lg bg-[#F1F7F2] p-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 flex-shrink-0 text-[#4E9D5B]" strokeWidth={3} />
                    <span className="text-[11px] font-semibold text-[#111111]">{s.name}</span>
                  </div>
                  <p className="mt-0.5 pl-[18px] text-[10px] text-[#6E8470]">{s.freq}</p>
                </motion.div>
              ))}
            </div>
            <Signature />
          </OutputPanel>
        </div>
      </div>
    </Window>
  );
}
