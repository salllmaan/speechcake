"use client";

import { Bar, BarChart, Cell, CartesianGrid, XAxis, YAxis } from "recharts";
import { AlertTriangle } from "lucide-react";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Attendance Trends"
// Spot patterns in participation and flag students with recurring absences.
// Monthly attendance-% bars; the dipping month is flagged in amber. Static.

const DATA = [
  { month: "Sep", rate: 96 },
  { month: "Oct", rate: 92 },
  { month: "Nov", rate: 88 },
  { month: "Dec", rate: 71 },
  { month: "Jan", rate: 67 },
  { month: "Feb", rate: 84 },
];

const config = { rate: { label: "Attendance", color: "#4E9D5B" } } satisfies ChartConfig;

export default function AttendanceTrends() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Attendance rate · Liam K.</p>
        <span className="flex items-center gap-1 rounded-full bg-[#FEF3E2] px-2 py-0.5 text-[10px] font-semibold text-[#B5731A]">
          <AlertTriangle className="h-2.5 w-2.5" /> 2-mo dip
        </span>
      </div>
      <ChartContainer config={config} className="!aspect-auto min-h-0 w-full flex-1">
        <BarChart data={DATA} margin={{ top: 8, right: 6, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={4} tick={{ fill: "#9A938F", fontSize: 9 }} />
          <YAxis hide domain={[0, 100]} />
          <Bar dataKey="rate" radius={[4, 4, 0, 0]} isAnimationActive={false}>
            {DATA.map((d) => (
              <Cell key={d.month} fill={d.rate < 75 ? "#E8C07A" : "#74B488"} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
