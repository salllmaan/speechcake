import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import SectionChip from "@/components/SectionChip";

export default function NotesSection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <SectionChip
              label="Note Taking"
              iconSrc="/assets/icons/tablet-pen.svg"
              variant="neutral"
            />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Notes & Documentation
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            Capture every observation, breakthrough, and session update in one organized workspace — so your team stays aligned without chasing paperwork.
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1: 10+ Built-in Data Types */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-1.png"
                    alt="AI-assisted session notes"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">AI-assisted session notes</h2>
                  <p className="text-sm text-[#9A938F]">Write notes faster with AI-powered suggestions, refinements, and reusable templates tailored to your workflow.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Auto mastery detection */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-2.png"
                    alt="Goal-linked documentation"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Goal-linked documentation</h2>
                  <p className="text-sm text-[#9A938F]">Attach notes directly to goals, objectives, students, or sessions for clear and searchable progress tracking.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: Live progress charts */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#F2F2F2] shadow-none">
              <CardContent className="pt-6">
                <div className="mx-auto flex justify-center">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-3.png"
                    alt="Multi-provider collaboration"
                    width={640}
                    height={480}
                    className="w-60 h-auto object-contain"
                  />
                </div>
                <div className="relative z-10 mt-2 space-y-2 text-center">
                  <h2 className="text-lg font-semibold text-[#111111]">Multi-provider collaboration</h2>
                  <p className="text-sm text-[#9A938F]">Teachers, SLPs, OTs, BCBAs, and paras can all contribute notes in the same student record in real time.</p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Session-based data collection */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/calendar-03.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Progress-ready reporting</h2>
                    <p className="text-sm text-[#9A938F]">Turn daily notes into polished progress reports and AI-generated summaries instantly.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-4.png"
                    alt="Progress-ready reporting"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Multi-tracker logging (avatars) */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#F2F2F2] shadow-none">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border border-[#EDEDEA] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#F5F5F5]">
                    <Image
                      src="/assets/icons/user-sharing.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="m-auto size-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#111111]">Attachments & media support</h2>
                    <p className="text-sm text-[#9A938F]">Upload photos, PDFs, worksheets, screenshots, and supporting documents alongside your notes.</p>
                  </div>
                </div>
                <div className="relative -mb-6 -mr-6 mt-6 flex items-stretch justify-start sm:mt-0 sm:pl-6">
                  <Image
                    src="/assets/final/landing-page/iep-data-collection-card-5.png"
                    alt="Attachments & media support"
                    width={640}
                    height={480}
                    className="block h-full w-auto max-w-none object-left-top"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
}
