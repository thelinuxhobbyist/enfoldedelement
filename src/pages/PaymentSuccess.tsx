import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const PaymentSuccess = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (clientSecret) {
      stripe
        .retrievePaymentIntent(clientSecret)
        .then(({ paymentIntent }) => {
          if (paymentIntent?.status === 'succeeded') {
            // Get package slug from return_url
            const redirectUrl = paymentIntent.return_url;
            if (redirectUrl) {
              try {
                const url = new URL(redirectUrl);
                const packageSlug = url.searchParams.get('package');
                if (packageSlug) {
                  // Show success toast
                  toast({
                    title: "Payment Successful! 🎉",
                    description: "Please complete the project details form to get started.",
                  });
                  
                  // Redirect to onboarding
                  navigate(`/onboarding?package=${packageSlug}`);
                  return;
                }
              } catch (e) {
                console.error('Error parsing return URL:', e);
              }
            }
          }
          // Fallback to packages page if anything goes wrong
          navigate('/packages');
        })
        .catch((error) => {
          console.error('Error retrieving payment intent:', error);
          navigate('/packages');
        });
    }
  }, [stripe, searchParams, toast, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. We'll be in touch shortly with next steps.
          </p>
          <button
            onClick={() => navigate('/packages')}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            View All Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
