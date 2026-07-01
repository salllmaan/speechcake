"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";

// Card — "Two-Way Communication"
// A FERPA-compliant messaging thread between the SLP team and a parent. Bubbles
// reveal one at a time on a loop and a typing indicator appears, conveying the
// two-way, real-time exchange. Passive, no interaction.

type Msg = { from: "team" | "parent"; text: string };

const THREAD: Msg[] = [
  { from: "team", text: "Maya nailed all her /s/ words today! 🎉" },
  { from: "parent", text: "That's wonderful — should we practice at home?" },
  { from: "team", text: "Yes! I've shared a short word list in the portal." },
  { from: "parent", text: "Got it, thank you so much!" },
];

export default function TwoWayMessaging() {
  const [count, setCount] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (count < THREAD.length) {
      setTyping(true);
      const a = setTimeout(() => {
        setTyping(false);
        setCount((c) => c + 1);
      }, 1100);
      return () => clearTimeout(a);
    }
    const reset = setTimeout(() => setCount(1), 2600);
    return () => clearTimeout(reset);
  }, [count]);

  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between border-b border-[#EDEDEA] pb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E7F0E4] text-[11px] font-semibold text-[#4E9D5B]">
            RC
          </span>
          <div className="leading-tight">
            <p className="text-[12px] font-semibold text-[#111111]">Renee Carter</p>
            <p className="text-[10px] text-[#9A938F]">Parent · Maya R.</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-semibold text-[#1A7A4A]">
          <Lock className="h-2.5 w-2.5" strokeWidth={3} /> FERPA secure
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden">
        <AnimatePresence initial={false}>
          {THREAD.slice(0, count).map((m, i) => (
            <motion.div
              key={`${count}-${i}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex ${m.from === "team" ? "justify-start" : "justify-end"}`}
            >
              <span
                className={`max-w-[78%] rounded-2xl px-2.5 py-1.5 text-[11px] leading-snug ${
                  m.from === "team"
                    ? "rounded-bl-sm bg-[#F1F0EC] text-[#3D4046]"
                    : "rounded-br-sm bg-[#4E9D5B] text-white"
                }`}
              >
                {m.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && count < THREAD.length && (
          <div className={`flex ${THREAD[count].from === "team" ? "justify-start" : "justify-end"}`}>
            <span className="flex gap-0.5 rounded-full bg-[#F1F0EC] px-2.5 py-2">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1 w-1 rounded-full bg-[#9A938F]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
