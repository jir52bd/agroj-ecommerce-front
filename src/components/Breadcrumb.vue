<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"

const route = useRoute()

const format = (text) =>
  text.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())


const crumbs =computed(() => {
     const list = [
        { label: format("Products"), link: "/products" },
        ]
    if (route.params.category) {
    list.push({
        label:format(route.params.category.replace("-", " ")),
        link: `/products/${route.params.category}`,
    })
    }

    if (route.params.sub) {
    list.push({
        label: format(route.params.sub.replace("-", " ")),
        link: `/products/${route.params.category}/${route.params.sub}`,
    })
    }

    if (route.params.child) {
    list.push({
        label: format(route.params.child.replace("-", " ")),
        link: route.fullPath,
    })
    }
    return list; 
}) 

</script>

<template>
  <nav class="text-xs text-gray-500 mb-4">
    <ol class="flex gap-2">
      <li v-for="(c, i) in crumbs" :key="i">
        <router-link :to="c.link" class="hover:underline">
          {{ c.label }}
        </router-link>
        <span v-if="i < crumbs.length - 1"> / </span>
      </li>
    </ol>
  </nav>
</template>
