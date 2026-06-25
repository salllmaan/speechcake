"use client";

import { CartesianGrid, Line, LineChart, ReferenceArea, ReferenceLine, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card 4 illustration — "Go Beyond Basic Data Collection".
// A phase-change chart: the same goal tracked across Baseline / Intervention /
// Maintenance conditions — the depth basic apps don't capture. Single, static.

const DATA = [
  { s: 1, v: 28 },
  { s: 2, v: 33 },
  { s: 3, v: 27 },
  { s: 4, v: 46 },
  { s: 5, v: 58 },
  { s: 6, v: 68 },
  { s: 7, v: 76 },
  { s: 8, v: 88 },
  { s: 9, v: 91 },
];

const config = { v: { label: "Score", color: "#9AD9F3" } } satisfies ChartConfig;

export default function PhaseChange() {
  return (
    <div className="w-full rounded-xl border border-[#EDEDEA] bg-white p-3">
      <p className="mb-2 text-[12px] font-semibold text-[#111111]">Phase change · same goal</p>
      <ChartContainer config={config} className="!aspect-auto h-[176px] w-full">
        <LineChart data={DATA} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
          <ReferenceArea x1={0.5} x2={3.5} fill="#F1F0EC" fillOpacity={0.7} label={{ value: "Baseline", position: "insideTop", fill: "#8C8676", fontSize: 9 }} />
          <ReferenceArea x1={3.5} x2={7.5} fill="#E8F4FE" fillOpacity={0.6} label={{ value: "Intervention", position: "insideTop", fill: "#0072C6", fontSize: 9 }} />
          <ReferenceArea x1={7.5} x2={9.5} fill="#E8F8EE" fillOpacity={0.6} label={{ value: "Maintenance", position: "insideTop", fill: "#1A7A4A", fontSize: 9 }} />
          <CartesianGrid vertical={false} stroke="#F0EFEB" strokeDasharray="3 3" />
          <ReferenceLine x={3.5} stroke="#C8BFB1" strokeDasharray="3 3" />
          <ReferenceLine x={7.5} stroke="#C8BFB1" strokeDasharray="3 3" />
          <XAxis
            dataKey="s"
            type="number"
            domain={[0.5, 9.5]}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            tickLine={false}
            axisLine={false}
            tickMargin={6}
            tick={{ fill: "#9A938F", fontSize: 9 }}
          />
          <YAxis hide domain={[0, 110]} />
          <Line
            dataKey="v"
            type="linear"
            stroke="#9AD9F3"
            strokeWidth={2.5}
            dot={{ r: 3.5, fill: "#fff", stroke: "#9AD9F3", strokeWidth: 2 }}
            activeDot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
