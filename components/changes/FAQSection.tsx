"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What is AbleSpace?",
    answer: "AbleSpace is an AI-powered platform built for special education professionals. It helps you track IEP goals, collect data, generate progress notes, and manage your caseload — all in one place.",
  },
  {
    question: "Is AbleSpace HIPAA and FERPA compliant?",
    answer: "Yes. AbleSpace is built with student privacy at its core. We are fully HIPAA and FERPA compliant, with encrypted data storage and strict access controls.",
  },
  {
    question: "Can I use AbleSpace on my phone or tablet?",
    answer: "Absolutely. AbleSpace works on any device — iPhone, Android, iPad, and desktop. You can collect data in real time during sessions from wherever you are.",
  },
  {
    question: "How does the AI goal generation work?",
    answer: "Our AI analyses each student's profile and current performance data to suggest IEP goals, progress notes, and worksheets aligned to standards. You review and customise everything before it's finalised.",
  },
  {
    question: "Can my whole school or district use AbleSpace?",
    answer: "Yes. We offer school and district plans with an admin portal, SSO, IEP system integrations, staff training, and a dedicated success manager. Contact us to learn more.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes — you can sign up for free and start tracking goals right away. Paid plans unlock AI features, advanced reporting, and collaboration tools.",
  },
];

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#F5F5F3] rounded-2xl px-6 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
      >
        <span className="text-[15px] font-medium text-[#111111]">{question}</span>
        <span className="flex-shrink-0 text-[#888888] text-xl leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="text-sm text-[#666666] leading-relaxed pb-5">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">

        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            FAQs
          </h2>
          <p className="text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Have a question we didn't answer?{" "}
            <Link href="#" className="text-[#1A5C4A] hover:underline">
              Contact us ›
            </Link>
          </p>
        </div>

        <div className="max-w-[720px] mx-auto space-y-3">
          {FAQS.map((faq) => (
            <FAQItem {...faq} key={faq.question} />
          ))}
        </div>

      </div>
    </section>
  );
}
