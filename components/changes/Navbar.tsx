"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// ── data ──────────────────────────────────────────────────────────────────────

// Product dropdown — grouped into product categories (finalized IA).
type ProductChild = { label: string; img: string; href: string };
type ProductCategory = {
  label: string;
  desc: string;
  img: string;
  href: string;
  /** Sub-features. If empty, the middle column shows a spotlight instead. */
  children: ProductChild[];
  /** Standalone categories show this image + blurb in the middle column. */
  spotlightImage?: string;
  spotlightBlurb?: string;
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    label: "IEP Tracking",
    desc: "Data, Service time, Accommodations, and more in one workflow.",
    img: "/assets/navbar/product/data types.svg",
    href: "#",
    children: [
      { label: "Data Collection",  img: "/assets/navbar/product/data types.svg",        href: "/changes/features/data-collection" },
      { label: "Service Time",      img: "/assets/navbar/product/service-time.svg",      href: "/changes/features/service-time" },
      { label: "Accommodations",    img: "/assets/navbar/product/accommodations.svg",    href: "/changes/features/accommodations" },
      { label: "Rotating Schedule", img: "/assets/navbar/product/rotating-schedule.svg", href: "/changes/features/rotating-schedule" },
      { label: "Reports",           img: "/assets/navbar/product/reports.svg",           href: "/changes/features/reports" },
      { label: "Collaboration",     img: "/assets/navbar/product/user-square.svg",       href: "/changes/features/collaboration" },
    ],
  },
  {
    label: "IEP Audit",
    desc: "Review student IEPs for compliance, missing sections, and due date accuracy.",
    img: "/assets/navbar/product/iep-audit.svg",
    href: "/changes/features/iep-audit",
    children: [],
    spotlightBlurb: "Catch missing sections and looming due dates before they become compliance risks.",
    spotlightImage: "/assets/changes/iep-data-collection-8.png",
  },
  {
    label: "Medicaid Billing",
    desc: "Generate billing-ready documentation and submission notes from session data.",
    img: "/assets/navbar/product/billing.svg",
    href: "/changes/features/medicaid-billing",
    children: [],
    spotlightBlurb: "Turn session data into compliant, submission-ready billing notes automatically.",
    spotlightImage: "/assets/final/landing-page/iep-data-collection-billing.png",
  },
  {
    label: "Resource Generation",
    desc: "Goals, worksheets, materials, and more generated with AI.",
    img: "/assets/navbar/product/reports.svg", // TODO: needs dedicated icon
    href: "#",
    children: [
      { label: "Goal Generation",      img: "/assets/navbar/product/iep-audit.svg",  href: "#" }, // TODO: icon
      { label: "Worksheet Generation", img: "/assets/navbar/product/data types.svg", href: "#" }, // TODO: icon
      { label: "Materials Library",    img: "/assets/navbar/product/reports.svg",    href: "#" }, // TODO: icon
    ],
  },
  {
    label: "Family Management",
    desc: "Keep families in the loop with secure, real-time visibility into progress.",
    img: "/assets/navbar/product/user-square.svg",
    href: "/changes/features/family-management",
    children: [],
    spotlightBlurb: "Give families secure, real-time visibility into goals, daily progress, and updates — you control exactly what they see.",
    spotlightImage: "/assets/changes/documentation-02.png",
  },
];

const RESOURCES_ITEMS = [
  { label: "Tutorials",  desc: "Step-by-step guides to get started fast.",    img: "/assets/navbar/resources/tutorials.svg",  href: "/changes/tutorials", badge: null },
  { label: "Blog",       desc: "Tips, updates, and special ed insights.",      img: "/assets/navbar/resources/blog.svg",        href: "/changes/blog",      badge: null },
  { label: "FAQs",       desc: "Answers to the most common questions.",        img: "/assets/navbar/resources/faqs.svg",        href: "/changes/faqs",      badge: null },
  { label: "Courses",    desc: "Deep-dive learning for your whole team.",      img: "/assets/navbar/resources/courses.svg",     href: "#",                  badge: "Coming Soon" },
  { label: "Reviews",    desc: "See what 20,000+ educators are saying.",       img: "/assets/navbar/resources/reviews.svg",     href: "/changes/reviews",   badge: null },
];

