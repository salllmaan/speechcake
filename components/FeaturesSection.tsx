import Image from "next/image";
import FeatureSectionWrapper from "./FeatureSectionWrapper";
import Features1Left from "./features-1-left";
import Features1Right from "./features-1-right";
import Features2 from "./features-2";

export default function FeaturesSection() {
  return (
    <FeatureSectionWrapper
      chip="Built for Special Ed Professionals"
      title="All-in-One IEP Tracking"
      subtitle="Everything you need to track goals, manage services, and generate reports — built for Special Ed professionals."
    >
      <Features1Left
        mockup="/assets/landing-page/features-1/effortless-data-tracking.png"
        title="Effortless Data Tracking"
        subtitle="AbleSpace uses AI to streamline IEP goal tracking — collect data with a single click, organise it automatically, and ensure nothing slips through the cracks."
        primaryCta={{ label: "Sign up for free", href: "#" }}
        secondaryCta={{ label: "Book a Demo", href: "#" }}
        items={[
          {
            icon: <Image src="/assets/landing-page/features-1/Collect Data with 9+ Data Types.svg" alt="" width={36} height={36} />,
            title: "Collect Data with 9+ Data Types",
            desc: "Track IEP goals using Task Analysis, Prompts, Rating scales, and more.",
          },
          {
            icon: <Image src="/assets/landing-page/features-1/Phases, Labels, and History.svg" alt="" width={36} height={36} />,
            title: "Phases, Labels, and History",
            desc: "Organise goals with visual phases, custom tags, and goal history at your fingertips.",
          },
        ]}
      />

      <Features2
        cards={[
          {
            title: "Service Time",
            subtitle: "Auto-track service time with smart adjustments for attendance. Customize service types and get instant reports — effortless accuracy.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
          {
            title: "Reports and Graphs",
            subtitle: "Get 20+ auto-generated graphs with filters and custom views. Beautiful reports, ready for your next IEP meeting — no extra work.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
        ]}
      />

      <Features2
        cards={[
          {
            title: "Accommodations",
            subtitle: "Easily manage and track accommodations, empowering you to create a supportive and inclusive learning environment.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
          {
            title: "Medicaid Billing",
            subtitle: "Auto-generate Medicaid billing notes to save hours every week. Copy and paste directly into your IEP system.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
        ]}
      />

      <Features1Right
        mockup="/assets/landing-page/features-1/collaboration.png"
        title="Collaboration"
        subtitle="Work alongside other clinicians and assistants. Securely share and collect data in real time."
        primaryCta={{ label: "Sign up for free", href: "#" }}
        secondaryCta={{ label: "Book a Demo", href: "#" }}
        items={[
          {
            icon: <Image src="/assets/landing-page/features-1/Secure Data Sharing.svg" alt="" width={36} height={36} />,
            title: "Secure Data Sharing",
            desc: "Share student data with paraprofessionals and assistants within HIPAA-compliant workflows.",
          },
          {
            icon: <Image src="/assets/landing-page/features-1/Role-Based Access.svg" alt="" width={36} height={36} />,
            title: "Role-Based Access",
            desc: "Control exactly what each team member can view and edit.",
          },
        ]}
      />
    </FeatureSectionWrapper>
  );
}
