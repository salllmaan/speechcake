"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ReferenceLine, XAxis, YAxis } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card 2 — "See Progress Before It's Obvious"
// Past data is plain. The interaction is the point: project forward and the
// dashed trendline crosses the goal line before the eye would have caught it.

const DATA = [
  { week: "W1", past: 22 },
  { week: "W2", past: 31 },
  { week: "W3", past: 40 },
  { week: "W4", past: 52 },
  { week: "W5", past: 60 },
  { week: "W6", past: 71, forecast: 71 },
  { week: "W7", forecast: 80 },
  { week: "W8", forecast: 88 },
  { week: "W9", forecast: 95 },
  { week: "W10", forecast: 100 },
];

const config = {
  past: { label: "Mastery", color: "#00A9F8" },
  forecast: { label: "Forecast", color: "#A484CE" },
} satisfies ChartConfig;

export default function SeeProgress() {
  const [forecast, setForecast] = useState(false);

  return (
    <div className="rounded-xl border border-[#EDEDEA] bg-white p-4">
      <div className="mb-1 flex items-start justify-between gap-3">
        <div>
          <p className="text-[13px] font-semibold text-[#111111]">Goal: 80% accuracy</p>
          <p className="text-[12px] text-[#9A938F]">
            {forecast ? "Mastery projected by Week 10" : "Six weeks of data — where is it headed?"}
          </p>
        </div>
        {forecast && (
          <span className="flex items-center gap-1 rounded-full bg-[#F0ECFB] px-2.5 py-1 text-[11px] font-semibold text-[#5B3FB0]">
            <Sparkles className="h-3 w-3" /> On track
          </span>
        )}
      </div>

      <ChartContainer config={config} className="h-[156px] w-full">
        <AreaChart data={DATA} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="pastFillSP" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A9F8" stopOpacity={0.22} />
              <stop offset="100%" stopColor="#00A9F8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
          <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={6} tick={{ fill: "#9A938F", fontSize: 10 }} />
          <YAxis hide domain={[0, 110]} />
          <ReferenceLine
            y={80}
            stroke="#C8BFB1"
            strokeDasharray="2 4"
            label={{ value: "Goal", position: "insideTopRight", fill: "#9A938F", fontSize: 10 }}
          />
          <Area
            dataKey="past"
            type="monotone"
            stroke="#00A9F8"
            strokeWidth={2.5}
            fill="url(#pastFillSP)"
            dot={{ r: 3, fill: "#00A9F8", strokeWidth: 0 }}
            isAnimationActive
          />
          {forecast && (
            <Area
              dataKey="forecast"
              type="monotone"
              stroke="#A484CE"
              strokeWidth={2.5}
              strokeDasharray="5 4"
              fill="transparent"
              dot={{ r: 3, fill: "#A484CE", strokeWidth: 0 }}
              animationDuration={900}
            />
          )}
        </AreaChart>
      </ChartContainer>

      <button
        type="button"
        onClick={() => setForecast((f) => !f)}
        className={`mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          forecast
            ? "bg-[#F5F5F3] text-[#666666] hover:bg-[#EFEFEC]"
            : "bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-white hover:opacity-90"
        }`}
      >
        {forecast ? "Hide forecast" : "Project forward"}
      </button>
    </div>
  );
}
