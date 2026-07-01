"use client";

import { Cell, Pie, PieChart } from "recharts";
import { Download, Share2 } from "lucide-react";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Reports That Work for You"
// "Turn audit results into detailed, shareable reports instantly, complete with
// insights and action points." A compact audit-report card: compliance donut,
// quick insight stats, an action point, and share/export affordances. Static.

const DATA = [
  { name: "Compliant", value: 18, color: "#4E9D5B" },
  { name: "Needs review", value: 4, color: "#74B488" },
  { name: "Flagged", value: 2, color: "#E191A0" },
];
const TOTAL = DATA.reduce((s, d) => s + d.value, 0);
const COMPLIANT = Math.round((DATA[0].value / TOTAL) * 100);

const config = {
  Compliant: { label: "Compliant", color: "#4E9D5B" },
  "Needs review": { label: "Needs review", color: "#74B488" },
  Flagged: { label: "Flagged", color: "#E191A0" },
} satisfies ChartConfig;

export default function ReportsThatWork() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">IEP Audit Report</p>
        <span className="rounded-full border border-[#D9EBDD] bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          Lincoln Elementary
        </span>
      </div>

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <div className="relative h-[112px] w-[112px] flex-shrink-0">
          <ChartContainer config={config} className="!aspect-auto h-full w-full">
            <PieChart>
              <Pie
                data={DATA}
                dataKey="value"
                nameKey="name"
                innerRadius={36}
                outerRadius={52}
                paddingAngle={2}
                stroke="none"
                isAnimationActive={false}
              >
                {DATA.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[20px] font-extrabold leading-none text-[#111111]">{COMPLIANT}%</span>
            <span className="text-[9px] text-[#9A938F]">compliant</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          {DATA.map((d) => (
            <div key={d.name} className="flex items-center gap-1.5 text-[11px]">
              <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-[#666666]">{d.name}</span>
              <span className="ml-auto font-semibold text-[#111111]">{d.value}</span>
            </div>
          ))}
          <div className="mt-0.5 rounded-md bg-[#FEF3E2] px-2 py-1 text-[10px] font-medium text-[#B5731A]">
            Action: resolve 2 missing baselines by Mar 14
          </div>
        </div>
      </div>

      <div className="mt-2 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#4E9D5B] py-1.5 text-[11px] font-semibold text-white">
          <Share2 className="h-3 w-3" /> Share report
        </button>
        <button className="flex items-center justify-center gap-1.5 rounded-lg border border-[#ECEBE7] px-2.5 py-1.5 text-[11px] font-semibold text-[#666666]">
          <Download className="h-3 w-3" /> PDF
        </button>
      </div>
    </div>
  );
}
