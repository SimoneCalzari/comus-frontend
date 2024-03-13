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
      <div class="row text-center">
        <!-- scarica testo e apps -->
        <div
          class="col-md-6 col-sm-12 d-flex justify-content-center flex-column"
        >
          <h2 class="display-5">Scarica l'app</h2>
          <p>
            Fai il tuo ordine ovunque tu sia, in qualsiasi istante tu abbia
            voglia!
          </p>

          <div class="d-flex gap-2 justify-content-center">
            <a href="#" target="_blank">
              <img
                src="/img/app-store.png"
                alt="app-store"
                class="custom-app"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="/img/play-store.svg"
                alt="play-store"
                class="custom-app"
              />
            </a>
          </div>
        </div>
        <!-- /scarica testo e apps -->
        <!-- illustrazione scarica -->
        <div class="phone col-md-6 col-sm-12 pt-5">
          <img src="/img/phone-download.png" class="phone-download" />
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
  background-color: $custom-light;
  padding: $size-48 0;

  h2 {
    font-family: 'Bevan', serif;
  }

  .custom-app {
    width: 120px;
    height: 40px;
    object-fit: cover;
    border-radius: 10px;

    img {
      object-fit: cover;
    }
  }
  .phone {
    img {
      height: 100%;
      object-fit: cover;
      margin-top: $size_16;
      margin: 0;
      transform: rotate(20deg);
    }
  }
}
</style>
