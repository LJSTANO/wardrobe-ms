import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/HomeView", component:HomeView },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
