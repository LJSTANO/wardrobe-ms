<template>
  <div class="login-container">
    <div class="card p-4 shadow-lg">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <input v-model="email" type="email" class="form-control" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
      <p v-if="error" class="text-danger mt-3 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/dashboard");
      } catch (err) {
        this.error = "Invalid credentials";
      }
    },
  },
};
</script>

<style scoped>
/* Soft Blue Theme */
.login-container {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  color: #0d47a1;
}

.btn-primary {
  background-color: #0d47a1;
  border: none;
  transition: background 0.3s ease-in-out;
}

.btn-primary:hover {
  background-color: #1565c0;
}

.text-danger {
  font-size: 0.9rem;
}
</style>
