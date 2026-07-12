import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import FlexibleRotationCodes from "@/components/changes/illustrations/rotating-schedule/FlexibleRotationCodes";
import ServiceFocusPerDay from "@/components/changes/illustrations/rotating-schedule/ServiceFocusPerDay";
import ConsistentDelivery from "@/components/changes/illustrations/rotating-schedule/ConsistentDelivery";
import QuickSetup from "@/components/changes/illustrations/rotating-schedule/QuickSetup";
import ApplyingRotatingSchedules from "@/components/changes/illustrations/rotating-schedule/ApplyingRotatingSchedules";
import KeepEverythingInSync from "@/components/changes/illustrations/rotating-schedule/KeepEverythingInSync";
import HolidayAwareCycles from "@/components/changes/illustrations/rotating-schedule/HolidayAwareCycles";
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
                render: <FlexibleRotationCodes />,
              },
              {
                title: "Service Focus per Day",
                description:
                  "Assign a subject or service focus to each rotation day, like Speech on A days, so providers always know what's scheduled.",
                render: <ServiceFocusPerDay />,
              },
              {
                title: "Consistent Delivery",
                description:
                  "Maintain rhythm and predictability in service delivery, so every student gets the right support on the right day.",
                render: <ConsistentDelivery />,
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
                render: <QuickSetup />,
              },
              {
                title: "Applying Rotating Schedules",
                description:
                  "Activate your schedule directly in the AbleSpace Calendar to keep all your sessions aligned.",
                render: <ApplyingRotatingSchedules />,
              },
              {
                title: "Keep Everything in Sync",
                description:
                  "Save time, reduce scheduling chaos, and ensure seamless coordination across sessions.",
                render: <KeepEverythingInSync />,
              },
              {
                title: "Holiday-Aware Cycles",
                description:
                  "Built-in holiday handling skips non-school days automatically, so your rotation always lands on the right date.",
                render: <HolidayAwareCycles />,
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
