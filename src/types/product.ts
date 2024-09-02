export interface Product {
  id: number
  name: string
  description: string
  img: {
    width: number
    height: number
    src: string
  }
  price: number
  rating: number
}
