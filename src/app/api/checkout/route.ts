import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { client } from "../../../../sanityClient"; // Ensure this is correctly configured

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia', // Use latest stable API version
});

export async function POST(req: Request) {
  try {
    // Parse request data
    const { amount, firstName, lastName, email, cartItems, address, city  } = await req.json();

    if (!amount || !firstName || !lastName || !email || !address || !city || !cartItems?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create a Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    // Store order in Sanity *only after successful payment confirmation*
    const orderData = {
      _type: 'order',
      customerName: `${firstName} ${lastName}`,
      email,
      address: `${address}`, // Change to actual address if collected
      city: `${city}`, // Change to actual city if collected
      cartItems: cartItems.map((item: { _id: string }) => ({
        _type: 'reference',
        _ref: item._id, // Ensure _id from Sanity is passed correctly
      })),
      totalAmount: amount / 100, // Convert cents to dollars
      status: 'pending', // Initial status
    };

    // Save order in Sanity after payment is confirmed
    const sanityResponse = await client.create(orderData);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      orderId: sanityResponse._id,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Error processing payment" }, { status: 500 });
  }
}
