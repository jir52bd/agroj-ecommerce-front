<script setup>
import ProfileLink from '../components/ProfileLink.vue'
import { useAuthStore } from '../store/useAuthStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">

    <!-- LEFT SIDEBAR -->
    <aside class="col-span-12 md:col-span-3 bg-white border rounded">
      <!-- User Card -->
      <div class="p-4 border-b flex items-center gap-3">
        <img
          :src="auth.user?.photo || 'https://i.pravatar.cc/80'"
          class="w-12 h-12 rounded-full"
        />
        <div>
          <p class="text-sm text-gray-500">Hello,</p>
          <p class="font-semibold">{{ auth.user?.name }}</p>
        </div>
      </div>

      <!-- Menu -->
      <nav class="divide-y">
        <ProfileLink to="/profile" label="My Account" />
        <ProfileLink to="/profile/orders" label="My Orders" />
        <ProfileLink to="/profile/wishlist" label="My Wishlist" />
        <ProfileLink to="/profile/offers" label="My Offers" />
        <ProfileLink to="/profile/settings" label="Settings" />
        <button
          @click="auth.logout(); router.push('/')"
          class="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-50"
        >
          Sign Out
        </button>
      </nav>
    </aside>

    <!-- RIGHT CONTENT -->
    <section class="col-span-12 md:col-span-9 bg-white border rounded p-6">
      <router-view />
    </section>

  </div>
</template>
