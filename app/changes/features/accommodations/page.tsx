import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import config from "./config";

export const metadata: Metadata = {
  title: "Accommodations — AbleSpace",
  description: config.hero.subtitle,
};

export default function AccommodationsPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={
        <IEPDataCollectionSection
          showMore={false}
          chip="Accommodation Tracking"
          chipIconSrc="/assets/icons/user-settings-01.svg"
          title="Track Every Support, Every Session"
          subtitle="Log, report, and sync accommodations in one place, so your documentation is always complete and defensible."
          cards={[
            {
              title: "Effortless Logging",
              description:
                "Log accommodations for multiple students at once, recording session name, date, time, and the specific support provided, all in one place.",
              image: "/assets/changes/features/accommodations/feature-1.png",
              imageAlt: "Logging accommodations for multiple students",
            },
            {
              title: "Audit-Ready Records",
              description:
                "Document and update student accommodations in seconds to support audit-ready records.",
              image: "",
            },
            {
              title: "Centralized Log",
              description:
                "Maintain a centralized, compliant accommodation log accessible to authorized teams.",
              image: "",
            },
            {
              title: "Seamless Tracking",
              description:
                "Track every accommodation across sessions automatically, with a complete, connected history.",
              image: "",
            },
          ]}
        />
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-16">
              <LogoCloud
                items={[
                  "Track Accommodations",
                  "Log Multiple Students",
                  "Audit-Ready Records",
                  "IEP System Sync",
                  "Compliance Reports",
                  "Centralized Log",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Make accommodations effortless."
          description="Log, report, and sync every accommodation in one place, so your documentation stays complete and defensible."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Log for Multiple Students at Once",
            "Audit-Ready Records",
            "Sync with IEP Systems",
            "Delivery & Usage Reports",
            "HIPAA & FERPA Compliant",
          ]}
        />
      }
    />
  );
}
