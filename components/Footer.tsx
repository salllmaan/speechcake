import Image from "next/image";
import Link from "next/link";
import AppStoreButtons from "@/components/AppStoreButtons";

const PROFESSIONS = [
  "Special Education Teacher",
  "Paraprofessionals",
  "Speech Language Pathologist",
  "Occupational Therapist",
  "Behavior Therapist",
  "General Education Teacher",
  "Enterprise",
];

const LINKS = [
  {
    heading: "Product",
    items: [
      "Watch Demo",
      "IEP Goal Tracking",
      "Service Tracking",
      "Accommodations Tracking",
      "Reports & Billing",
      "Scheduling",
      "Admin Tools & Compliance",
    ],
  },
  {
    heading: "AbleSpace",
    items: [
      "Pricing",
      "For Teachers",
      "For Schools / Districts",
      "For Enterprises",
      "AbleSpace vs IEP System",
      "Community",
      "Sign up for free",
      "Get a demo",
    ],
  },
  {
    heading: "Resources",
    items: ["FAQs", "Tutorials", "Courses"],
  },
  {
    heading: "Company",
    items: ["About Us", "Customer Stories", "Contact Us"],
  },
];

const COMPLIANCE_BADGES = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif", alt: "ISO 27001 Certified" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-[#F0F0F0]">

      {/* Main footer */}
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/assets/navbar/ablespace-logo.svg" alt="AbleSpace" width={36} height={36} />
              <span className="text-[18px] font-bold text-[#111111]">AbleSpace</span>
            </div>
            <p className="text-sm text-[#888888] leading-relaxed max-w-[180px]">
              IEP Goal Tracking App for Special Education Professionals
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {LINKS.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-bold text-[#111111] mb-4">{col.heading}</p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* App store + compliance row */}
      <div className="border-t border-[#F0F0F0]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-6">

          <AppStoreButtons />

          <div className="flex items-center gap-3">
            {COMPLIANCE_BADGES.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={48}
                height={48}
                className="object-contain h-10 w-auto"
              />
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#F0F0F0]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-4">

          <p className="text-sm text-[#999999]">©2026 - AbleSpace</p>

          <div className="flex items-center gap-1 text-sm text-[#999999]">
            {["Terms & Condition", "BAA", "Privacy Policy", "Cookie Preference"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-1">
                <Link href="#" className="hover:text-[#111111] transition-colors">{item}</Link>
                {i < arr.length - 1 && <span className="opacity-30 mx-0.5">|</span>}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Facebook */}
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[#555555]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.5 1H11V3H9.5C8.67 3 8 3.67 8 4.5V6H11L10.5 8H8V13H6V8H4V6H6V4.5C6 2.57 7.57 1 9.5 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </Link>
            {/* Instagram */}
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[#555555]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="10.5" cy="3.5" r="0.75" fill="currentColor"/></svg>
            </Link>
            {/* YouTube */}
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[#555555]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M5.5 5.5l3 1.5-3 1.5V5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            </Link>
            {/* LinkedIn */}
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors text-[#555555]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M4 7V10M4 5v.5M7 10V7c0-1.657.5-2 2-2s2 .343 2 2v3M7 7v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
