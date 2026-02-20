import { Package, PackageWithId, createPackagesWithIds } from '@/types/package';

// Helper to parse numeric part from display price (e.g., "£100/month" -> 100)
const parsePriceNumeric = (display: string): number => {
  const match = display.match(/([0-9]+(?:\.[0-9]+)?)/);
  return match ? Number(match[1]) : 0;
};

// Define the base packages without IDs – mapped from the provided list
const basePackages: Package[] = [
  {
    slug: "event-poster",
    name: "Event Poster Design",
    category: "Design",
    shortDescription: "Print & digital posters designed for multicultural audiences.",
    description:
      "Bold, accessible posters produced in print-ready and digital formats that consider cultural context and multilingual readability. Ideal for community events and local outreach.",
    priceDisplay: "£85",
    priceNumeric: parsePriceNumeric("£85"),
    hosting: null,
    packageFeatures: ["Print & digital formats", "Culturally aware design", "Fast delivery (3-5 days)"],
    detailFeatures: [
      "Print-ready high resolution (A3/A4)",
      "Social-sized digital exports",
      "Accessible typography and clear hierarchy",
      "Optional bilingual layout adjustments",
      "Up to 2 revision rounds"
    ]
  },
  {
    slug: "global-pack",
    name: "Startup Brand Pack",
    category: "Design",
    shortDescription: "Brand identity with cultural considerations and social templates.",
    description:
      "A cohesive starter brand kit for new ventures that need culturally-aware visual identity: logo, business cards, a flyer, and social templates tuned for diverse audiences.",
    priceDisplay: "£220",
    priceNumeric: parsePriceNumeric("£220"),
    hosting: null,
    packageFeatures: ["Logo & brand elements", "Social templates", "Cultural guidance"],
    detailFeatures: [
      "Primary logo + one variant",
      "Business card design (print-ready)",
      "Promotional flyer layout",
      "3 social media templates (square & story)",
      "Short brand usage notes"
    ]
  },
  {
    slug: "quick-amendments",
    name: "Quick Amendments",
    category: "Design",
    shortDescription: "Fast edits and small updates with community-minded care.",
    description:
      "Quick, reliable updates to existing materials — text, images, or minor layout changes — handled with sensitivity to multilingual layouts and accessibility where needed.",
    priceDisplay: "£40",
    priceNumeric: parsePriceNumeric("£40"),
    hosting: null,
    packageFeatures: ["Fast design updates", "Up to 2 rounds of revisions", "Print-ready PDF provided"],
    detailFeatures: [
      "Minor image and text replacements",
      "Layout tweaks for multilingual fit",
      "Quick turnaround (1-2 days)",
      "Print-ready high resolution file",
      "Up to two revision rounds"
    ]
  },
  {
    slug: "layout-design",
    name: "Layout Design",
    category: "Design",
    shortDescription: "Custom layout for multilingual print or digital content.",
    description:
      "A single bespoke layout designed to present your content clearly across languages — suitable for leaflets, reports, newsletters or web content blocks.",
    priceDisplay: "£75",
    priceNumeric: parsePriceNumeric("£75"),
    hosting: null,
    packageFeatures: ["One custom layout design", "Multilingual-aware formatting", "Fast delivery (3-5 days)"],
    detailFeatures: [
      "Tailored layout design based on your brief",
      "Print-ready and digital exports",
      "Consideration for RTL/LTR spacing where needed",
      "Accessible type scale and hierarchy",
      "3 revision rounds"
    ]
  },
  {
    slug: "recreate-design",
    name: "Recreate Design",
    category: "Design",
    shortDescription: "Professional recreation or redesign of existing artwork.",
    description:
      "We recreate or modernise your existing designs with improved accessibility, print quality and multilingual readiness — perfect when source files are outdated or missing.",
    priceDisplay: "£110",
    priceNumeric: parsePriceNumeric("£110"),
    hosting: null,
    packageFeatures: ["Recreation & redesign", "Print and digital formats", "Higher-quality output"],
    detailFeatures: [
      "Redraw or clean-up of supplied artwork",
      "Improved typography and layout",
      "Print-ready and digital versions",
      "Cultural review for imagery/text",
      "Up to 3 revision rounds"
    ]
  },
  {
    slug: "full-design-package",
    name: "Full Design Package",
    category: "Design",
    shortDescription: "End-to-end multilingual design for campaigns or brands.",
    description:
      "Comprehensive design service covering concept to delivery with cultural and language considerations — suitable for brand launches, major events or full campaigns.",
    priceDisplay: "£220",
    priceNumeric: parsePriceNumeric("£220"),
    hosting: null,
    packageFeatures: ["Concept to delivery", "Brand-aware design", "Multilingual options"],
    detailFeatures: [
      "Up to three design concepts",
      "Brand style guide summary",
      "Assets for print & digital",
      "Cultural adaptation guidance",
      "Project management and two rounds of significant revisions"
    ]
  },
  {
    slug: "small-business-starter",
    name: "Small Business Starter Package",
    category: "Website",
    shortDescription: "One-page multilingual-ready website with hosting guidance.",
    description:
      "A professional one-page site designed to present your business clearly to diverse local audiences. Includes multilingual structure and guidance for future language additions.",
    priceDisplay: "£240",
    priceNumeric: parsePriceNumeric("£240"),
    hosting: "Free hosting (Domain purchase required)",
    packageFeatures: ["Professional design", "Multilingual-ready", "Hosting guidance"],
    detailFeatures: [
      "One-page responsive website",
      "Mobile-optimized design",
      "Two languages supported (content provided)",
      "Contact form integration",
      "Basic SEO setup and SSL"
    ]
  },
  {
    slug: "branding-refresh",
    name: "Branding Refresh",
    category: "Design",
    shortDescription: "Update your visual identity with multilingual considerations.",
    description:
      "Rejuvenate your existing brand with refined logo, colour updates and a short multilingual style guide to help communications feel consistent across languages.",
    priceDisplay: "£180",
    priceNumeric: parsePriceNumeric("£180"),
    hosting: null,
    packageFeatures: ["Logo refinement", "Colour & type updates", "Multilingual notes"],
    detailFeatures: [
      "Logo redesign or touch-up",
      "Updated colour scheme and typography",
      "Short multilingual brand notes",
      "Source files supplied (vector where applicable)",
      "Two revision rounds"
    ]
  },
  {
    slug: "email-marketing",
    name: "Email Marketing Setup",
    category: "Design",
    shortDescription: "Email template design & setup with multilingual-ready structure.",
    description:
      "Design and configure a branded email template on Mailchimp (or similar) with responsive design and guidance for translated versions and audience segmentation.",
    priceDisplay: "£130",
    priceNumeric: parsePriceNumeric("£130"),
    hosting: null,
    packageFeatures: ["Template design", "Platform setup", "Responsive & accessible"],
    detailFeatures: [
      "Custom email template design",
      "Platform setup (Mailchimp or similar)",
      "Mobile-responsive layout",
      "Guidance for translated versions",
      "Basic analytics setup"
    ]
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance & Updates",
    category: "Website",
    shortDescription: "Monthly care, backups and multilingual checks.",
    description:
      "Keep your multilingual website secure and current with monthly updates, backups and small multilingual content edits to ensure consistent messaging across languages.",
    priceDisplay: "£140/month",
    priceNumeric: parsePriceNumeric("£140"),
    hosting: null,
    packageFeatures: ["Monthly maintenance", "Security updates", "Multilingual checks"],
    detailFeatures: [
      "Monthly security & CMS updates",
      "Regular backups and restorations",
      "Minor content updates (up to 2 hours/month)",
      "Multilingual QA checks",
      "Priority support response"
    ]
  },
  {
    slug: "blog-setup",
    name: "Blog Setup & Content Writing",
    category: "Website",
    shortDescription: "Multilingual-friendly blog setup and initial content.",
    description:
      "Set up an SEO-friendly blog structure and receive professionally written posts that can be used as source content for translated versions and community storytelling.",
    priceDisplay: "£260",
    priceNumeric: parsePriceNumeric("£260"),
    hosting: "Paid hosting (Domain purchase required)",
    packageFeatures: ["Blog setup", "3 written posts", "SEO-friendly"],
    detailFeatures: [
      "Blog setup and theme configuration",
      "3 professionally written posts (approx. 400 words each)",
      "SEO optimization for posts",
      "Social sharing integration",
      "Guidance for multilingual post workflows"
    ]
  },
  {
    slug: "landing-page",
    name: "Landing Page Design",
    category: "Website",
    shortDescription: "Conversion-focused bilingual landing page for campaigns.",
    description:
      "A focused landing page designed to convert visitors and prepared for bilingual content — ideal for event sign-ups, campaigns or short-term promotions.",
    priceDisplay: "£180",
    priceNumeric: parsePriceNumeric("£180"),
    hosting: "Free hosting (Domain purchase required)",
    packageFeatures: ["Conversion-optimised", "Bilingual-ready", "Analytics setup"],
    detailFeatures: [
      "Conversion-optimised design and copy guidance",
      "Responsive layout",
      "Bilingual content integration (2 languages)",
      "Contact/lead capture form",
      "Analytics & tracking setup"
    ]
  },
  {
    slug: "portfolio",
    name: "Online Portfolio for Creatives",
    category: "Website",
    shortDescription: "Multilingual portfolio site for photographers & creatives.",
    description:
      "A showcase site designed for creative professionals with multilingual navigation and gallery functionality that helps reach diverse client bases.",
    priceDisplay: "£320",
    priceNumeric: parsePriceNumeric("£320"),
    hosting: "Paid hosting required",
    packageFeatures: ["Gallery functionality", "Multilingual navigation", "Mobile-optimised"],
    detailFeatures: [
      "Custom portfolio layout",
      "Image gallery with lightbox",
      "Multilingual-friendly navigation labels",
      "Contact form and client testimonials section",
      "Social media integration"
    ]
  },
  {
    slug: "multilingual-website",
    name: "Multilingual Website Setup",
    category: "Website",
    shortDescription: "Multi-language website setup with localisation guidance.",
    description:
      "Build or expand a website with structured multilingual support. We handle language structure, localisation advice and basic SEO for each language included.",
    priceDisplay: "£420",
    priceNumeric: parsePriceNumeric("£420"),
    hosting: "Free hosting (Domain purchase required)",
    packageFeatures: ["Multi-language setup", "Localisation guidance", "SEO per language"],
    detailFeatures: [
      "Multi-language architecture",
      "Upload & format content for two languages",
      "SEO optimisation for each language",
      "Cultural adaptation guidance",
      "Domain and SSL guidance"
    ]
  },
  {
    slug: "website-design-farsi",
    name: "Website Design (Farsi)",
    category: "Website",
    shortDescription: "RTL website design and localisation for Farsi audiences.",
    description:
      "Full right-to-left website build tuned for Farsi (Persian) content, with correct typography, layout and localisation support to ensure readability and cultural fit.",
    priceDisplay: "£360",
    priceNumeric: parsePriceNumeric("£360"),
    hosting: "Free hosting (Domain purchase required)",
    packageFeatures: ["RTL layout", "Farsi typography", "Localisation support"],
    detailFeatures: [
      "Responsive RTL design",
      "Farsi font & typography choices",
      "Basic Farsi SEO setup",
      "Contact & social integration",
      "Two revision rounds"
    ]
  },
  {
    slug: "standard-package-v2",
    name: "Standard Package",
    category: "Website",
    shortDescription: "Up to 5 pages with multilingual-ready structure.",
    description:
      "A solid small-business website package with up to 5 pages, multilingual-ready templates and guidance to help you reach local, multilingual customers.",
    priceDisplay: "£280",
    priceNumeric: parsePriceNumeric("£280"),
    hosting: "Free hosting included (for simple sites)",
    packageFeatures: ["Up to 5 Website pages", "Free hosting", "Basic multilingual readiness"],
    detailFeatures: [
      "Custom domain name setup",
      "Responsive design for all devices",
      "Basic SEO tools for search engine visibility",
      "Social media integration",
      "Contact form and simple blog option"
    ]
  },
  {
    slug: "business-package-v2",
    name: "Business Package",
    category: "Website",
    shortDescription: "Up to 10 pages with multilingual & accessibility checks.",
    description:
      "A robust site for growing businesses with up to 10 pages, improved SEO, multilingual structure and accessibility-first considerations for community audiences.",
    priceDisplay: "£499",
    priceNumeric: parsePriceNumeric("£499"),
    hosting: "Free hosting included (for simple sites; external hosting may be required for more complex needs)",
    packageFeatures: ["Up to 10 Website pages", "Multilingual structure", "Advanced SEO tools"],
    detailFeatures: [
      "Custom domain setup",
      "Advanced SEO tools and meta setup",
      "Responsive design with accessibility checks",
      "Contact forms, newsletter signup and social links",
      "Two rounds of content revisions"
    ]
  },
  {
    slug: "woocommerce-package-v2",
    name: "E-commerce Package (WooCommerce)",
    category: "Website",
    shortDescription: "Online store setup with multilingual product support.",
    description:
      "A fully functional online store using WooCommerce with product pages, payment integrations and optional multilingual product descriptions to serve diverse customers.",
    priceDisplay: "£699",
    priceNumeric: parsePriceNumeric("£699"),
    hosting: "WooCommerce requires external hosting for full functionality",
    packageFeatures: [
      "Up to 50 products",
      "WooCommerce integration",
      "Payment gateway setup"
    ],
    detailFeatures: [
      "Product catalog and checkout setup",
      "Payment gateway integration (Stripe, PayPal)",
      "Shipping options and product variants",
      "Analytics integration",
      "Multilingual product descriptions (optional add-on)"
    ]
  },
  {
    slug: "premium-package-v2",
    name: "Premium Package",
    category: "Website",
    shortDescription: "Custom projects and large-scale multilingual builds.",
    description:
      "Tailored for complex, large or bespoke projects requiring advanced integrations, membership systems or large multilingual rollouts. Hosting options scale to requirements.",
    priceDisplay: "£999",
    priceNumeric: parsePriceNumeric("£999"),
    hosting: "Hosting included for small to medium sites (External hosting may be required for large projects)",
    packageFeatures: [
      "Custom design",
      "Unlimited website pages",
      "Advanced integrations"
    ],
    detailFeatures: [
      "Bespoke design and development",
      "Full WooCommerce or membership setup",
      "Custom integrations with third-party systems",
      "Dedicated support and SLA"
    ]
  }
];

// Exclude premium packages across the site
const publicPackages = basePackages.filter(
  (p) => p.slug !== "premium-package-v2" && !/premium/i.test(p.name)
);

export const packages: PackageWithId[] = createPackagesWithIds(publicPackages);
