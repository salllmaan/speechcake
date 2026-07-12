import type { Metadata } from "next";

import Navbar from "@/components/changes/Navbar";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";

import SecureFamilyPortal from "@/components/changes/illustrations/family-management/SecureFamilyPortal";
import RealTimeProgress from "@/components/changes/illustrations/family-management/RealTimeProgress";
import ControlledSharing from "@/components/changes/illustrations/family-management/ControlledSharing";
import TwoWayMessaging from "@/components/changes/illustrations/family-management/TwoWayMessaging";
import FastDailyLog from "@/components/changes/illustrations/family-management/FastDailyLog";
import QuickLogging from "@/components/changes/illustrations/family-management/QuickLogging";
import PhotosHighlights from "@/components/changes/illustrations/family-management/PhotosHighlights";
import SharedWithFamilies from "@/components/changes/illustrations/family-management/SharedWithFamilies";

export const metadata: Metadata = {
  title: "Family Management Illustrations — AbleSpace",
  description:
    "Preview of the card illustrations for the Family Management feature redesign — secure portal, real-time progress, controlled sharing, messaging, and daily logs.",
};

type Item = {
  title: string;
  description: string;
  illustration: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    title: "Secure Family Portal",
    description:
      "Give families a secure, private space to follow their student's journey, with access you control down to the detail.",
    illustration: <SecureFamilyPortal />,
  },
  {
    title: "Real-Time Progress",
    description:
      "Parents see goals, daily progress, and updates the moment you log them, no waiting for meetings.",
    illustration: <RealTimeProgress />,
  },
  {
    title: "Controlled Sharing",
    description:
      "Decide exactly what each family can see, from full reports down to specific goals only.",
    illustration: <ControlledSharing />,
  },
  {
    title: "Two-Way Communication",
    description:
      "Communicate with families through a FERPA-compliant messaging system where teams share updates and parents can send questions and feedback in real time.",
    illustration: <TwoWayMessaging />,
  },
  {
    title: "Fast Daily Log Entry",
    description:
      "Use saved templates to streamline daily logs across students and quickly capture daily session information in one place.",
    illustration: <FastDailyLog />,
  },
  {
    title: "Quick Logging",
    description:
      "Log a student's day in seconds from any device, during or right after a session.",
    illustration: <QuickLogging />,
  },
  {
    title: "Photos & Highlights",
    description:
      "Attach photos and highlight moments so families see the wins, not just the data.",
    illustration: <PhotosHighlights />,
  },
  {
    title: "Shared with Families",
    description:
      "Daily logs flow straight to the family portal, keeping parents connected to everyday progress.",
    illustration: <SharedWithFamilies />,
  },
];

export default function FamilyManagementIllustrationsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="mx-auto max-w-[1080px] px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 lg:px-8">
          <div className="mb-4 flex justify-center">
            <SectionChip
              label="Family Management"
              iconSrc="/assets/navbar/product/user-square.svg"
              variant="neutral"
            />
          </div>
          <h1 className="mx-auto max-w-[820px] text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
            Family Management Illustrations
          </h1>
          <p className="mx-auto mt-4 max-w-[680px] text-lg font-medium leading-relaxed text-[#666666]">
            Self-contained preview of every card illustration for the Family Management
            feature redesign — secure portal, real-time progress, controlled sharing,
            FERPA messaging, and daily logs.
          </p>
        </section>

        {/* Pairs: card text + illustration, alternating sides */}
        <section className="mx-auto max-w-[1080px] px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="flex flex-col gap-6 rounded-3xl border border-[#EDEDEA] bg-[#FAFAF9] p-6 sm:p-8 lg:flex-row lg:items-center"
              >
                <div className={`flex-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h2 className="text-xl font-semibold leading-tight text-[#111111]">{item.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-[#9A938F]">{item.description}</p>
                </div>
                <div className={`w-full lg:w-[52%] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {item.illustration}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
