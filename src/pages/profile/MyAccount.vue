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
    ℹ️ You have not set your phone number/password yet!
  </div>

  <h2 class="text-lg font-semibold mb-4">
    Personal Information
    <span class="text-blue-600 text-sm cursor-pointer ml-3">
      Change Information
    </span>
  </h2>

  <div class="space-y-5">

    <div>
      <label class="text-sm text-gray-500">Name</label>
      <input v-model="name" class="input" />
    </div>

    <div>
      <label class="text-sm text-gray-500">Date of Birth</label>
      <input type="date" v-model="dob" class="input" />
    </div>

    <div>
      <label class="text-sm text-gray-500">Gender</label>
      <div class="flex gap-6 mt-2">
        <label><input type="radio" value="male" v-model="gender" /> Male</label>
        <label><input type="radio" value="female" v-model="gender" /> Female</label>
      </div>
    </div>

    <hr />

    <div>
      <label class="text-sm text-gray-500">Email Address</label>
      <input disabled class="input bg-gray-100" :value="auth.user.username + '@mail.com'" />
    </div>

    <hr />

    <div>
      <label class="text-sm text-gray-500">Profile Picture</label>
      <img
        src="https://i.pravatar.cc/100"
        class="w-20 h-20 rounded-full mt-2"
      />
    </div>

  </div>
</template>
