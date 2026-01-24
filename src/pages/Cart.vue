<script setup>
import { useCartStore } from "../store/useCartStore"
const cart = useCartStore()
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-xl font-semibold mb-6">Your Cart</h1>

    <div
      v-for="item in cart.items"
      :key="item.product.id"
      class="flex gap-4 mb-4 border-b pb-4"
    >
      <img
        :src="item.product.thumbnail"
        class="w-20 h-20 object-cover"
      />

      <div class="flex-1">
        <h3 class="text-sm">{{ item.product.name }}</h3>
        <p class="text-xs">৳ {{ item.product.finalPrice }}</p>
        <p class="text-xs">Qty: {{ item.qty }}</p>
      </div>

      <button
        @click="cart.remove(item.product.id)"
        class="text-red-500 text-sm"
      >
        Remove
      </button>
    </div>

    <p class="text-right font-semibold mt-6">
      Total: ৳ {{ cart.totalPrice }}
    </p>
  </div>
</template>
