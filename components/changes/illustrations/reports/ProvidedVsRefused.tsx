"use client";

import { Cell, Label, Pie, PieChart } from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

// Card — "Provided vs Refused"
// Log what was offered and what the student declined, keeping docs defensible.
// Donut chart of accommodation outcomes with a centered total. Static.

const DATA = [
  { name: "Provided", value: 42, fill: "#4E9D5B" },
  { name: "Modified", value: 9, fill: "#74B488" },
  { name: "Refused", value: 5, fill: "#E191A0" },
];
const TOTAL = DATA.reduce((s, d) => s + d.value, 0);

const config = {
  Provided: { label: "Provided", color: "#4E9D5B" },
  Modified: { label: "Modified", color: "#74B488" },
  Refused: { label: "Refused", color: "#E191A0" },
} satisfies ChartConfig;

export default function ProvidedVsRefused() {
  return (
    <div className="flex h-[224px] flex-col rounded-xl border border-[#EDEDEA] bg-white p-3">
      <p className="mb-1 text-[12px] font-semibold text-[#111111]">Accommodation outcomes</p>
      <div className="flex flex-1 items-center gap-2">
        <ChartContainer config={config} className="!aspect-auto h-[150px] w-[150px] flex-shrink-0">
          <PieChart>
            <Pie data={DATA} dataKey="value" nameKey="name" innerRadius={42} outerRadius={62} strokeWidth={2} stroke="#fff" isAnimationActive={false}>
              {DATA.map((d) => (
                <Cell key={d.name} fill={d.fill} />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) - 4} className="fill-[#111111] text-[20px] font-extrabold">
                          {TOTAL}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 12} className="fill-[#9A938F] text-[9px]">
                          logged
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex flex-1 flex-col gap-2">
          {DATA.map((d) => (
            <div key={d.name} className="flex items-center justify-between rounded-lg border border-[#ECEBE7] bg-[#FCFCFC] px-2.5 py-1.5">
              <span className="flex items-center gap-1.5 text-[11px] text-[#666666]">
                <span className="h-2 w-2 rounded-full" style={{ background: d.fill }} />
                {d.name}
              </span>
              <span className="text-[12px] font-semibold text-[#111111]">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
