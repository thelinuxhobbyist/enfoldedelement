import { loadStripe } from '@stripe/stripe-js';

// For debugging
console.log('Stripe Key:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Use import.meta.env for Vite environment variables
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
