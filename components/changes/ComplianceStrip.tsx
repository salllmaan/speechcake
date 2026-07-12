import Image from "next/image";

// Certification / compliance strip — "tile" treatment: each seal sits in its own
// chamfered (angle-cut) tile on a warm beige band, full colour, with an optional
// trust caption below. Single source of truth; add/remove one badge here and the
// whole strip re-flows. Wraps cleanly to any count.
const BADGES = [
  { src: "/assets/landing-page/certs/hipaa.png", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/certs/ferpa.png", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/certs/iso.png", alt: "ISO 27001 Certified" },
  { src: "/assets/landing-page/certs/1edtech.png", alt: "1EdTech Data Privacy Certified" },
  { src: "/assets/landing-page/certs/essa.png", alt: "Digital Promise ESSA Tier 4 Certified" },
  // Placeholder seal until the official AICPA badge is issued (~1-2 months).
  { src: "/assets/landing-page/certs/soc2.svg", alt: "SOC 2 Type II Certified" },
];

// Chamfer top-right + bottom-left corners for the angled-tile look.
const TILE_CLIP =
  "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))";

export default function ComplianceStrip({
  className = "",
  caption = "Trusted by 50,000+ special education professionals across the U.S.",
}: {
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto w-fit max-w-full rounded-3xl bg-gradient-to-b from-[#F3ECDE] to-[#EFE7D6] px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {BADGES.map((b) => (
            <div
              key={b.alt}
              style={{ clipPath: TILE_CLIP }}
              className="flex h-[104px] w-[104px] flex-shrink-0 items-center justify-center bg-[#E4DBCA]/70 p-3 transition-transform duration-300 hover:-translate-y-0.5 sm:h-[116px] sm:w-[116px]"
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={140}
                height={140}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {caption && (
          <p className="mx-auto mt-6 max-w-xl text-center text-sm font-medium text-[#5C5344] sm:text-base">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
