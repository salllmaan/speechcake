import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Rotating Schedule",

  hero: {
    chip: "Rotating Schedule",
    chipIconSrc: "/assets/icons/calendar-setting-02.svg",
    title: "Manage Your Time with Rotating Schedules",
    subtitle:
      "AbleSpace makes it easy to manage recurring service days, maintain balance across sessions, and ensure every student receives consistent support — all without manual rescheduling.",
    pills: ["Rotation Codes", "Recurring Sessions", "Holiday-Aware"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/rotating-schedule/hero.png",
    imageAlt: "AbleSpace rotating schedule calendar",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [],
};

export default config;
