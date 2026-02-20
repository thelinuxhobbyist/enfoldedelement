import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from "@/components/Navbar";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { stripePromise } from "@/lib/stripe";
import { CheckoutForm } from "@/components/CheckoutForm";

const Checkout = () => {
  const { slug } = useParams();
  const packageData = packages.find((pkg) => pkg.slug === slug);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create a payment intent when the component mounts
    if (packageData) {
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: packageData.priceNumeric,
          currency: 'gbp' // Changed to GBP since you're using £ symbols
        }),
      })
      .then(async res => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to create payment intent');
        }
        return data;
      })
      .then(data => {
        if (!data.clientSecret) {
          throw new Error('No client secret returned');
        }
        console.log('Payment intent created successfully');
        setClientSecret(data.clientSecret);
      })
      .catch(error => {
        console.error('Error creating payment intent:', error);
        // TODO: Show error to user
      });
    }
  }, [packageData]);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <Button asChild>
            <Link to="/packages">Back to Packages</Link>
          </Button>
        </div>
      </div>
    );
  }

  const total = packageData.priceNumeric ?? 0;
  // VAT logic removed for businesses under threshold. To restore, revert this commit.
  // const vat = total * 0.2;
  // const totalWithVat = total + vat;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild>
            <Link to={`/packages/${slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Package Details
            </Link>
          </Button>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          {clientSecret ? (
            <Elements stripe={stripePromise} options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorPrimary: '#0F172A',
                },
              },
            }}>
              <CheckoutGrid packageData={packageData} total={total} />
            </Elements>
          ) : (
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2 mt-8 lg:mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center p-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:order-last">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{packageData.name}</h3>
                        <p className="text-sm text-muted-foreground">{packageData.shortDescription}</p>
                      </div>

                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                          <span>Total</span>
                          <span>£{total.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* No inclusions displayed on checkout summary in new schema */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Grid component placed inside Elements so child components can access Stripe hooks.
function CheckoutGrid({ packageData, total }: { packageData: any; total: number }) {
  const returnUrl = `${window.location.origin}/onboarding?package=${window.location.pathname.split('/').pop()}`;

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-8">
      {/* Payment Form */}
      <div className="lg:col-span-2 mt-8 lg:mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <CheckoutForm />
          </CardContent>
        </Card>
      </div>

      {/* Order Summary with confirm button */}
      <div className="lg:order-last">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">{packageData.name}</h3>
                <p className="text-sm text-muted-foreground">{packageData.shortDescription}</p>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4">
                <ConfirmPaymentButton returnUrl={returnUrl} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ConfirmPaymentButton({ returnUrl }: { returnUrl: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = async () => {
    if (!stripe || !elements) return;
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: returnUrl },
    });

    if (error) {
      setErrorMessage(error.message ?? 'An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        disabled={!stripe || isProcessing}
        className="w-full"
      >
        {isProcessing ? 'Processing...' : 'Buy now'}
      </Button>
      {errorMessage && (
        <div className="text-red-500 text-sm mt-3">{errorMessage}</div>
      )}
    </>
  );
}

export default Checkout;
