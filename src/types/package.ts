import { nanoid } from 'nanoid';

export interface OnboardingField {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox';
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface Package {
  // Identity
  name: string;                  // Package name
  slug: string;                  // URL-friendly identifier (map from provided id)

  // Pricing
  priceDisplay: string;          // e.g., "£120", "£100/month", "£799+"
  priceNumeric: number;          // parsed numeric used in checkout/VAT

  // Content
  description: string;            // Long description (map from longDescription)
  shortDescription: string;       // Brief summary
  packageFeatures: string[];      // Shown on packages list (first 2 + "+N more")
  detailFeatures: string[];       // Shown on details page
  hosting: string | null;         // Hosting info or null if not applicable

  // Optional metadata retained for compatibility
  category?: string;              // Optional category badge if provided/derived
  featured?: boolean;             // Optional elevate on list
  onboardingTemplate?: string;    // Optional; retained to avoid breaking other flows
  perfectFor?: string;            // Optional legacy field, unused
}

export interface PackageWithId extends Package {
  id: string; // Auto-generated using createPackageWithId
}

// Helper function to create an array of packages with auto-generated IDs
export const createPackagesWithIds = (packages: Package[]): PackageWithId[] => {
  return packages.map((pkg) => ({
    id: nanoid(),
    ...pkg
  }));
};
