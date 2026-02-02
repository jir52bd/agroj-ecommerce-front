<script setup>
import { ref } from 'vue'

const bulletins = ref([
  '🔥 Special Offer: Flat 30% OFF!',
  '🌙 Eid Special Collection Available Now',
  '🚚 Free Shipping on orders over ৳5000',
  '🎉 New Year Sale Coming Soon!'
])
</script>
<template>
  <div class="w-full bg-green-600 text-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center h-10 text-sm gap-6">

        <!-- Bulletin Area -->
        <div class="flex-1 overflow-hidden relative">
          <div class="bulletin-track">
            <span
              v-for="(item, index) in bulletins"
              :key="index"
              class="mx-10 inline-block whitespace-nowrap"
            >
              {{ item }}
            </span>
          </div>
        </div>

        <!--  Right Menu (Fixed) -->
        <div class="flex gap-4 shrink-0">
          <a href="#" class="hover:underline">Help</a>
          <a href="#" class="hover:underline">Contact Us</a>
          <a href="#" class="hover:underline">Track Order</a>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bulletin-track {
  display: inline-flex;
  white-space: nowrap;
  transform: translateX(100%);
  animation: bulletin 25s linear infinite;
}

@keyframes bulletin {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>