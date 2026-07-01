import Image from "next/image";
import { Check } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// A sandbox of certification-badge layout variations to compare and pick from.
// Uses the fresh full-colour seal set pulled from the live site.

const BADGES = [
  { src: "/assets/landing-page/certs/hipaa.png", alt: "HIPAA Compliant", label: "HIPAA" },
  { src: "/assets/landing-page/certs/ferpa.png", alt: "FERPA Compliant", label: "FERPA" },
  { src: "/assets/landing-page/certs/iso.png", alt: "ISO 27001 Certified", label: "ISO 27001" },
  { src: "/assets/landing-page/certs/1edtech.png", alt: "1EdTech Data Privacy Certified", label: "1EdTech" },
  { src: "/assets/landing-page/certs/essa.png", alt: "Digital Promise ESSA Tier 4", label: "ESSA Tier 4" },
];

function Badge({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} width={120} height={120} className={`w-auto object-contain ${className}`} />;
}

function Variation({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#EDEDEA] bg-white p-6 sm:p-8">
      <p className="mb-5 text-[12px] font-semibold uppercase tracking-wider text-[#00A9F8]">
        Variation {n} · <span className="text-[#9A938F]">{title}</span>
      </p>
      {children}
    </div>
  );
}

export default function CertVariations() {
  return (
    <section className="w-full bg-[#FAFAF9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-[#111111] sm:text-4xl">
            Certification badge — variations
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-lg font-medium leading-relaxed text-[#666666]">
            Nine ways to present the same 5 certifications. Pick one and we&apos;ll roll it out everywhere.
          </p>
        </div>

        <div className="space-y-5">
          {/* 1 — Plain colour row */}
          <Variation n={1} title="Full-colour seals · plain row">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {BADGES.map((b) => (
                <Badge key={b.alt} src={b.src} alt={b.alt} className="h-14" />
              ))}
            </div>
          </Variation>

          {/* 2 — Monochrome row */}
          <Variation n={2} title="Monochrome · muted strip">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {BADGES.map((b) => (
                <Badge key={b.alt} src={b.src} alt={b.alt} className="h-14 opacity-80 grayscale" />
              ))}
            </div>
          </Variation>

          {/* 3 — Pill cards */}
          <Variation n={3} title="Enclosed pill cards">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {BADGES.map((b) => (
                <div key={b.alt} className="flex items-center justify-center rounded-xl border border-[#ECEBE7] bg-[#FCFCFB] px-5 py-3.5">
                  <Badge src={b.src} alt={b.alt} className="h-11" />
                </div>
              ))}
            </div>
          </Variation>

          {/* 4 — Badge + label below */}
          <Variation n={4} title="Seal with label">
            <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-5">
              {BADGES.map((b) => (
                <div key={b.alt} className="flex flex-col items-center gap-2">
                  <Badge src={b.src} alt={b.alt} className="h-12" />
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#7C7572]">{b.label}</span>
                </div>
              ))}
            </div>
          </Variation>

          {/* 5 — Divider-separated row */}
          <Variation n={5} title="Divider-separated">
            <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-xl border border-[#ECEBE7] bg-white px-6 py-4">
              {BADGES.map((b, i) => (
                <div key={b.alt} className="flex items-center gap-6">
                  {i > 0 && <span className="h-8 w-px bg-[#ECEBE7]" />}
                  <Badge src={b.src} alt={b.alt} className="h-11" />
                </div>
              ))}
            </div>
          </Variation>

          {/* 6 — Eyebrow + strip */}
          <Variation n={6} title="Eyebrow label + strip">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#9A938F] sm:max-w-[140px]">
                Trusted &amp; Certified
              </p>
              <div className="flex flex-wrap items-center justify-center gap-7">
                {BADGES.map((b) => (
                  <Badge key={b.alt} src={b.src} alt={b.alt} className="h-12 opacity-80 grayscale" />
                ))}
              </div>
            </div>
          </Variation>

          {/* 7 — Card grid with check */}
          <Variation n={7} title="Card grid with checkmark">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {BADGES.map((b) => (
                <div key={b.alt} className="flex flex-col items-center gap-2.5 rounded-xl border border-[#ECEBE7] bg-[#FCFCFB] px-3 py-4">
                  <Badge src={b.src} alt={b.alt} className="h-12" />
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-[#3D4046]">
                    <Check className="h-3 w-3 text-[#1A7A4A]" strokeWidth={3} />
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </Variation>

          {/* 8 — Hover to colourise */}
          <Variation n={8} title="Monochrome → colour on hover">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {BADGES.map((b) => (
                <Badge
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  className="h-14 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </Variation>

          {/* 9 — Marquee */}
          <Variation n={9} title="Auto-scrolling marquee">
            <InfiniteSlider speed={32} speedOnHover={10} gap={56} className="w-full">
              {BADGES.map((b) => (
                <Badge key={b.alt} src={b.src} alt={b.alt} className="h-12" />
              ))}
            </InfiniteSlider>
          </Variation>
        </div>
      </div>
    </section>
  );
}
