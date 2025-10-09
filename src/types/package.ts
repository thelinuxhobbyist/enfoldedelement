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
  id: string;            // Auto-generated using nanoid
  name: string;          // Package name
  slug: string;          // URL-friendly name
  price: number;         // Price in GBP
  description: string;   // Full description
  shortDescription: string; // Brief description
  inclusions: string[];  // What's included
  perfectFor: string;   // Description of who this package is perfect for
  category: string;     // Category like "Branding", "Web Design"
  featured?: boolean;   // Optional: show as featured
  onboardingFields: OnboardingField[]; // Questions for this package
}

// Helper function to create a new package with auto-generated ID
export const createPackage = (pkg: Omit<Package, 'id'>): Package => ({
  id: nanoid(),
  ...pkg
});

// Helper function to create onboarding fields with auto-generated IDs
export const createField = (field: Omit<OnboardingField, 'id'>): OnboardingField => ({
  id: nanoid(),
  ...field
});
