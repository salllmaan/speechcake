import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import AIFlowSection from "@/components/changes/AIFlowSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { Cta4 } from "@/components/changes/Cta4";
import config from "./config";

export const metadata: Metadata = {
  title: "Data Collection — AbleSpace",
  description: config.hero.subtitle,
};

export default function DataCollectionPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={<IEPDataCollectionSection showMore={false} />}
      afterShowcases={
        <>
          <AIFlowSection accent="Powered by AI" heading="Smart IEP Data Collection" />
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-16">
              <LogoCloud
                items={[
                  "10+ Data Types",
                  "One-Tap Logging",
                  "Works Offline",
                  "Auto-Organized",
                  "Real-Time Sync",
                  "Audit-Ready Reports",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Track every goal, your way."
          description="Collect data with a single click, organize it automatically, and ensure nothing slips through the cracks."
          buttonText="Start Free Trial"
          buttonUrl="#"
        />
      }
    />
  );
}
