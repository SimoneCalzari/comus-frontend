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
    getSum() {
      let total = 0;
      for (let i = 0; i < this.store.cart.length; i++) {
        total += +this.store.cart[i].price * this.store.cart[i].quantity;
      }
      this.store.totalPrice = total;
      localStorage.setItem("totalPrice", JSON.stringify(this.store.totalPrice));
      return total;
    },
  },
};
</script>

<template>
  <div class="container p-3">
    <h3>Carrello</h3>
    <p v-show="!store.cart.length">
      Non ci sono prodotti nel carrello attualmente ...
    </p>
    <div
      v-for="product in this.store.cart"
      class="cart-item"
      v-show="store.cart.length"
    >
      {{ product.name }} - {{ product.quantity }} - {{ product.price }}€
    </div>
    <h4 class="text-uppercase">Totale:{{ getSum() }}€</h4>
    <router-link
      class="btn primary me-3"
      :to="{ name: 'cart' }"
      v-show="store.cart.length"
      >Procedi all'ordine</router-link
    >
    <button
      class="btn secondary"
      @click="emptyCart"
      v-show="store.cart.length"
    >
      Svuota carrello
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

.container {
  color: $custom_secondary;
  border: 2px solid $custom-secondary;
  border-radius: 20px;
  background-color: $custom_light;

  h3 {
    font-size: $size-32;
  }

  p .cart-item {
    font-size: $size-24;
  }
  .btn{
    color: $custom_white;
  }
  .primary{
    background-color: $custom-primary;
  }
  .secondary{
    background-color: $custom-secondary;
  }
}


</style>
