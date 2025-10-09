export interface Package {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  shortDescription: string;
  inclusions: string[];
  category: string;
  featured?: boolean;
}

export const packages: Package[] = [
  {
    id: "test-package",
    name: "Test Package",
    slug: "test-package",
    price: 0.30,
    shortDescription: "A test package for system verification",
    description: "This is a low-cost test package to verify the payment system is working correctly.",
    inclusions: [
      "Test Feature 1",
      "Test Feature 2",
      "Test Feature 3"
    ],
    category: "Test",
    featured: false
  },
  {
    id: "1",
    name: "Startup Brand Pack",
    slug: "startup-brand-pack",
    price: 150,
    shortDescription: "Complete branding solution for startups launching their identity",
    description: "Launch your startup with a comprehensive brand identity that makes a lasting impression. Perfect for new businesses looking to establish a professional presence.",
    inclusions: [
      "Professional logo design with 3 concept iterations",
      "3 social media templates (Instagram, Facebook, LinkedIn)",
      "Brand color palette selection",
      "Typography guidelines",
      "Business card design",
      "Email signature template",
      "Brand style guide (PDF)",
    ],
    category: "Branding",
    featured: true,
  },
  {
    id: "2",
    name: "Event Poster Design",
    slug: "event-poster-design",
    price: 60,
    shortDescription: "Eye-catching poster design for any event or promotion",
    description: "Make your event unforgettable with a stunning poster design that captures attention and drives engagement.",
    inclusions: [
      "Custom poster design (A3/A4 size)",
      "2 revision rounds",
      "Print-ready files (PDF, PNG)",
      "Social media adaptation",
      "Source files included",
    ],
    category: "Marketing",
  },
  {
    id: "3",
    name: "Social Media Package",
    slug: "social-media-package",
    price: 120,
    shortDescription: "30-day content package to boost your social presence",
    description: "Elevate your social media presence with professionally designed content that engages your audience and builds your brand.",
    inclusions: [
      "30 custom post designs",
      "Platform optimization (Instagram, Facebook, Twitter)",
      "Hashtag research and strategy",
      "Content calendar",
      "Story templates (15 designs)",
      "Highlight covers (5 designs)",
    ],
    category: "Social Media",
    featured: true,
  },
  {
    id: "4",
    name: "Website Design Package",
    slug: "website-design-package",
    price: 450,
    shortDescription: "Modern, responsive website design up to 5 pages",
    description: "Transform your online presence with a beautifully designed, user-friendly website that converts visitors into customers.",
    inclusions: [
      "Custom website design (up to 5 pages)",
      "Mobile-responsive design",
      "UI/UX optimization",
      "Figma design files",
      "Asset library",
      "Design system documentation",
      "3 revision rounds",
    ],
    category: "Web Design",
    featured: true,
  },
  {
    id: "5",
    name: "Business Card Design",
    slug: "business-card-design",
    price: 45,
    shortDescription: "Professional business card design with multiple concepts",
    description: "Leave a memorable impression with premium business card designs that reflect your professional brand.",
    inclusions: [
      "2 business card concepts",
      "Front and back design",
      "Print-ready files",
      "Multiple format exports",
      "1 revision round",
    ],
    category: "Print Design",
  },
  {
    id: "6",
    name: "Logo Design Pro",
    slug: "logo-design-pro",
    price: 200,
    shortDescription: "Premium logo design with unlimited revisions",
    description: "Get a distinctive, memorable logo that perfectly represents your brand with our premium design service.",
    inclusions: [
      "5 initial logo concepts",
      "Unlimited revision rounds",
      "Vector files (AI, EPS, SVG)",
      "PNG/JPG in various sizes",
      "Black/white variations",
      "Social media kit",
      "Brand guidelines",
      "Trademark-ready files",
    ],
    category: "Branding",
  },
  {
    id: "7",
    name: "Email Newsletter Template",
    slug: "email-newsletter-template",
    price: 85,
    shortDescription: "Custom email newsletter design for your campaigns",
    description: "Engage your subscribers with beautifully designed email newsletters that drive clicks and conversions.",
    inclusions: [
      "Custom email template design",
      "Mobile-responsive layout",
      "HTML/CSS code included",
      "Compatible with major email platforms",
      "2 revision rounds",
      "Tutorial documentation",
    ],
    category: "Marketing",
  },
  {
    id: "8",
    name: "Brand Refresh Package",
    slug: "brand-refresh-package",
    price: 350,
    shortDescription: "Modernize your existing brand identity",
    description: "Breathe new life into your brand with a comprehensive refresh that maintains recognition while elevating your image.",
    inclusions: [
      "Logo redesign/refinement",
      "Updated color palette",
      "New typography selection",
      "Marketing collateral templates (3 pieces)",
      "Social media template set (10 designs)",
      "Updated brand guidelines",
      "3 revision rounds",
    ],
    category: "Branding",
  },
];
