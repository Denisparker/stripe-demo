import ProductsList from "app/components/ListWrapper/components/ProductsList"
import {products} from "consts/products"
import {Product} from "types/product"

const getProducts = () => new Promise<Product[]>((resolve) => {
  setTimeout(() => resolve(products), 2000)
})

export default async function ListWrapper() {
  const productsArr = await getProducts()

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 sm:px-10 gap-x-20 gap-y-24">
      <ProductsList products={productsArr}/>
    </div>
  )
}
