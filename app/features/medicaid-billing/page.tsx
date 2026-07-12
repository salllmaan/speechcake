import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import OneClickCopy from "@/components/changes/illustrations/medicaid-billing/OneClickCopy";
import ZeroBusywork from "@/components/changes/illustrations/medicaid-billing/ZeroBusywork";
import config from "./config";

export const metadata: Metadata = {
  title: "Medicaid Billing — AbleSpace",
  description: config.hero.subtitle,
};

export default function MedicaidBillingPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      illustrations={{
        "One-Click Copy & Paste": <OneClickCopy />,
        "Zero Busywork": <ZeroBusywork />,
      }}
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
              <LogoCloud
                items={[
                  "Auto-Generated Notes",
                  "One-Click Copy",
                  "By Student",
                  "By Session",
                  "Bulk Billing",
                  "CSV / Excel Export",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Bill faster, stay compliant."
          description="AbleSpace generates accurate Medicaid-compliant billing reports from session data, helping teams submit documentation quickly and reduce manual work."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Auto-Generated Billing Notes",
            "One-Click Copy & Paste",
            "Billing by Student or Session",
            "Bulk Billing & Export",
            "HIPAA & FERPA Compliant",
          ]}
        />
      }
    />
  );
}
