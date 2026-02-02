<script setup>
import { useCartStore } from "../store/useCartStore";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "vue-router";
import { useProductStore } from "../store/useProductStore";

const productStore = useProductStore();
const cart = useCartStore();
const router = useRouter();
const auth = useAuthStore();
</script>

<template>
  <div>
    <header class="w-full border-b border-gray-200">
      <div class="max-w-7xl max-auto px-4">
        <div class="relative flex items-center h-20">
          <!--center logo-->
          <div class="absolute left-1/2 -translate-x-1/2">
            <img
              src="../assets/img/agroj-logo.png"
              alt="Agroj Logo"
              class="h-10 object-contain"
            />
          </div>

          <!--right nav-->
          <div class="ml-auto flex item-center space-x-6 text-gray-500">
            <!--Search button-->
            <button class="flex item-center gap-1 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="text-xs">Search</span>
            </button>
            <button
              @click="router.push('/wishlist')"
              class="relative flex items-center gap-1 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="size-6"
                :class="
                  productStore.wishlistCount ? 'text-red-500' : 'text-gray-300'
                "
              >
                <path
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
                -1.935 0-3.597 1.126-4.312 2.733
                -.715-1.607-2.377-2.733-4.313-2.733
                C5.1 3.75 3 5.765 3 8.25
                c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <span class="text-xs">Wishlist</span>

              <span
                v-if="productStore.wishlistCount"
                class="absolute -top-2 -right-3 bg-green-500 text-white text-[10px] px-1.5 rounded-full"
              >
                {{ productStore.wishlistCount }}
              </span>
            </button>
            <!-- Account -->
            <div v-if="!auth.isLoggedIn">
              <button
                @click="router.push('/login')"
                class="flex items-center gap-1 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="text-xs">Login</span>
              </button>
            </div>

            <div v-else class="relative group z-40">
              <button class="flex items-center gap-1 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="text-xs">{{ auth.user.name }}</span>
              </button>

              <!-- Dropdown -->
              <div
                class="absolute right-0 mt-2 w-40 bg-white border rounded shadow opacity-0 group-hover:opacity-100 transition"
              >
                <a
                  @click="router.push('/profile')"
                  class="block px-4 py-2 hover:bg-gray-100"
                  >Profile</a
                >
                <a class="block px-4 py-2 hover:bg-gray-100">Orders</a>
                <a class="block px-4 py-2 hover:bg-gray-100">Wishes</a>
                <button
                  @click="auth.logout()"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Sign Out
                </button>
              </div>
            </div>

            <!--Cart button-->
            <button
              @click="router.push('/cart')"
              class="relative flex items-center gap-1 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span class="text-xs">Cart</span>

              <!-- Cart Count -->
              <span
                v-if="cart.cartCount"
                class="absolute -top-4 -right-5 text-[10px] px-1.5 py-0.5 bg-black text-white rounded-full"
              >
                {{ cart.cartCount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
