<template>
  <div class="bg-[#faf7f2] min-h-screen px-6 md:px-16 py-10">

    <!-- Breadcrumb -->
    <p class="text-sm text-gray-500 mb-8">
      Home › New Arrivals › <span class="text-gray-800">{{ product.name }}</span>
    </p>

    <!-- Product Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-14">

      <!-- Product Image -->
      <div class="flex justify-center">
        <img
          :src="product.image"
          class="max-w-md w-full object-contain"
          alt="Product Image"
        />
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <h1 class="text-2xl tracking-widest uppercase font-serif">
          {{ product.name }}
        </h1>

        <p class="text-lg font-medium">Tk {{ product.price }}</p>

        <!-- Size -->
        <div>
          <label class="block text-sm mb-2">Size/Shape (Feet)</label>
          <select v-model="selectedSize" class="border px-4 py-2 w-60">
            <option v-for="size in product.sizes" :key="size">
              {{ size }}
            </option>
          </select>
        </div>

        <!-- Quantity -->
        <div>
          <label class="block text-sm mb-2">Quantity</label>
          <div class="flex border w-32">
            <button @click="qty--" class="w-10">-</button>
            <div class="flex-1 text-center py-2">{{ qty }}</div>
            <button @click="qty++" class="w-10">+</button>
          </div>
        </div>

        <!-- Buttons -->
        <div class="space-y-3">
          <button class="w-full border py-3 tracking-widest">
            ADD TO CART
          </button>
          <button class="w-full bg-[#5a3e2b] text-white py-3 tracking-widest">
            BUY IT NOW
          </button>
        </div>

        <!-- Delivery -->
        <p class="text-xs text-gray-500">
          (delivery time: 5 to 7 working days inside Dhaka)
        </p>

        <!-- Payment Methods -->
        <img src="/payments.png" class="max-w-md" alt="Payments" />

        <!-- Tabs -->
        <div class="mt-8">
          <div class="flex space-x-6 border-b">
            <button
              @click="tab = 'desc'"
              :class="tabClass('desc')"
            >
              Description
            </button>
            <button
              @click="tab = 'care'"
              :class="tabClass('care')"
            >
              Cleaning & Maintenance
            </button>
          </div>

          <ul v-if="tab === 'desc'" class="list-disc pl-6 mt-4 space-y-1 text-sm">
            <li v-for="item in product.description" :key="item">
              {{ item }}
            </li>
          </ul>

          <p v-else class="text-sm mt-4">
            Vacuum regularly, avoid moisture, spot clean only.
          </p>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="mt-20">
      <h2 class="text-center tracking-widest mb-10">YOU MAY ALSO LIKE</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="item in related"
          :key="item.id"
          class="text-center"
        >
          <img :src="item.image" class="mb-4" />
          <p class="text-sm">{{ item.name }}</p>
          <p class="text-sm text-gray-600">from Tk {{ item.price }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()


const tab = ref('desc')
const qty = ref(1)
const selectedSize = ref('3x5 - Rectangle')

const product = {
  name: 'Chitra · Canyon – Area Rug',
  price: '5,485.00',
  image: '/rug-main.png',
  sizes: ['3x5 - Rectangle', '4x6 - Rectangle'],
  description: [
    '100% natural jute',
    'Hand Braided',
    'Locally designed & crafted by skilled artisans',
    'Double sided & durable',
    'Eco-friendly & sustainable',
    'Color guarantee'
  ]
}

const related = [
  { id: 1, name: 'Chitra · Meadow – Area Rug', price: '5,485.00', image: '/r1.png' },
  { id: 2, name: 'Chitra · Coral – Area Rug', price: '5,485.00', image: '/r2.png' },
  { id: 3, name: 'Chitra · Glacier – Area Rug', price: '5,485.00', image: '/r3.png' },
  { id: 4, name: 'Natural – Area Rug', price: '3,125.00', image: '/r4.png' }
]

const tabClass = (name) =>
  tab.value === name
    ? 'border-b-2 border-black pb-2'
    : 'text-gray-500 pb-2'
</script>

