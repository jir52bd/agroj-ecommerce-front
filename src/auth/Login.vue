<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/useAuthStore';
import { useRouter } from 'vue-router';

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

function submit() {
    const success = auth.login(username.value, password.value)
    if(!success) {
        error.value = "Invalid username or password"
    } else {
        router.push('/')
    }
}
</script>

<template>
  <div class="max-w-sm mx-auto my-20 p-6 border rounded">
    <h2 class="text-xl font-bold mb-4">Login</h2>

    <p class="text-sm">User Name</p>
    <input v-model="username" placeholder="Username" class="w-full px-2 py-1.5 text-base border rounded-sm  outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-1 focus:rounded-none focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />
    <p class="text-sm">Password</p>
    <input v-model="password" type="password" placeholder="Password" class="w-full px-2 py-1.5 text-base border rounded-sm outline-1 outline-white/10 placeholder:text-gray-400 focus:outline-1 focus:rounded-none focus:-outline-offset-2 focus:outline-gray-500 sm:text-sm/6" />

    <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>

    <button @click="submit" class="bg-green-700 px-3 text-white py-2  my-4 w-full hover:bg-green-600">Login</button>
  </div>
</template>
