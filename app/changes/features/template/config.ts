import type { FeaturePageConfig } from "@/components/changes/feature/types";

// ─────────────────────────────────────────────────────────────────────────────
// FEATURE PAGE STARTER TEMPLATE
//
// Copy this folder (app/changes/features/template) to app/changes/features/<your-feature>,
// then fill in the texts and image paths below. Image: "" shows a placeholder box.
// The layout, sections, and styling are handled by the template — you only edit data.
// ─────────────────────────────────────────────────────────────────────────────

const config: FeaturePageConfig = {
  name: "Feature Name",

  hero: {
    chip: "Feature Name",
    chipIconSrc: "/assets/icons/star.svg",
    titleAccent: "Headline",
    title: "that sells the feature in one line",
    subtitle: "One or two sentences describing the value this feature delivers to the team.",
    pills: ["Key point one", "Key point two", "Key point three"],
    primaryCta: { label: "Sign Up for FREE", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "",
    imageAlt: "Feature hero screenshot",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Section Chip",
      chipIconSrc: "/assets/icons/star.svg",
      title: "Primary Showcase Title",
      subtitle: "A short sentence introducing the cards in this showcase.",
      cards: [
        {
          title: "Big Feature Card",
          description: "Describe the headline capability. This card spans 4 of 6 columns.",
          iconSrc: "/assets/icons/star.svg",
          image: "",
          span: 4,
        },
        {
          title: "Supporting Card",
          description: "A narrower supporting point. Spans 2 of 6 columns.",
          iconSrc: "/assets/icons/star.svg",
          image: "",
          span: 2,
        },
        {
          title: "Card Three",
          description: "Spans 2 columns.",
          iconSrc: "/assets/icons/star.svg",
          image: "",
          span: 2,
        },
        {
          title: "Card Four",
          description: "Spans 2 columns.",
          iconSrc: "/assets/icons/star.svg",
          image: "",
          span: 2,
        },
        {
          title: "Card Five",
          description: "Spans 2 columns.",
          iconSrc: "/assets/icons/star.svg",
          image: "",
          span: 2,
        },
      ],
    },
  ],

  benefits: {
    chip: "Benefits",
    chipIconSrc: "/assets/icons/star.svg",
    title: "A one-line summary of the payoff for the team.",
    items: ["Benefit one goes here.", "Benefit two goes here.", "Benefit three goes here."],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "First question?", answer: "Answer to the first question." },
      { question: "Second question?", answer: "Answer to the second question." },
      { question: "Third question?", answer: "Answer to the third question." },
    ],
  },

  cta: {
    chip: "Ready when you are",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Closing call to action headline.",
    subtitle: "Set up in minutes. Cancel anytime. No credit card required to start.",
    primaryCta: { label: "Start Free Trial", href: "#start" },
    secondaryCta: { label: "Book a Demo", href: "#demo" },
    stats: [
      { number: "00%", label: "Metric one" },
      { number: "0 hrs", label: "Metric two" },
      { number: "00%", label: "Metric three" },
    ],
  },
};

export default config;
