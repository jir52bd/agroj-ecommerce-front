<template>
  <footer class="bg-[#ebe7df] text-gray-800">
    <div class="relative flex justify-center items-center h-16 py-10">
    
    <!-- Logo 1 -->
    <img
      src="../assets/img/agroj-logo-3.png"
      alt="Agroj Logo 1"
      class="logo logo-one h-16 w-auto absolute"
    />

    <!-- Logo 2 -->
    <img
      src="../assets/img/agroj-logo-2.png"
      alt="Agroj Logo 2"
      class="logo logo-two h-16 w-auto absolute"
    />

  </div>
    <div
      class="max-w-7xl mx-auto px-6 py-12
             grid grid-cols-1 md:grid-cols-3 gap-10"
    >
      <!-- Links -->
      <div>
        <ul class="space-y-3 text-sm">
          <li>
            <router-link :to="'/about-us'" class="hover:text-green-600">About Us</router-link>
          </li>
          <li>
            <router-link :to="'/contact-us'" class="hover:text-green-600">Contact Us</router-link>
          </li>
          <li>
            <router-link :to="'/payment-us'" class="hover:text-green-600">Payment Options</router-link>
          </li>
          <li>
            <router-link :to="'/store-location'" class="hover:text-green-600">Store Locations</router-link>
          </li>
          <li>
            <router-link :to="'/terms-of-service'" class="hover:text-green-600">Terms & Conditions</router-link>
          </li>
          <li>
            <router-link :to="'/privacy-policy'" class="hover:text-green-600">Privacy Policy</router-link>
          </li>
          <li>
            <router-link :to="'/refund-policy'" class="hover:text-green-600">Refund Policy</router-link>
          </li>
        </ul>
      </div>

      <!-- Spacer -->
      <div class="hidden md:block"></div>

      <!-- Social -->
      <div class="md:text-right">
        <p class="mb-4 text-sm font-semibold tracking-wide">
          FOLLOW US
        </p>

        <div class="flex md:justify-end gap-4">
          <!-- Facebook -->
          <a href="#" class="hover:opacity-70">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.7
                   c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1
                   c-1 0-1.3.6-1.3 1.2v1.9h2.3L15.9
                   14h-2v7A10 10 0 0 0 22 12Z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" class="hover:opacity-70">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M7 2C4.2 2 2 4.2 2 7v10
                   c0 2.8 2.2 5 5 5h10
                   c2.8 0 5-2.2 5-5V7
                   c0-2.8-2.2-5-5-5H7Zm10
                   2c1.7 0 3 1.3 3 3v10
                   c0 1.7-1.3 3-3 3H7
                   c-1.7 0-3-1.3-3-3V7
                   c0-1.7 1.3-3 3-3h10Zm-5
                   3a5 5 0 1 0 0 10
                   5 5 0 0 0 0-10Zm0
                   2a3 3 0 1 1 0 6
                   3 3 0 0 1 0-6Zm4.8-.9
                   a1.2 1.2 0 1 0 0 2.4
                   1.2 1.2 0 0 0 0-2.4Z"
              />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a href="#" class="hover:opacity-70">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M4.98 3.5a2.5 2.5 0 1 0 0 5
                   2.5 2.5 0 0 0 0-5ZM3
                   9h4v12H3V9Zm7 0h3.8v1.6h.1
                   c.5-.9 1.8-1.8 3.6-1.8
                   3.8 0 4.5 2.5 4.5
                   5.7V21h-4v-5.2
                   c0-1.2 0-2.8-1.7-2.8
                   s-2 1.3-2 2.7V21h-4V9Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-300 py-4 text-center text-xs">
      © 2026 Agroj | Tradition of Art Craft. All Rights Reserved
    </div>
  </footer>
</template>
<style scoped>
.logo {
  opacity: 0;
  animation: fadeSwitch 4s infinite;
}

.logo-one {
  animation-delay: 0s;
}

.logo-two {
  animation-delay: 2s;
}

@keyframes fadeSwitch {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>