import Image from "next/image";
import { GraduationCap, HeartHandshake, KeyRound, LayoutDashboard, Users, Workflow } from "lucide-react";

import SectionChip from "@/components/SectionChip";

const FEATURES = [
  { icon: LayoutDashboard, title: "Admin Dashboard", description: "Central command for rollouts, rosters, and reporting across every school." },
  { icon: Workflow, title: "IEP System Integrations", description: "Sync with your existing IEP and SIS systems — no double entry." },
  { icon: GraduationCap, title: "Professional Development", description: "Ongoing training for staff, paras, and specialists — whenever they need it." },
  { icon: KeyRound, title: "Single Sign-On", description: "SAML-based SSO so your team logs in once with district credentials." },
  { icon: Users, title: "Advanced Collaboration", description: "District-wide sharing, role hierarchies, and team-level controls." },
  { icon: HeartHandshake, title: "Dedicated Success Manager", description: "A named expert who knows your district and is just a Slack away." },
];

export function Features() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px] space-y-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="For Schools and Districts"
              iconSrc="/assets/icons/user-settings-01.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Scale Across Your Whole District
          </h2>
          <p className="text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Ablespace gives each school a standardized, compliant workflow — while giving district admins the visibility and control they need.
          </p>
        </div>
        <div className="relative mx-auto max-w-screen-lg overflow-hidden">
          <div className="pointer-events-none absolute -right-28 -top-28 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(#7C7572_1px,transparent_1px)]" />
          <div className="pointer-events-none absolute -left-28 -top-28 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(#7C7572_1px,transparent_1px)]" />
          <Image
            src="/assets/changes/schools-and-districts-hero.png"
            alt="Schools and districts overview"
            width={1200}
            height={675}
            className="relative aspect-video max-h-[500px] w-full rounded-xl object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-screen-lg grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-[#7C7572]" />
                <h3 className="text-sm font-medium text-[#111111]">{title}</h3>
              </div>
              <p className="text-sm text-[#7C7572]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
