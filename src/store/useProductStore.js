import { defineStore } from "pinia"
import img1 from "../assets/img/products/1.jpg"
import img2 from "../assets/img/products/2.jpg"
import img3 from "../assets/img/products/3.jpg"

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Modern Living Rug",
        category: "area-rugs",
        sub: "living-room",
        price: 2000,
        discount: 20, // %
        thumbnail: img1,
      },
      {
        id: 2,
        name: "Classic Bedroom Rug",
        category: "area-rugs",
        sub: "bedroom",
        price: 1500,
        discount: 0,
        thumbnail: img2,
      },
      {
        id: 3,
        name: "Kids Fun Rug",
        category: "area-rugs",
        sub:"bedroom",
        child: null,
        price: 900,
        discount: 0,
        thumbnail: img3,
    },
    ],

    search: "",
    minPrice: 0,
    maxPrice: 10000,
  }),

  getters: {
    filteredProducts: (state) => {
      return state.products
        .filter(p =>
          p.name.toLowerCase().includes(state.search.toLowerCase())
        )
        .filter(p => p.price >= state.minPrice && p.price <= state.maxPrice)
        .map(p => ({
          ...p,
          finalPrice:
            p.discount > 0
              ? Math.round(p.price - (p.price * p.discount) / 100)
              : p.price,
        }))
    },
  },
})
