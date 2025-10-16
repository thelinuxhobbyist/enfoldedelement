import { Package, PackageWithId, createPackagesWithIds } from '@/types/package';

// Define the base packages without IDs — restored to working set with exactly one Test Package
const basePackages: Package[] = [
  {
    name: "Test Package",
    slug: "test-package",
    price: 0.30,
    shortDescription: "A test package for system verification",
    description: "This is a low-cost test package to verify the payment system is working correctly.",
    category: "Test",
    featured: false,
    perfectFor: "Testing the system",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Startup Brand Pack",
    slug: "startup-brand-pack",
    price: 150,
    shortDescription: "Complete branding solution for startups launching their identity",
    description: "Launch your startup with a comprehensive brand identity that makes a lasting impression. Perfect for new businesses looking to establish a professional presence.",
    category: "Branding",
    featured: true,
    perfectFor: "New businesses and startups looking to establish a strong brand identity",
    onboardingTemplate: "branding_basic"
  },
  {
    name: "Event Poster Design",
    slug: "event-poster-design",
    price: 60,
    shortDescription: "Eye-catching poster design for any event or promotion",
    description: "Make your event unforgettable with a stunning poster design that captures attention and drives engagement.",
    category: "Marketing",
    featured: false,
    perfectFor: "Event organizers and promoters looking for eye-catching promotional materials",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Social Media Package",
    slug: "social-media-package",
    price: 120,
    shortDescription: "30-day content package to boost your social presence",
    description: "Elevate your social media presence with professionally designed content that engages your audience and builds your brand.",
    category: "Social Media",
    featured: true,
    perfectFor: "Brands and businesses looking to build a cohesive social media presence",
    onboardingTemplate: "social_media"
  },
  {
    name: "Website Design Package",
    slug: "website-design-package",
    price: 450,
    shortDescription: "Modern, responsive website design up to 5 pages",
    description: "Transform your online presence with a beautifully designed, user-friendly website that converts visitors into customers.",
    category: "Web Design",
    featured: true,
    perfectFor: "Businesses needing a professional online presence",
    onboardingTemplate: "web_design"
  },
  {
    name: "Business Card Design",
    slug: "business-card-design",
    price: 45,
    shortDescription: "Professional business card design with multiple concepts",
    description: "Leave a memorable impression with premium business card designs that reflect your professional brand.",
    category: "Print Design",
    featured: false,
    perfectFor: "Professionals and businesses needing high-quality business cards",
    onboardingTemplate: "print_design"
  },
  {
    name: "Logo Design Pro",
    slug: "logo-design-pro",
    price: 200,
    shortDescription: "Premium logo design with unlimited revisions",
    description: "Get a distinctive, memorable logo that perfectly represents your brand with our premium design service.",
    category: "Branding",
    featured: false,
    perfectFor: "Businesses needing a professional, versatile logo with comprehensive file formats",
    onboardingTemplate: "logo_design"
  },
  {
    name: "Email Newsletter Template",
    slug: "email-newsletter-template",
    price: 85,
    shortDescription: "Custom email newsletter design for your campaigns",
    description: "Engage your subscribers with beautifully designed email newsletters that drive clicks and conversions.",
    category: "Marketing",
    featured: false,
    perfectFor: "Businesses looking to improve their email marketing with professional templates",
    onboardingTemplate: "marketing_basic"
  },
  {
    name: "Brand Refresh Package",
    slug: "brand-refresh-package",
    price: 350,
    shortDescription: "Modernize your existing brand identity",
    description: "Breathe new life into your brand with a comprehensive refresh that maintains recognition while elevating your image.",
    category: "Branding",
    featured: false,
    perfectFor: "Established businesses looking to modernize their brand while maintaining recognition",
    onboardingTemplate: "branding_basic"
  }
];

// Create the final packages array with auto-generated IDs
export const packages: PackageWithId[] = createPackagesWithIds(basePackages);
