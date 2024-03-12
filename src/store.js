import { reactive } from "vue";

export const store = reactive({
  api: {
    baseUrl: "http://127.0.0.1:8000",
    apiUrls: {
      types: "/api/types",
      restaurants: "/api/restaurants",
      orders: "/api/orders",
    },
  },
  restaurants: [],
  types: [],
  cart: [],
  typesSearched: [],
  totalPrice: null,
  paymentIsValid: false,
});
export default store;
