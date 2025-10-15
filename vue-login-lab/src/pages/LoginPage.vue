<template>
  <div class="login-container">
    <!-- Top Bar -->
    <div class="top-bar">
      <center>
        <div class="logo">
          <img src="@/assets/Wishlist.png" alt="Logo" class="img-fluid justify-content-center" />
        </div>
      </center>
    </div>

    <!-- Main Section -->
    <div class="login-wrapper">
      <div class="login-content container-fluid">
        <div class="row w-100 p-4">
          <!-- Left Form Section -->
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center px-4">
            <h2 class="login-title">Welcome Back</h2>
            <p class="login-subtitle">Please log in to continue</p>

            <!-- Error Alert -->
            <div
              v-if="error"
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {{ error }}
              <button type="button" class="btn-close" @click="error = ''"></button>
            </div>

            <!-- Login Form -->
            <form @submit.prevent="onSubmit">
              <div class="mb-3">
                <div class="input-group">
                  <span class="input-group-text login-icon">
                    <i class="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    v-model.trim="username"
                    class="form-control login-input"
                    placeholder="Username"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <div class="input-group">
                  <span class="input-group-text login-icon">
                    <i class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    v-model.trim="password"
                    class="form-control login-input"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div class="d-flex justify-content-end mb-3">
                <span class="forgot-link">Forgot password?</span>
              </div>

              <button type="submit" class="btn w-100 login-button" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                Log In
              </button>
            </form>
          </div>

          <!-- Right Illustration -->
          <div class="col-md-6 illustration-container">
            <img src="@/assets/Login.jpg" alt="Login Illustration" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { http } from '@/api/http' // ✅ Axios instance

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    console.log('Attempting login with:', { username: username.value, password: password.value })

    const { data } = await http.post('/auth/login', {
      username: username.value,
      password: password.value
    })

    console.log('Login response:', data)

    // ✅ Build user object from API response
    const user = {
      id: data.id,
      username: data.username,
      email: data.email,
      name: [data.firstName, data.lastName].filter(Boolean).join(' ')
    }

    // ✅ Save user + token in store
    auth.setAuth({ token: data.accessToken, user })

    // ✅ Redirect to dashboard or redirect query
    router.push(route.query.redirect || '/dashboard')
  } catch (e) {
    console.error('Login error:', e)
    error.value =
      e.response?.data?.message ||
      e.response?.statusText ||
      'Login failed. Invalid credentials or server error.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
body {
  background-color: #3E513E !important;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.login-container {
  background-color: #3E513E;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  justify-content: center;
  align-items: center;
  padding: 0;
}

/* Top Bar */
.top-bar {
  background-color: #3E513E;
  height: 70px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.logo {
  width: 150px;
  margin-top: 7px;
}

/* Wrapper */
.login-wrapper {
  background-color: #F7F8F4;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 90%;
  max-width: 1000px;
  margin-top: 100px;
  margin-bottom: 50px;
}

.login-content {
  background-color: #F7F8F4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-title {
  color: #3E513E;
  font-size: 34px;
  font-weight: 800;
  text-align: left;
  margin-bottom: 8px;
}

.login-subtitle {
  color: #5D6D5B;
  font-size: 15px;
  margin-bottom: 30px;
  text-align: left;
}

.login-input {
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid #3E513E;
  color: #3E513E;
  border-radius: 0;
  box-shadow: none;
  padding: 12px 15px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.login-input::placeholder {
  color: #6B7B6B;
  opacity: 1;
}

.login-input:focus {
  border-color: #2E3E2E;
  box-shadow: none !important;
  color: #2E3E2E;
  outline: none;
}

.login-icon {
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid #3E513E;
  padding: 10px 14px;
  color: #3E513E;
}

.login-button {
  background-color: #3E513E !important;
  color: #FFFFFF;
  border: none !important;
  padding: 12px 0;
  font-weight: 600;
  border-radius: 30px;
  letter-spacing: 0.5px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #2F3E2F !important;
}

.forgot-link {
  font-size: 0.9rem;
  color: #3E513E;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
}
.forgot-link:hover {
  color: #2E3E2E;
}

.illustration-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.illustration-container img {
  width: 550px;
  object-fit: contain;
  margin-top: 40px;
}

@media only screen and (max-width: 992px) {
  .illustration-container {
    display: none;
  }

  .login-wrapper {
    width: 95%;
    margin-top: 100px;
  }
}
</style>
