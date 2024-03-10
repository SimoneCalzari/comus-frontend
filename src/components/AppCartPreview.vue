<script>
import store from "../store";
export default {
  name: "AppCartPreview",
  data() {
    return {
      store,
    };
  },
    methods: {
      addInCart() {
      console.log('vai al carello');
    },
      sumDish (num1 ) {
        console.log('somma');
    }
  },
  mounted() {
    this.sumDish()
  }
};
</script>

<template>
  <div class="container info-restaurant">
    <h3 class="fs-1">Preview carello</h3>
    <div v-for="product in this.store.cart" class="fs-3">
      <!-- tolto trattino perchè altrimenti il trattino compariva vuoto quando aggiungevo lo stesso piatto -->
      {{ product.name }} {{ product.quantity }} {{ product.price }}
      <span @v-on="sumDish"></span>
    </div>
      <!--evento al click per poi andare alla pagina carello senza routerlink per ora-->
      <button class="btn btn-primary" @click="addInCart">Conferma ordine</button>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

//messo solo per veder e carello distinto
.info-restaurant {
  border-radius: 10px 50px 10px 10px;
  padding: $size_16;
  background-color: $custom_light_p;
  color: $custom-secondary;
}
</style>
