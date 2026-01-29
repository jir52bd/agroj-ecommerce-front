<script setup>
import { useRoute } from 'vue-router'
const props = defineProps({
  to: String,
  label: String,
})

const route = useRoute()
</script>

<template>
  <router-link
    :to="to"
    class="block px-4 py-3 hover:bg-gray-50"
    :class="route.path === to ? 'bg-green-50 text-green-600 font-medium' : ''"
  >
    {{ label }}
  </router-link>
</template>
