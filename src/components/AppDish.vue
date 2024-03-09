<script>
import store from "../store";

export default {
  name: "AppDish",
  data() {
    return {
      store,
    };
  },
  methods: {
    addToCart(dish) {
      // aggiungo piatto e ristorante_id
      this.store.cart.push(dish.restaurant_id);
      // se provo ad aggiungere un piatto da un altro ristorante devo svuotare il carrello
      const currentRestaurant = this.store.cart[0].restaurant_id;
      console.log(currentRestaurant);
      if (currentRestaurant !== dish.restaurant_id){
        alert('Nel carrello sono presenti piatti di un altro ristorante, se vuoi aggiungere questo piatto, devi svuotare prima il carrello, procedere?');
        this.store.cart = [];
      }
      
      
      // caso a carrello vuoto pusho il piatto direttamente
      if (!this.store.cart.length) {
        // creo oggetto copia del piatto aggiungendo la quantita
        const dishWithQuantity = { ...dish, quantity: 1 };
        // pusho la copia piatto nel carrello store
        this.store.cart.push(dishWithQuantity);
        // metto il carrello store TUTTO nel local storage alla key 'dishes'
        localStorage.setItem("dishes", JSON.stringify(this.store.cart));
        return;
      }
      // se arrivo qua il carrello non è vuoto e devo verificare se ho già il piatto passato alla funzione nel carrello
      let isInCart = false;
      for (let i = 0; i < this.store.cart.length; i++) {
        if (dish.id === this.store.cart[i].id) {
          isInCart = true;
          break;
        }
      }
      // se il piatto non è nel carrello faccio come nel caso a carrello vuoto
      if (!isInCart) {
        // creo oggetto copia del piatto aggiungendo la quantita
        const dishWithQuantity = { ...dish, quantity: 1 };
        // pusho la copia piatto nel carrello store
        this.store.cart.push(dishWithQuantity);
        // metto il carrello store TUTTO nel local storage alla key 'dishes'
        localStorage.setItem("dishes", JSON.stringify(this.store.cart));
        return;
      }
      // se il piatto è già nel carrello store devo trovarlo e aumentare la sua quantità di uno
      for (let i = 0; i < this.store.cart.length; i++) {
        if (dish.id === this.store.cart[i].id) {
          this.store.cart[i].quantity++;
          localStorage.setItem("dishes", JSON.stringify(this.store.cart));
          return;
        }
      }
      
    },
  },

  props: ["dish_new"],
};
</script>

<template>
  <div class="menu-item p-3 d-flex position-relative">
    <div class="dish-img m-1">
      <img src="" alt="piatto" />
    </div>
    <div class="info ms-3">
      <h3>{{ dish_new.name }}</h3>
      <p>{{ dish_new.price }} €</p>
    </div>
    <div
      class="custom-btn position-absolute"
      @click="addToCart(dish_new)"
      href="#"
    >
    <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.menu-item {
  border: 1px solid $custom-primary;
  border-radius: 10px 25px 10px 10px;
  color: $custom-secondary;
  background-color: $custom-lighter_p;
}
.custom-btn {
  bottom: 5px;
  right: 5px;
  text-decoration: none;
  font-size: $size-16;
  cursor: pointer;
  padding: $size_8;
}
</style>
