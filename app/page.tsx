import Image from "next/image";

import Navbar from "@/components/changes/Navbar";

import HeroSection from "@/components/changes/HeroSection";
import ComplianceStrip from "@/components/changes/ComplianceStrip";
import IEPDataCollectionSection from "@/components/changes/IEPDataCollectionSection";
import NotesSection from "@/components/changes/NotesSection";
import AIFlowSection from "@/components/changes/AIFlowSection";
import FeaturesMarquee from "@/components/final/FeaturesMarquee";
import FinalCTASection from "@/components/changes/FinalCTASection";
import { Features as SchoolsDistrictsFeatures } from "@/components/changes/SchoolsDistrictsFeatures";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { CollaborationHero } from "@/components/changes/CollaborationHero";
import TestimonialFull from "@/components/TestimonialFull";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import FAQSection from "@/components/changes/FAQSection";
import Footer from "@/components/Footer";
import { FeatureGrid } from "@/components/changes/FeatureGrid";

const featureIcon = (src: string, alt: string) => (
  <Image src={src} alt={alt} width={24} height={24} className="m-auto size-6" />
);

export default function ChangesHome() {
  return (
    <div className="typescale-changes">
      <Navbar />
      <main className="relative z-10 bg-white">
        <HeroSection />
        {/* Compliance badges — swapped with the trusted-by marquee (now inside the hero) */}
        <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
          <ComplianceStrip />
        </section>
        {/* Cards 1–3 use the new interactive illustrations; card 4 keeps its original visual. */}
        <IEPDataCollectionSection scrollDataTypes progressIllustration paperIllustration />
        <CollaborationHero
          chipLabel="Everything in one place"
          chipIconSrc="/assets/icons/star.svg"
          heading="Real-Time Collaboration"
          subtitle="Teachers, paraprofessionals, and specialists — all collecting data in one place, in real time. No catch-up, no gaps."
          imageSrc="/assets/final/landing-page/collaboration-section-img.png"
          imageAlt="Real-time team collaboration"
          features={[
            {
              icon: featureIcon("/assets/icons/ai-sheets.svg", ""),
              title: "One Student Record for the Entire Team",
              description: "Goal data, session notes, accommodations, attendance, and service logs stay in one shared record — so everyone works from the same information.",
            },
            {
              icon: featureIcon("/assets/icons/user-sharing.svg", ""),
              title: "Include Every Member of the Team",
              description: "Teachers, therapists, paraprofessionals, assistants, and administrators can contribute data based on their role while maintaining HIPAA and FERPA compliance.",
            },
            {
              icon: featureIcon("/assets/icons/security-lock.svg", ""),
              title: "Turn Team Activity Into Accountability",
              description: "Track who delivered services, collected data, and updated records with complete visibility and audit trails.",
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
          <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
            <LogoCloud />
          </div>
        </section>
        <NotesSection />
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
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
        <FeaturesMarquee />
      </main>
      <div className="sticky bottom-0 z-0">
        <Footer />
      </div>
    </div>
  );
}
