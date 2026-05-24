import Image from "next/image";

import Navbar from "@/components/Navbar";

import HeroSection from "@/components/final/HeroSection";
import TrustedBySection from "@/components/final/TrustedBySection";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import NotesSection from "@/components/final/NotesSection";
import AIFlowSection from "@/components/final/AIFlowSection";
import FeaturesMarquee from "@/components/final/FeaturesMarquee";
import FinalCTASection from "@/components/final/FinalCTASection";
import { Features as SchoolsDistrictsFeatures } from "@/components/blocks/features-6";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Hero45 } from "@/components/blocks/shadcnblocks-com-hero45";
import TestimonialFull from "@/components/TestimonialFull";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { FeatureGrid } from "@/components/ui/modern-feature-grid";

const featureIcon = (src: string, alt: string) => (
  <Image src={src} alt={alt} width={24} height={24} className="m-auto size-6" />
);

export default function ChangesHome() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-white">
        <HeroSection />
        <TrustedBySection />
        <IEPDataCollectionSection />
        <Hero45
          chipLabel="Everything in one place"
          chipIconSrc="/assets/icons/star.svg"
          heading="Real-Time Team Collaboration"
          subtitle="Teachers, paraprofessionals, and specialists — all collecting data in one place, in real time. No catch-up, no gaps."
          imageSrc="/assets/final/landing-page/collaboration-hero.png"
          imageAlt="Real-time team collaboration"
          features={[
            {
              icon: featureIcon("/assets/icons/security-lock.svg", ""),
              title: "HIPAA/FERPA compliant data sharing",
              description: "Share student data securely with every member of the team — paraprofessionals and assistants included.",
            },
            {
              icon: featureIcon("/assets/icons/user-sharing.svg", ""),
              title: "Role-based access",
              description: "Control exactly what each team member can view and edit.",
            },
            {
              icon: featureIcon("/assets/icons/user-settings-01.svg", ""),
              title: "Centralized Team Overview",
              description: "The Collaborators Dashboard gives you a complete overview of your team.",
            },
          ]}
        />
        <TestimonialFull
          quote="With AbleSpace, data collection feels seamless — I log info quickly, generate reports instantly, and access everything from my phone during sessions."
          name="David Lee"
          role="Special Education Teacher"
        />
        <AIFlowSection />
        <SchoolsDistrictsFeatures />
        <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <LogoCloud />
          </div>
        </section>
        <NotesSection />
        <FeaturesMarquee />
        <TestimonialsSection />
        <FAQSection />
        <FeatureGrid
          chipLabel="More Than Goal Tracking"
          chipIconSrc="/assets/icons/star.svg"
          sectionTitle="A Complete Special Ed Toolkit."
          sectionDescription="Scheduling, audits, billing, community, and more — everything built around the way special educators actually work."
          features={[
            {
              iconSrc: "/assets/icons/calendar-02.svg",
              title: "Smart Scheduling",
              description: "Multi provider sessions, recurring sessions, custom event fields from one flexible scheduling system.",
            },
            {
              iconSrc: "/assets/icons/calendar-setting-02.svg",
              title: "Rotating Schedules",
              description: "Support rotating schedules, block schedules, holidays, and changing service calendars without manual adjustments.",
            },
            {
              iconSrc: "/assets/icons/certificate-01.svg",
              title: "Automatic Goal Mastery Detection",
              description: "AbleSpace automatically identifies mastered goals, stalled progress, and students needing attention — helping teams stay proactive.",
            },
            {
              iconSrc: "/assets/icons/ai-content-generator-01.svg",
              title: "Smarter Session Notes",
              description: "Session and goal notes with voice input, AI refinement, and one-tap access to your last note — so documentation never slows you down.",
            },
            {
              iconSrc: "/assets/icons/ai-sheets.svg",
              title: "AI-Powered IEP Audits",
              description: "Review IEPs against federal, state, and district requirements to identify missing information and potential compliance risks.",
            },
            {
              iconSrc: "/assets/icons/user-lock-01.svg",
              title: "Secure Family Access",
              description: "Give families secure visibility into student progress, daily logs, and updates while controlling exactly what information is shared.",
            },
            {
              iconSrc: "/assets/icons/notebook-02.svg",
              title: "Lesson Plans",
              description: "Generate lesson plans and session activities aligned to student goals so providers can walk into sessions prepared.",
            },
            {
              iconSrc: "/assets/icons/image-02.svg",
              title: "Materials Library",
              description: "A curated, growing library of teaching strategies and therapy materials — ready to use, no searching required.",
            },
            {
              iconSrc: "/assets/icons/customer-service-01.svg",
              title: "Support That's Always Available",
              description: "Get fast, reliable support from a team that understands special education workflows — available 24/7 year-round.",
            },
          ]}
        />
        <FinalCTASection />
      </main>
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
    </>
  );
}
