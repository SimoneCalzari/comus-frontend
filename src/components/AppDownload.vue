<script>
export default {
  name: 'AppDownload',
  data() {
    return {};
  },
};
</script>

<template>
  <section class="download py-5">
    <div class="container d-flex justify-content-between">
      <div class="cont-sx">
        <h3>Scarica l'app</h3>
        <p>Potrai ordinare ovunque sarai e quando vorrai</p>
        <a href="#">
          <img src="../../public/img/app-store.png" alt="app-store" />
        </a>
        <a href="#">
          <img src="../../public/img/google-play.png" alt="play-store" />
        </a>
      </div>
      <div class="cont-dx">immagine</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.download {
  height: 50vh;
  background-color: blanchedalmond;
}
</style>
