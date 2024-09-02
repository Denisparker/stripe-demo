import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {createPaymentIntent} from "api/payment"
import CheckoutForm
  from "app/components/ListWrapper/components/ProductsList/components/PayModal/components/CheckoutForm"
import Loading from "app/loading"
import Crown from "assets/Crown"
import Success from "assets/Success"
import Modal from "components/Modal"
import Image from "next/image"
import {useEffect, useState} from "react"
import {Product} from "types/product"

interface I {
  data: Product | null
  onClose: () => void
}

export default function PayModal({
  data,
  onClose
}: I) {

  return (
    <Modal onClose={onClose} isOpened={!!data}>
      {data && (
        <>
          <div
            className="relative bg-gray  flex gap-10 items-center cursor-pointer select-none rounded-2xl p-4 mb-10">
            <Image src={data.img.src} alt="cookie" width={data.img.width} height={data.img.height}
              className="w-40 h-40 relative"
            />
            <div className="flex flex-col gap-4">
              <h5 className="font-bold">{data.name}</h5>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5">
                  <Crown/>
                </div>
                <h6 className="text-gold">PREMIUM</h6>
              </div>
              <p>{data.description}</p>
              <h5>{data.price} <span className="text-base">USD</span></h5>
            </div>
          </div>
          <CheckoutForm data={data}/>
        </>
      )}
    </Modal>
  )
}
