import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import { Cta4 } from "@/components/changes/Cta4";

export const metadata: Metadata = {
  title: "Tutorials — AbleSpace",
  description:
    "Step-by-step guides to get the most out of AbleSpace — from collecting your first data point to running district-wide reports.",
};

type Tutorial = {
  title: string;
  desc: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  gradient: string;
};

type TutorialCategory = { category: string; iconSrc: string; tutorials: Tutorial[] };

const FEATURED: Tutorial = {
  title: "Getting started with AbleSpace in 10 minutes",
  desc: "A complete walkthrough — add your students, set up goals, collect your first data point, and generate a progress note. Everything you need to run your first session.",
  duration: "10 min",
  level: "Beginner",
  gradient: "from-[#00A9F8] to-[#0072C6]",
};

const CATEGORIES: TutorialCategory[] = [
  {
    category: "Data Collection",
    iconSrc: "/assets/navbar/product/data types.svg",
    tutorials: [
      {
        title: "Collecting goal data during a session",
        desc: "Capture trials, accuracy, and notes in a single tap while you work with a student.",
        duration: "4 min",
        level: "Beginner",
        gradient: "from-[#00A9F8] to-[#46C9FF]",
      },
      {
        title: "Working with the 10+ data types",
        desc: "Frequency, duration, percentage, rating scales, and more — pick the right one for every goal.",
        duration: "6 min",
        level: "Intermediate",
        gradient: "from-[#7C5CFF] to-[#A484CE]",
      },
      {
        title: "Phases, labels, and data history",
        desc: "Organise data over time so trends and mastery are obvious at a glance.",
        duration: "5 min",
        level: "Intermediate",
        gradient: "from-[#FF8F6C] to-[#FFB020]",
      },
    ],
  },
  {
    category: "AI & Reports",
    iconSrc: "/assets/icons/ai-content-generator-01.svg",
    tutorials: [
      {
        title: "Generating progress notes with AI",
        desc: "Turn the data you already captured into a clean, professional note in seconds.",
        duration: "5 min",
        level: "Beginner",
        gradient: "from-[#00C2A8] to-[#00A9F8]",
      },
      {
        title: "Using voice input for session notes",
        desc: "Talk through what happened and let AbleSpace draft the note for you.",
        duration: "3 min",
        level: "Beginner",
        gradient: "from-[#A484CE] to-[#7C5CFF]",
      },
      {
        title: "Building audit-ready reports",
        desc: "Generate accurate, defensible progress reports the moment you need them.",
        duration: "7 min",
        level: "Advanced",
        gradient: "from-[#1A5C4A] to-[#00C2A8]",
      },
    ],
  },
  {
    category: "Teams & Districts",
    iconSrc: "/assets/navbar/product/user-square.svg",
    tutorials: [
      {
        title: "Inviting your team and setting roles",
        desc: "Bring paraprofessionals and specialists onto shared goals with role-based access.",
        duration: "4 min",
        level: "Beginner",
        gradient: "from-[#FF6C8F] to-[#FF8F6C]",
      },
      {
        title: "Running an IEP audit",
        desc: "Review IEPs for compliance, missing sections, and looming due dates.",
        duration: "6 min",
        level: "Advanced",
        gradient: "from-[#0072C6] to-[#7C5CFF]",
      },
      {
        title: "The admin dashboard for districts",
        desc: "Monitor provider activity and student progress across your whole organisation.",
        duration: "8 min",
        level: "Advanced",
        gradient: "from-[#16181D] to-[#3D4046]",
      },
    ],
  },
];

const STEPS = [
  { n: "1", title: "Create your account", desc: "Sign up for free in under a minute — no credit card required." },
  { n: "2", title: "Add your students & goals", desc: "Enter goals manually or sync them from your existing IEP system." },
  { n: "3", title: "Collect data in real time", desc: "Tap to log trials, accuracy, and notes right inside the session." },
  { n: "4", title: "Generate notes & reports", desc: "Let AI turn your data into progress notes and audit-ready reports." },
];

