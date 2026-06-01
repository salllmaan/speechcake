import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SectionChip from "@/components/SectionChip";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const FEATURED: Testimonial & { district: string; districtLogo: string } = {
  quote:
    "AbleSpace completely changed how I track IEP goals. Data collection used to take twenty minutes after every session, my notes lived in three different binders, and progress reports felt like punishment. Now everything happens in one app during the session, and the notes draft themselves from the data I am already capturing. I get my evenings back, and my documentation is actually defensible for the first time.",
  name: "Sarah Mitchell",
  role: "Special Education Teacher",
  initials: "SM",
  district: "Newton Public Schools",
  districtLogo: "/assets/final/logos/updated/newton-public-schools.png",
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The AI-generated progress notes alone save me hours every week. My team cannot imagine going back to the old way.",
    name: "James Okafor",
    role: "School Psychologist",
    initials: "JO",
  },
  {
    quote:
      "Finally an app that actually understands special ed workflows. The graphs and reports are exactly what our district needs.",
    name: "Linda Tran",
    role: "Special Ed Coordinator",
    initials: "LT",
  },
  {
    quote:
      "Service-time tracking on my phone has completely fixed our Medicaid billing. We submit weekly now instead of scrambling at month-end.",
    name: "Maria Chen",
    role: "Speech-Language Pathologist",
    initials: "MC",
  },
];

function PersonRow({ name, role, initials }: { name: string; role: string; initials: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
      <Avatar className="size-11">
        <AvatarFallback className="text-[13px] font-semibold">{initials}</AvatarFallback>
      </Avatar>
      <div>
        <cite className="block text-sm font-semibold not-italic text-[#111111]">{name}</cite>
        <span className="block text-sm text-[#7C7572]">{role}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white pt-16 pb-16 sm:pt-24 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-4 flex justify-center">
            <SectionChip label="Testimonials" variant="neutral" />
          </div>
          <h2 className="text-balance text-[32px] sm:text-4xl lg:text-[48px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Trusted by Professionals
          </h2>
          <p className="mx-auto max-w-[720px] text-lg font-medium text-[#666666] leading-relaxed">
            Thousands of teachers, SLPs, OTs, and coordinators run their caseloads on AbleSpace every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Featured testimonial */}
          <Card className="grid grid-rows-[auto_1fr] gap-6 border-[#EDEDEA] bg-[#FAFAF9] p-6 shadow-none sm:col-span-2 sm:p-8 lg:row-span-2">
            <CardHeader className="p-0">
              <Image
                src={FEATURED.districtLogo}
                alt={FEATURED.district}
                width={160}
                height={48}
                className="h-10 w-auto object-contain grayscale opacity-90"
              />
            </CardHeader>
            <CardContent className="p-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-8">
                <p className="text-balance text-[18px] sm:text-[20px] font-medium leading-[1.4] text-[#111111]">
                  &ldquo;{FEATURED.quote}&rdquo;
                </p>
                <PersonRow name={FEATURED.name} role={FEATURED.role} initials={FEATURED.initials} />
              </blockquote>
            </CardContent>
          </Card>

          {/* Wide testimonial */}
          <Card className="border-[#EDEDEA] bg-white shadow-none md:col-span-2">
            <CardContent className="h-full p-6 sm:p-8">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-balance text-[17px] sm:text-[18px] font-medium leading-[1.45] text-[#111111]">
                  &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                </p>
                <PersonRow {...TESTIMONIALS[0]} />
              </blockquote>
            </CardContent>
          </Card>

          {/* Small testimonials */}
          {TESTIMONIALS.slice(1).map((t) => (
            <Card key={t.name} className="border-[#EDEDEA] bg-white shadow-none">
              <CardContent className="h-full p-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-[15px] leading-[1.55] text-[#333333]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <PersonRow {...t} />
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
