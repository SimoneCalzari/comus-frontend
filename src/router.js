import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppRestaurantSingle from "./pages/AppRestaurantSingle.vue";
import AppShopping from "./pages/AppShopping.vue";
import NotFound from "./pages/NotFound.vue";
import AppConfirmOrder from "./pages/AppConfirmOrder.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/restaurants/:slug",
      name: "restaurant",
      component: AppRestaurantSingle,
    },
    {
      path: "/carrello",
      name: "cart",
      component: AppShopping,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
    {
      path: "/confirm-order-comus",
      name: "confirmOrder",
      component: AppConfirmOrder,
    },
  ],
});

export { router };
