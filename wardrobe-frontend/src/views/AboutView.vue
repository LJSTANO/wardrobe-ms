<template>
  <div class="about-container">
    <div class="container text-center">
      <h1 class="about-title">About Wardrobe Manager</h1>
      <p class="about-text">
        Welcome to <strong>Wardrobe Manager</strong>, your go-to solution for effortlessly organizing, categorizing, and managing your clothing collection with ease.
      </p>

      <div class="row mt-4">
        <!-- Mission Section -->
        <div class="col-md-6">
          <div class="card mission-card">
            <div class="card-body">
              <h5 class="card-title">🌍 Our Mission</h5>
              <p class="card-text">
                We strive to **simplify wardrobe management** by offering a user-friendly platform to track clothing items, outfits, and seasonal styles.
              </p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="col-md-6">
          <div class="card features-card">
            <div class="card-body">
              <h5 class="card-title">✨ Key Features</h5>
              <ul class="card-text features-list">
                <li>👕 **Add & organize** your clothes effortlessly</li>
                <li>🔍 **Search & filter** outfits quickly</li>
                <li>📅 **Plan & categorize** outfits for seasons & occasions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-container">
        <h3 class="cta-text">Ready to organize your wardrobe?</h3>
        <button class="cta-button">Get Started Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background Styling */
.about-container {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* Gradient soft blue */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  text-align: center;
}

/* Title & Text */
.about-title {
  color: #0d47a1;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.about-text {
  color: #1565c0;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
}

/* Card Styling */
.card {
  border-radius: 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Mission & Features Card */
.mission-card {
  background: #ffeb3b; /* Light Yellow */
  border-left: 5px solid #fbc02d; /* Darker Yellow */
}
.features-card {
  background: #c8e6c9; /* Light Green */
  border-left: 5px solid #66bb6a; /* Darker Green */
}
.card-title {
  font-size: 1.4rem;
  font-weight: bold;
}
.features-list {
  list-style: none;
  padding: 0;
}
.features-list li {
  margin-bottom: 8px;
}

/* Call to Action */
.cta-container {
  margin-top: 50px;
}
.cta-text {
  font-size: 1.5rem;
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
