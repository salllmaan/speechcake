// ─────────────────────────────────────────────────────────────────────────────
// Feature page template — config schema
//
// Every feature landing page (Service Time, IEP Audit, Medicaid Billing, ...) is
// built from ONE config object of this shape. To make a new feature page:
//   1. Copy app/changes/features/_template/config.ts to app/changes/features/<slug>/config.ts
//   2. Fill in the texts + image paths
//   3. Copy the matching page.tsx
// No layout/styling work needed — the template renders everything in the
// /changes visual language.
// ─────────────────────────────────────────────────────────────────────────────

export type FeatureCta = {
  label: string;
  href: string;
};

/** A single card inside a showcase grid (bento). */
export type ShowcaseCard = {
  title: string;
  description: string;
  /** Image path under /public. Leave "" to render a neutral placeholder. */
  image?: string;
  imageAlt?: string;
  /** Optional small icon (svg) shown above the title. */
  iconSrc?: string;
  /** Width in a 6-column bento grid on large screens. Defaults to 3 (half). */
  span?: 2 | 3 | 4 | 6;
  /** Wide cards: render content left, image right (instead of image-bottom). */
  imageRight?: boolean;
  /** Wide cards: render image left, content right. */
  imageLeft?: boolean;
  /** Horizontal cards: render the image ~20% larger. */
  imageLarge?: boolean;
  /** Show the image contained & centered (full, not cover-cropped). */
  imageContain?: boolean;
};

/** A "showcase" is a titled section with a grid of feature cards. */
export type ShowcaseSection = {
  chip?: string;
  chipIconSrc?: string;
  title: string;
  subtitle?: string;
  /**
   * "bento" (default): cards tile by their `span` (4/2/...) — best for a few
   *   hero-style cards.
   * "grid": uniform equal cards that auto-wrap (1/2/3 per row) — best when a
   *   feature has MANY points; no span planning needed, `span` is ignored.
   */
  layout?: "bento" | "grid";
  /** Grid layout only: center the cards (so a ragged last row is centered). */
  centered?: boolean;
  /** Wrap each card in a MagicCard (mouse-following gradient-border glow). */
  glow?: boolean;
  cards: ShowcaseCard[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FeaturePageConfig = {
  /** Used for <title> / metadata. */
  name: string;

  hero: {
    chip: string;
    chipIconSrc?: string;
    /** Optional accent word rendered first in purple italic (e.g. "Service Time"). */
    titleAccent?: string;
    title: string;
    subtitle: string;
    /** Short capability pills shown under the subtitle. */
    pills?: string[];
    primaryCta: FeatureCta;
    secondaryCta: FeatureCta;
    image?: string;
    imageAlt?: string;
    /** Optional demo video opened from the hero mockup (defaults to a placeholder). */
    videoSrc?: string;
  };

  /** Heading shown above the logo marquee. Omit to hide the marquee. */
  trustedByText?: string;

  /** One or more showcase sections (e.g. "All-in-One Service Tracking"). */
  showcases: ShowcaseSection[];

  benefits?: {
    chip?: string;
    chipIconSrc?: string;
    title: string;
    items: string[];
  };

  faq?: {
    title?: string;
    items: FaqItem[];
  };

  cta?: {
    chip?: string;
    chipIconSrc?: string;
    title: string;
    subtitle: string;
    primaryCta: FeatureCta;
    secondaryCta: FeatureCta;
    stats?: { number: string; label: string }[];
  };
};
