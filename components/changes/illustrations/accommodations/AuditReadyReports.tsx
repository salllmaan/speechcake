"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, ReferenceLine, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Audit-Ready Reports"
// "Track accommodation implementation and generate audit-ready accommodation
// reports for IEP compliance." A static implementation-rate report: % of sessions
// each accommodation was actually delivered, against a compliance target line.

const DATA = [
  { accom: "Ext. time", rate: 96 },
  { accom: "Read-aloud", rate: 88 },
  { accom: "Breaks", rate: 92 },
  { accom: "Visual cues", rate: 78 },
  { accom: "Quiet room", rate: 100 },
];

const TARGET = 85;
const config = { rate: { label: "Delivered", color: "#4E9D5B" } } satisfies ChartConfig;

export default function AuditReadyReports() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Implementation rate · Q3</p>
        <span className="rounded-full border border-[#D9EBDD] bg-[#E8F8EE] px-2 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          Audit-ready
        </span>
      </div>
      <ChartContainer config={config} className="!aspect-auto min-h-0 w-full flex-1">
        <BarChart data={DATA} margin={{ top: 14, right: 6, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#F0EFEB" strokeDasharray="3 3" />
          <XAxis dataKey="accom" tickLine={false} axisLine={false} tickMargin={6} tick={{ fill: "#9A938F", fontSize: 9 }} />
          <YAxis hide domain={[0, 112]} />
          <ReferenceLine
            y={TARGET}
            stroke="#C8BFB1"
            strokeDasharray="2 4"
            label={{ value: "Target 85%", position: "insideTopLeft", fill: "#9A938F", fontSize: 9 }}
          />
          <Bar dataKey="rate" radius={[5, 5, 0, 0]} maxBarSize={26} isAnimationActive={false}>
            {DATA.map((d) => (
              <Cell key={d.accom} fill={d.rate >= TARGET ? "#4E9D5B" : "#A9D2B4"} />
            ))}
            <LabelList dataKey="rate" position="top" formatter={(v: React.ReactNode) => `${v}%`} fill="#666666" fontSize={9} fontWeight={600} />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
