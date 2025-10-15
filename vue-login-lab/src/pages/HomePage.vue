<template>
  <div class="homepage">
    <!-- Header -->
    <header>
      <div class="logo-container">
        <img :src="wishlistImage" alt="Logo" class="logo" />
        <h2 class="brand-name">Wishlist</h2>
      </div>
      <nav>
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#" @click.prevent="goToLogin">Login</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="text">
        <h1>Welcome to Wishlist</h1>
        <p>Keep track of the things you love and never forget what makes you happy.</p>
        <button @click="goToLogin">Login</button>
      </div>
      <img :src="wishlistImage" alt="Wishlist Image" class="hero-img" />
    </section>
  </div>
</template>

<script>
import wishlistImage from '@/assets/Wishlist.png'

export default {
  name: 'HomePage',
  data() {
    return { wishlistImage }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.homepage {
  background-color: #3e513e;
  color: #f6f7f5;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */
header {
  background-color: #2f3e2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 55px;
  border-radius: 8px;
}

.brand-name {
  color: #f6f7f5;
  font-weight: 700;
  letter-spacing: 1px;
}

nav a {
  color: #f6f7f5;
  margin-left: 25px;
  text-decoration: none;
  font-weight: 500;
}

nav a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px;
}

.text {
  max-width: 500px;
}

.text h1 {
  color: #f6f7f5;
  font-size: 42px;
  margin-bottom: 10px;
  font-weight: 700;
}

.text p {
  color: #dfe3dc;
  margin-bottom: 25px;
  font-size: 16px;
}

button {
  background-color: #f6f7f5;
  color: #3e513e;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #2f3e2f;
  color: #f6f7f5;
}

.hero-img {
  width: 400px;
  border-radius: 12px;
  opacity: 0.9;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
}
</style>
