import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "10+ Data Types",
  "Phases, Labels & History",
  "AI-Powered Tracking",
  "Audit-Ready Reports",
  "HIPAA & FERPA Compliant",
];

export const Cta4 = ({
  title = "Call to Action",
  description = "Collect data with a single click, organize it automatically, and ensure nothing slips through the cracks.",
  buttonText = "Get Started",
  buttonUrl = "#",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto flex max-w-[1080px] justify-center">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#EDEDEA] bg-[#FAFAF9] px-6 py-10 md:flex-row lg:px-20 lg:py-16">
            <div className="md:w-1/2">
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">{title}</h4>
              <p className="text-[#666666] leading-relaxed">{description}</p>
              <Link
                href={buttonUrl}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                {buttonText} <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="md:w-1/3">
              <ul className="flex flex-col space-y-2.5 text-sm font-medium text-[#5E5C55]">
                {items.map((item, idx) => (
                  <li className="flex items-center" key={idx}>
                    <Check className="mr-4 size-4 flex-shrink-0 text-[#A484CE]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
