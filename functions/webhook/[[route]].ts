import Stripe from 'stripe';

export async function onRequestPost(context) {
  try {
    const stripe = new Stripe(context.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2023-08-16',
    });

    const signature = context.request.headers.get("stripe-signature");
    const event = await stripe.webhooks.constructEvent(
      await context.request.text(),
      signature || '',
      context.env.STRIPE_WEBHOOK_SECRET || ''
    );

    console.log('Webhook event type:', event.type);

    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("Payment succeeded:", paymentIntent.id);
        break;
      }
      // Add other webhook events as needed
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error: unknown) {
    console.error('Webhook error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: message 
    }), { 
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
