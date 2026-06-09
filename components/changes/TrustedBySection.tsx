"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const TRUSTED_BY_LOGOS = [
  { file: "newton-public-schools.png", alt: "Newton Public Schools" },
  { file: "dinuba-unified.png",        alt: "Dinuba Unified School District" },
  { file: "sequoia-grove.png",         alt: "Sequoia Grove" },
  { file: "ua-high.png",               alt: "UA High" },
  { file: "salado.png",                alt: "Salado ISD" },
  { file: "aw-logo.png",               alt: "AW" },
  { file: "hscsed.png",                alt: "HSCSED" },
  { file: "thrive.png",                alt: "Thrive" },
  { file: "district-02.png",           alt: "Partner district" },
  { file: "district-03.png",           alt: "Partner district" },
  { file: "district-04.png",           alt: "Partner district" },
].map(({ file, alt }) => ({
  src: `/assets/final/logos/updated/${file}`,
  alt,
}));

export default function TrustedBySection({ heading }: { heading?: string }) {
  return (
    <section className="w-full bg-white py-12">
      {heading && (
        <p className="mx-auto mb-8 max-w-3xl px-4 text-center text-sm font-medium uppercase tracking-[0.08em] text-[#9A938F]">
          {heading}
        </p>
      )}
      <div className="mx-auto max-w-7xl px-2 sm:px-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <InfiniteSlider gap={72} reverse speed={80} speedOnHover={25}>
          {TRUSTED_BY_LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={64}
              className="pointer-events-none h-12 sm:h-16 w-auto select-none object-contain opacity-90 grayscale transition duration-300 hover:opacity-100"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
