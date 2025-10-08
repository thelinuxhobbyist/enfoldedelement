import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-md mx-auto">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
          <p className="text-muted-foreground mb-8">
            Your payment was cancelled. If you experienced any issues, please try again or contact us for support.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
