"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { week: "W1", past: 22 },
  { week: "W2", past: 34 },
  { week: "W3", past: 41 },
  { week: "W4", past: 55 },
  { week: "W5", past: 62 },
  { week: "W6", past: 71 },
  { week: "W7", past: 78 },
  { week: "W8", past: 86, forecast: 86 },
  { week: "W9", forecast: 91 },
  { week: "W10", forecast: 95 },
  { week: "W11", forecast: 98 },
  { week: "W12", forecast: 100 },
];

const config = {
  past: {
    label: "Mastery",
    color: "#9AD9F3",
  },
  forecast: {
    label: "Forecast",
    color: "#C7E9F8",
  },
} satisfies ChartConfig;

export default function ProgressChart() {
  return (
    <ChartContainer config={config} className="h-[220px] w-full">
      <AreaChart
        data={data}
        margin={{ top: 12, right: 8, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="pastFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9AD9F3" stopOpacity={0.32} />
            <stop offset="100%" stopColor="#9AD9F3" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C7E9F8" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#C7E9F8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          tick={{ fill: "#9A938F", fontSize: 10 }}
        />
        <YAxis
          hide
          domain={[0, 110]}
        />
        <ReferenceLine
          y={100}
          stroke="#9A938F"
          strokeDasharray="2 4"
          strokeWidth={1}
          label={{
            value: "Goal",
            position: "insideTopRight",
            fill: "#9A938F",
            fontSize: 10,
          }}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Area
          dataKey="past"
          type="monotone"
          stroke="#9AD9F3"
          strokeWidth={2}
          fill="url(#pastFill)"
          dot={{ r: 3, fill: "#9AD9F3", strokeWidth: 0 }}
          activeDot={{ r: 4, fill: "#9AD9F3" }}
        />
        <Area
          dataKey="forecast"
          type="monotone"
          stroke="#9AD9F3"
          strokeWidth={2}
          strokeDasharray="5 4"
          fill="url(#forecastFill)"
          dot={false}
          activeDot={{ r: 4, fill: "#9AD9F3" }}
        />
      </AreaChart>
    </ChartContainer>
  );
}
