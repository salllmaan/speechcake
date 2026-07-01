"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Smartphone } from "lucide-react";

// Card — "Quick Logging"
// A phone-framed quick-capture screen: tap one chip and the day is logged in
// seconds. A chip auto-highlights, then a "Saved" confirmation flashes on a loop.
// Conveys logging from any device, during or after a session. Passive.

const CHIPS = ["Great day", "On track", "Needs review", "Absent"];

export default function QuickLogging() {
  const [active, setActive] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActive((a) => (a + 1) % CHIPS.length);
      setSaved(true);
      const off = setTimeout(() => setSaved(false), 900);
      return () => clearTimeout(off);
    }, 1900);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="flex items-center justify-center rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="w-[150px] rounded-[20px] border border-[#E3E0DA] bg-[#FAFAF9] p-2 shadow-sm">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-[#E3E0DA]" />
        <div className="rounded-[14px] bg-white p-2.5">
          <div className="mb-2 flex items-center gap-1.5">
            <Smartphone className="h-3 w-3 text-[#4E9D5B]" strokeWidth={2.5} />
            <p className="text-[10px] font-semibold text-[#111111]">Quick log</p>
          </div>
          <p className="mb-2 text-[9px] text-[#9A938F]">Devon K. · 10:42 AM</p>
          <div className="grid grid-cols-2 gap-1.5">
            {CHIPS.map((c, i) => (
              <span
                key={c}
                className="rounded-lg px-1.5 py-1.5 text-center text-[9px] font-semibold transition-colors"
                style={
                  i === active
                    ? { background: "#4E9D5B", color: "#fff" }
                    : { background: "#F1F0EC", color: "#9A938F" }
                }
              >
                {c}
              </span>
            ))}
          </div>
          <motion.div
            animate={{ opacity: saved ? 1 : 0.35 }}
            transition={{ duration: 0.3 }}
            className="mt-2 flex items-center justify-center gap-1 rounded-lg bg-[#E8F8EE] py-1.5 text-[9px] font-semibold text-[#1A7A4A]"
          >
            <Check className="h-2.5 w-2.5" strokeWidth={3} /> {saved ? "Saved" : "Tap to log"}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
