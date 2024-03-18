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
      <h3>Il tuo carrello:</h3>
      <p v-show="!store.cart.length">
        Attualmente non ci sono prodotti nel carrello.
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

      <div class="cart-bottom d-flex flex-sm-column flex-md-row justify-content-end gap-2">
        <button
          class="btn-empty secondary text-center"
          @click="emptyCart"
          v-show="store.cart.length"
        >
          Svuota
        </button>
        <router-link
          class="btn-order primary text-decoration-none text-center"
          :to="{ name: 'cart' }"
          v-show="store.cart.length"
          >Conferma</router-link
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
    padding: $size_16;
    border-radius: $size-16;
    background-color: none;
    border: 1px solid $custom-secondary;
    color: $custom-secondary;
    transition: all 0.6s ease-in-out; //ovunque

    &:hover {
      background-color: $custom-secondary;
      color: $custom_white;
      transition: all 0.6s ease-in-out; //ovunque
    }
  }
  
  .btn-order {
    padding: $size_16;
    border-radius: $size_16;
    background-color: $custom-secondary;
    border: 1px solid $custom-secondary;
    color: $custom_white;

    &:hover {
      background-color: $custom-light;
      border: 1px solid $custom-light;
      transition: all 0.6s ease-in-out; //ovunque
    }
  }
}
</style>
