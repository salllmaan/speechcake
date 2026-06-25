"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, ShieldCheck } from "lucide-react";

// Card — "Secure Family Portal"
// A private portal access panel: each guardian gets a controlled, scoped view of
// the student's record. One access row auto-toggles to show control happens at
// the detail level. Passive, no interaction needed.

const ACCESS = [
  { name: "Reading goals", granted: true },
  { name: "Daily logs", granted: true },
  { name: "Full assessment reports", granted: false },
  { name: "Session notes", granted: true },
];

export default function SecureFamilyPortal() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FAFAF9] px-2.5 py-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F0ECFB] text-[#7B4FA8]">
            <Lock className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <div className="leading-tight">
            <p className="text-[12px] font-semibold text-[#111111]">Carter Family · Portal</p>
            <p className="text-[10px] text-[#9A938F]">Guardian: Renee Carter</p>
          </div>
        </div>
        <motion.span
          animate={{ opacity: pulse ? 1 : 0.55 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]"
        >
          <ShieldCheck className="h-2.5 w-2.5" strokeWidth={3} /> Secure
        </motion.span>
      </div>

      <p className="mb-1.5 px-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#B0A88F]">
        Access controlled by you
      </p>
      <div className="space-y-1.5">
        {ACCESS.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5"
          >
            <span className="text-[12px] text-[#3D4046]">{a.name}</span>
            {a.granted ? (
              <span className="flex items-center gap-1 rounded-full bg-[#E8F4FE] px-2 py-0.5 text-[10px] font-semibold text-[#0072C6]">
                <Eye className="h-2.5 w-2.5" strokeWidth={2.5} /> Visible
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-full bg-[#F1F0EC] px-2 py-0.5 text-[10px] font-semibold text-[#9A938F]">
                <EyeOff className="h-2.5 w-2.5" strokeWidth={2.5} /> Hidden
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
