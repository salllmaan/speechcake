import Navbar from "@/components/changes/Navbar";
import TrustedBySection from "@/components/changes/TrustedBySection";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";

// ─────────────────────────────────────────────────────────────────────────────
// Soniculate — identical to the /changes feature pages in styling AND colors,
// with the changes Navbar. The ONLY difference is the heading font (Baloo 2)
// and the content. Fully self-contained: touches no shared template file.
//
// Real 3D renders aren't available, so emoji stand in inside the card visual
// areas. Swap them for real images by editing this file.
// ─────────────────────────────────────────────────────────────────────────────

// Headings inherit the same Inter stack as the /changes feature pages.
const HEADING = "";

type Card = { title: string; desc: string; emoji: string; span?: string };

const PRACTICE_CARDS: Card[] = [
  {
    title: "Beautiful 3D assets for every word",
    desc: "Hundreds of vibrant, hand-crafted objects make every target word click, from “rabbit” to “rocket.”",
    emoji: "🚀",
    span: "lg:col-span-2",
  },
  {
    title: "Three steps to better articulation",
    desc: "Pick a sound, play the game, and watch progress grow. Every attempt is tracked automatically.",
    emoji: "🎯",
    span: "lg:col-span-2",
  },
  {
    title: "Practice that feels like play",
    desc: "Rewards, characters, and worlds to unlock turn “time to practice” into “can we play Soniculate?”",
    emoji: "🎮",
    span: "lg:col-span-2",
  },
];

const AUDIENCE_CARDS: Card[] = [
  { title: "For SLPs", desc: "Real therapy targets, automatic data, and sessions kids never want to skip.", emoji: "🎯", span: "lg:col-span-2" },
  { title: "For Parents", desc: "Turn home practice into screen time you can actually feel good about.", emoji: "💛", span: "lg:col-span-2" },
  { title: "For Kids", desc: "Bright worlds, friendly characters, and rewards that make practice feel like play.", emoji: "🌈", span: "lg:col-span-2" },
];

const FAQS = [
  { q: "What is Soniculate?", a: "A game-based articulation practice app — beautiful 3D worlds for every target sound, built for speech therapy." },
  { q: "Who is Soniculate for?", a: "Speech-language pathologists, parents, and the kids they support, in the clinic, classroom, or at home." },
  { q: "What devices does it work on?", a: "iPad, iPhone, and the web, so practice can happen anywhere." },
];

const STATS = [
  { number: "500+", label: "3D word assets" },
  { number: "10+", label: "Target sounds" },
  { number: "4.9★", label: "Loved by families" },
];