const LEVEL_STYLES: Record<Tutorial["level"], string> = {
  Beginner: "bg-[#E8F7EF] text-[#1A5C4A]",
  Intermediate: "bg-[#FFF3E6] text-[#B5650C]",
  Advanced: "bg-[#F0ECFB] text-[#5B3FB0]",
};

function PlayBadge() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/40">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M5 3.5v9l7-4.5-7-4.5z" fill="white" />
      </svg>
    </span>
  );
}

function TutorialCard({ t, large = false }: { t: Tutorial; large?: boolean }) {
  return (
    <Link
      href="#"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EDEDEA] bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br ${t.gradient} ${large ? "h-56 sm:h-72" : "h-40"}`}
      >
        <PlayBadge />
        <span className="absolute bottom-3 right-3 rounded-md bg-black/45 px-2 py-0.5 text-[12px] font-medium text-white backdrop-blur-sm">
          {t.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${LEVEL_STYLES[t.level]}`}>
            {t.level}
          </span>
        </div>
        <h3 className={`font-bold leading-snug tracking-tight text-[#111111] ${large ? "text-xl sm:text-2xl" : "text-[16px]"}`}>
          {t.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-[#666666] ${large ? "text-[15px]" : "text-[14px]"}`}>{t.desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A9F8]">
          Watch tutorial
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">›</span>
        </span>
      </div>
    </Link>
  );
}

export default function TutorialsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="w-full bg-white px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Tutorials" iconSrc="/assets/navbar/resources/tutorials.svg" variant="neutral" />
            </div>
            <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
              Learn AbleSpace, step by step.
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-lg leading-relaxed text-[#666666]">
              Short, practical guides that get you from your first data point to district-wide reporting — at your own
              pace.
            </p>
            <div className="mx-auto mt-7 flex max-w-md items-center gap-2.5 rounded-xl border border-[#E8E8E8] bg-white px-4 py-3 text-left shadow-sm transition-colors focus-within:border-[#00A9F8]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="flex-shrink-0">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search tutorials…"
                aria-label="Search tutorials"
                className="w-full bg-transparent text-[15px] text-[#111111] outline-none placeholder:text-[#9A9A9A]"
              />
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="grid items-stretch gap-0 overflow-hidden rounded-2xl border border-[#EDEDEA] lg:grid-cols-2">
              <div className={`relative flex min-h-[240px] items-center justify-center bg-gradient-to-br ${FEATURED.gradient}`}>
                <PlayBadge />
                <span className="absolute bottom-4 right-4 rounded-md bg-black/45 px-2 py-0.5 text-[12px] font-medium text-white backdrop-blur-sm">
                  {FEATURED.duration}
                </span>
              </div>
              <div className="flex flex-col justify-center bg-[#FAFAF9] p-8 sm:p-10">
                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#00A9F8] ring-1 ring-[#D9EEFB]">
                  Start here
                </span>
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-3xl">
                  {FEATURED.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#666666]">{FEATURED.desc}</p>
                <Link
                  href="#"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Watch the walkthrough ›
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        {CATEGORIES.map((cat) => (
          <section key={cat.category} className="w-full bg-white px-4 pb-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px]">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="inline-block h-5 w-5 flex-shrink-0 bg-[#00A9F8]"
                  style={{
                    maskImage: `url(${encodeURI(cat.iconSrc)})`,
                    WebkitMaskImage: `url(${encodeURI(cat.iconSrc)})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                  aria-hidden
                />
                <h2 className="text-[22px] font-bold tracking-tight text-[#111111]">{cat.category}</h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tutorials.map((t) => (
                  <TutorialCard key={t.title} t={t} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Getting started steps */}
        <section className="w-full bg-white px-4 pt-10 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <SectionChip label="Quick Start" iconSrc="/assets/icons/star.svg" variant="neutral" />
              </div>
              <h2 className="text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl">
                Up and running in four steps
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold tracking-tight text-[#111111]">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#666666]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Cta4
          title="Ready to put it into practice?"
          description="Sign up free and follow along with any tutorial using your own caseload."
          buttonText="Sign Up for Free"
          buttonUrl="#"
          items={[
            "Real-time data collection",
            "AI-powered progress notes",
            "10+ data types",
            "Works on any device",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
