import {NextRequest, NextResponse} from "next/server"
const stripe = require("stripe")(process.env.STRIPE_SECRET)

export async function POST(req: NextRequest) {
  try {
    const {amount} = await req.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      automatic_payment_methods: {enabled: true}
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
