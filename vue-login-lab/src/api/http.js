import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export const http = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { 'Content-Type': 'application/json' }
})

// request interceptor: attach token
http.interceptors.request.use((config) => {
  // Note: calling useAuthStore() outside setup is OK with Pinia
  const auth = useAuthStore()
  if (auth.token) config.headers.Authorization = `Bearer ${auth.token}`
  return config
}, (error) => Promise.reject(error))

// response interceptor: handle 401
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const auth = useAuthStore()
      auth.clearAuth()
      // optional: you could redirect to login here, but keep router logic separate
    }
    return Promise.reject(error)
  }
)