import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialFull from "@/components/TestimonialFull";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import ForSchoolsSection from "@/components/ForSchoolsSection";
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection";
import MobileAppSection from "@/components/MobileAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialFull
          quote="With AbleSpace, data collection feels seamless — I log info quickly, generate reports instantly, and access everything from my phone during sessions."
          name="David Lee"
          role="Special Education Teacher"
        />
        <AIFeaturesSection />
        <ForSchoolsSection />
        <EverythingYouNeedSection />
        <MobileAppSection />
        <TestimonialsSection />
        <FAQSection />
        <SecuritySection />
      </main>
      <Footer />
    </>
  );
}
