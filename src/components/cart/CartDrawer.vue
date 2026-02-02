<script setup>
import { useCartStore } from '../../store/useCartStore';

const cart = useCartStore();

const truncate = (text, maxLength) =>{
    if (!text) return '';
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + ' ...'
      : text;
  }

</script>

<template>
  <div
    v-if="cart.isOpen"
    class="fixed inset-0 z-50 flex"
  >
    <!-- Overlay -->
    <div
      class="flex-1 bg-black/40"
      @click="cart.closeCart"
    ></div>

    <!-- Drawer -->
    <div class="w-80 bg-white p-4 overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <div class="flex gap-1 text-sm text-green-900">
           <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                    <path fill-rule="evenodd" d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z" clip-rule="evenodd" />
                </svg>
           </span>
            <p v-if="cart.cartCount > 0" class="text-sm font-semibold italic">
                {{ cart.cartCount }} {{ cart.cartCount ? 'item' : 'items'}}
            </p>
            

        </div>
        <button @click="cart.closeCart" class="text-green-700 hover:text-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
               <path fill-rule="evenodd" d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z" clip-rule="evenodd" />
            </svg>
        </button>
      </div>

      <div
        v-for="item in cart.items"
        :key="item.product.id"
        class="flex gap-3 mb-4 border-b pb-2"
      >
        <img
          :src="item.product.thumbnail"
          class="w-12 h-12 object-cover"
        />

        <div class="flex-1">
            <div class="flex justify-between">
                <p class="text-sm pt-1">{{ truncate(item.product.name, 12) }} &#128936; </p>
                <div class="col-span-1 flex justify-center">
                    <div class="flex border rounded-full">
                    <button
                        @click="cart.decrease(item.product.id)"
                        class="px-2 py-0 rounded-l-full bg-gray-300 hover:bg-green-600 hover:text-white"
                    >−</button>
                    <span class="px-2 py-0 border-x">{{ item.qty }}</span>
                    <button
                        @click="cart.increase(item.product.id)"
                        class="px-2 py-0 bg-gray-300 rounded-r-full hover:bg-green-600 hover:text-white"
                    >+</button>
                    </div>
                </div>
                <p class="text-xs text-gray-500 pt-1">
                    ৳ {{ item.product.price }}
                </p>
            </div>
          

          <div class="flex gap-2 mt-1">
            <button @click="cart.remove(item.product.id)" class="text-xs font-semibold text-red-700">Remove</button>
          </div>
        </div>
      </div>

      <div class="font-semibold flex justify-between mt-4">
        <span class="text-green-800">Total</span>
        <span>৳ {{ cart.totalPrice }}</span>
      </div>

      <router-link
        to="/checkout"
        class="block mt-4 bg-green-600 hover:bg-green-700 text-white text-center py-2 text-sm"
        @click="cart.closeCart"
      >
        Checkout
      </router-link>
    </div>
  </div>
</template>
