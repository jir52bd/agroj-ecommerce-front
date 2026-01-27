<script setup>
import { useCartStore } from "../store/useCartStore"
import { computed } from "vue"

const cart = useCartStore()

const canCheckout = computed(() => cart.agree)
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-12">

    <!-- Title -->
    <h1
      class="text-center text-xs tracking-[0.35em] font-semibold uppercase border-b pb-6 mb-10"
    >
      Your Cart
    </h1>

    <!-- Cart Items -->
    <div
      v-for="item in cart.items"
      :key="item.product.id"
      class="grid grid-cols-12 gap-4 border-b py-6 items-center"
    >
      <!-- Image -->
      <div class="col-span-2">
        <img
          :src="item.product.thumbnail"
          class="w-24 h-24 object-cover border"
        />
      </div>

      <!-- Info -->
      <div class="col-span-4 text-sm">
        <p class="font-medium">{{ item.product.name }}</p>
        <p class="text-xs text-gray-500">
          Size/Shape: {{ item.product.size ?? "Standard" }}
        </p>
        <button
          @click="cart.remove(item.product.id)"
          class="text-xs text-red-600 mt-2 underline"
        >
          Remove
        </button>
      </div>

      <!-- Price -->
      <div class="col-span-2 text-sm text-center">
        ৳ {{ item.product.finalPrice }}
      </div>

      <!-- Quantity -->
      <div class="col-span-2 flex justify-center">
        <div class="flex border">
          <button
            @click="cart.decrease(item.product.id)"
            class="px-3 py-1"
          >−</button>
          <span class="px-4 py-1 border-x">{{ item.qty }}</span>
          <button
            @click="cart.increase(item.product.id)"
            class="px-3 py-1"
          >+</button>
        </div>
      </div>

      <!-- Total -->
      <div class="col-span-2 text-sm text-right font-medium">
        ৳ {{ item.qty * item.product.finalPrice }}
      </div>
    </div>

    <!-- Summary -->
    <div class="mt-10 flex justify-end">
      <div class="w-full max-w-sm text-sm space-y-3">

        <div class="flex justify-between font-semibold">
          <span>Subtotal</span>
          <span>৳ {{ cart.totalPrice }}</span>
        </div>

        <p class="text-xs text-gray-500">
          Taxes and shipping calculated at checkout
        </p>

        <!-- Terms -->
        <label class="flex items-start gap-2 text-xs">
          <input type="checkbox" v-model="cart.agree" />
          <span>
            Please check this box to agree to our
            <span class="underline">terms and conditions</span>
          </span>
        </label>

        <!-- Buttons -->
        <div class="flex gap-3 pt-4">
          <router-link
            to="/"
            class="flex-1 text-center border px-4 py-2 text-xs tracking-widest"
          >
            CONTINUE SHOPPING
          </router-link>

          <!-- <button
            :disabled="!canCheckout"
            class="flex-1 bg-green-500 text-white px-4 py-2 text-xs tracking-widest disabled:opacity-40"
          >
            PLACE YOUR ORDER
          </button> -->
          <router-link
          :disabled="!canCheckout"
  to="/checkout"
  :class="[
    'flex-1 text-center px-4 py-2 text-xs tracking-widest',
    canCheckout
      ? 'bg-green-600 text-white'
      : 'bg-gray-300 text-gray-500 pointer-events-none'
  ]"
>
  PLACE YOUR ORDER
</router-link>

        </div>

      </div>
    </div>

  </div>
</template>
