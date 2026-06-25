"use client";

import { CalendarClock } from "lucide-react";

// Card — "Upcoming Deadlines"
// See what's due this week, this month, and beyond, sorted by urgency.
// A sorted deadline list with urgency progress bars (closer = fuller/redder). Static.

const ITEMS = [
  { student: "Noah B.", kind: "Annual IEP", due: "in 3 days", pct: 92, color: "#E8612C", track: "#FCEAE2" },
  { student: "Mia L.", kind: "Reevaluation", due: "in 9 days", pct: 70, color: "#F2A93B", track: "#FEF3E2" },
  { student: "Ethan R.", kind: "Progress review", due: "in 21 days", pct: 42, color: "#00A9F8", track: "#E8F4FE" },
  { student: "Zoe P.", kind: "Annual IEP", due: "in 38 days", pct: 24, color: "#A769CD", track: "#F0ECFB" },
];

export default function UpcomingDeadlines() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Upcoming deadlines</p>
        <span className="flex items-center gap-1 text-[10px] text-[#9A938F]">
          <CalendarClock className="h-3 w-3" /> by urgency
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {ITEMS.map((it) => (
          <div key={it.student}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#111111]">
                {it.student} <span className="text-[#9A938F]">· {it.kind}</span>
              </span>
              <span className="text-[10px] font-semibold" style={{ color: it.color }}>{it.due}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: it.track }}>
              <div className="h-full rounded-full" style={{ width: `${it.pct}%`, background: it.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
