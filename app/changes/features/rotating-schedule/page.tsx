import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import config from "./config";

export const metadata: Metadata = {
  title: "Rotating Schedule — AbleSpace",
  description: config.hero.subtitle,
};

export default function RotatingSchedulePage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={
        <>
          <IEPDataCollectionSection
            showMore={false}
            chip="Recurring Session Management"
            chipIconSrc="/assets/icons/calendar-setting-02.svg"
            title="Set It Once, Run It All Year"
            subtitle="Coded day and week cycles keep service delivery consistent and predictable, with no manual rescheduling."
            cards={[
              {
                title: "Rotating Schedules",
                description:
                  "Rotating schedules follow recurring day or week cycles, coded for clarity and precision. Assign services or focus areas based on each rotation.",
                image: "/assets/changes/features/rotating-schedule/feature-1.png",
                imageAlt: "Rotating schedule cycle on a calendar",
                imageFit: "contain",
              },
              {
                title: "Flexible Rotation Codes",
                description:
                  "Use rotation codes like AB, ABCDE, or A2B2C2D2E2 to match any cycle your program runs, however simple or complex.",
                image: "",
              },
              {
                title: "Service Focus per Day",
                description:
                  "Assign a subject or service focus to each rotation day, like Speech on A days, so providers always know what's scheduled.",
                image: "",
              },
              {
                title: "Consistent Delivery",
                description:
                  "Maintain rhythm and predictability in service delivery, so every student gets the right support on the right day.",
                image: "",
              },
            ]}
          />
          <IEPDataCollectionSection
            showMore={false}
            chip="Effortless Setup"
            chipIconSrc="/assets/icons/tablet-pen.svg"
            title="Up and Running in Minutes"
            subtitle="Build a cycle, sync it to your calendar, and let AbleSpace keep every session aligned, holidays included."
            cards={[
              {
                title: "Quick Setup",
                description:
                  "Create and manage cycles in just a few clicks. Add a cycle, include holidays, set start and end dates, and save in seconds.",
                image: "",
              },
              {
                title: "Applying Rotating Schedules",
                description:
                  "Activate your schedule directly in the AbleSpace Calendar to keep all your sessions aligned.",
                image: "",
              },
              {
                title: "Keep Everything in Sync",
                description:
                  "Save time, reduce scheduling chaos, and ensure seamless coordination across sessions.",
                image: "",
              },
              {
                title: "Holiday-Aware Cycles",
                description:
                  "Built-in holiday handling skips non-school days automatically, so your rotation always lands on the right date.",
                image: "",
              },
            ]}
          />
        </>
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-16">
              <LogoCloud
                items={[
                  "Rotation Codes",
                  "Recurring Sessions",
                  "Holiday-Aware",
                  "Calendar Sync",
                  "Conflict-Free",
                  "Consistent Delivery",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Set your schedule once, run it all year."
          description="Build recurring cycles, apply them to your calendar, and let AbleSpace keep every session consistent and on track."
          buttonText="Start Free Trial"
          buttonUrl="#"
          items={[
            "Flexible Rotation Codes",
            "Recurring Session Management",
            "Holiday-Aware Cycles",
            "Automatic Calendar Sync",
            "Consistent, Conflict-Free Delivery",
          ]}
        />
      }
    />
  );
}
