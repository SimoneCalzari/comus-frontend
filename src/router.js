import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppRestaurantSingle from './pages/AppRestaurantSingle.vue';
import AppShopping from './pages/AppShopping.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/restaurants/:slug',
      name: 'restaurant',
      component: AppRestaurantSingle,
    },
    {
      path: '/carrello',
      name: 'cart',
      component: AppShopping,
    },
  ],
});

export { router };
