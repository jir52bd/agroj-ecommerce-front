<template>
  <nav class="w-full border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <ul class="flex items-center justify-center gap-8 py-4 text-xs font-medium uppercase">

        <!-- Static menu -->
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <!-- New Arrival Products -->
        <li>
          <router-link to="#">New Arrivals</router-link>
        </li>

        <!-- Discount Collection -->
        <li>
          <router-link to="#">Discount Collection</router-link>
        </li>

        <!-- Dynamic categories -->
        <li
          v-for="category in productsData"
          :key="category.slug"
          class="relative group"
        >
          <!-- Main item -->
          <router-link
            :to="`/products/${category.slug}`"
            class="flex items-center gap-1 hover:text-gray-500"
          >
            {{ category.name }}

            <svg
              v-if="category.children"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </router-link>

          <!-- First dropdown -->
          <ul
            v-if="category.children"
            class="absolute left-0 top-full mt-3 w-48 bg-white border shadow
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-all"
          >
            <li
              v-for="sub in category.children"
              :key="sub.slug"
              class="relative group/sub"
            >
              <router-link
                :to="`/products/${category.slug}/${sub.slug}`"
                class="block px-4 py-2 hover:bg-gray-100 flex justify-between"
              >
                {{ sub.name }}

                <span v-if="sub.children">›</span>
              </router-link>

              <!-- Sub-sub dropdown -->
              <ul
                v-if="sub.children"
                class="absolute left-full top-0 w-48 bg-white border shadow
                       opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible"
              >
                <li
                  v-for="child in sub.children"
                  :key="child.slug"
                >
                  <router-link
                    :to="`/products/${category.slug}/${sub.slug}/${child.slug}`"
                    class="block px-4 py-2 hover:bg-gray-100"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>

            </li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
</template>
<script setup>
import { productsData } from "../store/products"
</script>
