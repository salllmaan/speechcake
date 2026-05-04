"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

// ── data ──────────────────────────────────────────────────────────────────────

const PRODUCT_ITEMS = [
  { label: "IEP Audit",          desc: "Ensure student IEPs meet compliance standards.",    img: "/assets/navbar/product/iep-audit.svg",         href: "#" },
  { label: "Data Types",         desc: "9+ types — prompts, task analysis, rating scales.", img: "/assets/navbar/product/data types.svg",         href: "#" },
  { label: "Service Time",       desc: "Auto-track with smart attendance adjustments.",      img: "/assets/navbar/product/service-time.svg",       href: "#" },
  { label: "Accommodations",     desc: "Track accommodations for inclusive learning.",        img: "/assets/navbar/product/accommodations.svg",     href: "#" },
  { label: "Rotating Schedule",  desc: "Manage recurring service days with ease.",           img: "/assets/navbar/product/rotating-schedule.svg",  href: "#" },
  { label: "Medicaid Billing",   desc: "Auto-generated notes ready for your IEP system.",   img: "/assets/navbar/product/billing.svg",            href: "#" },
  { label: "Reports",            desc: "20+ auto-generated graphs for IEP meetings.",        img: "/assets/navbar/product/reports.svg",            href: "#" },
  { label: "Collaboration",      desc: "Securely share data with your whole team.",          img: "/assets/navbar/product/user-square.svg",        href: "#" },
];

const PRODUCT_FOR_ITEMS = [
  { label: "Learn More",       icon: InformationCircleIcon,      href: "#schools" },
  { label: "Get a Quote",      icon: ChatBubbleLeftRightIcon,    href: "#" },
  { label: "Schedule a Demo",  icon: ArrowTopRightOnSquareIcon,  href: "#" },
];

const RESOURCES_ITEMS = [
  { label: "Tutorials",  desc: "Step-by-step guides to get started fast.",    img: "/assets/navbar/resources/tutorials.svg",  href: "#", badge: null },
  { label: "Blog",       desc: "Tips, updates, and special ed insights.",      img: "/assets/navbar/resources/blog.svg",        href: "#", badge: null },
  { label: "FAQs",       desc: "Answers to the most common questions.",        img: "/assets/navbar/resources/faqs.svg",        href: "#", badge: null },
  { label: "Courses",    desc: "Deep-dive learning for your whole team.",      img: "/assets/navbar/resources/courses.svg",     href: "#", badge: "Coming Soon" },
  { label: "Reviews",    desc: "See what 20,000+ educators are saying.",       img: "/assets/navbar/resources/reviews.svg",     href: "#", badge: null },
];

const CONTACT_ITEMS = [
  { label: "Email us",    icon: EnvelopeIcon,  href: "#" },
  { label: "Call us",     icon: PhoneIcon,     href: "#" },
  { label: "Live chat",   icon: ChatBubbleLeftRightIcon, href: "#" },
];

const NAV_LINKS_BEFORE = [
  { label: "Schools/Districts", href: "#schools" },
];

const NAV_LINKS_AFTER = [
  { label: "Pricing", href: "#pricing" },
];

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

function ProductDropdown() {
  const { open, setOpen, onEnter, onLeave } = useHoverDropdown();

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <DropdownTrigger label="Product" open={open} />

      {open && (
        <DropdownPanel>
          {/* Left — items grid */}
          <div className="flex-1 p-5">
            <p className="text-[11px] font-semibold text-[#AAAAAA] uppercase tracking-wider mb-4 px-1">Product</p>
            <div className="grid grid-cols-2 gap-1">
              {PRODUCT_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#FCFBF7] transition-colors group"
                >
                  <div className="w-8 h-8 bg-[#FCFBF7] group-hover:bg-white border border-[#F5F2E5] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <Image src={item.img} alt={item.label} width={18} height={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2B2E33] leading-tight">{item.label}</p>
                    <p className="text-xs text-[#5D636F] leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <PanelDivider />

          {/* Right — Schools/Districts card */}
          <div className="w-80 p-5 flex flex-col">
            <div className="bg-[#F9FBF8] border border-[#E9F0E6] rounded-lg p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-[#2E312D] leading-tight mb-2">Schools/Districts</h3>
              <p className="text-xs text-[#575E55] leading-relaxed mb-4">
                Ease the burden of paperwork on providers, and enhance compliance by leveraging the power of digital data.
              </p>
              <div className="flex flex-col gap-0.5 mt-auto">
                {PRODUCT_FOR_ITEMS.map((item) => (
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
                  <div className="w-8 h-8 bg-[#FCFBF7] group-hover:bg-white border border-[#F5F2E5] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <Image src={item.img} alt={item.label} width={18} height={18} />
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
                {PRODUCT_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image src={item.img} alt={item.label} width={16} height={16} />
                    {item.label}
                  </Link>
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
              href="#schools"
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
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-[#5D636F] hover:text-[#111111] hover:bg-[#FAFAFA] rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image src={item.img} alt={item.label} width={16} height={16} />
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
