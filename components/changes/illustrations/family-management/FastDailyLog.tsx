"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Check } from "lucide-react";

// Card — "Fast Daily Log Entry"
// A saved-template picker that fills a daily log form in one tap. A template chip
// auto-selects on a loop and the form fields populate, conveying speed across
// students. Passive, no interaction needed.

const TEMPLATES = ["Speech session", "OT routine", "Behavior check-in"];

const FIELDS = [
  { label: "Activity", value: "Minimal pairs drill" },
  { label: "Engagement", value: "High · stayed on task" },
  { label: "Next step", value: "Carryover at home" },
];

export default function FastDailyLog() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TEMPLATES.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E8F4FE] text-[#0072C6]">
          <FileText className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
        <p className="text-[12px] font-semibold text-[#111111]">New daily log · Maya R.</p>
      </div>

      <p className="mb-1.5 px-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#B0A88F]">
        Start from a template
      </p>
      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {TEMPLATES.map((t, i) => (
          <span
            key={t}
            className="rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors"
            style={
              i === active
                ? { background: "#E8F4FE", borderColor: "#9AD9F3", color: "#0072C6" }
                : { background: "#FCFCFC", borderColor: "#ECEBE7", color: "#9A938F" }
            }
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-1.5">
        {FIELDS.map((f, i) => (
          <motion.div
            key={`${active}-${f.label}`}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5"
          >
            <span className="text-[10px] font-medium uppercase tracking-wide text-[#B0A88F]">{f.label}</span>
            <span className="flex items-center gap-1 text-[12px] text-[#3D4046]">
              {f.value}
              <Check className="h-3 w-3 text-[#1A7A4A]" strokeWidth={3} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
