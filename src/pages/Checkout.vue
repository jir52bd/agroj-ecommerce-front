<script setup>
import { useCartStore } from "../store/useCartStore"
import { reactive, computed } from "vue"

const cart = useCartStore()

const form = reactive({
  email: "",
  country: "Bangladesh",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  phone: "",
  deliveryZone: "inside",
  paymentMethod: "cod",
})

const deliveryCharge = computed(() =>
  form.deliveryZone === "inside" ? 450 : 2250
)

const grandTotal = computed(() =>
  cart.totalPrice + deliveryCharge.value
)

const placeOrder = () => {
  console.log({
    customer: form,
    items: cart.items,
    subtotal: cart.totalPrice,
    delivery: deliveryCharge.value,
    total: grandTotal.value,
  })

  alert("✅ Order placed successfully")
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-12 py-12">
    <div class="grid lg:grid-cols-3 gap-10">

      <!-- LEFT SIDE -->
      <div class="lg:col-span-2 space-y-8 text-sm px-8">

        <!-- Contact -->
        <div>
          <h2 class="font-semibold mb-2">Contact</h2>
          <input v-model="form.email" placeholder="Email or mobile phone number" class="input" />
        </div>

        <!-- Delivery -->
        <div class="space-y-3">
          <h2 class="font-semibold">Delivery</h2>

          <select v-model="form.country" class="input">
            <option>Bangladesh</option>
          </select>

          <div class="grid grid-cols-2 gap-3">
            <input v-model="form.firstName" placeholder="First name" class="input" />
            <input v-model="form.lastName" placeholder="Last name" class="input" />
          </div>

          <input v-model="form.address" placeholder="Address" class="input" />
          <input v-model="form.apartment" placeholder="Apartment, suite (optional)" class="input" />

          <div class="grid grid-cols-2 gap-3">
            <input v-model="form.city" placeholder="City" class="input" />
            <input v-model="form.phone" placeholder="Phone" class="input" />
          </div>
        </div>

        <!-- Delivery Location -->
        <div>
          <h2 class="font-semibold mb-2">Delivery location</h2>

          <label class="radio">
            <input type="radio" value="inside" v-model="form.deliveryZone" />
            <span>Inside Dhaka — ৳450</span>
          </label>

          <label class="radio">
            <input type="radio" value="outside" v-model="form.deliveryZone" />
            <span>Outside Dhaka — ৳2,250</span>
          </label>
        </div>

        <!-- Payment -->
        <div>
          <h2 class="font-semibold mb-2">Payment</h2>

          <label class="radio">
            <input type="radio" value="ssl" v-model="form.paymentMethod" />
            <span>SSLCommerz (Card / Mobile Banking)</span>
          </label>

          <label class="radio">
            <input type="radio" value="cod" v-model="form.paymentMethod" />
            <span>Cash on Delivery (COD)</span>
          </label>
        </div>

      </div>

      <!-- RIGHT SIDE (ORDER SUMMARY) -->
      <div class="border p-6 text-sm space-y-4 bg-gray-50">

        <div
          v-for="item in cart.items"
          :key="item.product.id"
          class="flex justify-between items-center"
        >
          <div class="flex gap-3 items-center">
            <img :src="item.product.thumbnail" class="w-12 h-12 border" />
            <span>{{ item.product.name }} × {{ item.qty }}</span>
          </div>
          <span>৳ {{ item.qty * item.product.finalPrice }}</span>
        </div>

        <hr />

        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>৳ {{ cart.totalPrice }}</span>
        </div>

        <div class="flex justify-between">
          <span>Delivery</span>
          <span>৳ {{ deliveryCharge }}</span>
        </div>

        <div class="flex justify-between font-semibold text-base pt-2">
          <span>Total</span>
          <span>৳ {{ grandTotal }}</span>
        </div>

        <button
          @click="placeOrder"
          class="w-full bg-green-600 text-white py-3 mt-4 tracking-widest text-xs"
        >
          PAY NOW
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply w-full border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400;
}
.radio {
  @apply flex items-center gap-2 border px-3 py-2 mb-2 cursor-pointer;
}
</style>
