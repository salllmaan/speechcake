"use client";

// Card — "Session-Level Detail"
// Drill into accuracy, prompting levels, and observations from one session.
// Stat cards + horizontal prompting-distribution bars + an observation note. Static.

const PROMPTS = [
  { label: "Independent", pct: 60, color: "#4E9D5B", bg: "#E7F0E4" },
  { label: "Verbal", pct: 25, color: "#74B488", bg: "#E8F8EE" },
  { label: "Gestural", pct: 10, color: "#A9D2B4", bg: "#EFF6EE" },
  { label: "Physical", pct: 5, color: "#C4C4C4", bg: "#F1F0EC" },
];

export default function SessionLevelDetail() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Session · Mar 14</p>
        <span className="rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          Articulation
        </span>
      </div>

      <div className="mb-2.5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2 py-1.5">
          <p className="text-[18px] font-extrabold leading-none text-[#111111]">82%</p>
          <p className="mt-0.5 text-[9px] text-[#9A938F]">Accuracy</p>
        </div>
        <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2 py-1.5">
          <p className="text-[18px] font-extrabold leading-none text-[#111111]">28</p>
          <p className="mt-0.5 text-[9px] text-[#9A938F]">Trials</p>
        </div>
        <div className="rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2 py-1.5">
          <p className="text-[18px] font-extrabold leading-none text-[#4E9D5B]">23</p>
          <p className="mt-0.5 text-[9px] text-[#9A938F]">Correct</p>
        </div>
      </div>

      <p className="mb-1 text-[9px] font-medium uppercase tracking-wide text-[#9A938F]">Prompting level</p>
      <div className="space-y-1.5">
        {PROMPTS.map((p) => (
          <div key={p.label} className="flex items-center gap-2">
            <span className="w-[58px] flex-shrink-0 text-[10px] text-[#666666]">{p.label}</span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full" style={{ background: p.bg }}>
              <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
            </div>
            <span className="w-[26px] flex-shrink-0 text-right text-[10px] font-semibold text-[#111111]">{p.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
