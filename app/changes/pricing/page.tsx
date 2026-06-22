import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { Cta4 } from "@/components/changes/Cta4";

export const metadata: Metadata = {
  title: "Pricing — AbleSpace",
  description:
    "Start free, scale with enterprise. Digitize your special education workflows with IEP goal tracking, reporting, service-time tracking, Medicaid billing, and more.",
};

const FREE_FEATURES = [
  "AbleSpace AI",
  "Reports and Graphs",
  "Scheduling",
  "Unlimited Students",
  "Accommodations & Service Time",
  "Mobile App",
];

const CUSTOM_FEATURES = [
  "Admin Portal",
  "Staff and Admin Training",
  "Advanced Collaboration",
  "IEP System Integrations",
  "Single Sign On",
  "Dedicated Success Manager",
];

type Row = { label: string; free: boolean; custom: boolean };
type CompareGroup = { group: string; rows: Row[] };

const COMPARE: CompareGroup[] = [
  {
    group: "Data Tracking",
    rows: [
      { label: "Unlimited Students", free: true, custom: true },
      { label: "Standard Goal Types", free: true, custom: true },
      { label: "Data Export", free: true, custom: true },
      { label: "Student Groups", free: false, custom: true },
      { label: "HIPAA / FERPA Compliance", free: true, custom: true },
      { label: "Custom Goal Type", free: false, custom: true },
      { label: "Goal Tags", free: false, custom: true },
    ],
  },
  {
    group: "Data Visualization",
    rows: [
      { label: "Auto Generated Graphs", free: true, custom: true },
      { label: "Automated Reports", free: true, custom: true },
      { label: "Archive Students", free: false, custom: true },
      { label: "Archive Goals", free: false, custom: true },
      { label: "Data Averages", free: false, custom: true },
      { label: "Reorder / Renumber Goals", free: false, custom: true },
      { label: "Student Filters in Reports", free: false, custom: true },
      { label: "Print Caseload", free: false, custom: true },
      { label: "Print Notes", free: false, custom: true },
    ],
  },
];

const STATS = [
  { stat: "90%", label: "Improvement in compliance reporting" },
  { stat: "4 hrs", label: "Saved per week, on average" },
  { stat: "80%", label: "Improvement in team collaboration" },
];

const TARGET_USERS = [
  "Special Education Teachers",
  "Paraprofessionals",
  "Speech Language Pathologists",
  "Occupational Therapists",
  "Behavior Therapists",
  "General Education Teachers",
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F7EF]">
      <Check className="h-3.5 w-3.5 text-[#1A5C4A]" strokeWidth={3} />
    </span>
  ) : (
    <span className="mx-auto block h-px w-3 bg-[#CDCDCD]" aria-label="Not included" />
  );
}

