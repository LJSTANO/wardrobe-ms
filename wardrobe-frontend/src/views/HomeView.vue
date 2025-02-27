<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="home-container">
    <div class="content">
      <h1 class="home-title">Welcome to Wardrobe Manager</h1>
      <p class="home-text">
        Organize your outfits effortlessly with our smart wardrobe management system.
      </p>

      <TheWelcome />

      <div class="cta-container">
        <h3 class="cta-text">Start organizing your wardrobe today!</h3>
        <button class="cta-button">Get Started</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background Styling */
.home-container {
  background: #e3f2fd;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
}

/* Content Layout */
.content {
  text-align: center;
  max-width: 700px;
}

/* Title & Text */
.home-title {
  color: #0d47a1;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 15px;
}
.home-text {
  color: #1565c0;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

/* Call to Action */
.cta-container {
  margin-top: 40px;
}
.cta-text {
  font-size: 1.3rem;
  font-weight: bold;
  color: #0d47a1;
}
.cta-button {
  background: #0d47a1;
  color: white;
  font-size: 1.2rem;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}
.cta-button:hover {
  background: #1565c0;
}
</style>
