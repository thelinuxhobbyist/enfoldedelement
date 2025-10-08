import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      
      // Handle CORS preflight requests
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
      }

      // Create Payment Intent endpoint
      if (url.pathname === "/api/create-payment-intent" && request.method === "POST") {
        try {
          const { amount, currency = "gbp" } = await request.json();
          
          console.log('Creating payment intent:', { amount, currency });

          const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents/pence
            currency,
            automatic_payment_methods: {
              enabled: true,
            },
          });

        return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      // Webhook endpoint
      if (url.pathname === "/webhook" && request.method === "POST") {
        const signature = request.headers.get("stripe-signature");
        
        try {
          const event = stripe.webhooks.constructEvent(
            await request.text(),
            signature,
            env.STRIPE_WEBHOOK_SECRET
          );

          switch (event.type) {
            case "payment_intent.succeeded":
              const paymentIntent = event.data.object;
              // Handle successful payment
              console.log("Payment succeeded:", paymentIntent.id);
              break;
            // Add other webhook events as needed
          }

          return new Response(JSON.stringify({ received: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          return new Response(`Webhook Error: ${err.message}`, { status: 400 });
        }
      }

      return new Response("Not found", { status: 404 });
    } catch (err) {
      return new Response(`Server Error: ${err.message}`, { status: 500 });
    }
  },
};
