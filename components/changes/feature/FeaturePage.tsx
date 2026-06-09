import Navbar from "@/components/changes/Navbar";
import TrustedBySection from "@/components/changes/TrustedBySection";
import FeaturesMarquee from "@/components/final/FeaturesMarquee";
import Footer from "@/components/Footer";

import FeatureHero from "./FeatureHero";
import FeatureShowcase from "./FeatureShowcase";
import FeatureBenefits from "./FeatureBenefits";
import FeatureFAQ from "./FeatureFAQ";
import FeatureCTA from "./FeatureCTA";
import type { FeaturePageConfig } from "./types";
import type { ReactNode } from "react";

/**
 * Renders a complete feature landing page from a single config object,
 * in the /changes visual language. Drop in texts + images, nothing else.
 * `afterTrustedBy` optionally injects a custom section under the logo marquee.
 */
export default function FeaturePage({
  config,
  afterTrustedBy,
  afterShowcases,
  afterFaq,
  showMarquee = true,
}: {
  config: FeaturePageConfig;
  afterTrustedBy?: ReactNode;
  afterShowcases?: ReactNode;
  afterFaq?: ReactNode;
  showMarquee?: boolean;
}) {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <FeatureHero hero={config.hero} />

        {config.trustedByText && <TrustedBySection heading={config.trustedByText} />}

        {afterTrustedBy}

        {config.showcases.map((showcase, i) => (
          <FeatureShowcase key={`${showcase.title}-${i}`} showcase={showcase} />
        ))}

        {afterShowcases}

        {config.benefits && <FeatureBenefits benefits={config.benefits} />}

        {config.faq && <FeatureFAQ title={config.faq.title} items={config.faq.items} />}

        {config.cta && <FeatureCTA cta={config.cta} />}

        {afterFaq}

        {showMarquee && <FeaturesMarquee />}
      </main>
      <Footer />
    </div>
  );
}
