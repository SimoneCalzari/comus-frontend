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
    <div class="container">
      <div class="row d-flex flex-md-row flex-sm-column">
        <div class="col col-md-6 col-sm-12">
          <h2>Scarica l'app</h2>
          <p class="custom-font-primary">Potrai ordinare ovunque sarai e quando vorrai</p>
          <a href="#" target="_blank">
            <img src="/img/app-store.png" alt="app-store" class="costum-app"/>
          </a>
          <a href="#" target="_blank">
            <img src="/img/play-store.svg" alt="play-store" class="costum-app"/>
          </a>
        </div>
        <div class="col-md-6 col-sm-12">immagine</div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#download {
  background-color: $custom-light-s;
  padding: $size-48 0;

  h2 {
    font-family: "Bevan", serif;
  }
    .custom-font-primary {
      font-weight: 400;
      font-style: normal;
    }

    .costum-app {
      width: 120px;
      
      img {
        object-fit: center;
    }
  }
}
</style>
