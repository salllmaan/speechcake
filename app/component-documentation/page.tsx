import Image from "next/image";
import Link from "next/link";

const COLORS = [
  { name: "Primary Text", value: "#111111", label: "text-[#111111]" },
  { name: "Secondary Text", value: "#666666", label: "text-[#666666]" },
  { name: "Muted Text", value: "#888888", label: "text-[#888888]" },
  { name: "Placeholder", value: "#999999", label: "text-[#999999]" },
  { name: "Border Default", value: "#F0F0F0", label: "border-[#F0F0F0]" },
  { name: "Border Soft", value: "#E8E8E8", label: "border-[#E8E8E8]" },
  { name: "Border Medium", value: "#E5E5E5", label: "border-[#E5E5E5]" },
  { name: "Surface 1", value: "#F5F5F5", label: "bg-[#F5F5F5]" },
  { name: "Surface 2", value: "#F7F5F2", label: "bg-[#F7F5F2]" },
  { name: "Surface 3", value: "#F5F3EF", label: "bg-[#F5F3EF]" },
  { name: "White", value: "#FFFFFF", label: "bg-white" },
  { name: "Accent Green", value: "#1A5C4A", label: "text-[#1A5C4A]" },
];

const SECTIONS = [
  { name: "Navbar", component: "Navbar.tsx", desc: "Top navigation bar with logo, links, and CTA." },
  { name: "HeroSection", component: "HeroSection.tsx", desc: "Full hero with headline, CTAs, mockup, and logo strip." },
  { name: "FeaturesSection", component: "FeaturesSection.tsx", desc: "Main IEP tracking feature blocks (features-1-left, features-2, features-1-right)." },
  { name: "TestimonialFull", component: "TestimonialFull.tsx", desc: "Full-width centered testimonial quote with stars and author. Props: quote, name, role." },
  { name: "AIFeaturesSection", component: "AIFeaturesSection.tsx", desc: "AbleSpace AI section with two rows of 2-card feature grids." },
  { name: "ForSchoolsSection", component: "ForSchoolsSection.tsx", desc: "Schools & Districts card with checklist, CTAs, and logo strip." },
  { name: "EverythingYouNeedSection", component: "EverythingYouNeedSection.tsx", desc: "3×3 feature grid with title, subtitle, and CTAs." },
  { name: "MobileAppSection", component: "MobileAppSection.tsx", desc: "Mobile app download section with image right layout." },
  { name: "TestimonialsSection", component: "TestimonialsSection.tsx", desc: "3-column testimonial card grid." },
  { name: "FAQSection", component: "FAQSection.tsx", desc: "Accordion FAQ with expandable items." },
  { name: "SecuritySection", component: "SecuritySection.tsx", desc: "Final CTA section with feature chips and sign up buttons." },
  { name: "Footer", component: "Footer.tsx", desc: "Full footer with link columns, app store buttons, compliance badges, and social icons." },
];

const PRIMITIVES = [
  { name: "FeatureSectionWrapper", component: "FeatureSectionWrapper.tsx", desc: "Reusable section shell. Props: chip?, title, subtitle?, children, className?" },
  { name: "features-1-left", component: "features-1-left.tsx", desc: "Feature block — image left (45%), content right (55%). Props: mockup, title, subtitle, primaryCta, secondaryCta, items[]." },
  { name: "features-1-right", component: "features-1-right.tsx", desc: "Feature block — content left (55%), image right (45%). Same props as features-1-left." },
  { name: "features-2", component: "features-2.tsx", desc: "2-card feature grid. Props: cards[2] — each has title, subtitle, mockup." },
  { name: "FeaturesGrid", component: "FeaturesGrid.tsx", desc: "3-column bordered feature grid. Props: items[] — each has icon, title, desc." },
];

function ColorSwatch({ name, value, label }: { name: string; value: string; label: string }) {
  const isDark = ["#111111"].includes(value);
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-xl border border-[#E8E8E8]"
        style={{ background: value }}
      />
      <div>
        <p className="text-sm font-semibold text-[#111111]">{name}</p>
        <p className="text-xs text-[#888888] font-mono">{value}</p>
        <p className="text-xs text-[#AAAAAA] font-mono">{label}</p>
      </div>
    </div>
  );
}

