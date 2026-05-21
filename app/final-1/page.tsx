import Image from "next/image";

import Navbar from "@/components/Navbar";

import HeroSection from "@/components/final/HeroSection";
import TrustedBySection from "@/components/final/TrustedBySection";
import IEPDataCollectionSection from "@/components/final/IEPDataCollectionSection";
import NotesSection from "@/components/final/NotesSection";
import AISection from "@/components/final-1/AISection";
import CustomReportsSection from "@/components/final-1/CustomReportsSection";
import { Features as SchoolsDistrictsFeatures } from "@/components/blocks/features-6";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Hero45 } from "@/components/blocks/shadcnblocks-com-hero45";
import TestimonialFull from "@/components/TestimonialFull";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AppStoreButtons from "@/components/AppStoreButtons";
import { FeatureGrid } from "@/components/ui/modern-feature-grid";

const featureIcon = (src: string, alt: string) => (
  <Image src={src} alt={alt} width={24} height={24} className="m-auto size-6" />
);

export default function Final1Home() {
  return (
    <>
      <Navbar />
      <main>
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
        <AISection />
        <CustomReportsSection />
        <SchoolsDistrictsFeatures />
        <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <LogoCloud />
          </div>
        </section>
        <NotesSection />
        <Hero45
          chipLabel="Everything in one place"
          chipIconSrc="/assets/icons/star.svg"
          heading="IEP Systems"
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
        >
          <div className="col-span-full overflow-hidden rounded-2xl border border-[#F2F2F2] bg-white p-8 pt-4 sm:p-12 sm:pt-6 lg:p-16 lg:pt-8 shadow-none">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
              <div className="order-2 lg:order-1">
                <h3 className="mb-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#111111]">
                  AbleSpace on the GO!
                </h3>
                <p className="mb-6 max-w-md text-base font-medium leading-relaxed text-[#666666]">
                  Works on all devices — phone, tablet or iPad — so you can take data on the go.
                </p>
                <AppStoreButtons className="mb-8 flex-wrap" />
                <div className="space-y-5">
                  {[
                    {
                      icon: "/assets/mobile-app-section/smart-phone-01.svg",
                      title: "Track & Manage Anywhere",
                      desc: "Log data, check progress, and update goals directly from your phone or tablet.",
                    },
                    {
                      icon: "/assets/mobile-app-section/analytics-02.svg",
                      title: "Instant Access to Reports",
                      desc: "View, filter, download and share reports and graphs in just a few taps.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-3.5">
                      <Image src={item.icon} alt="" width={32} height={32} className="flex-shrink-0" />
                      <div>
                        <p className="mb-0.5 text-sm font-semibold text-[#111111]">{item.title}</p>
                        <p className="max-w-[403px] text-sm leading-relaxed text-[#888888]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="-mb-8 order-1 sm:-mb-12 lg:order-2 lg:-mb-16 lg:self-end">
                <Image
                  src="/assets/final/landing-page/mobile-app.png"
                  alt="AbleSpace mobile app"
                  width={700}
                  height={490}
                  className="block max-w-full"
                />
              </div>
            </div>
          </div>
        </FeatureGrid>
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
