import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import TailoredCompliance from "@/components/changes/illustrations/iep-audit/TailoredCompliance";
import CustomRuleBuilder from "@/components/changes/illustrations/iep-audit/CustomRuleBuilder";
import ReportsThatWork from "@/components/changes/illustrations/iep-audit/ReportsThatWork";
import InstantDetection from "@/components/changes/illustrations/iep-audit/InstantDetection";
import config from "./config";

export const metadata: Metadata = {
  title: "IEP Audit — AbleSpace",
  description: config.hero.subtitle,
};

export default function IEPAuditPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={
        <>
        <IEPDataCollectionSection
          showMore={false}
          chip="Custom Audit Rules"
          chipIconSrc="/assets/icons/ai-sheets.svg"
          title="Compliance, Tailored to Your Rules"
          subtitle="Build and prioritize custom audit rules so every IEP is checked against exactly what your school or district requires."
          cards={[
            {
              title: "Tailored Compliance",
              description:
                "Easily add, edit, and prioritize custom audit rules to match your school or district's unique requirements.",
              render: <TailoredCompliance />,
            },
            {
              title: "Custom Rule Builder",
              description:
                "Coming soon — create custom rules for specific audit criteria, then edit or update them anytime.",
              render: <CustomRuleBuilder />,
            },
            {
              title: "Priority Levels",
              description: "Assign priority levels (High, Medium, or Low) to rules and organize suggestions based on their relative importance.",
              textOnly: true,
            },
            {
              title: "Consistent Compliance",
              description: "Maintain consistent compliance across all IEPs.",
              textOnly: true,
            },
          ]}
        />
        <IEPDataCollectionSection
          showMore={false}
          chip="AI-Powered Auditing"
          chipIconSrc="/assets/icons/ai-sheets.svg"
          title="Detect Issues, Generate Reports"
          subtitle="AbleSpace flags compliance issues automatically and turns every audit into a clear, shareable report."
          cards={[
            {
              title: "Reports That Work for You",
              description:
                "Turn audit results into detailed, shareable reports instantly, complete with insights and action points.",
              render: <ReportsThatWork />,
            },
            {
              title: "Instant Detection, Clear Resolution",
              description:
                "AI identifies potential compliance issues within IEPs, from missing details to misaligned goals, and flags them for review.",
              render: <InstantDetection />,
            },
            {
              title: "Review Statuses at a Glance",
              description:
                "Mark each item Yes, No, Maybe, or N/A for fast, consistent compliance reviews.",
              textOnly: true,
            },
            {
              title: "Audit History & Tracking",
              description:
                "Keep a full record of every audit and resolution, so progress and accountability stay clear over time.",
              textOnly: true,
            },
          ]}
        />
        </>
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
              <LogoCloud
                items={[
                  "Custom Audit Rules",
                  "Automated Detection",
                  "Compliance Reviews",
                  "Due Date Tracking",
                  "PDF Audit Reports",
                  "Defensible Documentation",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Make every IEP audit-ready."
          description="Catch compliance gaps automatically, standardize reviews, and generate defensible audit reports without the manual work."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Custom Audit Rules",
            "Automated Issue Detection",
            "Clear Review Statuses",
            "PDF Audit Reports",
            "HIPAA & FERPA Compliant",
          ]}
        />
      }
    />
  );
}
