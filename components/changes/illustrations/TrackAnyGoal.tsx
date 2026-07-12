"use client";

import { useState } from "react";
import { Check, Plus, RotateCcw } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Card 1 — "Track Any Goal or Behavior"
// One illustration, four real measurement types. Each tab is a working mini
// capture widget so the idea "tracked exactly the way it should" is felt, not told.

const SHELL = "rounded-xl border border-[#EDEDEA] bg-white p-4 min-h-[212px]";

function Accuracy() {
  const [correct, setCorrect] = useState(7);
  const [incorrect, setIncorrect] = useState(3);
  const total = correct + incorrect;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  return (
    <div className={SHELL}>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[44px] font-extrabold leading-none tracking-tight text-[#111111]">{pct}%</p>
          <p className="mt-1 text-[12px] text-[#9A938F]">
            {correct} correct · {incorrect} incorrect
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setCorrect(0);
            setIncorrect(0);
          }}
          className="flex items-center gap-1 text-[12px] text-[#9A938F] transition-colors hover:text-[#111111]"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>
      <div className="mt-4 flex gap-2.5">
        <button
          type="button"
          onClick={() => setCorrect((c) => c + 1)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E8F8EE] py-3 text-sm font-semibold text-[#1A7A4A] transition-transform active:scale-[0.97]"
        >
          <Check className="h-4 w-4" /> Correct
        </button>
        <button
          type="button"
          onClick={() => setIncorrect((c) => c + 1)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FCEAF0] py-3 text-sm font-semibold text-[#B5436A] transition-transform active:scale-[0.97]"
        >
          <Plus className="h-4 w-4 rotate-45" /> Incorrect
        </button>
      </div>
    </div>
  );
}

const STEPS = ["Picks up cup", "Brings to mouth", "Takes a sip", "Sets cup down"];

function TaskAnalysis() {
  const [done, setDone] = useState<boolean[]>([true, true, false, false]);
  const count = done.filter(Boolean).length;

  return (
    <div className={SHELL}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-[#111111]">Drinking routine</p>
        <span className="text-[12px] text-[#9A938F]">
          {count} of {STEPS.length} steps
        </span>
      </div>
      <div className="space-y-1.5">
        {STEPS.map((step, i) => (
          <button
            key={step}
            type="button"
            onClick={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
            className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-[#FAFAF9]"
          >
            <span
              className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-colors ${
                done[i] ? "border-[#00A9F8] bg-[#00A9F8] text-white" : "border-[#D9D9D6] bg-white"
              }`}
            >
              {done[i] && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
            <span className={`text-[13px] ${done[i] ? "text-[#9A938F] line-through" : "text-[#3D4046]"}`}>{step}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const RUBRIC = ["Full physical", "Partial", "Gestural", "Verbal", "Independent"];

function Rubric() {
  const [level, setLevel] = useState(3);
  return (
    <div className={SHELL}>
      <p className="text-[13px] font-semibold text-[#111111]">Prompting level</p>
      <p className="mt-0.5 text-[12px] text-[#9A938F]">Rate the support given this trial</p>
      <div className="mt-4 flex gap-1.5">
        {RUBRIC.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setLevel(i)}
            aria-label={label}
            className={`h-9 flex-1 rounded-md text-[13px] font-semibold transition-colors ${
              i <= level ? "bg-[#00A9F8] text-white" : "bg-[#F1F0EC] text-[#B6B0A6]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[13px] font-medium text-[#111111]">
        {level + 1} — <span className="text-[#00A9F8]">{RUBRIC[level]}</span>
      </p>
    </div>
  );
}

function Interval() {
  const [cells, setCells] = useState<boolean[]>([
    true, false, true, true, false, true, false, true, true, false,
  ]);
  const occurred = cells.filter(Boolean).length;
  const pct = Math.round((occurred / cells.length) * 100);
  return (
    <div className={SHELL}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[13px] font-semibold text-[#111111]">On-task intervals</p>
        <span className="text-[12px] text-[#9A938F]">
          {occurred}/{cells.length} · {pct}%
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {cells.map((on, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCells((c) => c.map((v, j) => (j === i ? !v : v)))}
            aria-label={`Interval ${i + 1}`}
            className={`h-9 rounded-md border text-[11px] font-medium transition-colors ${
              on ? "border-[#00A9F8] bg-[#E8F4FE] text-[#00A9F8]" : "border-[#ECEBE7] bg-[#FAFAF9] text-[#C4BDB6]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TrackAnyGoal() {
  return (
    <Tabs defaultValue="accuracy" className="w-full">
      <TabsList className="flex w-full">
        <TabsTrigger value="accuracy" className="flex-1">Accuracy</TabsTrigger>
        <TabsTrigger value="task" className="flex-1">Task Analysis</TabsTrigger>
        <TabsTrigger value="rubric" className="flex-1">Rubric</TabsTrigger>
        <TabsTrigger value="interval" className="flex-1">Interval</TabsTrigger>
      </TabsList>
      <TabsContent value="accuracy"><Accuracy /></TabsContent>
      <TabsContent value="task"><TaskAnalysis /></TabsContent>
      <TabsContent value="rubric"><Rubric /></TabsContent>
      <TabsContent value="interval"><Interval /></TabsContent>
    </Tabs>
  );
}
