<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<template>
  <header class="container d-flex justify-content-between mt-3">
    <div class="cont-logo">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../public/img/comus.svg"
          alt="logo"
      /></router-link>
    </div>
    <ul class="btns">
      <li class="btn btn-primary m-2">Lista ristoranti</li>
      <li class="btn btn-primary m-2">Sei un ristoratore?</li>
      <li class="btn btn-danger rounded m-2">Carrello</li>
    </ul>
  </header>
</template>
<style></style>
