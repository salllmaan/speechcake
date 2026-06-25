"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, SlidersHorizontal } from "lucide-react";

// Card 4 — "Provider & Service Filters"
// Records filtered by student, provider, attendance status, or service type.
// One filter auto-activates on a loop and the record list narrows to match.
// Passive.

type Filter = { key: string; label: string };
const FILTERS: Filter[] = [
  { key: "all", label: "All records" },
  { key: "speech", label: "Speech" },
  { key: "ot", label: "OT" },
  { key: "absent", label: "Absent" },
];

type ServiceRecord = { student: string; provider: string; service: "speech" | "ot"; status: "present" | "absent" };
const RECORDS: ServiceRecord[] = [
  { student: "Maya R.", provider: "K. Ortiz", service: "speech", status: "present" },
  { student: "Devon K.", provider: "L. Park", service: "ot", status: "present" },
  { student: "Liam P.", provider: "K. Ortiz", service: "speech", status: "absent" },
  { student: "Ava S.", provider: "L. Park", service: "ot", status: "absent" },
];

function matches(r: ServiceRecord, key: string) {
  if (key === "all") return true;
  if (key === "absent") return r.status === "absent";
  return r.service === key;
}

const SERVICE_CHIP: Record<"speech" | "ot", { bg: string; text: string; label: string }> = {
  speech: { bg: "#E8F4FE", text: "#0072C6", label: "Speech" },
  ot: { bg: "#FEF3E2", text: "#B5731A", label: "OT" },
};

export default function ServiceFilters() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % FILTERS.length), 1900);
    return () => clearInterval(t);
  }, []);

  const key = FILTERS[active].key;
  const visible = RECORDS.filter((r) => matches(r, key));

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center gap-1.5">
        <SlidersHorizontal className="h-3.5 w-3.5 text-[#9A938F]" />
        <p className="text-[12px] font-semibold text-[#111111]">Filter records</p>
      </div>

      <div className="mb-2.5 flex flex-wrap gap-1.5">
        {FILTERS.map((f, i) => {
          const on = i === active;
          return (
            <span
              key={f.key}
              className="flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold transition-colors"
              style={{
                background: on ? "#00A9F8" : "#FAFAF9",
                borderColor: on ? "#00A9F8" : "#ECEBE7",
                color: on ? "#ffffff" : "#9A938F",
              }}
            >
              {on && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              {f.label}
            </span>
          );
        })}
      </div>

      <div className="min-h-[124px] space-y-1.5">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((r) => {
            const chip = SERVICE_CHIP[r.service];
            return (
              <motion.div
                key={r.student}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between rounded-md border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5"
              >
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-[#111111]">{r.student}</p>
                  <p className="text-[9px] text-[#9A938F]">{r.provider}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                    style={{ background: chip.bg, color: chip.text }}
                  >
                    {chip.label}
                  </span>
                  <span
                    className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                    style={
                      r.status === "present"
                        ? { background: "#E8F8EE", color: "#1A7A4A" }
                        : { background: "#FCEAF0", color: "#B5436A" }
                    }
                  >
                    {r.status === "present" ? "Present" : "Absent"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
