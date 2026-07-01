// Single source of truth for the certification / compliance badges shown in the
// hero strips (home, feature pages, schools & districts). Add or remove ONE entry
// here and every strip updates automatically — the strip wraps to any count.
//
// To add a badge: drop its image in /public/assets/landing-page/ and add a line below.
export type ComplianceBadge = { src: string; alt: string };

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  { src: "/assets/landing-page/Hipaa.avif", alt: "HIPAA Compliant" },
  { src: "/assets/landing-page/ferpa.avif", alt: "FERPA Compliant" },
  { src: "/assets/landing-page/iso.avif", alt: "ISO 27001 Certified" },
  { src: "/assets/landing-page/1edtech.png", alt: "1EdTech Data Privacy Certified" },
  { src: "/assets/landing-page/essa.png", alt: "Digital Promise ESSA Tier 4 Certified" },
  // Coming in ~1-2 months — drop the asset and uncomment:
  // { src: "/assets/landing-page/soc2.png", alt: "SOC 2 Certified" },
];
