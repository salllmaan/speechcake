"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";

// Card — "Instant Detection, Clear Resolution"
// "AI identifies potential compliance issues within IEPs, from missing details to
// misaligned goals, and flags them for review." Auto-loops: a scan line sweeps the
// IEP checklist, items resolve to compliant, and two issues get flagged for review.

const ITEMS: { label: string; status: "ok" | "missing" | "misaligned" }[] = [
  { label: "Present levels of performance", status: "ok" },
  { label: "Baseline data for Goal 2", status: "missing" },
  { label: "Goals aligned to grade standards", status: "misaligned" },
  { label: "Service minutes documented", status: "ok" },
  { label: "Accommodations listed", status: "ok" },
];

const FLAG_STYLE = {
  missing: { bg: "#FCEAF0", text: "#B5436A", label: "Missing detail" },
  misaligned: { bg: "#FEF3E2", text: "#B5731A", label: "Misaligned goal" },
} as const;

export default function InstantDetection() {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setScanning((s) => !s), scanning ? 1500 : 2400);
    return () => clearTimeout(t);
  }, [scanning]);

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">AI compliance scan</p>
        <motion.span
          key={scanning ? "scan" : "done"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
          style={
            scanning
              ? { backgroundColor: "#E8F8EE", color: "#1A7A4A" }
              : { backgroundColor: "#FCEAF0", color: "#B5436A" }
          }
        >
          {scanning ? "Scanning…" : "2 issues flagged"}
        </motion.span>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div className="space-y-1.5">
          {ITEMS.map((item, i) => {
            const flagged = !scanning && item.status !== "ok";
            const flag = item.status !== "ok" ? FLAG_STYLE[item.status] : null;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-lg border px-2 py-1.5 transition-colors"
                style={{
                  borderColor: flagged ? flag!.text + "55" : "#ECEBE7",
                  backgroundColor: flagged ? flag!.bg : "#FCFCFC",
                }}
              >
                <span
                  className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: scanning ? "#F1F0EC" : flagged ? flag!.text : "#E8F8EE",
                  }}
                >
                  {!scanning &&
                    (flagged ? (
                      <AlertTriangle className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    ) : (
                      <Check className="h-2.5 w-2.5 text-[#1A7A4A]" strokeWidth={3} />
                    ))}
                </span>
                <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-[#3D4046]">
                  {item.label}
                </span>
                {flagged && (
                  <motion.span
                    initial={{ opacity: 0, x: 4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex-shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                    style={{ backgroundColor: flag!.text, color: "#fff" }}
                  >
                    {flag!.label}
                  </motion.span>
                )}
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {scanning && (
            <motion.div
              key="scanline"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 188, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-x-0 top-0 h-8"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(78,157,91,0) 0%, rgba(78,157,91,0.16) 70%, rgba(78,157,91,0.5) 100%)",
                borderBottom: "2px solid #4E9D5B",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
