import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import { Cta4 } from "@/components/changes/Cta4";
import { FaqAccordion, type FAQ } from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs — AbleSpace",
  description:
    "Answers to the most common questions about AbleSpace — IEP goal tracking, AI features, security and compliance, plans, and school & district rollouts.",
};

type FaqGroup = { category: string; iconSrc: string; items: FAQ[] };

const FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Getting Started",
    iconSrc: "/assets/icons/star.svg",
    items: [
      {
        question: "What is AbleSpace?",
        answer:
          "AbleSpace is an AI-powered platform built for special education professionals. It helps you track IEP goals, collect data, generate progress notes, and manage your caseload — all in one place.",
      },
      {
        question: "How do I get started?",
        answer:
          "Sign up for free, add your students, and start collecting goal data right away. Most providers are up and running in under ten minutes — and our Tutorials walk you through every step.",
      },
      {
        question: "Can I import my existing IEP goals?",
        answer:
          "Yes. You can add goals manually or, on school and district plans, sync student profiles and IEP goals automatically from your existing SIS and IEP systems.",
      },
    ],
  },
  {
    category: "Features & AI",
    iconSrc: "/assets/icons/ai-content-generator-01.svg",
    items: [
      {
        question: "How does the AI goal generation work?",
        answer:
          "Our AI analyses each student's profile and current performance data to suggest IEP goals, progress notes, and worksheets aligned to standards. You review and customise everything before it's finalised.",
      },
      {
        question: "Can I use AbleSpace on my phone or tablet?",
        answer:
          "Absolutely. AbleSpace works on any device — iPhone, Android, iPad, and desktop. You can collect data in real time during sessions from wherever you are.",
      },
      {
        question: "Does AbleSpace work for a whole team?",
        answer:
          "Yes. Teachers, paraprofessionals, SLPs, OTs, and specialists can all collect data on shared goals in real time, with role-based access so everyone sees exactly what they should.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    iconSrc: "/assets/icons/security-lock.svg",
    items: [
      {
        question: "Is AbleSpace HIPAA and FERPA compliant?",
        answer:
          "Yes. AbleSpace is built with student privacy at its core. We are fully HIPAA and FERPA compliant, with encrypted data storage, two-factor authentication, and strict access controls.",
      },
      {
        question: "How is student data protected?",
        answer:
          "Student information is encrypted in transit and at rest, protected by role-based permissions, and covered by regular third-party security audits. AbleSpace is also ISO 27001 and 1EdTech certified.",
      },
    ],
  },
  {
    category: "Plans & Billing",
    iconSrc: "/assets/icons/certificate-01.svg",
    items: [
      {
        question: "Is there a free plan?",
        answer:
          "Yes — you can sign up for free and start tracking goals right away. Paid plans unlock AI features, advanced reporting, and collaboration tools.",
      },
      {
        question: "Can my whole school or district use AbleSpace?",
        answer:
          "Yes. We offer school and district plans with an admin portal, SSO, IEP system integrations, staff training, and a dedicated success manager. Contact us to learn more.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="w-full bg-white px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="FAQs" iconSrc="/assets/navbar/resources/faqs.svg" variant="neutral" />
            </div>
            <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
              Questions? We&apos;ve got answers.
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-lg leading-relaxed text-[#666666]">
              Everything you need to know about AbleSpace. Can&apos;t find what you&apos;re looking for?{" "}
              <a href="#contact" className="font-medium text-[#00A9F8] hover:underline">
                Talk to our team ›
              </a>
            </p>
          </div>
        </section>

        {/* FAQ groups */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[760px] space-y-12">
            {FAQ_GROUPS.map((group) => (
              <div key={group.category}>
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="inline-block h-5 w-5 flex-shrink-0 bg-[#00A9F8]"
                    style={{
                      maskImage: `url(${group.iconSrc})`,
                      WebkitMaskImage: `url(${group.iconSrc})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                    aria-hidden
                  />
                  <h2 className="text-[20px] font-bold tracking-tight text-[#111111]">{group.category}</h2>
                </div>
                <FaqAccordion items={group.items} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact band */}
        <section id="contact" className="w-full bg-white px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-[760px]">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#E9F0E6] bg-[#F9FBF8] px-6 py-10 text-center sm:py-12">
              <h3 className="text-2xl font-bold tracking-tight text-[#2E312D]">Still have a question?</h3>
              <p className="max-w-[480px] text-[15px] leading-relaxed text-[#575E55]">
                Our team knows special education workflows inside and out — and we&apos;re here to help, 24/7.
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>

        <Cta4
          title="Start tracking IEP goals for free."
          description="Join 20,000+ special educators who run their caseloads on AbleSpace."
          buttonText="Sign Up for Free"
          buttonUrl="#"
        />
      </main>
      <Footer />
    </div>
  );
}
