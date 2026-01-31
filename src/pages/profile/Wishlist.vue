<script setup>
import { useProductStore } from '../../store/useProductStore';

const productStore = useProductStore()
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">
      My Wishlist ({{ productStore.wishlistCount }})
    </h1>

    <div v-if="productStore.wishlist.length === 0" class="text-gray-500">
      Your wishlist is empty ❤️
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in productStore.wishlist"
        :key="item.id"
        class="border rounded-lg p-4"
      >
        <img :src="item.thumbnail" class="h-40 w-full object-cover rounded" />
        <h3 class="mt-3 font-medium">{{ item.name }}</h3>
        <p class="text-sm text-gray-500">৳ {{ item.price }}</p>

        <button
          @click="productStore.removeFromWishlist(item.id)"
          class="mt-3 text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
