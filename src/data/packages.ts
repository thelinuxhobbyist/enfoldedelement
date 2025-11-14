import { Package, PackageWithId, createPackagesWithIds } from '@/types/package';

// Helper to parse numeric part from display price (e.g., "£100/month" -> 100)
const parsePriceNumeric = (display: string): number => {
  const match = display.match(/([0-9]+(?:\.[0-9]+)?)/);
  return match ? Number(match[1]) : 0;
};

// ==========================
//   ENFOLDED MEDIA PACKAGES
// ==========================

const basePackages: Package[] = [
  {
    slug: "multilingual-brand-starter",
    name: "Multilingual Brand Starter",
    shortDescription: "Logo + cultural adaptations for diverse UK audiences.",
    description:
      "A foundational brand identity designed with cultural sensitivity in mind. Includes a multilingual-ready logo, colour palette and typography recommendations.",
    priceDisplay: "£180",
    priceNumeric: parsePriceNumeric("£180"),
    hosting: null,
    packageFeatures: [
      "Multilingual-ready design",
      "Cultural colour palette",
      "3–5 day delivery"
    ],
    detailFeatures: [
      "Primary logo + variations",
      "Culturally appropriate colour palette",
      "Typography system",
      "Mini brand guideline",
      "Up to 3 revisions"
    ]
  },

  {
    slug: "community-outreach-poster-pack",
    name: "Community Outreach Poster Pack",
    shortDescription: "Print + digital posters suitable for multicultural communities.",
    description:
      "Ideal for schools, councils, and community groups. Posters designed for maximum clarity, accessibility and cultural resonance.",
    priceDisplay: "£70",
    priceNumeric: parsePriceNumeric("£70"),
    hosting: null,
    packageFeatures: [
      "Print + digital formats",
      "Inclusive visual design",
      "Fast delivery"
    ],
    detailFeatures: [
      "A4/A3 print-ready files",
      "Social media versions included",
      "Accessible typography",
      "Culturally sensitive imagery guidance",
      "Up to 2 revisions"
    ]
  },

  {
    slug: "cultural-social-media-kit",
    name: "Cultural Social Media Kit",
    shortDescription: "Templates designed to engage multilingual or diverse audiences.",
    description:
      "A toolkit of branded templates tailored for communities, minority-owned businesses and local organisations.",
    priceDisplay: "£120",
    priceNumeric: parsePriceNumeric("£120"),
    hosting: null,
    packageFeatures: [
      "10 branded templates",
      "Multilingual-ready layout",
      "Cultural design considerations"
    ],
    detailFeatures: [
      "Square, story and banner formats",
      "Brand-matched colours",
      "Inclusive design patterns",
      "Guidance on multilingual posting",
      "Up to 3 revisions"
    ]
  },

  {
    slug: "translation-design-bundle",
    name: "Translation + Design Bundle",
    shortDescription: "Translated copy + matching visual design.",
    description:
      "Perfect for organisations needing culturally aware translation paired with professional visual layout. You provide the content, we adapt and design it.",
    priceDisplay: "£95",
    priceNumeric: parsePriceNumeric("£95"),
    hosting: null,
    packageFeatures: [
      "Professional translation",
      "Culturally sensitive adaptation",
      "Designed for print & digital"
    ],
    detailFeatures: [
      "Up to 300 words translated",
      "1-page poster or leaflet layout",
      "Print + digital formats",
      "Cultural insight notes",
      "Up to 2 revision rounds"
    ]
  },

  {
    slug: "multilingual-website-starter",
    name: "Multilingual Website Starter",
    shortDescription: "One-page multilingual-ready website.",
    description:
      "A fast, accessible one-page site built with multilingual support. Ideal for local businesses, community services, or cultural events.",
    priceDisplay: "£220",
    priceNumeric: parsePriceNumeric("£220"),
    hosting: "Free hosting (Domain required)",
    packageFeatures: [
      "One-page responsive site",
      "Multilingual setup",
      "Free hosting"
    ],
    detailFeatures: [
      "Mobile-first design",
      "Two languages included (content provided)",
      "SEO-friendly structure",
      "Social links + contact form",
      "SSL included",
      "Domain required"
    ]
  },

  {
    slug: "cultural-event-promo-pack",
    name: "Cultural Event Promo Pack",
    shortDescription: "Full promotional kit for community or cultural events.",
    description:
      "Designed for councils, schools, or community organisations. Includes posters, flyers, social templates and optional multilingual versions.",
    priceDisplay: "£150",
    priceNumeric: parsePriceNumeric("£150"),
    hosting: null,
    packageFeatures: [
      "Posters + flyers",
      "Social media versions",
      "Multilingual-ready"
    ],
    detailFeatures: [
      "A4/A3 poster",
      "DL or A5 flyer",
      "Social media templates",
      "Optional multilingual adaptation (content provided)",
      "Accessible typography"
    ]
  },

  {
    slug: "local-business-identity-kit",
    name: "Local Business Identity Kit",
    shortDescription: "Branding tailored to neighbourhood and cultural communities.",
    description:
      "Designed with small ethnic-minority businesses in mind. Creates trust and cultural connection through tailored local design.",
    priceDisplay: "£130",
    priceNumeric: parsePriceNumeric("£130"),
    hosting: null,
    packageFeatures: [
      "Logo + mini brand guide",
      "Community-focused design",
      "Fast turnaround"
    ],
    detailFeatures: [
      "Primary logo",
      "Colour palette for target community",
      "Typography choices",
      "Social profile image set",
      "Two revision rounds"
    ]
  }
];

// Exclude premium packages across the site
const publicPackages = basePackages.filter(
  (p) => p.slug !== "premium-package-v2" && !/premium/i.test(p.name)
);

export const packages: PackageWithId[] = createPackagesWithIds(publicPackages);
