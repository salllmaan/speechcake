import Image from "next/image";
import FeatureSectionWrapper from "@/components/FeatureSectionWrapper";
import Features1Right from "@/components/features-1-right";
import Features2 from "@/components/features-2";

export default function FeaturesSection() {
  return (
    <FeatureSectionWrapper
      chip="Built for Special Education Teams"
      title="Effortless Data Tracking"
      subtitle="Whether you need quick progress monitoring or detailed behavioral tracking, AbleSpace adapts to the way your team already works."
    >
      <Features2
        cards={[
          {
            title: "Service Minutes",
            subtitle: "Smart scheduling and automatic attendance adjustments keep your logs accurate. Customize service types and generate audit-ready reports in seconds.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
          {
            title: "Reports and Graphs",
            subtitle: "20+ graphs and reports — including Trendlines and Forecasts — generated automatically from your goal and service data. No extra work before meeting day.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
        ]}
      />

      <Features1Right
        mockup="/assets/landing-page/features-1/collaboration.png"
        title="Real-Time Team Collaboration"
        subtitle="Teachers, paraprofessionals, and specialists — all collecting data in one place, in real time. No catch-up, no gaps."
        primaryCta={{ label: "Sign up for free", href: "#" }}
        secondaryCta={{ label: "Book a Demo", href: "#" }}
        items={[
          {
            icon: <Image src="/assets/landing-page/features-1/Secure Data Sharing.svg" alt="" width={36} height={36} />,
            title: "HIPAA/FERPA compliant data sharing",
            desc: "Share student data securely with every member of the team — paraprofessionals and assistants included.",
          },
          {
            icon: <Image src="/assets/landing-page/features-1/Role-Based Access.svg" alt="" width={36} height={36} />,
            title: "Role-based access",
            desc: "Control exactly what each team member can view and edit.",
          },
        ]}
      />
    </FeatureSectionWrapper>
  );
}
