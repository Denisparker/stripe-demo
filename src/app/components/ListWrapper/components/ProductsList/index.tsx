"use client"

import PayModal from "./components/PayModal"
import {useEffect, useState} from "react"
import {Product} from "types/product"
import ProductCard from "./components/Product"
import {useTransition, a, easings} from "@react-spring/web"

export default function ProductsList({products}: {products: Product[]}) {
  const [payData, setPayData] = useState<Product | null>(null)

  const [transition, api] = useTransition(products,() => ({
    from: {transform: "translate3d(100vw,0,0)"},
    enter: {transform: "translate3d(0vw,0,0)"},
    update: {transform: "translate3d(-40vw,0,0)"},
    config: {
      mass: 1,
      clamp: false,
      tension: 130,
      friction: 14
    }
  }))

  useEffect(() => {
    api.start()
  }, [])

  useEffect(() => {
    if (!!payData) {
      api.start({
        to: {
          transform: "translate3d(-30vw,0,0)"
        }
      })
    }
  }, [payData])

  const openModalHandler = (data: Product) => {
    setPayData(data)
  }

  const closeModal = () => {
    api.start({
      to: {
        transform: "translate3d(0vw,0,0)"
      },
      onRest: () => setPayData(null)
    })
  }

  return (
    <>
      {transition((style, i) => (
        <a.div style={style} key={i.id}>
          <ProductCard setPayData={openModalHandler} product={i}/>
        </a.div>
      ))}
      <PayModal data={payData} onClose={closeModal}/>
    </>
  )
}
