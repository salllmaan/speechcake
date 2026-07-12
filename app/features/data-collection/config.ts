import type { FeaturePageConfig } from "@/components/changes/feature/types";

const config: FeaturePageConfig = {
  name: "Measurement Types",

  hero: {
    chip: "10+ Measurement Types",
    chipIconSrc: "/assets/icons/ai-content-generator-01.svg",
    title: "IEP-Ready Measurement Types for Progress Tracking",
    subtitle:
      "Every goal is unique — AbleSpace lets you track it your way with flexible, customizable measurement types built for IEP accuracy.",
    pills: ["Accuracy", "Task Analysis", "Rating Scales", "Custom Goals"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "/assets/changes/features/data-collection/hero.png",
    imageAlt: "AbleSpace measurement type selection for an IEP goal",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Built for Real IEP Progress Tracking",
      chipIconSrc: "/assets/icons/ai-content-generator-01.svg",
      title: "10+ Measurement Types",
      subtitle:
        "Each measurement type is designed to fit a different goal.",
      layout: "grid",
      centered: true,
      cards: [
        {
          title: "Accuracy",
          description:
            "Track correct vs. incorrect responses. Record total attempts, accuracy percentages, and error patterns for clear progress insights.",
          iconSrc: "/assets/final-assets/icons/accuracy.svg",
        },
        {
          title: "Prompting Levels",
          description:
            "Measure how much assistance a student needs. Select from custom prompt levels or multiple-choice options.",
          iconSrc: "/assets/final-assets/icons/prompting-levels.svg",
        },
        {
          title: "Task Analysis",
          description: "Break complex skills into step-by-step components and record mastery for each step.",
          iconSrc: "/assets/final-assets/icons/task-analysis.svg",
        },
        {
          title: "Task with Prompts",
          description: "Combine task analysis with prompting levels — track each step and the level of assistance provided.",
          iconSrc: "/assets/final-assets/icons/task-with-prompts.svg",
        },
        {
          title: "Rating Scale",
          description:
            "Use numeric or labeled scales (e.g., 1–5 or Never–Always) to measure consistency, quality, or frequency of a behavior.",
          iconSrc: "/assets/final-assets/icons/rating-scale.svg",
        },
        {
          title: "Frequency",
          description: "Count how often a specific behavior or skill occurs within a session or time period.",
          iconSrc: "/assets/final-assets/icons/frequency.svg",
        },
        {
          title: "Duration",
          description: "Record how long a student engages in an activity or displays a behavior.",
          iconSrc: "/assets/final-assets/icons/duration.svg",
        },
        {
          title: "Opportunity",
          description: "Track total opportunities, correct responses, and errors for any repeatable skill or activity.",
          iconSrc: "/assets/final-assets/icons/opportunity.svg",
        },
        {
          title: "Anecdotal",
          description: "Document qualitative observations when quantitative tracking isn't possible.",
          iconSrc: "/assets/final-assets/icons/anecdotal.svg",
        },
        {
          title: "Rubrics",
          description: "Rate student performance using custom rubric scales and descriptors.",
          iconSrc: "/assets/final-assets/icons/rubrics.svg",
        },
        {
          title: "Partial Interval",
          description: "Mark whether a behavior occurred at any point during each timed interval.",
          iconSrc: "/assets/final-assets/icons/partial-interval.svg",
        },
        {
          title: "Whole Interval",
          description: "Mark whether a behavior lasted for the entire length of each timed interval.",
          iconSrc: "/assets/final-assets/icons/whole-interval.svg",
        },
        {
          title: "Rate",
          description: "Measure how often a behavior occurs per unit of time, such as responses per minute.",
          iconSrc: "/assets/final-assets/icons/rate.svg",
        },
        {
          title: "Custom Goal",
          description: "Combine multiple measurement types and create tailored tracking solutions that match how you actually work.",
          iconSrc: "/assets/final-assets/icons/custom-goal.svg",
        },
      ],
    },
  ],
};

export default config;
