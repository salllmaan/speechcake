"use client";

import { useState } from "react";

export type FAQ = { question: string; answer: string };

export function FaqAccordion({ items, startOpen = -1 }: { items: FAQ[]; startOpen?: number }) {
  const [open, setOpen] = useState<number>(startOpen);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-[#D9EEFB] bg-[#F7FCFF]" : "border-[#EDEDEA] bg-[#FAFAF9]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-semibold text-[#111111] sm:text-base">{faq.question}</span>
              <span
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xl leading-none transition-all duration-200 ${
                  isOpen ? "rotate-45 bg-[#00A9F8] text-white" : "bg-white text-[#888888]"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-[#666666]">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
