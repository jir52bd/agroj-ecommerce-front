<template>
  <nav class="w-full border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4">
      <ul
        class="flex items-center justify-center gap-8 py-4 text-xs font-medium tracking-widest uppercase text-gray-800"
      >
        <!-- Normal items -->
        <li v-for="item in normalMenu" :key="item">
          <a
            href="#"
            class="hover:text-gray-500 transition-colors duration-200"
          >
            {{ item }}
          </a>
        </li>

        <!-- Dropdown -->
        <li class="relative group">
          <a
            href="#"
            class="flex items-center gap-1 hover:text-gray-500 transition-colors duration-200"
          >
            Area Rugs
            <span class="text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /> 
                </svg>
            </span>
          </a>

          <!-- Dropdown menu -->
          <ul
            class="absolute left-0 top-full mt-3 w-48 bg-white border border-gray-200 shadow-md
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-all duration-200"
          >
            <li v-for="sub in areaRugs" :key="sub">
              <a
                href="#"
                class="block px-4 py-2 text-xs tracking-wide uppercase text-gray-700
                       hover:bg-gray-100"
              >
                {{ sub }}
              </a>
            </li>
          </ul>
        </li>

        <!-- Rest items -->
        <li v-for="item in afterDropdown" :key="item">
          <a
            href="#"
            class="hover:text-gray-500 transition-colors duration-200"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const normalMenu = [
  "Home",
  "New Arrivals",
  "Discount Collection",
]

const areaRugs = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Runner Rugs",
]

const afterDropdown = [
  "Doormats",
  "Table Accents",
  "Multi-Purpose Mats",
  "Baskets",
  "Christmas Collection",
]
</script>
