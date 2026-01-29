<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/useAuthStore'

const auth = useAuthStore()
const router = useRouter()

const name = ref('')
const username = ref('')
const password = ref('')
const error = ref('')

function submit() {
  if (!name.value || !username.value || !password.value) {
    error.value = 'All fields are required'
    return
  }

  const res = auth.register({
    name: name.value,
    username: username.value,
    password: password.value,
  })

  if (!res.success) {
    error.value = res.message
    return
  }

  router.push('/')
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-20 p-6 border rounded">
    <h2 class="text-xl font-bold mb-4">Register</h2>

    <input
      v-model="name"
      placeholder="Full Name"
      class="w-full border px-3 py-2 rounded mb-2"
    />

    <input
      v-model="username"
      placeholder="Username"
      class="w-full border px-3 py-2 rounded mb-2"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full border px-3 py-2 rounded mb-2"
    />

    <p v-if="error" class="text-red-500 text-sm mb-2">
      {{ error }}
    </p>

    <button
      @click="submit"
      class="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
    >
      Create Account
    </button>

    <p class="text-sm text-center mt-4">
      Already have an account?
      <span
        @click="router.push('/login')"
        class="text-blue-600 cursor-pointer"
      >
        Login
      </span>
    </p>
  </div>
</template>
