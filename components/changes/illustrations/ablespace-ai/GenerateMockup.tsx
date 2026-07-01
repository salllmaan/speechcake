"use client";

import { motion } from "framer-motion";
import { Bar, OutputPanel, Signature, Window } from "@/components/changes/illustrations/service-time-ai/frame";

// Reusable "AbleSpace AI generates X" mockup for the AbleSpace AI page.
// Left: student context + a purple Generate button. Right: the purple AI output
// with a real sample line + signature. Content fills the window; the output
// skeleton lines shimmer on a loop to read as "live generation".

function ShimmerBar({ w, delay }: { w: string; delay: number }) {
  return (
    <motion.div
      className="h-2 rounded-full bg-[#ECE7F8]"
      style={{ width: w }}
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function GenerateMockup({
  student = "Noah M.",
  grade = "4th Grade",
  subject = "Maths",
  button,
  outputTitle,
  text,
}: {
  student?: string;
  grade?: string;
  subject?: string;
  button: string;
  outputTitle: string;
  text: string;
}) {
  return (
    <Window className="w-full">
      <div className="flex min-h-[336px] items-stretch gap-4">
        {/* Left — student context */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFECF6] text-[12px] font-bold text-[#8267C9]">
              {student.charAt(0)}
            </span>
            <div className="leading-tight">
              <p className="text-[12px] font-semibold text-[#111111]">{student}</p>
              <p className="text-[10px] text-[#9A938F]">{grade}</p>
            </div>
          </div>
          <span className="mb-3 inline-flex w-fit rounded-md bg-[#F4F3EF] px-2 py-1 text-[10px] font-medium text-[#7C7592]">
            Subject: {subject}
          </span>
          <div className="flex flex-1 flex-col justify-center gap-2.5">
            <Bar w="92%" />
            <Bar w="80%" />
            <Bar w="86%" />
            <Bar w="62%" />
            <Bar w="74%" />
            <Bar w="50%" />
          </div>
          <motion.span
            className="mt-3 inline-flex w-fit items-center gap-1 rounded-md bg-[#8267C9] px-2.5 py-1 text-[10px] font-semibold text-white"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            {button}
          </motion.span>
        </div>

        {/* Right — generated output (fills height) */}
        <div className="flex w-[52%] flex-shrink-0">
          <OutputPanel title={outputTitle} className="flex w-full flex-col">
            <p className="text-[11px] leading-relaxed text-[#3D4046]">{text}</p>
            <div className="mt-2.5 flex flex-1 flex-col justify-center gap-1.5">
              <ShimmerBar w="100%" delay={0} />
              <ShimmerBar w="88%" delay={0.2} />
              <ShimmerBar w="94%" delay={0.4} />
              <ShimmerBar w="66%" delay={0.6} />
            </div>
            <Signature />
          </OutputPanel>
        </div>
      </div>
    </Window>
  );
}
