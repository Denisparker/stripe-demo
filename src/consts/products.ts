import {Product} from "types/product"

export const products: Product[] = [
  {
    id: 1,
    name: "Chocolate chips",
    description: "Hazelnut and chocolate chip cookies",
    img: {
      width: 1260,
      height: 1220,
      src: "/assets/chocolateChips.png"
    },
    price: 20,
    rating: 1
  },
  {
    id: 2,
    name: "Caramel",
    description: "Delicious Salted Caramel Cookies",
    img: {
      width: 465,
      height: 446,
      src: "/assets/caramel.png"
    },
    price: 22,
    rating: 1
  },
  {
    id: 3,
    name: "Chocolate",
    description: "Chocolate chip peanut cookies",
    img: {
      width: 472,
      height: 469,
      src: "/assets/chocolate.png"
    },
    price: 25,
    rating: 1
  },
  {
    id: 4,
    name: "Nuts",
    description: "Oatmeal cookies with hazelnut pieces",
    img: {
      width: 577,
      height: 544,
      src: "/assets/nuts.png"
    },
    price: 20,
    rating: 1
  },
  {
    id: 5,
    name: "Pink",
    description: "Cookies with sprinkles and coconut pieces",
    img: {
      width: 916,
      height: 910,
      src: "/assets/pink.png"
    },
    price: 30,
    rating: 1
  },
  {
    id: 6,
    name: "Triple chocolate",
    description: "Chocolate cookies with chocolate pieces",
    img: {
      width: 1000,
      height: 961,
      src: "/assets/tripleChocolate.png"
    },
    price: 33,
    rating: 1
  }
]
