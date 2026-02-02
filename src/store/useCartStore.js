import { defineStore } from "pinia"

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // { product, qty }
    isOpen: false,
  }),

  getters: {
    cartCount: (state) =>
      state.items.reduce((sum, i) => sum + i.qty, 0),

    totalPrice: (state) =>
      state.items.reduce(
        (sum, i) => sum + i.qty * i.product.finalPrice,
        0
      ),
  },

  actions: {
    toggleCart() {
      this.isOpen = !this.isOpen
    },

    openCart() {
      this.isOpen = true
    },
    closeCart() {
      this.isOpen = false
    },
    addToCart(product) {
      const found = this.items.find(
        (i) => i.product.id === product.id
      )

      if (found) {
        found.qty++
      } else {
        this.items.push({
          product,
          qty: 1,
        })
      }
    },

     increase(id) {
      const item = this.items.find(i => i.product.id === id)
      if (item) item.qty++
    },

    decrease(id) {
      const item = this.items.find(i => i.product.id === id)
      if (item && item.qty > 1) item.qty--
    },

    remove(id) {
      this.items = this.items.filter(
        (i) => i.product.id !== id
      )
    },
  },
})
