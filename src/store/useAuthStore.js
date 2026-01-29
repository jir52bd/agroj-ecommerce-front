import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  // fake users (database simulation)
  const users = ref([
    { id: 1, username: 'admin', password: '123456', name: 'Admin User' },
    { id: 2, username: 'razu', password: '123456', name: 'Jahirul Razu' }
  ])

  const user = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  function login(username, password) {
    const foundUser = users.value.find(
      u => u.username === username && u.password === password
    )

    if (!foundUser) return false

    user.value = foundUser
    localStorage.setItem('auth_user', JSON.stringify(foundUser))
    return true
  }

  function logout() {
    user.value = null
    localStorage.removeItem('auth_user')
  }

  function loadUser() {
    const saved = localStorage.getItem('auth_user')
    if (saved) user.value = JSON.parse(saved)
  }

  return { user, isLoggedIn, login, logout, loadUser }
})
