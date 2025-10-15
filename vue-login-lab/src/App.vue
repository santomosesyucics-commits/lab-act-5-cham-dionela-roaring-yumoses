<script setup>
// No imports needed — router-view will handle route components dynamically
</script>

<template>
  <div id="app">
    <!-- Main Page Content -->
    <router-view />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}
</style>