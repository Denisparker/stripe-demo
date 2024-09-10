import {Elements, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import {createPaymentIntent} from "api/payment"
import Loading from "app/loading"
import Success from "assets/Success"
import {useEffect, useState} from "react"
import cn from "services/cn"
import {Product} from "types/product"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

interface I {
  data: Product
}

function FormRaw({data, clientSecret}: I & {clientSecret: string}) {

  const stripe = useStripe()
  const elements = useElements()

  const [state, setState] = useState<"payment" | "checking" | "success" | "error">("payment")

  const handleSubmit = async () => {
    setState("checking")

    if(!stripe || !elements) {
      return
    }

    const {error: submitError} = await elements.submit()

    if (submitError) {
      setState("error")
      return
    }

    const {error, paymentIntent} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: window.location.href
      },
      redirect: "if_required"
    })

    if (error) {
      setState("error")
    } else {
      setState("success")
    }
  }

  if (!stripe || !elements) {
    return (
      <div className="my-6 h-52">
        <Loading/>
      </div>
    )
  }

  return (
    <div className="relative h-[360px] sm:h-full sm:pb-28 flex items-center justify-center">
      <div className={cn("w-full z-20", {"opacity-0 pointer-events-none": state !== "payment"})}>
        <PaymentElement
          options={{
            paymentMethodOrder: ["card"],
            layout: "auto"
          }}
        />
        <div className="w-full flex items-end justify-between mt-10">
          <a target="_blank" href="https://docs.stripe.com/testing#cards">
            <button className="py-3 px-5 bg-black/30 rounded-xl transition hover:bg-black/20">
              Testing details
            </button>
          </a>
          <button onClick={handleSubmit} className="py-5 px-10 bg-black/50 rounded-xl transition hover:bg-black/20">
            {`Pay ${data.price}$`}
          </button>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0">
        {state === "checking" ? (
          <div className="my-6 h-52">
            <Loading/>
          </div>
        ) : state === "success" ? (
          <div className="my-6 h-52">
            <Success className="fill-gold"/>
            <h5 className="text-center">Payment success!</h5>
          </div>
        ) : state === "error" && (
          <div className="my-6 h-52 flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <h5 className="text-error mb-6 font-semibold">Payment failed</h5>
              <button className="py-5 px-10 bg-black/50 rounded-2xl transition hover:bg-black/20"
                onClick={() => setState("payment")}>
                <h6>Try again</h6>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CheckoutForm(props: I) {
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    if (!!props.data) {
      createPaymentIntent(props.data.price)
      .then(res => !!res.data?.clientSecret && setClientSecret(res?.data?.clientSecret))
    }
  }, [props.data?.price])

  return (
    <>
      {!!clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{
            appearance: {
              theme: "flat"
            },
            mode: "payment",
            amount: props.data?.price * 100,
            currency: "usd"
          }}>
          <FormRaw {...props} clientSecret={clientSecret}/>
        </Elements>
      ) : (
        <div className="my-6 h-52">
          <Loading/>
        </div>
      )}
    </>
  )
}

