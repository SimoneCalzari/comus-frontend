import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./AppHome.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
  ],
});

export { router };
