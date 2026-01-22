<script setup>
import { ref } from 'vue'

const products = ref([
  {
    image: '../src/assets/img/products/1.jpg',
    hoverImage: '../src/assets/img/products/1-hover.jpg',
    title: 'Product 1',
    price: 299
  },
  {
    image: '../src/assets/img/products/2.jpg',
    hoverImage: '../src/assets/img/products/2-hover.jpg',
    title: 'Product 2',
    price: 399
  },
  {
    image: '../src/assets/img/products/3.jpg',
    hoverImage: '../src/assets/img/products/3-hover.jpg',
    title: 'Product 3',
    price: 499
  },
  {
    image: '../src/assets/img/products/4.jpg',
    hoverImage: '../src/assets/img/products/4-hover.jpg',
    title: 'Product 4',
    price: 599
  },
  {
    image: '../src/assets/img/products/5.jpg',
    hoverImage: '../src/assets/img/products/5-hover.jpg',
    title: 'Product 5',
    price: 699
  },
  {
    image: '../src/assets/img/products/6.jpg',
    hoverImage: '../src/assets/img/products/6-hover.jpg',
    title: 'Product 6',
    price: 799
  },
 
])
</script>

<template>
    <section class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-center text-sm tracking-[0.3em] text-gray-700 mb-10 uppercase">Discount Products</h2>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="(item, index) in products"
          :key="index"
          class="group bg-white p-4 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div class="relative w-full mb-4">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              :src="item.hoverImage"
              :alt="item.title"
              class="w-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
          <h3 class="text-sm font-medium text-gray-800">{{ item.title }}</h3>
          <p class="text-xs text-gray-600 mt-1">from Tk {{ item.price }}</p>
        </div>
      </div>
      <div class="flex justify-center mt-12">
        <button
          class="bg-green-700 text-white text-xs tracking-widest px-8 py-3 hover:bg-green-600 transition"
        >
          VIEW ALL
        </button>
      </div>

    </div>
    </section>
</template>