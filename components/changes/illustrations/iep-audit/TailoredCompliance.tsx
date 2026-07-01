"use client";

import { GripVertical, Pencil } from "lucide-react";

// Card — "Tailored Compliance"
// "Easily add, edit, and prioritize custom audit rules to match your school or
// district's unique requirements." A small list of district audit rules, each
// with a draggable handle (prioritize), a priority chip, and an edit affordance.
// Static — the affordances tell the story.

type Priority = "High" | "Medium" | "Low";

const PRIORITY_STYLE: Record<Priority, { bg: string; text: string }> = {
  High: { bg: "#FCEAF0", text: "#B5436A" },
  Medium: { bg: "#FEF3E2", text: "#B5731A" },
  Low: { bg: "#E8F8EE", text: "#1A7A4A" },
};

const RULES: { label: string; priority: Priority }[] = [
  { label: "Present levels include baseline data", priority: "High" },
  { label: "Each goal is measurable & timebound", priority: "High" },
  { label: "Accommodations listed for each setting", priority: "Medium" },
  { label: "Parent consent date on file", priority: "Low" },
];

export default function TailoredCompliance() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">District audit rules</p>
        <span className="rounded-full border border-[#D9EBDD] bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          12 active
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1.5">
        {RULES.map((rule, i) => {
          const p = PRIORITY_STYLE[rule.priority];
          return (
            <div
              key={rule.label}
              className="group flex items-center gap-2 rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] py-1.5 pl-1.5 pr-2"
            >
              <GripVertical className="h-3.5 w-3.5 flex-shrink-0 text-[#C4BDB6]" />
              <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-[#3D4046]">
                {rule.label}
              </span>
              <span
                className="flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                style={{ backgroundColor: p.bg, color: p.text }}
              >
                {rule.priority}
              </span>
              <Pencil
                className={`h-3 w-3 flex-shrink-0 ${i === 0 ? "text-[#4E9D5B]" : "text-[#C4BDB6]"}`}
              />
            </div>
          );
        })}
      </div>

      <button className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#D8D4CC] py-1.5 text-[11px] font-semibold text-[#9A938F]">
        <span className="text-[13px] leading-none text-[#4E9D5B]">+</span> Add custom rule
      </button>
    </div>
  );
}
