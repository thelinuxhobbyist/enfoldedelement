import { Package, PackageWithId, createPackagesWithIds } from '@/types/package';

// Define the base packages without IDs — reverted to pre-13-package dataset
const basePackages: Package[] = [
  {
    name: "Starter Website (1 page)",
    slug: "starter-website-1-page",
    price: 299,
    shortDescription: "A single-page website to get your business online quickly",
    description: "One professionally designed landing page with mobile responsiveness, basic SEO, and a contact form.",
    category: "Web Design",
    featured: true,
    perfectFor: "Small businesses and freelancers who need a simple online presence",
    onboardingTemplate: "web_basic"
  },
  {
    name: "Small Business Website (3 pages)",
    slug: "small-business-website-3-pages",
    price: 599,
    shortDescription: "Multi-page website for growing businesses",
    description: "Up to 3 pages (Home, About, Services) with responsive design, SEO basics, and content guidance.",
    category: "Web Design",
    featured: true,
    perfectFor: "Small businesses that need a professional multi-page site",
    onboardingTemplate: "web_standard"
  },
  {
    name: "E-commerce Starter",
    slug: "ecommerce-starter",
    price: 1299,
    shortDescription: "Launch a small online store with payment and product management",
    description: "Setup for up to 20 products, payment gateway integration, and order management.",
    category: "E-commerce",
    featured: false,
    perfectFor: "Small retailers and shops starting online",
    onboardingTemplate: "ecommerce_basic"
  },
  {
    name: "Translation Package — 1 language",
    slug: "translation-1-language",
    price: 0.10,
    shortDescription: "Professional translation for website content per word",
    description: "Human translation by professional linguists. Price shown is GBP per word and will be calculated on checkout based on word count.",
    category: "Localization",
    featured: false,
    perfectFor: "Websites and marketing content that need accurate human translation",
    onboardingTemplate: "translation_simple"
  },
  {
    name: "Translation Package — 2 languages",
    slug: "translation-2-languages",
    price: 0.18,
    shortDescription: "Translation for two target languages (per word)",
    description: "Human translation into two languages. Price is GBP per word and will be calculated on checkout based on word count and languages chosen.",
    category: "Localization",
    featured: false,
    perfectFor: "Content that needs to be available in multiple languages",
    onboardingTemplate: "translation_multi"
  },
  {
    name: "SEO Starter",
    slug: "seo-starter",
    price: 299,
    shortDescription: "Basic SEO setup and recommendations",
    description: "On-page SEO fixes, sitemap setup, and a short keyword strategy report.",
    category: "Marketing",
    featured: false,
    perfectFor: "New sites needing essential SEO setup",
    onboardingTemplate: "seo_basic"
  },
  {
    name: "Monthly Content Retainer",
    slug: "monthly-content-retainer",
    price: 499,
    shortDescription: "Ongoing content creation and updates (per month)",
    description: "Monthly content creation including blog posts, social snippets, and minor site updates.",
    category: "Content",
    featured: true,
    perfectFor: "Businesses wanting consistent content and SEO growth",
    onboardingTemplate: "content_retainer"
  }
];

// Create the final packages array with auto-generated IDs
export const packages: PackageWithId[] = createPackagesWithIds(basePackages);
