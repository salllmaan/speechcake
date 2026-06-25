"use client";

import { Calendar, FileText } from "lucide-react";

// Card 3 — "Absence Documentation"
// A documented absence (reason captured) sitting atop a complete service history
// timeline — present sessions and a logged absence, kept together. Static.

type Entry =
  | { date: string; type: "session"; label: string; mins: number }
  | { date: string; type: "absence"; label: string; reason: string };

const HISTORY: Entry[] = [
  { date: "Jun 18", type: "session", label: "Speech · 30 min", mins: 30 },
  { date: "Jun 16", type: "absence", label: "Speech · missed", reason: "Illness — parent notified" },
  { date: "Jun 13", type: "session", label: "Speech · 30 min", mins: 30 },
  { date: "Jun 11", type: "session", label: "Speech · 45 min", mins: 45 },
];

export default function AbsenceLog() {
  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center gap-1.5">
        <FileText className="h-3.5 w-3.5 text-[#A769CD]" />
        <p className="text-[12px] font-semibold text-[#111111]">Service history · Liam P.</p>
      </div>

      <div className="space-y-0">
        {HISTORY.map((e, i) => {
          const isAbsence = e.type === "absence";
          const last = i === HISTORY.length - 1;
          return (
            <div key={e.date} className="flex gap-2.5">
              {/* timeline rail */}
              <div className="flex flex-col items-center">
                <span
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ background: isAbsence ? "#B5436A" : "#00A9F8" }}
                />
                {!last && <span className="w-px flex-1 bg-[#ECEBE7]" />}
              </div>

              <div className="flex-1 pb-2.5">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[12px] font-semibold"
                    style={{ color: isAbsence ? "#B5436A" : "#111111" }}
                  >
                    {e.label}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-[#9A938F]">
                    <Calendar className="h-2.5 w-2.5" /> {e.date}
                  </span>
                </div>
                {isAbsence ? (
                  <div className="mt-1 rounded-md bg-[#FCEAF0] px-2 py-1 text-[10px] font-medium text-[#B5436A]">
                    Reason: {e.reason}
                  </div>
                ) : (
                  <p className="mt-0.5 text-[10px] text-[#9A938F]">Delivered · {e.mins} min counted</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
