import type { Metadata } from "next";
import FeaturePage from "@/components/changes/feature/FeaturePage";
import AIFlowSection from "@/components/changes/AIFlowSection";
import TestimonialsSection from "@/components/changes/TestimonialsSection";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { Cta4 } from "@/components/changes/Cta4";
import GenerateMockup from "@/components/changes/illustrations/ablespace-ai/GenerateMockup";
import config from "./config";

export const metadata: Metadata = {
  title: "AbleSpace AI — AbleSpace",
  description: config.hero.subtitle,
};

const VALUE_PROPS = [
  "Save hours every week with automated attendance and service tracking.",
  "Maintain full visibility into every IEP session and service delivered.",
  "Generate detailed reports instantly for meetings, audits, and compliance.",
];

const STATS = [
  { stat: "90%", label: "Improvement in compliance reporting" },
  { stat: "4 hrs", label: "Saved per week, on average" },
  { stat: "80%", label: "Improvement in team collaboration" },
];

const IEP_WRITING = [
  {
    title: "Generate IEP Goal",
    content:
      "Create well-structured, standards-aligned IEP goals in seconds. Adjust complexity, generate similar goals, or add objectives in one click.",
    iconSrc: "/assets/icons/certificate-01.svg",
    render: (
      <GenerateMockup
        button="Generate IEP Goal"
        outputTitle="Generated Goal"
        text="By June, given a multiplication chart, Noah will solve 2-digit × 1-digit problems with 80% accuracy across 3 sessions."
      />
    ),
  },
  {
    title: "Generate Goal Strategies",
    content:
      "Get evidence-based teaching strategies tailored to each goal — ready to add to a student's plan in one click.",
    iconSrc: "/assets/icons/ai-beautify.svg",
    render: (
      <GenerateMockup
        button="Generate Strategy"
        outputTitle="Goal Strategy"
        text="Use concrete manipulatives and a number line; fade prompts from full model to independent over two weeks."
      />
    ),
  },
  {
    title: "Generate Present Level Statements",
    content:
      "Draft clear, defensible present level statements from a student's profile and current performance data.",
    iconSrc: "/assets/icons/ai-content-generator-01.svg",
    render: (
      <GenerateMockup
        button="Generate Statement"
        outputTitle="Present Level Statement"
        text="Noah currently solves single-digit multiplication with 70% accuracy and benefits from visual supports and extended time."
      />
    ),
  },
  {
    title: "Align to Standard",
    content:
      "Map each goal to state or Common Core standards automatically, with matching standards surfaced instantly.",
    iconSrc: "/assets/icons/ai-sheets.svg",
    render: (
      <GenerateMockup
        button="Align to Standard"
        outputTitle="Standards Match · 3 results"
        text="CCSS.MATH.4.NBT.B.5 — Multiply a whole number of up to four digits by a one-digit whole number."
      />
    ),
  },
];

const PROGRESS_SUPPORT = [
  {
    title: "Generate Progress Notes",
    content:
      "Turn the data you already collected into clean, professional progress notes — ready to review and share.",
    iconSrc: "/assets/icons/tablet-pen.svg",
    render: (
      <GenerateMockup
        student="Liam T."
        grade="2nd Grade"
        subject="Speech"
        button="Generate Progress Note"
        outputTitle="Progress Note"
        text="Liam attended a 30-minute speech session targeting /s/ and /z/ sounds, producing /s/ in 7 of 10 trials."
      />
    ),
  },
  {
    title: "Suggest Data Tracking Method",
    content:
      "Get the right measurement type suggested for each goal — accuracy, task analysis, intervals, and more.",
    iconSrc: "/assets/icons/ai-sheets.svg",
    render: (
      <GenerateMockup
        button="Suggest Method"
        outputTitle="Suggested Method"
        text="For this multiplication goal, track Accuracy (correct / total trials) with a 3-session mastery window."
      />
    ),
  },
  {
    title: "Summarize Sessions",
    content: "Turn a session's notes and data into a concise summary for meetings and reviews.",
    iconSrc: "/assets/icons/notebook-02.svg",
    render: (
      <GenerateMockup
        button="Summarize Session"
        outputTitle="Session Summary"
        text="Mon, Sep 17 · 10:00–11:00 AM — Noah practiced 2-digit multiplication; 8 of 10 correct with visual support."
      />
    ),
  },
];

export default function AbleSpaceAIPage() {
  return (
    <FeaturePage
      config={config}
      showMarquee={false}
      afterTrustedBy={
        <>
          {/* Value props */}
          <section className="w-full bg-white px-4 pt-4 pb-8 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-[1080px] gap-4 sm:grid-cols-3">
              {VALUE_PROPS.map((v) => (
                <div key={v} className="rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-5 py-5">
                  <span className="mb-2 block h-1.5 w-8 rounded-full bg-gradient-to-r from-[#00A9F8] to-[#00A0EB]" />
                  <p className="text-[14px] leading-relaxed text-[#3D4046]">{v}</p>
                </div>
              ))}
            </div>
          </section>

          <AIFlowSection
            accent=""
            heading="IEP Writing Assistance"
            subtitle="Draft the documents that take the longest — goals, strategies, and present levels — in seconds."
            steps={IEP_WRITING}
          />
          <AIFlowSection
            accent=""
            heading="Progress and Data Support"
            subtitle="Keep documentation and data effortless — notes, tracking methods, and summaries, generated for you."
            reverse
            steps={PROGRESS_SUPPORT}
          />
        </>
      }
      afterShowcases={
        <>
          <TestimonialsSection />
          {/* Impact stats */}
          <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <div className="mx-auto grid max-w-[1080px] gap-6 sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-8 text-center">
                  <p className="text-[44px] font-extrabold leading-none tracking-tight text-[#00A9F8]">{s.stat}</p>
                  <p className="mt-3 text-[15px] leading-snug text-[#666666]">{s.label}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1080px] px-0 sm:px-8 lg:px-16">
              <LogoCloud
                items={[
                  "AI IEP Goals",
                  "Goal Strategies",
                  "Present Levels",
                  "Progress Notes",
                  "Session Summaries",
                  "HIPAA / FERPA Safe",
                ]}
              />
            </div>
          </section>
        </>
      }
      afterFaq={
        <Cta4
          title="Get hours back every week."
          description="Let AbleSpace AI draft the documentation while you focus on your students — review, edit, and approve in a fraction of the time."
          buttonText="Sign Up for Free"
          buttonUrl="#"
          items={[
            "AI-drafted IEP goals & present levels",
            "Goal strategies & objectives",
            "Progress notes & session summaries",
            "You review and approve everything",
            "HIPAA & FERPA compliant",
          ]}
        />
      }
    />
  );
}
