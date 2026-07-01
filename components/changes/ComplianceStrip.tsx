import Image from "next/image";

// Certification / compliance strip — "Variation 5": full-colour seals separated by
// thin vertical dividers inside a soft bordered container. Single source of truth;
// add/remove one badge here and every strip updates. Wraps cleanly to any count.
const BADGES = [
  { src: "/assets/landing-page/certs/hipaa.png", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/certs/ferpa.png", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/certs/iso.png", alt: "ISO 27001 Certified" },
  { src: "/assets/landing-page/certs/1edtech.png", alt: "1EdTech Data Privacy Certified" },
  { src: "/assets/landing-page/certs/essa.png", alt: "Digital Promise ESSA Tier 4 Certified" },
  // Placeholder seal until the official AICPA badge is issued (~1-2 months).
  { src: "/assets/landing-page/certs/soc2.svg", alt: "SOC 2 Type II Certified" },
];

export default function ComplianceStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-xl border border-[#ECEBE7] bg-white px-6 py-4 ${className}`}
    >
      {BADGES.map((b, i) => (
        <div key={b.alt} className="flex items-center gap-6">
          {i > 0 && <span className="h-8 w-px bg-[#ECEBE7]" />}
          <Image
            src={b.src}
            alt={b.alt}
            width={120}
            height={120}
            className="h-11 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
