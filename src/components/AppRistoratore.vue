<script>
export default {
  name: 'AppRistoratore',
  data() {
    return {};
  },
};
</script>

<template>
  <section class="ristoratore py-5" id="ristoratore">
    <div class="container d-flex justify-content-between">
      <div class="cont-sx">
        <h3>Vuoi unirti al team di Comus?</h3>
        <p>Registrati e inizia a vendere sul nostro portale</p>
        <a href="http://127.0.0.1:8000/">area ristoratori</a>
      </div>
      <div class="cont-dx">immagine</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.ristoratore {
  height: 50vh;
}
</style>
