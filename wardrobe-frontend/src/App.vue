<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        Wardrobe Manager
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link">Register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <main class="container mt-4">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  background-color: #e3f2fd !important; /* Soft blue background */
}

.logo {
  margin-right: 10px;
}

.nav-link {
  font-size: 16px;
  font-weight: 500;
}
</style>
