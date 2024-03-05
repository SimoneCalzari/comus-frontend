import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppCart from './pages/AppCart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/carrello',
      name: 'cart',
      component: AppCart,
    },
  ],
});

export { router };
