import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import { Cta4 } from "@/components/changes/Cta4";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Reviews — AbleSpace",
  description:
    "See what 20,000+ special education teachers, SLPs, OTs, and coordinators are saying about AbleSpace.",
};

type Review = { quote: string; name: string; role: string; initials: string };

const STATS = [
  { stat: "4.9/5", label: "Average rating" },
  { stat: "20,000+", label: "Educators on AbleSpace" },
  { stat: "2,400+", label: "Five-star reviews" },
  { stat: "4 hrs", label: "Saved per week, on average" },
];

const FEATURED: Review = {
  quote:
    "AbleSpace completely changed how I track IEP goals. Data collection used to take twenty minutes after every session, my notes lived in three different binders, and progress reports felt like punishment. Now everything happens in one app during the session, and the notes draft themselves from the data I'm already capturing. I get my evenings back, and my documentation is actually defensible for the first time.",
  name: "Sarah Mitchell",
  role: "Special Education Teacher · Newton Public Schools",
  initials: "SM",
};

const REVIEWS: Review[] = [
  {
    quote:
      "The AI-generated progress notes alone save me hours every week. My team cannot imagine going back to the old way.",
    name: "James Okafor",
    role: "School Psychologist",
    initials: "JO",
  },
  {
    quote:
      "Finally an app that actually understands special ed workflows. The graphs and reports are exactly what our district needs.",
    name: "Linda Tran",
    role: "Special Ed Coordinator",
    initials: "LT",
  },
  {
    quote:
      "Service-time tracking on my phone has completely fixed our Medicaid billing. We submit weekly now instead of scrambling at month-end.",
    name: "Maria Chen",
    role: "Speech-Language Pathologist",
    initials: "MC",
  },
  {
    quote:
      "I collect data in real time during sessions and never touch a binder anymore. The whole team finally works from the same page.",
    name: "Daniel Reyes",
    role: "Occupational Therapist",
    initials: "DR",
  },
  {
    quote:
      "The IEP audit caught two missing sections before a due date I would have missed. That alone paid for the year.",
    name: "Priya Nair",
    role: "Special Education Director",
    initials: "PN",
  },
  {
    quote:
      "Onboarding our whole district was painless. Staff picked it up in a single training and adoption has been the highest we've ever seen.",
    name: "Marcus Bell",
    role: "Director of Student Services",
    initials: "MB",
  },
  {
    quote:
      "Voice input for session notes is a game changer. I talk through what happened and AbleSpace turns it into a clean, professional note.",
    name: "Hannah Wells",
    role: "Behavior Therapist",
    initials: "HW",
  },
  {
    quote:
      "Families finally have visibility into progress without me sending a single extra email. It builds so much trust.",
    name: "Olivia Park",
    role: "General Education Teacher",
    initials: "OP",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="inline-block h-4 w-4 bg-[#FFB020]"
          style={{
            maskImage: "url(/assets/icons/star.svg)",
            WebkitMaskImage: "url(/assets/icons/star.svg)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}

function PersonRow({ name, role, initials }: Review) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      <Avatar className="size-10">
        <AvatarFallback className="text-[12px] font-semibold">{initials}</AvatarFallback>
      </Avatar>
      <div className="min-w-0">
        <cite className="block truncate text-sm font-semibold not-italic text-[#111111]">{name}</cite>
        <span className="block truncate text-[13px] text-[#7C7572]">{role}</span>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="w-full bg-white px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Reviews" iconSrc="/assets/navbar/resources/reviews.svg" variant="neutral" />
            </div>
            <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
              Loved by special educators everywhere.
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-lg leading-relaxed text-[#666666]">
              Thousands of teachers, SLPs, OTs, and coordinators run their caseloads on AbleSpace every day. Here&apos;s
              what they have to say.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Stars />
              <span className="text-sm font-semibold text-[#111111]">4.9 out of 5</span>
              <span className="text-sm text-[#7C7572]">· 2,400+ reviews</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#EDEDEA] bg-[#EDEDEA] sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#FAFAF9] px-6 py-8 text-center">
                <p className="text-[32px] font-extrabold leading-none tracking-tight text-[#00A9F8] sm:text-[40px]">
                  {s.stat}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-[#666666]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews grid */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
              {/* Featured */}
              <figure className="rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:p-8">
                <Stars className="mb-4" />
                <blockquote className="text-balance text-[17px] font-medium leading-[1.5] text-[#111111] sm:text-[19px]">
                  &ldquo;{FEATURED.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <PersonRow {...FEATURED} />
                </figcaption>
              </figure>

              {REVIEWS.map((r) => (
                <figure key={r.name} className="rounded-2xl border border-[#EDEDEA] bg-white p-6">
                  <Stars className="mb-3" />
                  <blockquote className="text-[15px] leading-[1.55] text-[#333333]">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5">
                    <PersonRow {...r} />
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Cta4
          title="Join 20,000+ happy educators."
          description="See why special education teams rate AbleSpace 4.9 out of 5 — start for free today."
          buttonText="Sign Up for Free"
          buttonUrl="#"
          items={[
            "Real-time data collection",
            "AI-powered progress notes",
            "Audit-ready reports",
            "HIPAA & FERPA compliant",
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
