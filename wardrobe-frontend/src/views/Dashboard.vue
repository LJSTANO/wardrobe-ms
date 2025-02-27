<template>
  <div class="dashboard-container">
    <div class="container text-center">
      <h1 class="dashboard-title">Dashboard</h1>
      <p class="lead dashboard-subtitle">Welcome to your dashboard!</p>
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Profile</h5>
              <p class="card-text">Manage your account details.</p>
              <button class="btn btn-primary">View</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Settings</h5>
              <p class="card-text">Customize your experience.</p>
              <button class="btn btn-secondary">Edit</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Logout</h5>
              <p class="card-text">Sign out of your account.</p>
              <button class="btn btn-danger" @click="logout">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  background-color: #e3f2fd; /* Soft Blue Background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.dashboard-title {
  color: #0d47a1; /* Dark blue for visibility */
  font-weight: bold;
  font-size: 2rem;
}
.dashboard-subtitle {
  color: #1565c0; /* Medium blue for contrast */
  font-weight: 500;
}
.card {
  border-radius: 10px;
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
