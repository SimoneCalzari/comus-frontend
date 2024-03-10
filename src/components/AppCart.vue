<script>
import store from "../store";
export default {
  name: "AppCart",
  data() {
    return {
      store,
    };
  },
  methods: {
    emptyCart() {
      this.store.cart = [];
      localStorage.setItem("dishes", JSON.stringify(this.store.cart));
    },
  },
};
</script>

<template>
  <div class="container">
    <h3 class="fs-1">Carrello</h3>
    <p v-show="!store.cart.length">
      Non ci sono prodotti nel carrello attualmente ...
    </p>
    <div
      v-for="product in this.store.cart"
      class="fs-3"
      v-show="store.cart.length"
    >
      {{ product.name }} - {{ product.quantity }}
    </div>
    <router-link
      class="btn btn-success me-3"
      :to="{ name: 'cart' }"
      v-show="store.cart.length"
      >Procedi all'ordine</router-link
    >
    <button
      class="btn btn-danger"
      @click="emptyCart"
      v-show="store.cart.length"
    >
      Svuota carrello
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
</style>
