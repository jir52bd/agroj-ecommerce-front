import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  // 🔹 fake database
  const users = ref([
    { id: 1, username: 'admin', password: '123456', name: 'Admin User' },
    { id: 2, username: 'razu', password: '123456', name: 'Jahirul Razu' },
  ])

  const user = ref(null)

  const isLoggedIn = computed(() => !!user.value)

  /* --------------------
     LOGIN
  -------------------- */
  function login(username, password) {
    const foundUser = users.value.find(
      u => u.username === username && u.password === password
    )

    if (!foundUser) return false

    user.value = foundUser
    localStorage.setItem('auth_user', JSON.stringify(foundUser))
    return true
  }

  /* --------------------
     REGISTER
  -------------------- */
  function register({ name, username, password }) {
    const exists = users.value.find(u => u.username === username)
    if (exists) return { success: false, message: 'Username already exists' }

    const newUser = {
      id: Date.now(),
      name,
      username,
      password,
    }

    users.value.push(newUser)

    // auto login after register
    user.value = newUser
    localStorage.setItem('auth_user', JSON.stringify(newUser))

    return { success: true }
  }

  /* --------------------
     LOGOUT
  -------------------- */
  function logout() {
    user.value = null
    localStorage.removeItem('auth_user')
  }

  /* --------------------
     LOAD USER ON REFRESH
  -------------------- */
  function loadUser() {
    const saved = localStorage.getItem('auth_user')
    if (saved) user.value = JSON.parse(saved)
  }

  return {
    users,
    user,
    isLoggedIn,
    login,
    register,
    logout,
    loadUser,
  }
})
