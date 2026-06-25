"use client";

import { ArrowRight, Plus } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Card 4 — "Go Beyond Basic Data Collection"
// Three specialised collection views the basic apps don't have, each rendered as
// the real thing a clinician would see — phases, ABC chains, custom fields.

const SHELL = "rounded-xl border border-[#EDEDEA] bg-white p-4 min-h-[212px]";

const PHASES = [
  { name: "Baseline", color: "#F1F0EC", text: "#8C8676", w: "28%", pts: [30, 34, 31] },
  { name: "Intervention", color: "#E8F4FE", text: "#0072C6", w: "44%", pts: [44, 58, 67, 74] },
  { name: "Maintenance", color: "#E8F8EE", text: "#1A7A4A", w: "28%", pts: [88, 92] },
];

function Phases() {
  return (
    <div className={SHELL}>
      <p className="text-[13px] font-semibold text-[#111111]">Phase change line</p>
      <p className="mt-0.5 mb-3 text-[12px] text-[#9A938F]">Conditions tracked across the same goal</p>
      <div className="flex h-[112px] overflow-hidden rounded-lg border border-[#ECEBE7]">
        {PHASES.map((p) => (
          <div key={p.name} className="flex flex-col" style={{ width: p.w, backgroundColor: p.color }}>
            <span className="px-2 pt-1.5 text-[10px] font-semibold" style={{ color: p.text }}>
              {p.name}
            </span>
            <div className="flex flex-1 items-end gap-1 px-2 pb-2">
              {p.pts.map((v, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: `${v}%`, backgroundColor: p.text, opacity: 0.55 }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ABC = [
  { tag: "Antecedent", body: "Asked to switch tasks", bg: "#FEF3E2", text: "#B5650C" },
  { tag: "Behavior", body: "Left seat, vocal protest", bg: "#FCEAF0", text: "#B5436A" },
  { tag: "Consequence", body: "Offered a 2-min break", bg: "#E8F4FE", text: "#0072C6" },
];

function AbcData() {
  return (
    <div className={SHELL}>
      <p className="text-[13px] font-semibold text-[#111111]">ABC incident</p>
      <p className="mt-0.5 mb-3 text-[12px] text-[#9A938F]">Antecedent → Behavior → Consequence</p>
      <div className="flex items-stretch gap-1.5">
        {ABC.map((c, i) => (
          <div key={c.tag} className="flex flex-1 items-center gap-1.5">
            <div className="flex-1 rounded-lg p-2.5" style={{ backgroundColor: c.bg }}>
              <p className="text-[10px] font-bold uppercase tracking-wide" style={{ color: c.text }}>
                {c.tag}
              </p>
              <p className="mt-1 text-[12px] leading-snug text-[#3D4046]">{c.body}</p>
            </div>
            {i < ABC.length - 1 && <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-[#C4BDB6]" />}
          </div>
        ))}
      </div>
    </div>
  );
}

const FIELDS = [
  { label: "Setting", value: "Small group" },
  { label: "Materials", value: "Visual cards" },
  { label: "Engagement", value: "High" },
];

function CustomFields() {
  return (
    <div className={SHELL}>
      <p className="text-[13px] font-semibold text-[#111111]">Custom tracking fields</p>
      <p className="mt-0.5 mb-3 text-[12px] text-[#9A938F]">Add the variables your goals actually need</p>
      <div className="space-y-2">
        {FIELDS.map((f) => (
          <div key={f.label} className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FAFAF9] px-3 py-2">
            <span className="text-[12px] text-[#9A938F]">{f.label}</span>
            <span className="rounded-md bg-white px-2 py-1 text-[12px] font-medium text-[#111111] ring-1 ring-[#ECEBE7]">
              {f.value}
            </span>
          </div>
        ))}
        <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#D9D9D6] py-2 text-[12px] font-medium text-[#9A938F] transition-colors hover:border-[#00A9F8] hover:text-[#00A9F8]">
          <Plus className="h-3.5 w-3.5" /> Add field
        </button>
      </div>
    </div>
  );
}

export default function GoBeyond() {
  return (
    <Tabs defaultValue="phases" className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger value="phases" className="flex-1">Phases</TabsTrigger>
        <TabsTrigger value="abc" className="flex-1">ABC Data</TabsTrigger>
        <TabsTrigger value="custom" className="flex-1">Custom Fields</TabsTrigger>
      </TabsList>
      <TabsContent value="phases"><Phases /></TabsContent>
      <TabsContent value="abc"><AbcData /></TabsContent>
      <TabsContent value="custom"><CustomFields /></TabsContent>
    </Tabs>
  );
}
