"use client";

import { Area, AreaChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card 2 illustration — "See Progress Before It's Obvious".
// Mastery trends up, the dashed forecast carries it past the goal line before the
// eye would catch it. Fills whatever height the bento card leaves — no fixed size,
// so the card's height/width never change.

const DATA = [
  { week: "W1", past: 28 },
  { week: "W2", past: 37 },
  { week: "W3", past: 46 },
  { week: "W4", past: 58 },
  { week: "W5", past: 65 },
  { week: "W6", past: 73, forecast: 73 },
  { week: "W7", forecast: 83 },
  { week: "W8", forecast: 90 },
  { week: "W9", forecast: 96 },
];

const config = {
  past: { label: "Mastery", color: "#00A9F8" },
  forecast: { label: "Forecast", color: "#A484CE" },
} satisfies ChartConfig;

export default function MasteryForecast() {
  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[12px] font-semibold text-[#111111]">Accuracy Goal</p>
        <span className="flex items-center gap-1 rounded-full border border-[#A769CD] bg-[#B377D8] px-2 py-0.5 text-[10px] font-semibold text-white">
          Mastery by W9
        </span>
      </div>
      <ChartContainer config={config} className="!aspect-auto min-h-0 w-full flex-1">
        <AreaChart data={DATA} margin={{ top: 8, right: 6, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="mf-past" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9AD9F3" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#9AD9F3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
          <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={4} tick={{ fill: "#9A938F", fontSize: 9 }} />
          <YAxis hide domain={[0, 110]} />
          <ReferenceLine
            y={80}
            stroke="#C8BFB1"
            strokeDasharray="2 4"
            label={{ value: "Goal 1 Obj 2", position: "insideTopRight", fill: "#9A938F", fontSize: 9 }}
          />
          <Area
            dataKey="past"
            type="monotone"
            stroke="#9AD9F3"
            strokeWidth={2.5}
            fill="url(#mf-past)"
            dot={{ r: 4, fill: "#fff", stroke: "#9AD9F3", strokeWidth: 2 }}
            activeDot={false}
          />
          <Area
            dataKey="forecast"
            type="monotone"
            stroke="#A769CD"
            strokeWidth={2.5}
            strokeDasharray="5 4"
            fill="transparent"
            dot={{ r: 4, fill: "#fff", stroke: "#A769CD", strokeWidth: 2 }}
            activeDot={false}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
