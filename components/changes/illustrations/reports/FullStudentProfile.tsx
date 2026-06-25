"use client";

import { GraduationCap, Users } from "lucide-react";

// Card — "Full Student Profile"
// Key details, services, and team members gathered into a single shareable view.
// A composed profile card: header, service chips, team avatars. Static.

const SERVICES = [
  { label: "Speech", bg: "#E8F4FE", color: "#0072C6" },
  { label: "OT", bg: "#E8F8EE", color: "#1A7A4A" },
  { label: "Counseling", bg: "#F0ECFB", color: "#7A4FA8" },
];

const TEAM = [
  { initials: "JP", role: "SLP", bg: "#00A9F8" },
  { initials: "RK", role: "OT", bg: "#A769CD" },
  { initials: "DM", role: "Case mgr", bg: "#F2A93B" },
];

export default function FullStudentProfile() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#E8F4FE] text-[15px] font-bold text-[#0072C6]">
          SC
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-semibold text-[#111111]">Sofia Castillo</p>
          <p className="text-[10px] text-[#9A938F]">Grade 3 · DOB 04/12/2017 · ID 80421</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          <GraduationCap className="h-2.5 w-2.5" /> Active
        </span>
      </div>

      <div className="my-2.5 h-px bg-[#ECEBE7]" />

      <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wide text-[#9A938F]">Services</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {SERVICES.map((s) => (
          <span key={s.label} className="rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ background: s.bg, color: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      <p className="mb-1.5 flex items-center gap-1 text-[9px] font-medium uppercase tracking-wide text-[#9A938F]">
        <Users className="h-3 w-3" /> Care team
      </p>
      <div className="space-y-1.5">
        {TEAM.map((t) => (
          <div key={t.initials} className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ background: t.bg }}>
              {t.initials}
            </span>
            <span className="text-[11px] text-[#666666]">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
