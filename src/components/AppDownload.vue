<script>
export default {
  name: 'AppDownload',
  data() {
    return {};
  },
};
</script>

<template>
  <section id="download">
    <div class="container d-flex justify-content-between">
      <div class="cont-sx">
        <h3>Scarica l'app</h3>
        <p class="custom-font-primary">Potrai ordinare ovunque sarai e quando vorrai</p>
        <a href="#">
          <!-- <img src="../../public/img/app-store.png" alt="app-store" /> -->
        </a>
        <a href="#">
          <!-- <img src="../../public/img/google-play.png" alt="play-store" /> -->
        </a>
      </div>
      <div class="cont-dx">immagine</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#download {
  background-color: $custom-light-s;
  padding: $size-48 0;

  .custom-font-primary {
    font-family: "Bevan", serif;
    font-weight: 400;
    font-style: normal;
  }
}
</style>
