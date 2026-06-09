import type { FeaturePageConfig } from "@/components/changes/feature/types";

// Template-based rendering of Soniculate (uses the AbleSpace feature template
// for visual consistency). The standalone branded version lives at /changes/soniculate.
const config: FeaturePageConfig = {
  name: "Soniculate",

  hero: {
    chip: "Soniculate",
    chipIconSrc: "/assets/icons/star.svg",
    titleAccent: "Every sound,",
    title: "a game worth playing.",
    subtitle:
      "Soniculate turns articulation practice into a delightful game — beautiful 3D worlds for every target word, built with SLPs and loved by kids.",
    pills: ["Beautiful 3D Assets", "Built with SLPs", "Kids love it"],
    primaryCta: { label: "Start Practicing Now", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#schools" },
    image: "",
    imageAlt: "Soniculate articulation game",
  },

  trustedByText: "Trusted by more than 20,000 Special Education Professionals",

  showcases: [
    {
      chip: "Practice that feels like play",
      chipIconSrc: "/assets/icons/star.svg",
      title: "Built for Real Practice Sessions",
      subtitle: "Designed with practicing SLPs around the targets you actually work on.",
      layout: "grid",
      cards: [
        {
          title: "Beautiful 3D Assets for Every Word",
          description: "Hundreds of vibrant, hand-crafted 3D objects make every target word click — from “rabbit” to “rocket.”",
          iconSrc: "/assets/icons/image-02.svg",
        },
        {
          title: "Three Steps to Better Articulation",
          description: "Pick a sound, play the game, and watch progress grow — every attempt tracked automatically.",
          iconSrc: "/assets/icons/certificate-01.svg",
        },
        {
          title: "Practice That Feels Like Play",
          description: "Rewards, characters, and worlds to unlock turn “time to practice” into “can we play Soniculate?”",
          iconSrc: "/assets/icons/ai-beautify.svg",
        },
      ],
    },
    {
      chip: "Built for the people who care most",
      chipIconSrc: "/assets/icons/user-sharing.svg",
      title: "Loved by SLPs, Parents, and Kids",
      subtitle: "One app that works for everyone in a child's corner.",
      layout: "grid",
      cards: [
        {
          title: "For SLPs",
          description: "Real therapy targets, automatic data, and sessions kids never want to skip.",
          iconSrc: "/assets/icons/certificate-01.svg",
        },
        {
          title: "For Parents",
          description: "Turn home practice into screen time you can feel good about.",
          iconSrc: "/assets/icons/user-sharing.svg",
        },
        {
          title: "For Kids",
          description: "Bright worlds, fun characters, and rewards that make practice feel like play.",
          iconSrc: "/assets/icons/star.svg",
        },
      ],
    },
  ],

  benefits: {
    chip: "Take Soniculate Anywhere",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Practice anywhere, on any device.",
    items: [
      "Works on iPad, iPhone, and the web.",
      "Built with practicing SLPs around real articulation targets.",
      "Kids actually look forward to practice.",
    ],
  },

  faq: {
    items: [
      {
        question: "What is Soniculate?",
        answer:
          "Soniculate is a game-based articulation practice app — beautiful 3D worlds for every target sound, built for speech therapy.",
      },
      {
        question: "Who is Soniculate for?",
        answer: "Speech-language pathologists, parents, and the kids they support — in the clinic, classroom, or at home.",
      },
      {
        question: "What devices does it work on?",
        answer: "iPad, iPhone, and the web, so practice can happen anywhere.",
      },
    ],
  },

  cta: {
    chip: "Ready when you are",
    chipIconSrc: "/assets/icons/star.svg",
    title: "Ready to make articulation practice fun?",
    subtitle: "Start practicing in minutes. No credit card required.",
    primaryCta: { label: "Start Practicing Now", href: "#" },
    secondaryCta: { label: "Book a Demo", href: "#demo" },
    stats: [
      { number: "500+", label: "3D word assets" },
      { number: "10+", label: "Target sounds" },
      { number: "4.9★", label: "Loved by families" },
    ],
  },
};

export default config;
