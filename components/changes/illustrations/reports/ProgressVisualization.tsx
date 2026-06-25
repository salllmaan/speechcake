"use client";

import { CartesianGrid, Line, LineChart, ReferenceLine, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Progress Visualization"
// Monitor student progress across goals with visual trends and outcome data.
// Multi-goal line chart: three goals climbing toward an 80% mastery line. Static.

const DATA = [
  { week: "W1", reading: 32, math: 24, social: 40 },
  { week: "W2", reading: 41, math: 33, social: 44 },
  { week: "W3", reading: 49, math: 38, social: 53 },
  { week: "W4", reading: 58, math: 51, social: 58 },
  { week: "W5", reading: 66, math: 57, social: 67 },
  { week: "W6", reading: 74, math: 66, social: 71 },
  { week: "W7", reading: 83, math: 72, social: 79 },
];

const config = {
  reading: { label: "Reading", color: "#00A9F8" },
  math: { label: "Math", color: "#A769CD" },
  social: { label: "Social", color: "#F2A93B" },
} satisfies ChartConfig;

const LEGEND = [
  { label: "Reading", color: "#00A9F8" },
  { label: "Math", color: "#A769CD" },
  { label: "Social", color: "#F2A93B" },
];

export default function ProgressVisualization() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Goal progress · this term</p>
        <div className="flex items-center gap-2">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-1 text-[10px] text-[#666666]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>
      <ChartContainer config={config} className="!aspect-auto min-h-0 w-full flex-1">
        <LineChart data={DATA} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
          <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={4} tick={{ fill: "#9A938F", fontSize: 9 }} />
          <YAxis hide domain={[0, 100]} />
          <ReferenceLine
            y={80}
            stroke="#C8BFB1"
            strokeDasharray="2 4"
            label={{ value: "Mastery 80%", position: "insideTopRight", fill: "#9A938F", fontSize: 9 }}
          />
          <Line dataKey="reading" type="monotone" stroke="#00A9F8" strokeWidth={2.5} dot={{ r: 3, fill: "#fff", stroke: "#00A9F8", strokeWidth: 2 }} activeDot={false} isAnimationActive={false} />
          <Line dataKey="math" type="monotone" stroke="#A769CD" strokeWidth={2.5} dot={{ r: 3, fill: "#fff", stroke: "#A769CD", strokeWidth: 2 }} activeDot={false} isAnimationActive={false} />
          <Line dataKey="social" type="monotone" stroke="#F2A93B" strokeWidth={2.5} dot={{ r: 3, fill: "#fff", stroke: "#F2A93B", strokeWidth: 2 }} activeDot={false} isAnimationActive={false} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
