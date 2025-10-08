import { loadStripe } from '@stripe/stripe-js';

// Replace with your publishable key
export const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLISHABLE_KEY || '');
