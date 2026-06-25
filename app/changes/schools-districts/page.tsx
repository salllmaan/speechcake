import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/changes/Navbar";
import TrustedBySection from "@/components/changes/TrustedBySection";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import { CollaborationHero } from "@/components/changes/CollaborationHero";
import { FeatureGrid } from "@/components/changes/FeatureGrid";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import Footer from "@/components/Footer";
import SectionChip from "@/components/SectionChip";
import CTAButton from "@/components/CTAButton";
import { Cta4 } from "@/components/changes/Cta4";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export const metadata: Metadata = {
  title: "Schools & Districts — AbleSpace",
  description:
    "Ease the burden of paperwork on providers and enhance compliance by leveraging the power of digital IEP data collection across your district.",
};

const featureIcon = (src: string) => (
  <Image src={src} alt="" width={24} height={24} className="m-auto size-6" />
);

const COMPLIANCE_BADGES = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif", alt: "ISO 27001 Certified" },
];

const TARGET_USERS = [
  "Special Education Teachers",
  "Paraprofessionals",
  "Speech Language Pathologists",
  "Occupational Therapists",
  "Behavior Therapists",
  "General Education Teachers",
  "School Administrators",
  "District Administrators",
];

const RESULTS = [
  { stat: "90%", label: "Improvement in compliance reporting" },
  { stat: "4 hrs", label: "Saved per week on average" },
  { stat: "80%", label: "Improvement in team collaboration" },
];

function SectionHead({
  chip,
  chipIconSrc,
  title,
  subtitle,
}: {
  chip: string;
  chipIconSrc?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-4 flex justify-center">
        <SectionChip label={chip} iconSrc={chipIconSrc} variant="neutral" />
      </div>
      <h2 className="mb-3 text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-[720px] text-lg font-medium leading-relaxed text-[#666666]">{subtitle}</p>
      )}
    </div>
  );
}

