<script>
export default {
  name: 'AppDownload',
  data() {
    return {};
  },
};
</script>

<template>
  <!-- section download -->
  <section id="download">
    <div class="container">

      <div class="row flex-column flex-md-row ">
        <!-- scarica testo e apps -->
        <div class="col-md-6 col-sm-12 text-ms-start text-center">
          <h2>Scarica l'app</h2>
          <p class="custom-font-primary">Fai il tuo ordine ovunque tu sia, in qualsiasi istante tu abbia voglia!</p>
          
          <div class="costum-list-app d-flex gap-2 justify-content-center">
            <a href="#" target="_blank">
              <img src="/img/app-store.png" alt="app-store" class="costum-app"/>
            </a>
            <a href="#" target="_blank">
              <img src="/img/play-store.svg" alt="play-store" class="costum-app"/>
            </a>
          </div>
        </div>
        <!-- /scarica testo e apps -->
        <!-- illustrazione scarica -->
        <div class="col-md-6 col-sm-12">
          <img src="/img/hamburger.jpg" class="false-img ">
        </div>
        <!-- illustrazione scarica -->
      </div>
    </div>
  </section>
  <!-- section /download -->

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
    height: 40px;
    object-fit: cover;
    border-radius: 10px;
    
    img {
      object-fit: cover;
    }
  }
  .false-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-top: $size_16;
  }
}
</style>
