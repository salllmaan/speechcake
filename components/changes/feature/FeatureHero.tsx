import Image from "next/image";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import { SparklesText } from "@/components/ui/sparkles-text";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import type { FeaturePageConfig } from "./types";

// Mirrors the /changes landing hero: animated grid backdrop, sparkle accent
// headline, compliance badges, and the framed app mockup.
const COMPLIANCE_BADGES = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif", alt: "ISO 27001 Certified" },
];

export default function FeatureHero({ hero }: { hero: FeaturePageConfig["hero"] }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 lg:px-8">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className="opacity-60 [mask-image:radial-gradient(1300px_circle_at_center_top,white,transparent)] inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Chip */}
        <div className="mb-4 flex justify-center sm:mb-5">
          <SectionChip label={hero.chip} iconSrc={hero.chipIconSrc} variant="neutral" />
        </div>

        {/* Headline */}
        <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-7">
          <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
            {hero.titleAccent && (
              <>
                <SparklesText
                  text={hero.titleAccent}
                  colors={{ first: "#D2C2E7", second: "#D2C2E7" }}
                  sparklesCount={4}
                  duration={1.5}
                  className="font-[family-name:var(--font-eb-garamond)] font-bold italic text-[#A484CE]"
                />{" "}
              </>
            )}
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[720px] text-lg leading-relaxed text-[#666666]">{hero.subtitle}</p>
        </div>

        {/* CTAs */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:mb-6">
          <CTAButton href={hero.primaryCta.href} variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">
            {hero.primaryCta.label}
          </CTAButton>
          <CTAButton href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">
            {hero.secondaryCta.label}
          </CTAButton>
        </div>

        {/* Compliance badges */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-4 sm:mb-20 sm:gap-5">
          {COMPLIANCE_BADGES.map((b) => (
            <Image key={b.alt} src={b.src} alt={b.alt} width={80} height={36} className="h-8 w-auto object-contain sm:h-9" />
          ))}
        </div>

        {/* App mockup — same frame, size & hover/play interaction as the /changes hero */}
        {hero.image ? (
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#FAFAF9] p-3">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc={hero.videoSrc ?? "https://www.youtube.com/embed/dQw4w9WgXcQ"}
              thumbnailSrc={hero.image}
              thumbnailAlt={hero.imageAlt ?? ""}
              className="[&_img]:rounded-xl [&_img]:border-[#E8E8E8] [&_img]:shadow-none"
            />
          </div>
        ) : (
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#FAFAF9] p-3">
            <div className="flex aspect-[2256/1424] w-full items-center justify-center rounded-xl border border-dashed border-[#E2E0DB] text-sm text-[#B5AEA8]">
              Hero image
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
