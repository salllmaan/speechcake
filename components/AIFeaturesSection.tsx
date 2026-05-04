import FeatureSectionWrapper from "@/components/FeatureSectionWrapper";
import Features2 from "@/components/features-2";

export default function AIFeaturesSection() {
  return (
    <FeatureSectionWrapper
      className="pt-16 sm:pt-24 pb-16 sm:pb-24"
      chip="AbleSpace AI"
      title="AI Built for Special Ed"
      subtitle="Let AI handle the heavy lifting — generate IEP goals, progress notes, and worksheets in seconds so you can focus on your students."
    >
      <Features2
        cards={[
          {
            title: "Progress Notes",
            subtitle: "Save time with AI-generated progress notes, customisable for each student's goals and ready to share.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
          {
            title: "IEP Worksheets",
            subtitle: "Generate custom worksheets aligned to standards and student interests in seconds.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
        ]}
      />
      <Features2
        cards={[
          {
            title: "Goal Tracking AI",
            subtitle: "Let AI analyse progress patterns and surface insights you might have missed — automatically.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
          {
            title: "Suggest Data Tracking",
            subtitle: "Get AI recommendations on the best tracking methods — frequency, task analysis, and more.",
            mockup: "/assets/landing-page/hero-data-collection.avif",
          },
        ]}
      />
    </FeatureSectionWrapper>
  );
}
