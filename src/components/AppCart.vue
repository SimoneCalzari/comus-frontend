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
  <div class="floating-cart position-sticky p-0 my-5">
    <div class="p-3">
      <h3>Carrello</h3>
      <p v-show="!store.cart.length">
        Non ci sono prodotti nel carrello attualmente ...
      </p>
      <ul class="p-0">
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
          class="btn-empty secondary"
          @click="emptyCart"
          v-show="store.cart.length"
        >
          Svuota
        </button>
        <router-link
          class="btn-order primary me-3 text-decoration-none"
          :to="{ name: 'cart' }"
          v-show="store.cart.length"
          >Vai all'ordine</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.floating-cart {
  top: 20px;

  .btn-empty {
    padding: 0 $size-8;
    border-radius: $size-8;
    background-color: none;
    border: 1px solid $custom-secondary;
    color: $custom-secondary;

    &:hover {
      background-color: $custom-secondary;
      color: $custom_white;
    }
  }

  .btn-order {
    padding: 0 $size-8;
    border-radius: $size-8;
    background-color: $custom-secondary;
    border: 1px solid $custom-secondary;
    color: $custom_white;

    &:hover {
      background-color: $custom-secondary;
      color: $custom_white;
    }
  }
}
</style>
