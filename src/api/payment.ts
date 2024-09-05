import request from "services/request"

export async function createPaymentIntent(amount: number) {
  return await request<{
    clientSecret: string
  }>("POST", "", {
    baseUrl: "/api/create-payment-intent",
    body: {
      amount: amount
    }
  })
}
