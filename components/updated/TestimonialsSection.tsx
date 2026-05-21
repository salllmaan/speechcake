import Image from "next/image";
import SectionChip from "@/components/SectionChip";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "AbleSpace completely changed how I track IEP goals. Data collection used to take forever — now it takes seconds.",
    name: "Sarah Mitchell",
    role: "Special Education Teacher",
  },
  {
    quote: "As an SLP, I needed something that worked for articulation goals AND language samples. AbleSpace handles both — and the AI notes save me hours.",
    name: "Priya Raman",
    role: "Speech-Language Pathologist",
  },
  {
    quote: "Our BCBAs and OTs were using three different tools. AbleSpace replaced all of them and our team finally documents in one place.",
    name: "James Okafor",
    role: "Special Ed Director",
  },
];

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="flex flex-col p-7 bg-white border border-[#EFEFEF] rounded-2xl">
      <div className="flex items-center gap-0.5 mb-5">
        {[...Array(5)].map((_, i) => (
          <Image key={i} src="/assets/icons/star.svg" alt="" width={14} height={14} />
        ))}
      </div>
      <p className="text-[15px] text-[#333333] leading-relaxed mb-6 flex-1">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="text-sm font-bold text-[#111111]">{name}</p>
        <p className="text-sm text-[#999999]">{role}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1080px] mx-auto">

        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-4">
            <SectionChip label="Testimonials" />
          </div>
          <h2 className="text-[32px] sm:text-4xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.2] tracking-tight mb-3">
            Loved by Special Educators
          </h2>
          <p className="text-base sm:text-lg font-medium text-[#666666] leading-relaxed max-w-[720px] mx-auto">
            50,000+ special ed professionals trust AbleSpace to manage their caseloads every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
}
