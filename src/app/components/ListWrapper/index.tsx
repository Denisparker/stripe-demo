import ProductsList from "app/components/ListWrapper/components/ProductsList"
import {products} from "consts/products"
import {Product} from "types/product"

export default async function ListWrapper() {
  const getProducts: Promise<Product[]> = new Promise((resolve) => {
    setTimeout(() => resolve(products), 0)
  })

  const productsArr = await getProducts

  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-24">
      <ProductsList products={productsArr}/>
    </div>
  )
}
