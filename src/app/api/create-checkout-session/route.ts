// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  try {
    // 1) Parse the request body
    const body = await req.json();

    // We expect something like:
    // {
    //   items: [
    //     { name: "Sofa", price: 120, quantity: 2 },
    //     { name: "Table", price: 60, quantity: 1 }
    //   ]
    // }
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items found" }, { status: 400 });
    }

    // 2) Build Stripe line items
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "usd", // or "lkr" or whatever currency you use
        product_data: {
          name: item.name,
        },
        // Stripe amount is in cents (multiply by 100)
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // 3) Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    // 4) Return session URL
    return NextResponse.json({ url: session.url });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// If someone calls GET, we can return an error
export async function GET() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405 }
  );
}
