<template>
  <li class="relative" @mouseleave="open = false">
    <!-- Menu Link -->
    <div>
      <a 
        :href="item.link" 
        @mouseenter="level === 0 ? open = true : null"
        @click="mobile ? toggleOpen() : null"
        :class="[
          'px-4 py-2 block hover:bg-blue-700 rounded transition-colors duration-200',
          isActive(item.link) ? 'bg-blue-800 font-bold' : ''
        ]"
      >
        {{ item.name }}
        <span v-if="item.children" class="ml-1">&#x25BE;</span>
      </a>
    </div>

    <!-- Dropdown -->
    <transition name="fade">
      <ul v-show="open" class="absolute left-0 mt-2 bg-blue-600 text-white rounded shadow-lg min-w-[150px] z-50" v-if="item.children && !mobile">
        <MenuItem v-for="child in item.children" :key="child.name" :item="child" :level="level+1" />
      </ul>
    </transition>

    <!-- Mobile Nested Menu -->
    <transition name="fade">
      <ul v-show="open" class="pl-4" v-if="item.children && mobile">
        <MenuItem v-for="child in item.children" :key="child.name" :item="child" :level="level+1" mobile />
      </ul>
    </transition>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: Object,
  level: Number,
  mobile: { type: Boolean, default: false }
})

const open = ref(false)

const toggleOpen = () => {
  open.value = !open.value
}

// Active link highlight
const isActive = (link) => {
  return window.location.pathname === link
}
</script>

<style>
/* Smooth transition for dropdown */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
