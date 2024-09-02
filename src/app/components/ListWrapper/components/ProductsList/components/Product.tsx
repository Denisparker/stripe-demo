import Arrow from "assets/Arrow"
import Crown from "assets/Crown"
import Image from "next/image"
import {Product} from "types/product"
import {useSpring, a} from "@react-spring/web"

interface I {
  product: Product
  setPayData: (data: Product) => void
}

const config = {
  mass: 2,
  tension: 170,
  friction: 26,
  clamp: false,
  precision: 0.0001,
  velocity: 0
}

export default function ProductCard({
  product,
  setPayData
}: I) {
  const [springs, api] = useSpring(() => ({
    scale: 1,
    config
  }), [])

  const handlerMouseMove = () => {
    api.start({
      scale: 1.1
    })
  }

  const handlerMouseLeave = () => {
    api.start({
      scale: 1
    })
  }

  return (
    <>
      <a.div onClick={() => setPayData(product)}
        onMouseEnter={handlerMouseMove} onMouseLeave={handlerMouseLeave}
        style={springs} className="relative bg-gray cursor-pointer select-none rounded-2xl p-4 pt-24 min-h-48">
        <Image src={product.img.src} alt="cookie" width={product.img.width} height={product.img.height}
          className="w-36 h-36 absolute mx-auto left-0 right-0 -top-16"
        />
        <div className="flex flex-col gap-4">
          <h5 className="font-bold">{product.name}</h5>
          <div className="flex items-start gap-2">
            <div className="w-5 h-5">
              <Crown/>
            </div>
            <h6 className="text-gold">PREMIUM</h6>
          </div>
          <p>{product.description}</p>
          <h5>{product.price} <span className="text-base">USD</span></h5>
        </div>
        <div className="bg-black/70 flex items-center justify-center absolute -right-4 -bottom-4 w-12 h-12 rounded-full">
          <div className="w-6 h-6"><Arrow className="fill-white"/></div>
        </div>
      </a.div>
    </>
  )
}
