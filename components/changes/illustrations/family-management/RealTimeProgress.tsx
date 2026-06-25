"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Real-Time Progress"
// A live progress dashboard parents see the moment a log is saved. The percentage
// and "just updated" badge auto-tick to convey real-time visibility. Passive.

const DATA = [
  { d: "Mon", v: 52 },
  { d: "Tue", v: 58 },
  { d: "Wed", v: 61 },
  { d: "Thu", v: 70 },
  { d: "Fri", v: 76 },
  { d: "Mon", v: 82 },
  { d: "Tue", v: 88 },
];

const config = { v: { label: "Accuracy", color: "#00A9F8" } } satisfies ChartConfig;

export default function RealTimeProgress() {
  const [live, setLive] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setLive((l) => !l), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex h-[216px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <div className="mb-1 flex items-start justify-between">
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-[#111111]">Articulation /r/ · Accuracy</p>
          <p className="text-[10px] text-[#9A938F]">Shared with family</p>
        </div>
        <motion.span
          animate={{ opacity: live ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 rounded-full bg-[#E8F4FE] px-2 py-0.5 text-[10px] font-semibold text-[#0072C6]"
        >
          <Zap className="h-2.5 w-2.5" strokeWidth={3} /> Just updated
        </motion.span>
      </div>
      <div className="mb-1 flex items-end gap-1.5">
        <span className="text-[30px] font-extrabold leading-none tracking-tight text-[#111111]">88%</span>
        <span className="mb-1 rounded-full bg-[#E8F8EE] px-1.5 py-0.5 text-[10px] font-semibold text-[#1A7A4A]">
          +12 this week
        </span>
      </div>
      <ChartContainer config={config} className="!aspect-auto min-h-0 w-full flex-1">
        <AreaChart data={DATA} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="rtp-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9AD9F3" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#9AD9F3" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#EDEDEA" strokeDasharray="3 3" />
          <XAxis dataKey="d" tickLine={false} axisLine={false} tickMargin={4} tick={{ fill: "#9A938F", fontSize: 9 }} />
          <YAxis hide domain={[40, 100]} />
          <Area
            dataKey="v"
            type="monotone"
            stroke="#00A9F8"
            strokeWidth={2.5}
            fill="url(#rtp-fill)"
            dot={{ r: 3, fill: "#fff", stroke: "#00A9F8", strokeWidth: 2 }}
            activeDot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
