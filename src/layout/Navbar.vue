<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <div class="text-xl font-bold">MySite</div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6">
      <MenuItem v-for="item in filteredMenu" :key="item.name" :item="item" :level="0" />
    </ul>
    
    <!-- Mobile Menu Button -->
    <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <ul v-show="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
      <MenuItem v-for="item in filteredMenu" :key="item.name" :item="item" :level="0" mobile />
    </ul>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import MenuItem from '../components/navbarMenu/MenuItem.vue'

// Menu & login state
const menu = ref([
  { name: 'Home', link: '/' },
  { 
    name: 'Services', 
    link: '/services',
    children: [
      { name: 'Web Design', link: '/services/web' },
      { name: 'App Development', link: '/services/app' },
      { 
        name: 'Marketing', 
        link: '/services/marketing',
        children: [
          { name: 'SEO', link: '/services/marketing/seo' },
          { name: 'Content', link: '/services/marketing/content' },
        ]
      }
    ]
  },
  { name: 'About', link: '/about' },
  { name: 'Login', link: '/login', guest: true },
  { name: 'Dashboard', link: '/dashboard', auth: true },
  { name: 'Logout', link: '/logout', auth: true }
])

const isLoggedIn = ref(false)
const mobileMenuOpen = ref(false)

const filteredMenu = computed(() => {
  return menu.value.filter(item => {
    if(item.auth && !isLoggedIn.value) return false
    if(item.guest && isLoggedIn.value) return false
    return true
  })
})
</script>
