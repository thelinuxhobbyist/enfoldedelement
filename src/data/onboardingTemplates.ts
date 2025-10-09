import { OnboardingField } from '@/types/package';

export type OnboardingTemplate = {
  id: string;
  name: string;
  description: string;
  fields: OnboardingField[];
};

// Common/shared fields that appear in all templates
const commonFields: OnboardingField[] = [
  {
    id: 'project-name',
    type: 'text',
    label: 'Project Name',
    placeholder: 'Enter your project name',
    required: true
  },
  {
    id: 'project-description',
    type: 'textarea',
    label: 'Project Description',
    placeholder: 'Tell us more about your project and what you want to achieve',
    required: true
  },
  {
    id: 'timeline',
    type: 'select',
    label: 'Project Timeline',
    required: true,
    options: ['ASAP', '1-2 weeks', '2-4 weeks', 'More than 4 weeks']
  }
];

export const onboardingTemplates: Record<string, OnboardingTemplate> = {
  branding_basic: {
    id: 'branding_basic',
    name: 'Basic Branding Onboarding',
    description: 'Core information needed for branding projects',
    fields: [
      ...commonFields,
      {
        id: 'brand-values',
        type: 'textarea',
        label: 'Brand Values',
        placeholder: 'What are your key brand values and personality?',
        required: true
      },
      {
        id: 'target-audience',
        type: 'textarea',
        label: 'Target Audience',
        placeholder: 'Describe your ideal customer or target audience',
        required: true
      }
    ]
  },

  marketing_basic: {
    id: 'marketing_basic',
    name: 'Marketing Materials Onboarding',
    description: 'Essential details for marketing materials and campaigns',
    fields: [
      ...commonFields,
      {
        id: 'target-platforms',
        type: 'select',
        label: 'Target Platforms',
        required: true,
        options: ['Print', 'Digital', 'Both']
      },
      {
        id: 'brand-guidelines',
        type: 'text',
        label: 'Brand Guidelines',
        placeholder: 'Do you have existing brand guidelines? Please provide a link if available',
        required: false
      }
    ]
  },

  social_media: {
    id: 'social_media',
    name: 'Social Media Package Onboarding',
    description: 'Information needed for social media content creation',
    fields: [
      ...commonFields,
      {
        id: 'social-platforms',
        type: 'select',
        label: 'Primary Social Platform',
        required: true,
        options: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok']
      },
      {
        id: 'brand-voice',
        type: 'select',
        label: 'Brand Voice',
        required: true,
        options: ['Professional', 'Casual', 'Friendly', 'Luxurious', 'Playful']
      }
    ]
  },

  web_design: {
    id: 'web_design',
    name: 'Website Design Onboarding',
    description: 'Details required for website design projects',
    fields: [
      ...commonFields,
      {
        id: 'pages-needed',
        type: 'text',
        label: 'Required Pages',
        placeholder: 'List the pages you need (e.g., Home, About, Services)',
        required: true
      },
      {
        id: 'website-style',
        type: 'select',
        label: 'Website Style',
        required: true,
        options: ['Modern Minimal', 'Bold & Creative', 'Corporate Professional', 'E-commerce Focused', 'Portfolio Style']
      },
      {
        id: 'reference-websites',
        type: 'textarea',
        label: 'Reference Websites',
        placeholder: 'Share links to websites you like for inspiration',
        required: false
      }
    ]
  },

  print_design: {
    id: 'print_design',
    name: 'Print Design Onboarding',
    description: 'Information needed for print design projects',
    fields: [
      ...commonFields,
      {
        id: 'card-style',
        type: 'select',
        label: 'Design Style',
        required: true,
        options: ['Modern Minimal', 'Creative', 'Corporate', 'Luxury', 'Classic']
      },
      {
        id: 'contact-details',
        type: 'textarea',
        label: 'Contact Information',
        placeholder: 'Please provide all contact details to be included',
        required: true
      }
    ]
  },

  logo_design: {
    id: 'logo_design',
    name: 'Logo Design Onboarding',
    description: 'Essential information for logo design projects',
    fields: [
      ...commonFields,
      {
        id: 'logo-style',
        type: 'select',
        label: 'Preferred Logo Style',
        required: true,
        options: ['Wordmark', 'Symbol', 'Combination Mark', 'Lettermark', 'Abstract']
      },
      {
        id: 'color-preferences',
        type: 'textarea',
        label: 'Color Preferences',
        placeholder: 'Share any specific color preferences or existing brand colors',
        required: false
      }
    ]
  }
};

// Helper function to get the fields for a specific template
export const getTemplateFields = (templateId: string): OnboardingField[] => {
  const template = onboardingTemplates[templateId];
  if (!template) {
    console.warn(`Template ${templateId} not found, falling back to common fields`);
    return commonFields;
  }
  return template.fields;
};

// Helper function to get the template name
export const getTemplateName = (templateId: string): string => {
  const template = onboardingTemplates[templateId];
  return template ? template.name : 'General Onboarding';
};

// Helper function to get the template description
export const getTemplateDescription = (templateId: string): string => {
  const template = onboardingTemplates[templateId];
  return template ? template.description : 'Please provide the following information to help us get started with your project.';
};
