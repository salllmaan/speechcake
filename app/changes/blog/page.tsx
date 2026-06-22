import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

export const metadata: Metadata = {
  title: "Blog — AbleSpace",
  description:
    "Tips, product updates, and special education insights from the AbleSpace team — for teachers, SLPs, OTs, and administrators.",
};

type Post = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  initials: string;
  gradient: string;
};

const CATEGORIES = ["All", "Product Updates", "Best Practices", "Compliance", "AI in Special Ed", "Stories"];

const FEATURED: Post = {
  title: "How AI is quietly giving special educators their evenings back",
  excerpt:
    "Documentation has always been the tax on teaching. We look at how AI-assisted notes and real-time data collection are cutting hours of after-school paperwork — without ever taking the educator out of the loop.",
  category: "AI in Special Ed",
  readTime: "7 min read",
  date: "Jun 18, 2026",
  author: "The AbleSpace Team",
  initials: "AS",
  gradient: "from-[#00A9F8] to-[#0072C6]",
};

const POSTS: Post[] = [
  {
    title: "5 IEP data collection mistakes (and how to avoid them)",
    excerpt: "The small habits that quietly undermine defensible documentation — and simple fixes for each.",
    category: "Best Practices",
    readTime: "5 min read",
    date: "Jun 12, 2026",
    author: "Linda Tran",
    initials: "LT",
    gradient: "from-[#FF8F6C] to-[#FFB020]",
  },
  {
    title: "What FERPA actually requires from progress monitoring tools",
    excerpt: "A plain-English guide to the compliance questions every special ed team should be asking.",
    category: "Compliance",
    readTime: "8 min read",
    date: "Jun 5, 2026",
    author: "James Okafor",
    initials: "JO",
    gradient: "from-[#1A5C4A] to-[#00C2A8]",
  },
  {
    title: "New: rotating schedules and block calendars",
    excerpt: "Support changing service calendars without manual adjustments — here's what shipped this month.",
    category: "Product Updates",
    readTime: "3 min read",
    date: "May 28, 2026",
    author: "The AbleSpace Team",
    initials: "AS",
    gradient: "from-[#7C5CFF] to-[#A484CE]",
  },
  {
    title: "Writing measurable IEP goals that hold up at review",
    excerpt: "A framework for goals that are specific, trackable, and easy to report on all year.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "May 20, 2026",
    author: "Maria Chen",
    initials: "MC",
    gradient: "from-[#00C2A8] to-[#00A9F8]",
  },
  {
    title: "How Newton Public Schools standardised data across 12 buildings",
    excerpt: "A look at the rollout that took a district from binders to real-time, district-wide visibility.",
    category: "Stories",
    readTime: "9 min read",
    date: "May 11, 2026",
    author: "Marcus Bell",
    initials: "MB",
    gradient: "from-[#FF6C8F] to-[#FF8F6C]",
  },
  {
    title: "Voice-to-note: turning what you said into what you can submit",
    excerpt: "Behind the feature that lets you talk through a session and walk away with a clean note.",
    category: "Product Updates",
    readTime: "4 min read",
    date: "May 2, 2026",
    author: "The AbleSpace Team",
    initials: "AS",
    gradient: "from-[#0072C6] to-[#7C5CFF]",
  },
];

function PostMeta({ author, initials, date, readTime }: Pick<Post, "author" | "initials" | "date" | "readTime">) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#F0EFEB] text-[11px] font-semibold text-[#5D636F]">
        {initials}
      </span>
      <div className="min-w-0 text-[13px] leading-tight">
        <span className="block truncate font-medium text-[#3D4046]">{author}</span>
        <span className="text-[#9A9A9A]">
          {date} · {readTime}
        </span>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="w-full bg-white px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Blog" iconSrc="/assets/navbar/resources/blog.svg" variant="neutral" />
            </div>
            <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
              Insights for special educators.
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-lg leading-relaxed text-[#666666]">
              Tips, product updates, and lessons from the field — written for the people who actually do the work.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="w-full bg-white px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1080px] flex-wrap justify-center gap-2">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c}
                href="#"
                className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                  i === 0
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#EDEDEA] bg-[#FCFCFB] text-[#3D4046] hover:border-[#D9EEFB] hover:text-[#00A9F8]"
                }`}
              >
                {c}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured post */}
        <section className="w-full bg-white px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <Link
              href="#"
              className="group grid items-stretch overflow-hidden rounded-2xl border border-[#EDEDEA] transition-shadow hover:shadow-lg hover:shadow-black/5 lg:grid-cols-2"
            >
              <div className={`min-h-[240px] bg-gradient-to-br ${FEATURED.gradient}`} />
              <div className="flex flex-col justify-center bg-[#FAFAF9] p-8 sm:p-10">
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-[#00A9F8] ring-1 ring-[#D9EEFB]">
                  {FEATURED.category}
                </span>
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-[28px]">
                  {FEATURED.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#666666]">{FEATURED.excerpt}</p>
                <div className="mt-6">
                  <PostMeta
                    author={FEATURED.author}
                    initials={FEATURED.initials}
                    date={FEATURED.date}
                    readTime={FEATURED.readTime}
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Post grid */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p) => (
                <Link
                  key={p.title}
                  href="#"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#EDEDEA] bg-white transition-shadow hover:shadow-lg hover:shadow-black/5"
                >
                  <div className={`h-44 bg-gradient-to-br ${p.gradient}`} />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-2 w-fit text-[12px] font-semibold uppercase tracking-wide text-[#00A9F8]">
                      {p.category}
                    </span>
                    <h3 className="text-[17px] font-bold leading-snug tracking-tight text-[#111111] group-hover:text-[#00A9F8]">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-[#666666]">{p.excerpt}</p>
                    <div className="mt-5 border-t border-[#F0EFEB] pt-4">
                      <PostMeta author={p.author} initials={p.initials} date={p.date} readTime={p.readTime} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter band */}
        <section className="w-full bg-white px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-12 text-center sm:py-14">
              <div className="flex justify-center">
                <SectionChip label="Newsletter" iconSrc="/assets/navbar/resources/blog.svg" variant="neutral" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
                Special ed insights, in your inbox
              </h3>
              <p className="max-w-[520px] text-[15px] leading-relaxed text-[#666666]">
                One thoughtful email a month — practical tips, product updates, and stories from the field. No spam,
                ever.
              </p>
              <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@school.edu"
                  className="flex-1 rounded-xl border border-[#E8E8E8] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-[#00A9F8]"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
