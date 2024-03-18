<script>
import store from "../store";
import axios from "axios";

export default {
  name: "AppConfirmOrder",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section class="thank-you">
    <div class="text-center">
      <h2>Conferma ordine</h2>
      <p>
        L'ordine è andato a buon fine. A breve ricerverai una mail di conferma.
        Grazie per aver scelto Comus.
      </p>

      <router-link :to="{ name: 'home' }" class="custom-btn">
        Torna a fare acquisti
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/partials/variables.scss";

//rendere il
.thank-you {
  padding: 180px 0;

  h2 {
    padding-bottom: $size_32;
  }
  p {
    padding-bottom: $size_48;
  }
  .custom-btn {
    text-decoration: none;
  }
}
</style>