export default function ComponentDocumentation() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 py-12 max-w-[1080px] mx-auto">

      <div className="mb-12">
        <Link href="/" className="text-sm text-[#888888] hover:text-[#111111] transition-colors mb-4 inline-block">← Back to landing page</Link>
        <h1 className="text-[40px] font-extrabold text-[#111111] tracking-tight mb-2">Component Documentation</h1>
        <p className="text-base text-[#666666]">Design system reference for the AbleSpace landing page.</p>
      </div>

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-1">Colors</h2>
        <p className="text-sm text-[#888888] mb-6">All color tokens used across the landing page.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5">
          {COLORS.map((c) => <ColorSwatch key={c.value} {...c} />)}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-1">Typography</h2>
        <p className="text-sm text-[#888888] mb-6">Font: Inter. All weights: 400, 500, 600, 700, 800.</p>
        <div className="space-y-6 border border-[#F0F0F0] rounded-2xl p-8">
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[56px] font-extrabold — Section heading (desktop)</p>
            <p className="text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">Section Heading</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[40px] font-extrabold — Section heading (tablet)</p>
            <p className="text-[40px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">Section Heading</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[32px] font-extrabold — Section heading (mobile) / Feature title</p>
            <p className="text-[32px] font-extrabold text-[#111111] leading-[1.2] tracking-tight">Section Heading</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[28px] font-bold — Feature card title</p>
            <p className="text-[28px] font-bold text-[#111111]">Feature Card Title</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-lg font-medium text-[#666666] — Subtitle</p>
            <p className="text-lg font-medium text-[#666666] leading-relaxed">Subtitle text goes here. Used below section headings, max-w-[720px].</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-base font-medium text-[#666666] — Body / feature subtitle</p>
            <p className="text-base font-medium text-[#666666] leading-relaxed">Body text used for feature descriptions and card subtitles.</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-sm text-[#888888] — Secondary body / grid desc</p>
            <p className="text-sm text-[#888888] leading-relaxed">Secondary body text used in grid cells, testimonial cards, and FAQ answers.</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[13px] font-medium text-[#555555] — Chip label</p>
            <p className="text-[13px] font-medium text-[#555555]">Chip label text</p>
          </div>
          <div>
            <p className="text-xs font-mono text-[#AAAAAA] mb-1">text-[15px] font-semibold — FAQ question / grid title</p>
            <p className="text-[15px] font-semibold text-[#111111]">FAQ question or grid cell title</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-1">Buttons</h2>
        <p className="text-sm text-[#888888] mb-6">All button variants used on the landing page.</p>
        <div className="flex flex-wrap items-center gap-4 border border-[#F0F0F0] rounded-2xl p-8">
          <button className="flex items-center gap-2 px-5 py-3 bg-[#111111] text-white text-base font-medium rounded-lg hover:bg-[#333333] transition-colors">
            Primary
            <Image src="/assets/icons/square-arrow-right-01.svg" alt="" width={18} height={18} className="invert" />
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-white text-[#111111] text-base font-medium rounded-lg border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors">
            Secondary
            <Image src="/assets/icons/cursor-magic-selection-02.svg" alt="" width={18} height={18} />
          </button>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white text-base font-medium rounded-full hover:bg-[#333333] transition-colors">
            Rounded CTA →
          </button>
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-[#F5F5F5] border border-[#E8E8E8] rounded-full">
            <Image src="/assets/icons/star.svg" alt="" width={14} height={14} />
            <span className="text-[13px] font-medium text-[#555555]">Section Chip</span>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E8E8E8] rounded-lg text-[14px] font-medium text-[#444444]">
            <Image src="/assets/icons/star.svg" alt="" width={12} height={12} />
            Feature Chip
          </span>
        </div>
      </section>

      {/* Page sections */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-1">Page Sections</h2>
        <p className="text-sm text-[#888888] mb-6">Top-level section components used in <span className="font-mono">app/page.tsx</span>.</p>
        <div className="divide-y divide-[#F0F0F0] border border-[#F0F0F0] rounded-2xl overflow-hidden">
          {SECTIONS.map((s) => (
            <div key={s.name} className="flex items-start justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-[15px] font-semibold text-[#111111]">{s.name}</p>
                <p className="text-sm text-[#888888] mt-0.5">{s.desc}</p>
              </div>
              <span className="text-xs font-mono text-[#AAAAAA] whitespace-nowrap pt-0.5">{s.component}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Primitive components */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#111111] mb-1">Primitive Components</h2>
        <p className="text-sm text-[#888888] mb-6">Reusable building blocks consumed by section components.</p>
        <div className="divide-y divide-[#F0F0F0] border border-[#F0F0F0] rounded-2xl overflow-hidden">
          {PRIMITIVES.map((s) => (
            <div key={s.name} className="flex items-start justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-[15px] font-semibold text-[#111111]">{s.name}</p>
                <p className="text-sm text-[#888888] mt-0.5">{s.desc}</p>
              </div>
              <span className="text-xs font-mono text-[#AAAAAA] whitespace-nowrap pt-0.5">{s.component}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
