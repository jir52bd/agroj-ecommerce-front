<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import { useProductStore } from "../store/useProductStore"
import { useCartStore } from "../store/useCartStore"
import Breadcrumb from "../components/Breadcrumb.vue"


const route = useRoute()
const store = useProductStore()
const cart = useCartStore()

const products = computed(() => {
  return store.filteredProducts.filter(p => {
    if (route.params.category && p.category !== route.params.category) return false
    if (route.params.sub && p.sub !== route.params.sub) return false
    return true
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">

    <Breadcrumb/>
    
    <div class="flex justify-between py-2 gap-8">
        <!-- Search -->
        <input
        v-model="store.search"
        placeholder="Search products..."
        class="border px-3 py-2 mb-4 w-1/2 border-green-600"
        />

        <!-- Price Filter -->
        <div class="flex gap-3 mb-6">
        <input type="number" v-model="store.minPrice" class="border border-green-600 px-2 py-1 w-24" />
        <input type="number" v-model="store.maxPrice" class="border border-green-600 px-2 py-1 w-24" />
        </div>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="p in products"
        :key="p.id"
        class="border p-3"
      >
        <router-link :to="`/product/${p.id}`">
  
            <img :src="p.thumbnail" class="h-40 w-full object-cover" />
        </router-link>
        <h3 class="mt-2 text-sm">{{ p.name }}</h3>

        <div class="text-xs mt-1">
          <span
            v-if="p.discount"
            class="line-through text-gray-400 mr-2"
          >
            ৳ {{ p.price }}
          </span>
          <span class="font-semibold text-red-600">
            ৳ {{ p.finalPrice }}
          </span>
        </div>
        <button
        @click="cart.addToCart(p)"
        class="mt-2 w-full bg-green-800 text-white text-xs py-2 hover:bg-gray-800"
        >
        Add to Cart
        </button>
      </div>
    </div>
    <p v-if="!products.length" class="mt-10 text-center text-gray-500">
      No products found
    </p>
  </div>
</template>
