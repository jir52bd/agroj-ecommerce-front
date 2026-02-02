<script setup>
import { useCartStore } from '../../store/useCartStore';

const cart = useCartStore();

</script>

<template>

  <div
    v-if="cart.cartCount > 0"
    @click="cart.toggleCart"
    class="fixed bottom-6 right-4 z-40 text-white rounded-lg shadow-lg  cursor-pointer"
  >
    <div class="flex flex-col justify-center items-center rounded-t-lg bg-green-600 px-4 py-3 hover:bg-green-700">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
     </span>
      <p class="text-sm font-semibold">
       {{ cart.cartCount }} items
      </p>
    </div>
    <div class="text-sm font-bold rounded-b-lg bg-green-700 px-4 py-1">
      ৳ {{ cart.totalPrice }}
    </div>
  </div>
</template>
