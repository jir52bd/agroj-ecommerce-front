<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import { useProductStore } from "../store/useProductStore"
import { useCartStore } from "../store/useCartStore"

const route = useRoute()
const productStore = useProductStore()
const cart = useCartStore()

const product = computed(() =>
  productStore.filteredProducts.find(
    p => p.id === Number(route.params.id)
  )
)
</script>

<template>
  <div v-if="product" class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

    <!-- Image -->
    <img
      :src="product.thumbnail"
      class="w-full h-96 object-cover"
    />

    <!-- Info -->
    <div>
      <h1 class="text-xl font-semibold">{{ product.name }}</h1>

      <div class="mt-3">
        <span
          v-if="product.discount"
          class="line-through text-gray-400 mr-2"
        >
          ৳ {{ product.price }}
        </span>
        <span class="text-red-600 text-lg font-bold">
          ৳ {{ product.finalPrice }}
        </span>
      </div>

      <button
  @click="cart.addToCart(product)"
  class="bg-black text-white px-4 py-2 text-xs"
>
  Add to Cart
</button>
    </div>

  </div>

  <p v-else class="text-center py-20 text-gray-500">
    Product not found
  </p>
</template>
