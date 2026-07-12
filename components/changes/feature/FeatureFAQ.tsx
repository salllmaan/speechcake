"use client";

import { useState } from "react";
import type { FaqItem } from "./types";

function FAQItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl bg-[#F5F5F3] px-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-[#111111]">{question}</span>
        <span className="flex-shrink-0 text-xl leading-none text-[#888888]">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-[#666666]">{answer}</p>}
    </div>
  );
}

export default function FeatureFAQ({ title = "Frequently Asked Questions", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
            {title}
          </h2>
        </div>
        <div className="mx-auto max-w-[720px] space-y-3">
          {items.map((faq) => (
            <FAQItem {...faq} key={faq.question} />
          ))}
        </div>
      </div>
    </section>
  );
}
