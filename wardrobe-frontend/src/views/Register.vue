<template>
  <div class="register-container">
    <div class="card">
      <div class="card-body">
        <h2 class="text-center text-primary">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <input v-model="name" type="text" class="form-control" placeholder="Full Name" required />
          </div>
          <div class="mb-3">
            <input v-model="email" type="email" class="form-control" placeholder="Email Address" required />
          </div>
          <div class="mb-3">
            <input v-model="password" type="password" class="form-control" placeholder="Password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
        <p v-if="error" class="alert alert-danger mt-3">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
      } catch (err) {
        this.error = err.response?.data?.message || "Registration failed";
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e3f2fd; /* Soft blue background */
}

.card {
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
