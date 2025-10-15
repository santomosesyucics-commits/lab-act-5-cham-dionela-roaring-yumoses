import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null')
  }),

  getters: {
    isAuthenticated: (state) => !!state.token && !isTokenExpired(state.token)
  },

  actions: {
    // ✅ Set token and user data
    setAuth({ token, user }) {
      this.token = token
      this.user = user || null
      localStorage.setItem('token', token)
      user
        ? localStorage.setItem('user', JSON.stringify(user))
        : localStorage.removeItem('user')
    },

    // ✅ Clear all authentication data
    clearAuth() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    // ✅ Logout function (simplified)
    logout() {
      this.clearAuth()
    },

    // ✅ Rehydrate from localStorage (useful on reload)
    rehydrate() {
      this.token = localStorage.getItem('token')
      this.user = JSON.parse(localStorage.getItem('user') || 'null')
    },

    // ✅ Login helper (optional)
    async login(credentials) {
      try {
        const response = await axios.post('/api/login', credentials)
        this.setAuth(response.data)
        return true
      } catch (error) {
        console.error('Login failed:', error)
        return false
      }
    }
  }
})

// ✅ Utility function for checking JWT expiration
function isTokenExpired(token) {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload.exp * 1000 < Date.now()
  } catch {
    return true
  }
}
