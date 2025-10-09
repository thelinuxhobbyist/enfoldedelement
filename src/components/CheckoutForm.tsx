import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Button } from './ui/button';

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Get the package slug from the URL
        return_url: `${window.location.origin}/onboarding?package=${window.location.pathname.split('/').pop()}`,
      },
    });

    if (error) {
      setErrorMessage(error.message ?? 'An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
      <PaymentElement />
      <Button
        disabled={!stripe || isProcessing}
        className="w-full"
        type="submit"
      >
        {isProcessing ? 'Processing...' : 'Pay now'}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-sm mt-4">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
