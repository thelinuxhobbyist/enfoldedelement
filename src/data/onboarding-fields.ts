import { OnboardingField, createField } from '@/types/package';

// Generic onboarding fields that work for all packages
export const genericOnboardingFields: OnboardingField[] = [
  createField({
    type: 'text',
    label: 'What is your business name?',
    required: true,
  }),
  createField({
    type: 'textarea',
    label: 'Tell us about your business and your requirements',
    required: true,
    placeholder: 'What does your business do? What are your specific needs for this project?'
  }),
  createField({
    type: 'textarea',
    label: 'Who is your target audience?',
    required: true,
    placeholder: 'Describe your ideal customers or users'
  }),
  createField({
    type: 'select',
    label: 'What style preferences do you have?',
    required: true,
    options: [
      'Modern & Minimal',
      'Classic & Professional',
      'Bold & Creative',
      'Elegant & Sophisticated',
      'Fun & Playful'
    ]
  }),
  createField({
    type: 'textarea',
    label: 'Do you have any references or inspiration?',
    required: false,
    placeholder: 'Share examples of designs, websites, or brands that you like'
  }),
  createField({
    type: 'textarea',
    label: 'Any additional requirements or preferences?',
    required: false,
    placeholder: 'Colors, specific features, or any other details we should know'
  })
];
