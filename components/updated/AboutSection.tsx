import {
  LayoutDashboard,
  Plug,
  GraduationCap,
  KeyRound,
  Users,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { About3 } from "@/components/ui/about-3";

const DISTRICT_FEATURES: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Admin Dashboard",
    description: "District-wide visibility into IEP data, compliance status, and team activity.",
    Icon: LayoutDashboard,
  },
  {
    title: "IEP System Integrations",
    description: "Sync with PowerSchool, Skyward, Frontline, and other student information systems.",
    Icon: Plug,
  },
  {
    title: "Professional Development",
    description: "Live training, on-demand resources, and ongoing PD for your special education team.",
    Icon: GraduationCap,
  },
  {
    title: "Single Sign-On",
    description: "SAML and OAuth SSO with Google, Microsoft, Clever, and ClassLink.",
    Icon: KeyRound,
  },
  {
    title: "Advanced Collaboration",
    description: "District-level permission tiers, audit logs, and cross-school workflows.",
    Icon: Users,
  },
  {
    title: "Dedicated Success Manager",
    description: "A named partner for rollout, training, and ongoing optimization.",
    Icon: HeartHandshake,
  },
];

export default function AboutSection() {
  return (
    <About3
      chip="Schools & Districts"
      chipIcon="/assets/icons/user-sharing.svg"
      title="Schools and Districts"
      description="Deploy AbleSpace across your school or district with centralized administration, secure collaboration, onboarding, and ongoing support."
      mainImage={{
        src: "/assets/landing-page/hero-ablespace-ai.avif",
        alt: "AbleSpace AI in action",
      }}
      secondaryImage={{
        src: "/assets/landing-page/hero-collaboration.avif",
        alt: "Team collaboration in AbleSpace",
      }}
      breakout={{
        src: "/assets/icons/shield-02.svg",
        alt: "Security shield",
        title: "HIPAA and FERPA compliant by default",
        description:
          "Bank-grade security and audit-ready documentation, built for school district compliance.",
        buttonText: "Learn about security",
        buttonUrl: "#security",
      }}
      companies={Array.from({ length: 8 }, (_, i) => ({
        src: `/assets/logos/social-strip-logo-${i + 1}@2x.avif`,
        alt: `District logo ${i + 1}`,
      }))}
      afterLogos={
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DISTRICT_FEATURES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#F7F7F5] p-6"
            >
              <div className="flex aspect-video items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-[#EDEDEA]">
                  <Icon className="w-9 h-9 text-[#7572B7]" strokeWidth={1.5} />
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#111111]">
                  {title}
                </h3>
                <p className="text-[#666666] mt-2 text-base leading-relaxed text-balance">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