function ShowcaseCard({ card }: { card: Card }) {
  return (
    <div className={`col-span-full flex h-[340px] flex-col overflow-hidden rounded-2xl border border-[#F2F2F1] bg-[#FAFAF9] sm:col-span-3 lg:h-[360px] ${card.span ?? "lg:col-span-2"}`}>
      <div className="flex flex-col space-y-2.5 px-6 pt-6">
        <h3 className={`${HEADING} text-lg font-bold leading-tight text-[#111111]`}>{card.title}</h3>
        <p className="text-base leading-relaxed text-[#9A938F]">{card.desc}</p>
      </div>
      <div className="relative mt-5 flex w-full flex-1 items-center justify-center border-t border-[#F0F0EE] bg-[#F4F3F0]">
        <span className="text-[88px] leading-none">{card.emoji}</span>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group overflow-hidden rounded-2xl bg-[#F5F5F3] px-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[15px] font-medium text-[#111111]">
        {q}
        <span className="text-xl leading-none text-[#888888] transition-transform group-open:rotate-45">+</span>
      </summary>
      <p className="pb-5 text-sm leading-relaxed text-[#666666]">{a}</p>
    </details>
  );
}

export default function SoniculatePage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 lg:px-8">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-5 flex justify-center">
              <SectionChip label="Soniculate · Articulation Games" iconSrc="/assets/icons/star.svg" variant="neutral" />
            </div>
            <div className="mx-auto mb-7 max-w-3xl text-center">
              <h1 className={`${HEADING} text-balance text-[34px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl lg:text-[60px]`}>
                Every sound,{" "}
                <span className="font-[family-name:var(--font-eb-garamond)] font-bold italic text-[#A484CE]">a game</span>{" "}
                worth playing.
              </h1>
              <p className="mx-auto mt-4 max-w-[680px] text-lg leading-relaxed text-[#666666]">
                Soniculate turns articulation practice into an adventure: beautiful 3D worlds for every target word,
                built with SLPs and loved by kids.
              </p>
            </div>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              {["Beautiful 3D Assets", "Built with SLPs", "Kids love it"].map((p) => (
                <span key={p} className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-3.5 py-1.5 text-[13px] font-medium text-[#7C7572]">
                  {p}
                </span>
              ))}
            </div>
            <div className="mb-16 flex flex-wrap items-center justify-center gap-3 sm:mb-20">
              <CTAButton href="#start" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">Start Practicing Now</CTAButton>
              <CTAButton href="#how" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">See how it works</CTAButton>
            </div>

            {/* Hero visual frame (mirrors the feature-page mockup frame) */}
            <div className="mx-auto max-w-3xl rounded-2xl bg-[#FAFAF9] p-3">
              <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-[#E8E8E8] bg-white">
                <div className="text-center">
                  <span className="text-[120px] leading-none">🚀</span>
                  <p className={`${HEADING} mt-2 text-2xl font-extrabold text-[#111111]`}>Rocket · /r/</p>
                  <div className="mt-1 text-2xl">⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedBySection heading="Loved by speech teams and families everywhere" />

        {/* Showcase 1 */}
        <section className="w-full bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center"><SectionChip label="Practice that feels like play" iconSrc="/assets/icons/star.svg" variant="neutral" /></div>
              <h2 className={`${HEADING} mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]`}>
                Built for real practice sessions
              </h2>
              <p className="mx-auto max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">
                Designed with practicing SLPs around the targets you actually work on.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
              {PRACTICE_CARDS.map((c) => <ShowcaseCard key={c.title} card={c} />)}
            </div>
          </div>
        </section>

        {/* Showcase 2 */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center"><SectionChip label="For everyone in a child's corner" iconSrc="/assets/icons/user-sharing.svg" variant="neutral" /></div>
              <h2 className={`${HEADING} mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]`}>
                Built for the people who care most
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
              {AUDIENCE_CARDS.map((c) => <ShowcaseCard key={c.title} card={c} />)}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px] rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-14 sm:px-12 sm:py-16">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center"><SectionChip label="Take Soniculate anywhere" iconSrc="/assets/icons/star.svg" variant="neutral" /></div>
              <h2 className={`${HEADING} mx-auto max-w-[760px] text-balance text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl`}>
                Practice anywhere, on any device.
              </h2>
            </div>
            <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-3">
              {[
                "Works on iPad, iPhone, and the web.",
                "Built with practicing SLPs around real targets.",
                "Kids actually look forward to practice.",
              ].map((item) => (
                <li key={item} className="flex flex-col items-start gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#EEE7F6] text-[#A484CE]">✓</span>
                  <p className="text-[15px] leading-relaxed text-[#5E5C55]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10 text-center sm:mb-14">
              <h2 className={`${HEADING} text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]`}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mx-auto max-w-[720px] space-y-3">
              {FAQS.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="start" className="w-full bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <div className="relative overflow-hidden rounded-3xl border border-[#EDEDEA] bg-white px-6 py-[72px] text-center sm:px-12 lg:px-20">
              <div className="flex justify-center">
                <SectionChip label="Ready when you are" iconSrc="/assets/icons/star.svg" variant="neutral" />
              </div>
              <h2 className={`${HEADING} mt-5 text-balance text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]`}>
                Ready to make articulation practice fun?
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CTAButton href="#" variant="primary">Start Practicing Now</CTAButton>
                <CTAButton href="#demo" variant="secondary">Book a Demo</CTAButton>
              </div>
              <div className="mt-12 px-6 py-10 sm:mt-16 sm:px-10 sm:py-12">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-8 sm:flex-nowrap sm:justify-between sm:gap-x-4">
                  {STATS.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-2 sm:gap-4">
                      <div className="px-2 text-center">
                        <p className="font-[family-name:var(--font-eb-garamond)] text-[40px] font-bold italic leading-[1] tracking-tight text-[#1A1A1A] sm:text-[52px] lg:text-[68px]">
                          {s.number}
                        </p>
                        <p className="mt-2 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.1em] text-[#6B6258] sm:text-sm">
                          {s.label}
                        </p>
                      </div>
                      {i < STATS.length - 1 && (
                        <span aria-hidden className="hidden font-[family-name:var(--font-eb-garamond)] text-[36px] italic leading-none text-[#C8BFB1] sm:inline-block sm:text-[48px] lg:text-[60px]">/</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
    </div>
  );
}
