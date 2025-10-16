import { nanoid } from 'nanoid';

export interface PackageFeature {
  title: string;
  description: string;
}

export interface OnboardingField {
  id: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'checkbox';
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface Package {
  name: string;          // Package name
  slug: string;          // URL-friendly name
  price: number;         // Price in GBP
  description: string;   // Full description
  shortDescription: string; // Brief description
  perfectFor: string;   // Description of who this package is perfect for
  category: string;     // Category like "Branding", "Web Design"
  featured?: boolean;   // Optional: show as featured
  onboardingTemplate: string; // ID of the onboarding template to use
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
