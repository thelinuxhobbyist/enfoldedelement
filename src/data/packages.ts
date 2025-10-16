import { Package, PackageWithId, createPackagesWithIds } from '@/types/package';

// Define the base packages without IDs
const basePackages: Package[] = [
  {
    name: "Social Media Setup",
    slug: "social-media-setup",
    price: 80,
    shortDescription: "Branded profile creation for Instagram, Facebook, TikTok or LinkedIn.",
    description: "We create social media profiles with branded graphics, bios, and startup content. Great for growing your brand on any platform.",
    inclusions: [
      "Professional branded graphics",
      "Platform-optimized content",
      "Account setup assistance"
    ],
    category: "Social Media",
    featured: true,
    perfectFor: "Brands looking to establish a strong social media presence",
    onboardingTemplate: "social_media"
  },
  {
    name: "Event Poster Design",
    slug: "event-poster-design",
    price: 60,
    shortDescription: "Print and digital format poster design in any language.",
    description: "Beautiful, bold posters delivered in both print-ready and digital format. Multilingual options available.",
    inclusions: [
      "Print & digital formats",
      "Multilingual options",
      "Professional layout"
    ],
    category: "Design",
    featured: false,
    perfectFor: "Event organizers and promoters looking for eye-catching promotional materials",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Startup Brand Pack",
    slug: "startup-brand-pack",
    price: 150,
    shortDescription: "Logo, business cards, flyer, and 3 social templates.",
    description: "Get your brand ready to launch: professional logo, business cards, flyer, and matching social media templates.",
    inclusions: [
      "Professional logo design",
      "Business card design",
      "Promotional flyer design",
      "3 social media templates"
    ],
    category: "Branding",
    featured: true,
    perfectFor: "New businesses and startups looking to establish a strong brand identity",
    onboardingTemplate: "branding_basic"
  },
  {
    name: "Small Business Starter Package",
    slug: "small-business-starter-package",
    price: 100,
    shortDescription: "A one-page static website with free hosting.",
    description: "Get your business online with a professional one-page website. Includes free hosting for the first year and a custom domain from the second year.",
    inclusions: [
      "One-page responsive website",
      "Mobile-optimized design",
      "Contact form integration",
      "Free hosting for first year"
    ],
    category: "Web Design",
    featured: true,
    perfectFor: "Small businesses needing a professional online presence",
    onboardingTemplate: "web_basic"
  },
  {
    name: "Branding Refresh",
    slug: "branding-refresh",
    price: 120,
    shortDescription: "Logo redesign, color scheme, and font style guide.",
    description: "Rejuvenate your brand with a new logo, updated color palette, and a complete style guide that fits your business vision.",
    inclusions: [
      "Logo redesign",
      "Color scheme development",
      "Font style guide",
      "Brand identity document"
    ],
    category: "Branding",
    featured: false,
    perfectFor: "Established businesses looking to modernize their brand",
    onboardingTemplate: "branding_basic"
  },
  {
    name: "Email Marketing Setup",
    slug: "email-marketing-setup",
    price: 90,
    shortDescription: "Email template design and setup on Mailchimp or similar.",
    description: "Reach your customers effectively with a customized email template designed to match your brand, and setup on Mailchimp or another platform.",
    inclusions: [
      "Custom email template design",
      "Platform setup (Mailchimp/similar)",
      "Brand-matched styling",
      "Mobile-responsive design"
    ],
    category: "Marketing",
    featured: false,
    perfectFor: "Businesses looking to improve their email marketing",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Website Maintenance & Updates",
    slug: "website-maintenance-updates",
    price: 100,
    shortDescription: "Ongoing updates, backups, and security for your site.",
    description: "Ensure your website remains secure, up-to-date, and running smoothly with monthly maintenance, backups, and content updates.",
    inclusions: [
      "Monthly security updates",
      "Regular backups",
      "Content updates (up to 2 hours/month)",
      "Performance monitoring"
    ],
    category: "Support",
    featured: false,
    perfectFor: "Businesses wanting ongoing website support and maintenance",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Blog Setup & Content Writing",
    slug: "blog-setup-content-writing",
    price: 150,
    shortDescription: "Setup your blog and create 3 posts.",
    description: "Get your blog set up with an SEO-friendly layout and 3 initial posts, to help engage visitors and improve SEO.",
    inclusions: [
      "Blog setup and design",
      "3 professionally written posts",
      "SEO optimization",
      "Comment system setup"
    ],
    category: "Web Design",
    featured: true,
    perfectFor: "Businesses wanting to start a blog and improve SEO",
    onboardingTemplate: "web_standard"
  },
  {
    name: "Landing Page Design",
    slug: "landing-page-design",
    price: 120,
    shortDescription: "High-converting landing page for your product or service.",
    description: "We design a focused landing page that drives conversions for your product, service, or promotional offer.",
    inclusions: [
      "Conversion-optimized design",
      "Mobile-responsive layout",
      "Contact form integration",
      "Analytics setup"
    ],
    category: "Web Design",
    featured: true,
    perfectFor: "Businesses launching a new product or service",
    onboardingTemplate: "web_standard"
  },
  {
    name: "Online Portfolio for Creatives",
    slug: "online-portfolio-creatives",
    price: 200,
    shortDescription: "A stunning portfolio website for photographers, designers, or artists.",
    description: "Showcase your creative work with a custom-designed portfolio, perfect for any artist, photographer, or designer.",
    inclusions: [
      "Custom portfolio design",
      "Gallery functionality",
      "Contact form integration",
      "Mobile-optimized display"
    ],
    category: "Web Design",
    featured: false,
    perfectFor: "Photographers, designers, and artists showcasing their work",
    onboardingTemplate: "web_standard"
  },
  {
    name: "Multilingual Website Setup",
    slug: "multilingual-website-setup",
    price: 250,
    shortDescription: "Expand your reach with a multilingual website.",
    description: "We set up a multilingual website, enabling you to reach customers across different languages and borders.",
    inclusions: [
      "Multi-language setup",
      "Translation management system",
      "Language switcher integration",
      "SEO optimization for each language"
    ],
    category: "Web Design",
    featured: true,
    perfectFor: "Businesses expanding internationally",
    onboardingTemplate: "web_standard"
  },
  {
    name: "Brand Strategy Session",
    slug: "brand-strategy-session",
    price: 150,
    shortDescription: "1-on-1 consultation to define your brand.",
    description: "In this session, we help you clarify your brand vision, mission, and target audience, setting a clear direction for your marketing.",
    inclusions: [
      "2-hour consultation session",
      "Brand vision development",
      "Target audience analysis",
      "Brand positioning guide"
    ],
    category: "Consulting",
    featured: false,
    perfectFor: "Businesses needing clarity on their brand direction",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Marketing Automation Setup",
    slug: "marketing-automation-setup",
    price: 180,
    shortDescription: "Automate email and SMS campaigns.",
    description: "We set up automated email or SMS sequences to engage with leads and customers, improving your marketing efficiency.",
    inclusions: [
      "Email automation sequences",
      "SMS campaign setup",
      "Lead nurturing workflows",
      "Analytics and reporting"
    ],
    category: "Marketing",
    featured: false,
    perfectFor: "Businesses wanting to automate their marketing campaigns",
    onboardingTemplate: "marketing_basic"
  }
];

// Create the final packages array with auto-generated IDs
export const packages: PackageWithId[] = createPackagesWithIds(basePackages);
