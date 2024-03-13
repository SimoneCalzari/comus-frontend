<script>
import store from '../store';
export default {
  name: 'AppCart',
  data() {
    return {
      store,
    };
  },
  methods: {
    emptyCart() {
      this.store.cart = [];
      localStorage.setItem('dishes', JSON.stringify(this.store.cart));
    },
    getSum() {
      let total = 0;
      for (let i = 0; i < this.store.cart.length; i++) {
        total += +this.store.cart[i].price * this.store.cart[i].quantity;
      }
      this.store.totalPrice = total;
      localStorage.setItem('totalPrice', JSON.stringify(this.store.totalPrice));
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
    <ul>
      <li
        v-for="product in this.store.cart"
        class="row cart-dish-element"
        v-show="store.cart.length"
      >
        <div class="col-8">
          {{ product.name }}
        </div>
        <div class="col-1">{{ product.quantity }}x</div>
        <div class="col-3">{{ product.price }}€</div>
      </li>
      <li class="row" v-show="store.cart.length">
        <div class="col-9">
          <strong>Totale</strong>
        </div>
        <div class="col-3">
          <strong>{{ getSum() }}€</strong>
        </div>
      </li>
    </ul>

    <div class="cart-bottom d-flex justify-content-end gap-4">
      <button
        class="btn secondary"
        @click="emptyCart"
        v-show="store.cart.length"
      >
        Svuota
      </button>
      <router-link
        class="btn primary me-3"
        :to="{ name: 'cart' }"
        v-show="store.cart.length"
        >Vai all'ordine</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.container {
  color: $custom_secondary;
  border: 2px solid $custom-secondary;
  border-radius: 20px;
  background-color: rgba($custom_light, 0.5);

  .cart-dish-element {
    transition: all;
  }

  .btn {
    color: $custom_white;
  }

  .primary {
    background-color: $custom-primary;
  }

  .secondary {
    background-color: $custom-secondary;
  }
}
</style>
