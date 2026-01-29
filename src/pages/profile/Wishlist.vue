<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../store/useAuthStore'

const auth = useAuthStore()

const name = ref(auth.user.name)
const dob = ref('')
const gender = ref('')
</script>

<template>
  <!-- Alert -->
  <div class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
    ℹ️ You have 0 product in your cart. Continue Shopping!
  </div>

  
  <div class="space-y-5">

    <div>

    </div>
    <hr />

    <div>
      
    </div>

   

  </div>
</template>
