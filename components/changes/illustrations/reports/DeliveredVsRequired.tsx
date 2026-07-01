"use client";

// Card — "Delivered vs Required"
// Instantly see who is on track and who is falling short of mandated time.
// Per-student progress bars of delivered vs required minutes, with status pills. Static.

const ROWS = [
  { name: "Ava T.", delivered: 240, required: 240, pct: 100 },
  { name: "Liam K.", delivered: 186, required: 240, pct: 78 },
  { name: "Mia L.", delivered: 132, required: 240, pct: 55 },
  { name: "Noah B.", delivered: 228, required: 240, pct: 95 },
];

function status(pct: number) {
  if (pct >= 90) return { label: "On track", bar: "#4E9D5B", track: "#E7F0E4", chipBg: "#E8F8EE", chipText: "#1A7A4A" };
  if (pct >= 70) return { label: "At risk", bar: "#E0A23B", track: "#FEF3E2", chipBg: "#FEF3E2", chipText: "#B5731A" };
  return { label: "Behind", bar: "#D77A92", track: "#FCEAF0", chipBg: "#FCEAF0", chipText: "#B5436A" };
}

export default function DeliveredVsRequired() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2.5 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Service minutes · this month</p>
        <span className="text-[10px] text-[#9A938F]">of 240 req.</span>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {ROWS.map((r) => {
          const s = status(r.pct);
          return (
            <div key={r.name}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#111111]">{r.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#666666]">{r.delivered} min</span>
                  <span className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold" style={{ background: s.chipBg, color: s.chipText }}>
                    {s.label}
                  </span>
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: s.track }}>
                <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: s.bar }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