export default function PricingPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="w-full bg-white px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Pricing" iconSrc="/assets/icons/certificate-01.svg" variant="neutral" />
            </div>
            <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
              Start free, scale with enterprise.
            </h1>
            <p className="mx-auto mt-4 max-w-[680px] text-lg leading-relaxed text-[#666666]">
              Digitize your special education workflows with the only caseload management tool that offers IEP goal
              tracking, reporting, service-time tracking, Medicaid billing, and more.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Educators — Sign up for free
              </Link>
              <Link
                href="/changes/schools-districts"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F2F2F2] px-6 py-3 text-sm font-semibold text-[#7A716B] transition-colors hover:bg-[#ECECEC]"
              >
                Admins — Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* Plan cards */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] gap-6 lg:grid-cols-2">
            {/* Free */}
            <div className="flex flex-col rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] p-8">
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[#111111]">Free Plan</h2>
                  <p className="mt-1 text-[14px] text-[#7C7572]">For Individuals</p>
                </div>
                <div className="text-right">
                  <span className="text-[40px] font-extrabold leading-none tracking-tight text-[#111111]">$0</span>
                  <span className="block text-[13px] text-[#9A9A9A]">per month</span>
                </div>
              </div>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-[#D9D9D6] bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#00A9F8] hover:text-[#00A9F8]"
              >
                Sign up for free
              </Link>
              <ul className="mt-7 space-y-3">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-[#3D4046]">
                    <Check className="h-4 w-4 flex-shrink-0 text-[#00A9F8]" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom — highlighted */}
            <div className="relative flex flex-col overflow-hidden rounded-2xl border-2 border-[#00A9F8] bg-white p-8 shadow-lg shadow-[#00A9F8]/5">
              <span className="absolute right-6 top-6 rounded-full bg-[#E6F6FF] px-3 py-1 text-[12px] font-semibold text-[#0072C6]">
                Enterprise
              </span>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#111111]">Custom Plan</h2>
                <p className="mt-1 text-[14px] text-[#7C7572]">For Schools / Districts / Enterprises</p>
              </div>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact us
              </Link>
              <p className="mt-7 text-[13px] font-semibold uppercase tracking-wide text-[#9A9A9A]">
                Everything in Free, plus
              </p>
              <ul className="mt-4 space-y-3">
                {CUSTOM_FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] text-[#3D4046]">
                    <Check className="h-4 w-4 flex-shrink-0 text-[#00A9F8]" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Compare & Decide */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-8 text-center">
              <h2 className="text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl">
                Compare &amp; Decide
              </h2>
              <p className="mx-auto mt-3 max-w-[600px] text-lg font-medium leading-relaxed text-[#666666]">
                Every feature, side by side — so you can pick the plan that fits your team.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#EDEDEA]">
              {/* Header */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-[#FAFAF9] sm:grid-cols-[2fr_1fr_1fr]">
                <div className="px-5 py-4 text-[13px] font-semibold uppercase tracking-wide text-[#9A9A9A]">
                  Features
                </div>
                <div className="px-3 py-4 text-center text-[15px] font-bold text-[#111111]">Free</div>
                <div className="px-3 py-4 text-center text-[15px] font-bold text-[#00A9F8]">Custom</div>
              </div>

              {COMPARE.map((g) => (
                <div key={g.group}>
                  <div className="border-t border-[#EDEDEA] bg-[#F6F6F4] px-5 py-2.5 text-[13px] font-bold text-[#3D4046]">
                    {g.group}
                  </div>
                  {g.rows.map((r) => (
                    <div
                      key={r.label}
                      className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-t border-[#F0EFEB] sm:grid-cols-[2fr_1fr_1fr]"
                    >
                      <div className="px-5 py-3.5 text-[14px] text-[#3D4046] sm:text-[15px]">{r.label}</div>
                      <div className="px-3 py-3.5 text-center">
                        <Cell on={r.free} />
                      </div>
                      <div className="bg-[#FCFEFF] px-3 py-3.5 text-center">
                        <Cell on={r.custom} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Footer CTA row */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-t border-[#EDEDEA] bg-[#FAFAF9] sm:grid-cols-[2fr_1fr_1fr]">
                <div className="px-5 py-5" />
                <div className="px-3 py-5 text-center">
                  <Link href="#" className="text-[13px] font-semibold text-[#111111] hover:text-[#00A9F8] sm:text-sm">
                    Sign up free
                  </Link>
                </div>
                <div className="px-3 py-5 text-center">
                  <Link href="#" className="text-[13px] font-semibold text-[#00A9F8] hover:underline sm:text-sm">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] gap-6 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-8 text-center">
                <p className="text-[44px] font-extrabold leading-none tracking-tight text-[#00A9F8]">{s.stat}</p>
                <p className="mt-3 text-[15px] leading-snug text-[#666666]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <TestimonialsSection />

        {/* Target users */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px] text-center">
            <h2 className="mb-8 text-[24px] font-extrabold tracking-tight text-[#111111] sm:text-[32px]">
              Built for your whole team
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TARGET_USERS.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-4 py-2 text-[14px] font-medium text-[#3D4046]"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Cta4
          title="Start free, upgrade when you're ready."
          description="Individuals start in minutes for $0. Schools and districts get a custom plan built around their rollout."
          buttonText="Sign Up for Free"
          buttonUrl="#"
          items={[
            "Unlimited students",
            "AI-powered tracking & notes",
            "Auto-generated reports",
            "HIPAA & FERPA compliant",
            "Admin portal & SSO (Custom)",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
