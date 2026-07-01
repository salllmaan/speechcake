import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import AuditReadyRecords from "@/components/changes/illustrations/accommodations/AuditReadyRecords";
import CentralizedLog from "@/components/changes/illustrations/accommodations/CentralizedLog";
import ReusableTemplates from "@/components/changes/illustrations/accommodations/ReusableTemplates";
import AuditReadyReports from "@/components/changes/illustrations/accommodations/AuditReadyReports";
import SyncIEPSystems from "@/components/changes/illustrations/accommodations/SyncIEPSystems";
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
      illustrations={{
        "Audit-Ready Reports": <AuditReadyReports />,
        "Sync Seamlessly with IEP Systems": <SyncIEPSystems />,
      }}
      afterTrustedBy={
        <IEPDataCollectionSection
          showMore={false}
          chip="Accommodation Tracking"
          chipIconSrc="/assets/icons/user-settings-01.svg"
          title="Track Every Support, Every Session"
          subtitle="Log, report, and sync accommodations in one place, so your documentation is always complete and defensible."
          cards={[
            {
              title: "Accommodation Tracking",
              description:
                "Track accommodations for multiple students, document supports provided or refused, and maintain accurate records — all within AbleSpace.",
              image: "/assets/changes/features/accommodations/feature-1.png",
              imageAlt: "Tracking accommodations for multiple students",
            },
            {
              title: "Audit-Ready Records",
              description:
                "Document and update student accommodations in seconds to support audit-ready records.",
              render: <AuditReadyRecords />,
            },
            {
              title: "Centralized Log",
              description:
                "Maintain a centralized, compliant accommodation log accessible to authorized teams.",
              render: <CentralizedLog />,
            },
            {
              title: "Reusable Templates",
              description:
                "Create reusable accommodation templates and apply them in a single click to save time and ensure consistent tracking.",
              render: <ReusableTemplates />,
            },
          ]}
        />
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
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
          description="Log, report, and sync accommodations in AbleSpace so your documentation stays complete, consistent, and ready for IEP compliance reviews."
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