export default function SchoolsDistrictsPage() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 lg:px-8">
          <AnimatedGridPattern
            numSquares={40}
            maxOpacity={0.15}
            duration={3}
            repeatDelay={1}
            className="opacity-60 [mask-image:radial-gradient(1300px_circle_at_center_top,white,transparent)] inset-x-0 inset-y-[-30%] h-[180%] skew-y-12"
          />
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-4 flex justify-center sm:mb-5">
              <SectionChip label="Schools & Districts" iconSrc="/assets/icons/certificate-01.svg" variant="neutral" />
            </div>
            <div className="mx-auto mb-5 max-w-3xl text-center sm:mb-7">
              <h1 className="text-balance text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[52px]">
                IEP Goal Tracking for Your Special Education Department
              </h1>
              <p className="mx-auto mt-4 max-w-[720px] text-lg leading-relaxed text-[#666666]">
                Ease the burden of paperwork on providers and enhance compliance by leveraging the power of digital data.
              </p>
            </div>
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:mb-6">
              <CTAButton href="#cta" variant="primary" className="w-full sm:w-auto sm:min-w-[200px]">
                Get a Quote
              </CTAButton>
              <CTAButton href="#cta" variant="secondary" className="w-full sm:w-auto sm:min-w-[200px]">
                Schedule a Demo
              </CTAButton>
            </div>
            <div className="mb-16 flex flex-wrap items-center justify-center gap-4 sm:mb-20 sm:gap-5">
              {COMPLIANCE_BADGES.map((b) => (
                <Image key={b.alt} src={b.src} alt={b.alt} width={80} height={36} className="h-8 w-auto object-contain sm:h-9" />
              ))}
            </div>
            <div className="mx-auto max-w-5xl rounded-2xl bg-[#FAFAF9] p-3">
              <Image
                src="/assets/final/landing-page/schools-and-districts.png"
                alt="AbleSpace admin dashboard with district-wide data and providers"
                width={2256}
                height={1424}
                className="h-auto w-full rounded-xl border border-[#E8E8E8]"
                priority
              />
            </div>
          </div>
        </section>

        <TrustedBySection heading="Trusted by more than 20,000 Special Education Professionals" />

        {/* Admin Dashboard */}
        <CollaborationHero
          chipLabel="Admin Dashboard"
          chipIconSrc="/assets/icons/ai-sheets.svg"
          heading="Real-Time Oversight for Administrators"
          subtitle="Stay ahead of compliance with a powerful admin dashboard that lets administrators monitor provider activity and student performance in real time."
          imageSrc="/assets/final/landing-page/schools-and-districts.png"
          imageAlt="AbleSpace admin dashboard"
          features={[
            {
              icon: featureIcon("/assets/icons/ai-sheets.svg"),
              title: "Real-Time Visibility",
              description: "Monitor provider activity and student progress across your whole organization, and catch compliance risks before they become problems.",
            },
            {
              icon: featureIcon("/assets/navbar/product/user-square.svg"),
              title: "Manage Team Permissions",
              description: "Control access for providers and staff, so the right people have the right tools at the right time.",
            },
            {
              icon: featureIcon("/assets/icons/ai-beautify.svg"),
              title: "Export Insights",
              description: "Generate reports on student progress and provider activity for a clear, data-driven overview.",
            },
          ]}
        />

        {/* Integrations, SSO, Training & Support */}
        <FeatureGrid
          chipLabel="Enterprise-Ready"
          chipIconSrc="/assets/icons/certificate-01.svg"
          sectionTitle="Connect, Secure, and Scale Across Your District"
          sectionDescription="Sync with the systems you already use, log in securely, and get the training and support your team needs from day one."
          features={[
            {
              iconSrc: "/assets/icons/ai-content-generator-01.svg",
              title: "Seamless IEP Data Sync",
              description: "Automatically pull student profiles, IEP goals, and demographics from your existing SIS and IEP platforms.",
            },
            {
              iconSrc: "/assets/icons/certificate-01.svg",
              title: "Consistent & Compliant Records",
              description: "Every provider works from accurate, up-to-date IEP data, supporting collaboration, goal fidelity, and compliance.",
            },
            {
              iconSrc: "/assets/icons/user-lock-01.svg",
              title: "Single Sign-On",
              description: "Integrate with Google, PowerSchool, Clever, and more for one secure login and faster staff onboarding.",
            },
            {
              iconSrc: "/assets/icons/user-settings-01.svg",
              title: "Onboarding & Training",
              description: "Comprehensive staff and administrator training is included with every purchase for faster adoption.",
            },
            {
              iconSrc: "/assets/icons/customer-service-01.svg",
              title: "Live Chat & Email Support",
              description: "Ongoing assistance throughout the school year, whenever your team needs a hand.",
            },
            {
              iconSrc: "/assets/icons/user-sharing.svg",
              title: "District-Wide Rollout",
              description: "Standardized, compliant workflows for every school, with the visibility and control admins need.",
            },
            {
              iconSrc: "/assets/icons/notebook-02.svg",
              title: "Activity Logs",
              description: "Track who delivered services, collected data, and updated records — a complete activity history for accountability and audits.",
            },
          ]}
        />

        {/* Multi-Provider Collaboration */}
        <CollaborationHero
          chipLabel="Collaboration"
          chipIconSrc="/assets/navbar/product/user-square.svg"
          heading="Support Every Student from Every Angle"
          subtitle="Collaborate seamlessly across your special education team so every student's progress is supported from every angle."
          imageSrc="/assets/final/landing-page/collaboration-section-img.png"
          imageAlt="Multi-provider collaboration on shared goals"
          features={[
            {
              icon: featureIcon("/assets/icons/user-sharing.svg"),
              title: "Shared Goal Tracking",
              description: "Therapists, teachers, assistants, and paraprofessionals collaborate on shared IEP goals with full transparency and consistency.",
            },
            {
              icon: featureIcon("/assets/icons/security-lock.svg"),
              title: "Centralized Communication",
              description: "Keep notes, data, and updates in one secure location, reducing information silos and improving coordination.",
            },
            {
              icon: featureIcon("/assets/icons/user-settings-01.svg"),
              title: "Unified Student Support",
              description: "Consistent documentation and better communication keep your whole team aligned around each student.",
            },
          ]}
        />

        {/* Effortless Data Tracking — the /changes bento */}
        <IEPDataCollectionSection showMore={false} />

        {/* Beyond Traditional IEP Systems */}
        <FeatureGrid
          chipLabel="The Difference"
          chipIconSrc="/assets/icons/ai-beautify.svg"
          sectionTitle="Beyond Traditional IEP Systems"
          sectionDescription="Traditional systems help create IEPs and compliance reports, but day-to-day progress monitoring is often still on paper. Enter data once and AbleSpace handles the rest."
          features={[
            {
              iconSrc: "/assets/icons/tablet-pen.svg",
              title: "One-Click Data Collection",
              description: "Capture goal data, attendance, and notes in a tap, instead of juggling paper forms.",
            },
            {
              iconSrc: "/assets/icons/ai-content-generator-01.svg",
              title: "Automated Organization",
              description: "Student data is organized automatically, so nothing slips through the cracks.",
            },
            {
              iconSrc: "/assets/icons/ai-sheets.svg",
              title: "Instant Progress Tracking",
              description: "See goals, trends, and mastery update in real time as your team logs data.",
            },
            {
              iconSrc: "/assets/icons/ai-beautify.svg",
              title: "Real-Time Reporting",
              description: "Generate accurate, audit-ready reports the moment you need them.",
            },
            {
              iconSrc: "/assets/icons/calendar-02.svg",
              title: "Improved Provider Efficiency",
              description: "Less paperwork means more time for teaching and direct student support.",
            },
            {
              iconSrc: "/assets/icons/certificate-01.svg",
              title: "Better Compliance Management",
              description: "Stay ahead of requirements with data-driven oversight across every IEP.",
            },
          ]}
        />

        {/* Data Privacy & Security */}
        <FeatureGrid
          chipLabel="Privacy & Security"
          chipIconSrc="/assets/icons/security-lock.svg"
          sectionTitle="Built to Protect Student Data"
          sectionDescription="AbleSpace is HIPAA, FERPA, ISO 27001, and 1EdTech certified, with multiple layers of security to keep student data protected and compliant."
          features={[
            {
              iconSrc: "/assets/icons/security-lock.svg",
              title: "Encrypted Data",
              description: "Student information is encrypted in transit and at rest.",
            },
            {
              iconSrc: "/assets/icons/user-lock-01.svg",
              title: "Two-Factor Authentication",
              description: "Add an extra layer of protection to every account.",
            },
            {
              iconSrc: "/assets/icons/user-settings-01.svg",
              title: "Strict Access Controls",
              description: "Role-based permissions ensure people only see what they should.",
            },
            {
              iconSrc: "/assets/icons/tablet-pen.svg",
              title: "Device Management",
              description: "Manage and secure the devices that access AbleSpace.",
            },
            {
              iconSrc: "/assets/icons/user-sharing.svg",
              title: "Secure Collaboration Controls",
              description: "Share data across your team without compromising privacy.",
            },
            {
              iconSrc: "/assets/icons/certificate-01.svg",
              title: "Regular Security Audits",
              description: "Continuous audits keep protections current and compliant.",
            },
          ]}
        />

        {/* Results */}
        <section className="w-full bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <SectionHead
              chip="Results"
              chipIconSrc="/assets/icons/star.svg"
              title="Results for Special Education Teams"
              subtitle="Organizations using AbleSpace report:"
            />
            <div className="grid gap-6 sm:grid-cols-3">
              {RESULTS.map((r) => (
                <div key={r.label} className="text-center">
                  <p className="text-[44px] font-extrabold leading-none tracking-tight text-[#00A9F8]">{r.stat}</p>
                  <p className="mt-3 text-[15px] leading-snug text-[#666666]">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement & Funding */}
        <FeatureGrid
          chipLabel="Procurement & Funding"
          chipIconSrc="/assets/icons/ai-sheets.svg"
          sectionTitle="Easy to Purchase, Easy to Fund"
          sectionDescription="Everything your district needs for procurement, plus access to federal and state funding to support a district-wide rollout."
          features={[
            {
              iconSrc: "/assets/icons/ai-sheets.svg",
              title: "W9 Form",
              description: "Required by districts to set up AbleSpace as a vendor.",
            },
            {
              iconSrc: "/assets/icons/certificate-01.svg",
              title: "Sole Source Letter",
              description: "Required by districts for procurement approval processes.",
            },
            {
              iconSrc: "/assets/icons/star.svg",
              title: "Funding Support",
              description: "Access federal and state funding opportunities to reduce budget barriers and support implementation.",
            },
          ]}
        />

        {/* Target Users */}
        <section className="w-full bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <SectionHead
              chip="Built For"
              chipIconSrc="/assets/navbar/product/user-square.svg"
              title="Made for Your Whole Team"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {TARGET_USERS.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center rounded-full border border-[#EDEDEA] bg-[#FCFCFB] px-4 py-2 text-[14px] font-medium text-[#3D4046]"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* CTA */}
        <div id="cta">
          <Cta4
            title="Transform IEP data collection across your district."
            description="Improve collaboration and stay ahead of compliance with AbleSpace."
            buttonText="Get a Quote"
            buttonUrl="#"
            items={[
              "District-wide admin dashboard",
              "SIS and IEP system integrations",
              "Single sign-on and enterprise security",
              "Onboarding, training, and ongoing support",
              "HIPAA, FERPA, and ISO 27001 compliant",
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
