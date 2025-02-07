// At the top of the _app.tsx file, add 'use client' for Stripe components
'use client';

import { AppProps } from 'next/app';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;
