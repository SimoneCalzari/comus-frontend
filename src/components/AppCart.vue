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
  <div class="container p-3">
    <h3>Anteprima carrello</h3>
    <p v-show="!store.cart.length">
      Non ci sono prodotti nel carrello attualmente ...
    </p>
    <div
      v-for="product in this.store.cart"
      class="cart-item"
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
.container{
  border: 2px solid $custom-secondary;
  border-radius: 20px;
  background-color: $custom_light_s;

  h3{
    font-size: $size-32;
  }
  p .cart-item{
    font-size: $size-24;
  }
}
</style>
