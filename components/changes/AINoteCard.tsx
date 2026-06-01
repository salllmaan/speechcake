"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NOTE = "During today's session, Maya independently completed 7/10 trials of the addition goal with verbal prompts. She showed strong engagement and self-corrected twice without redirection.";

const TYPE_SPEED_MS = 22;
const PAUSE_AFTER_MS = 1600;
const PAUSE_BEFORE_RESTART_MS = 1200;

export default function AINoteCard() {
  const [displayed, setDisplayed] = useState("");
  const [saved, setSaved] = useState<null | "student" | "goal">(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const run = async () => {
      while (!cancelled) {
        setDisplayed("");
        setSaved(null);

        for (let i = 0; i <= NOTE.length; i++) {
          if (cancelled) return;
          await new Promise((r) => {
            timer = setTimeout(r, TYPE_SPEED_MS);
          });
          setDisplayed(NOTE.slice(0, i));
        }

        await new Promise((r) => {
          timer = setTimeout(r, PAUSE_AFTER_MS);
        });
        if (cancelled) return;
        setSaved("student");

        await new Promise((r) => {
          timer = setTimeout(r, 900);
        });
        if (cancelled) return;
        setSaved("goal");

        await new Promise((r) => {
          timer = setTimeout(r, PAUSE_BEFORE_RESTART_MS);
        });
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-[#EDEDEA] bg-white">
      <div className="flex items-center gap-2 border-b border-[#EDEDEA] px-3 py-2">
        <div className="flex size-5 items-center justify-center rounded-full bg-[#F4ECFB]">
          <svg viewBox="0 0 24 24" className="size-3 text-[#A484CE]" fill="currentColor">
            <path d="M12 2l1.7 4.6L18 8l-4.3 1.4L12 14l-1.7-4.6L6 8l4.3-1.4L12 2z" />
          </svg>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-[#7C7572]">
          AI drafting…
        </span>
      </div>

      <div className="min-h-[80px] px-3 py-2.5 text-[11px] leading-relaxed text-[#3A3A3A]">
        {displayed}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-0.5 inline-block h-3 w-[2px] -translate-y-[1px] bg-[#A484CE] align-middle"
        />
      </div>

      <div className="flex gap-1.5 border-t border-[#EDEDEA] px-3 py-2">
        <SaveChip label="Save to Student" active={saved === "student" || saved === "goal"} />
        <SaveChip label="Save to Goal" active={saved === "goal"} />
      </div>
    </div>
  );
}

function SaveChip({ label, active }: { label: string; active: boolean }) {
  return (
    <motion.div
      animate={{
        backgroundColor: active ? "#F4ECFB" : "#FFFFFF",
        borderColor: active ? "#D2C2E7" : "#EDEDEA",
        color: active ? "#7B5DB0" : "#3A3A3A",
      }}
      transition={{ duration: 0.25 }}
      className="flex flex-1 items-center justify-center gap-1 rounded-md border px-2 py-1 text-[10px] font-medium"
    >
      <AnimatePresence mode="wait">
        {active ? (
          <motion.svg
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            viewBox="0 0 24 24"
            className="size-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        ) : (
          <motion.svg
            key="plus"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            viewBox="0 0 24 24"
            className="size-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </motion.svg>
        )}
      </AnimatePresence>
      <span>{label}</span>
    </motion.div>
  );
}
