<script>
import store from "../store";
export default {
  name: "AppCart",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <h3 class="fs-1">Carrello</h3>
    <div v-for="product in this.store.cart" class="fs-3">
      {{ product.name }} - {{ product.quantity }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
</style>
