import Navbar from "@/components/Navbar";
import TestimonialFull from "@/components/TestimonialFull";
import FAQSection from "@/components/FAQSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

import HeroSection from "@/components/updated/HeroSection";
import RolesSection from "@/components/updated/RolesSection";
import IEPDataCollectionSection from "@/components/updated/IEPDataCollectionSection";
import ServiceTimeSection from "@/components/updated/ServiceTimeSection";
import AIFeaturesSection from "@/components/updated/AIFeaturesSection";
import AboutSection from "@/components/updated/AboutSection";
import MedicaidBillingSection from "@/components/updated/MedicaidBillingSection";
import TeamCollaborationSection from "@/components/updated/TeamCollaborationSection";
import EverythingYouNeedSection from "@/components/updated/EverythingYouNeedSection";
import ImpactStripSection from "@/components/updated/ImpactStripSection";
import MobileAppSection from "@/components/updated/MobileAppSection";
import TestimonialsSection from "@/components/updated/TestimonialsSection";

export default function UpdatedHome() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RolesSection />
        <IEPDataCollectionSection />
        <ServiceTimeSection />
        <TestimonialFull
          quote="As an SLP serving 40+ students, AbleSpace replaced three tools. Articulation data, language samples, and Medicaid notes — all in one place, all in seconds."
          name="Priya Raman"
          role="Speech-Language Pathologist"
        />
        <MedicaidBillingSection />
        <TeamCollaborationSection />
        <AIFeaturesSection />
        <AboutSection />
        <EverythingYouNeedSection />
        <ImpactStripSection />
        <MobileAppSection />
        <TestimonialsSection />
        <FAQSection />
        <SecuritySection />
      </main>
      <Footer />
    </>
  );
}