const CONTACT_ITEMS = [
  { label: "Email us",    icon: EnvelopeIcon,  href: "#" },
  { label: "Call us",     icon: PhoneIcon,     href: "#" },
  { label: "Live chat",   icon: ChatBubbleLeftRightIcon, href: "#" },
];

const NAV_LINKS_BEFORE = [
  { label: "Schools/Districts", href: "/changes/schools-districts" },
];

const NAV_LINKS_AFTER = [
  { label: "Pricing", href: "#pricing" },
];

// ── mask icon (tintable via CSS — default #707685, hover #00A9F8 on group hover) ─

function MaskIcon({ src, size = 18 }: { src: string; size?: number }) {
  const url = `url("${encodeURI(src)}")`;
  return (
    <span
      aria-hidden
      className="inline-block flex-shrink-0 bg-[#00A9F8]"
      style={{
        width: size,
        height: size,
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

// ── shared hook ───────────────────────────────────────────────────────────────

function useHoverDropdown() {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnter = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  }, []);

  const onLeave = useCallback(() => {
    timer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return { open, setOpen, onEnter, onLeave };
}

// ── shared sub-components ─────────────────────────────────────────────────────

function DropdownTrigger({ label, open }: { label: string; open: boolean }) {
  return (
    <button
      className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
        open ? "text-[#111111] bg-[#FAFAFA]" : "text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA]"
      }`}
    >
      {label}
      <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

function DropdownPanel({ children, width = "w-[860px]" }: { children: React.ReactNode; width?: string }) {
  return (
    <div className={`absolute top-full left-0 mt-2 ${width} bg-white border border-[#E8E8E8] rounded-2xl shadow-xl shadow-black/8 z-50 overflow-hidden`}>
      <div className="flex h-full">{children}</div>
    </div>
  );
}

function PanelDivider() {
  return <div className="w-px bg-[#F0F0F0] my-5 flex-shrink-0" />;
}

// ── Product dropdown ──────────────────────────────────────────────────────────

// A trailing arrow that rests hidden and slides in on row hover — keeps the
// resting state quiet, signals navigability on intent.
function HoverArrow({ className = "" }: { className?: string }) {
  return (
    <ArrowRightIcon
      className={`h-3.5 w-3.5 flex-shrink-0 -translate-x-1 text-[#C4BDB6] opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:text-[#00A9F8] group-hover:opacity-100 ${className}`}
    />
  );
}

function ProductDropdown() {
  const { open, setOpen, onEnter, onLeave } = useHoverDropdown();
  const close = () => setOpen(false);
  const [active, setActive] = useState(0);
  const cat = PRODUCT_CATEGORIES[active];

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <DropdownTrigger label="Product" open={open} />

      {open && (
        <DropdownPanel width="w-[1000px]">
          {/* Left — category list (hover to activate) */}
          <div className="w-[360px] flex-shrink-0 p-3">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <Link
                key={c.label}
                href={c.href}
                onClick={close}
                onMouseEnter={() => setActive(i)}
                className={`group flex items-center gap-3 rounded-xl border px-3 py-3 transition-colors ${
                  i === active
                    ? "border-[#F6F6F6] bg-[#FCFCFB]"
                    : "border-transparent hover:border-[#F6F6F6] hover:bg-[#FCFCFB]"
                }`}
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#EDEDEA] bg-white">
                  <MaskIcon src={c.img} size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold leading-tight text-[#16181D]">{c.label}</span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-[#7C8089]">{c.desc}</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Middle — active category's children, or a spotlight if standalone */}
          <div className="min-w-0 flex-1 p-3">
            {cat.children.length > 0 ? (
              <div className="flex flex-col">
                {cat.children.map((c, idx) => (
                  <div key={c.label}>
                    {idx > 0 && <div className="mx-3 h-px bg-[#F0EFEB]" />}
                    <Link
                      href={c.href}
                      onClick={close}
                      className="group flex items-center justify-between rounded-lg px-3 py-3.5 transition-colors hover:bg-[#FAFAF9]"
                    >
                      <span className="flex items-center gap-3">
                        <MaskIcon src={c.img} size={18} />
                        <span className="text-[15px] font-medium text-[#16181D]">{c.label}</span>
                      </span>
                      <ArrowRightIcon className="h-4 w-4 text-[#C4BDB6] transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-[#00A9F8]" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <Link
                href={cat.href}
                onClick={close}
                aria-label={`Explore ${cat.label}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#F6F6F6] bg-[#FCFCFB]"
              >
                <div className="px-4 pt-5">
                  <h3 className="text-[17px] font-semibold leading-tight text-[#16181D]">{cat.label}</h3>
                  <p className="mt-2 max-w-[280px] text-[14px] leading-snug text-[#7C8089]">
                    {cat.spotlightBlurb ?? cat.desc}
                  </p>
                  <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F1ED] transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-[#E9E8E3]">
                    <Image src="/assets/icons/arrow-right-04.svg" alt="" width={16} height={16} className="h-4 w-4" />
                  </span>
                </div>
                {cat.spotlightImage && (
                  <div className="relative mt-4 w-full flex-1">
                    <Image src={cat.spotlightImage} alt={cat.label} fill className="object-contain object-bottom" />
                  </div>
                )}
              </Link>
            )}
          </div>

          <PanelDivider />

          {/* Right — promo card + CTA links */}
          <div className="flex w-[284px] flex-shrink-0 flex-col gap-3 p-4">
            <Link
              href="/changes/schools-districts"
              onClick={close}
              className="group flex flex-1 flex-col overflow-hidden rounded-2xl bg-[#FBF3E7]"
            >
              <div className="relative h-44 w-full">
                <Image
                  src="/assets/final/landing-page/schools-and-districts.png"
                  alt="The AbleSpace admin dashboard showing district-wide data and providers"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[16px] font-bold leading-tight text-[#2E2A24]">Built for Schools &amp; Districts</h3>
                <p className="mt-1.5 text-[12.5px] leading-snug text-[#6B6258]">
                  Standardized, compliant workflows with district-wide visibility.
                </p>
                <span className="mt-auto ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#2E2A24] transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:bg-white">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </DropdownPanel>
      )}
    </div>
  );
}

// ── Resources dropdown ────────────────────────────────────────────────────────

function ResourcesDropdown() {
  const { open, setOpen, onEnter, onLeave } = useHoverDropdown();

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <DropdownTrigger label="Resources" open={open} />

      {open && (
        <DropdownPanel width="w-[760px]">
          {/* Left — resources list */}
          <div className="flex-1 p-5">
            <p className="text-[11px] font-semibold text-[#AAAAAA] uppercase tracking-wider mb-4 px-1">Resources</p>
            <div className="flex flex-col gap-1">
              {RESOURCES_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FCFBF7] transition-colors group"
                >
                  <div className="w-8 h-8 bg-white border border-[#F5F2E5] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <MaskIcon src={item.img} size={18} />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div>
                      <p className="text-sm font-medium text-[#2B2E33] leading-tight">{item.label}</p>
                      <p className="text-xs text-[#5D636F] leading-snug mt-0.5">{item.desc}</p>
                    </div>
                    {item.badge && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] font-semibold bg-[#F0F0F0] text-[#888888] rounded-full whitespace-nowrap">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <PanelDivider />

          {/* Right — Contact Us card */}
          <div className="w-80 p-5 flex flex-col">
            <div className="bg-[#F9FBF8] border border-[#E9F0E6] rounded-lg p-6 flex-1 flex flex-col">
              <h3 className="text-base font-bold text-[#2E312D] leading-tight mb-2">Contact Us</h3>
              <p className="text-xs text-[#575E55] leading-relaxed mb-4">
                Have a question? Our team is here to help — reach out anytime.
              </p>
              <div className="flex flex-col gap-0.5 mt-auto">
                {CONTACT_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E9F0E6] transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-[#575E55]" />
                      <span className="text-sm text-[#575E55] group-hover:text-[#2E312D] transition-colors">{item.label}</span>
                    </div>
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-[#575E55] group-hover:text-[#2E312D] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DropdownPanel>
      )}
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#F0F0F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="AbleSpace">
            <Image src="/assets/navbar/ablespace-logo.svg" alt="AbleSpace" width={28} height={28} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            <ProductDropdown />
            <Link
              href="#ai"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#5D636F] hover:text-[#111111] transition-colors rounded-md hover:bg-[#FAFAFA] whitespace-nowrap"
            >
              AbleSpace
              <Image src="/assets/navbar/resources/ablespace-ai.svg" alt="AbleSpace AI" width={16} height={16} />
            </Link>
            {NAV_LINKS_BEFORE.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#5D636F] hover:text-[#111111] transition-colors rounded-md hover:bg-[#FAFAFA] whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <ResourcesDropdown />
            {NAV_LINKS_AFTER.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#5D636F] hover:text-[#111111] transition-colors rounded-md hover:bg-[#FAFAFA] whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <Link href="#" className="px-4 py-1.5 text-sm font-semibold bg-[#F2F2F2] text-[#7A716B] rounded-lg hover:bg-[#F0F0F0] transition-colors whitespace-nowrap">
              Get a Quote
            </Link>
            <div className="w-px h-5 bg-[#E5E5E5]" />
            <Link href="#" className="px-3 py-1.5 text-sm text-[#5D636F] hover:text-[#111111] transition-colors whitespace-nowrap">
              Login
            </Link>
            <Link href="#" className="px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-white rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Sign Up for Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 rounded-md hover:bg-[#FAFAFA] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XMarkIcon className="w-5 h-5 text-[#111111]" /> : <Bars3Icon className="w-5 h-5 text-[#111111]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#F0F0F0] bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">

            {/* Product accordion */}
            <button
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="flex items-center justify-between px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
            >
              Product
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-150 ${mobileProductOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProductOpen && (
              <div className="pl-3 flex flex-col gap-0.5">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <div key={cat.label}>
                    <Link
                      href={cat.href}
                      className="group flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-[#2B2E33] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <MaskIcon src={cat.img} size={16} />
                      {cat.label}
                    </Link>
                    {cat.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block pl-[38px] pr-3 py-1.5 text-sm text-[#5D636F] hover:text-[#00A9F8] hover:bg-[#FAFAFA] rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* AbleSpace AI */}
            <Link
              href="#ai"
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              AbleSpace
              <Image src="/assets/navbar/resources/ablespace-ai.svg" alt="AbleSpace AI" width={16} height={16} />
            </Link>

            {/* Schools/Districts */}
            <Link
              href="/changes/schools-districts"
              className="px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Schools/Districts
            </Link>

            {/* Resources accordion */}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex items-center justify-between px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
            >
              Resources
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-150 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-3 flex flex-col gap-0.5">
                {RESOURCES_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2.5 px-3 py-2 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MaskIcon src={item.img} size={16} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-[#F0F0F0] text-[#888888] rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="#pricing"
              className="px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>

            <div className="flex flex-col gap-2 pt-2 border-t border-[#F0F0F0] mt-1">
              <Link href="#" className="px-4 py-2.5 text-sm font-semibold bg-[#F2F2F2] text-[#7A716B] rounded-lg text-center hover:bg-[#F0F0F0] transition-colors">
                Get a Quote
              </Link>
              <Link href="#" className="px-3 py-2.5 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors text-center">
                Login
              </Link>
              <Link href="#" className="px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-[#00A9F8] to-[#00A0EB] text-white rounded-lg text-center hover:opacity-90 transition-opacity">
                Sign Up for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
