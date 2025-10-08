import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const paymentIntentId = searchParams.get('payment_intent');

  useEffect(() => {
    if (paymentIntentId) {
      // You can verify the payment on the server here if needed
      toast({
        title: "Payment Successful! 🎉",
        description: "Thank you for your purchase. We'll be in touch soon.",
      });
    }
  }, [paymentIntentId, toast]);

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
