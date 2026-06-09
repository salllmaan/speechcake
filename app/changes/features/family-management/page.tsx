import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import config from "./config";

export const metadata: Metadata = {
  title: "Family Management — AbleSpace",
  description: config.hero.subtitle,
};

export default function FamilyManagementPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-16">
              <LogoCloud
                items={[
                  "Secure Family Portal",
                  "Real-Time Progress",
                  "Controlled Sharing",
                  "Two-Way Messaging",
                  "Parent Updates",
                  "FERPA Compliant",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Keep families connected, every step of the way."
          description="Give parents secure, real-time visibility into progress while you stay in control of exactly what they see."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Secure Family Portal",
            "Real-Time Progress Updates",
            "Controlled, Per-Family Sharing",
            "Two-Way Communication",
            "HIPAA & FERPA Compliant",
          ]}
        />
      }
    />
  );
}
