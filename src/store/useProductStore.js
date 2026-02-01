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
        discount: 20,
        thumbnail: img1,
        inStock: true,
      },
      {
        id: 2,
        name: "Classic Bedroom Rug",
        category: "area-rugs",
        sub: "bedroom",
        price: 1500,
        discount: 0,
        thumbnail: img2,
        inStock: true,
      },
      {
        id: 3,
        name: "Kids Fun Rug",
        category: "area-rugs",
        sub: "bedroom",
        price: 900,
        discount: 0,
        thumbnail: img3,
        inStock: false,
      },
      {
        id: 4,
        name: "Jute Markating Bag",
        category: "outdoor-rugs",
        sub: "big-rag",
        price: 1000,
        discount: 0,
        thumbnail: img3,
        inStock: false,
      },
      {
        id: 5,
        name: "Kids Fun Rug",
        category: "area-rugs",
        sub: "bedroom",
        price: 1200,
        discount: 0,
        thumbnail: img2,
        inStock: false,
      },
    ],

    // Wishlist (store-level)
    wishlist: [],

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
          // UI for helper
          isWishlisted: state.wishlist.some(w => w.id === p.id),
        }))
    },

    wishlistCount: (state) => state.wishlist.length,
  },

  actions: {
    // Add / Remove Wishlist
    toggleWishlist(product) {
      const index = this.wishlist.findIndex(p => p.id === product.id)

      if (index === -1) {
        this.wishlist.push(product)
      } else {
        this.wishlist.splice(index, 1)
      }
    },

    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter(p => p.id !== id)
    },

    clearWishlist() {
      this.wishlist = []
    },
  },
})
