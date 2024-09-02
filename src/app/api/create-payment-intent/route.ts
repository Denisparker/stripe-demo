import {NextRequest, NextResponse} from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET)

export async function POST(req: NextRequest) {
  try {
    const {amount} = await req.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      payment_method_types: ["card"]
    })

    return NextResponse.json({clientSecret: paymentIntent.client_secret})

  } catch (err) {
    console.error("Internal Error", err)

    return NextResponse.json(
      {error: `Internal Server Error: ${err}`},
      {status: 500}
    )
  }
}
