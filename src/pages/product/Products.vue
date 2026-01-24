<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { products } from "../../store/productsList"
import Breadcrumb from "../../components/Breadcrumb.vue"

const route = useRoute()

const filteredProducts = computed(() => {
  return products.filter(p => {
    if (route.params.category && p.category !== route.params.category) return false
    if (route.params.sub && p.sub !== route.params.sub) return false
    if (route.params.child && p.child !== route.params.child) return false
    return true
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">

    <!-- Breadcrumb -->
    <Breadcrumb/>

    <!-- Products -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        class="border p-3 hover:shadow"
      >
        <img :src="item.thumbnail" class="w-full h-40 object-cover" />
        <h3 class="mt-2 text-sm font-medium">{{ item.name }}</h3>
        <p class="text-xs text-gray-500">৳ {{ item.price }}</p>
      </div>
    </div>

    <p v-if="!filteredProducts.length" class="mt-10 text-center text-gray-500">
      No products found
    </p>
  </div>
</template>
