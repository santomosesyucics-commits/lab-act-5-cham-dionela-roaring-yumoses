<template>
  <div class="dashboard">
    <aside>
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#">Overview</a></li>
        <li><a href="#">My Wishlist</a></li>
        <li><a href="#">Settings</a></li>
      </ul>

      <!-- ✅ Logout Button -->
      <button class="logout-btn" @click="logout">Logout</button>
    </aside>

    <main>
      <h1>Overview</h1>
      <div class="cards">
        <div class="card">
          <h3>Total Items</h3>
          <p>24</p>
        </div>
        <div class="card">
          <h3>Purchased</h3>
          <p>10</p>
        </div>
        <div class="card">
          <h3>Pending</h3>
          <p>14</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const logout = () => {
  auth.logout() // ✅ Clears auth state
  router.push('/') // ✅ Redirects to Login page
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  font-family: "Poppins", sans-serif;
}

aside {
  background-color: #3e513e;
  color: white;
  width: 220px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

aside h2 {
  margin-bottom: 20px;
}

aside ul {
  list-style: none;
  padding: 0;
}

aside li {
  margin: 15px 0;
}

aside a {
  color: white;
  text-decoration: none;
}

aside a:hover {
  text-decoration: underline;
}

.logout-btn {
  background-color: #ff4b4b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 20px;
}

.logout-btn:hover {
  background-color: #e63e3e;
}

main {
  flex: 1;
  padding: 40px;
  background-color: #f6f7f5;
}

.cards {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  flex: 1;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.card h3 {
  color: #3e513e;
  margin-bottom: 10px;
}

.card p {
  font-size: 24px;
  color: #2f3e2f;
}
</style>
