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
      <div class=" d-flex flex-sm-column flex-md-row g-0 container-md justify-content-center align-items-center text-center">
        <!-- scarica testo e apps -->
        <!-- illustrazione scarica -->
        <div class="phone col-md-6 col-sm-12 order-md-first order-sm-last">
          <img src="/img/phone-download.png" class="phone-download" />
        </div>
        <!-- illustrazione scarica -->
        <div class="col-md-6 col-sm-12 order-sm-first order-md-last d-flex justify-content-center flex-column"
        >
          <h2>Scarica l'app</h2>
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
  }

  .phone {
    img {

      object-fit: cover;
      margin-top: $size_16;
      margin: 0;
      transform: rotate(20deg);
    }
  }
    // Media queries
    @media screen and (max-width: 1200px) {
      .phone-download {
      width: 60%;
    }
  }
  @media screen and (max-width: 992px) {
    .phone-download {
      width: 60%;
    }
  }
  @media screen and (max-width: 768px) {
    .phone-download {
      width: 40%;
    }
  }
  
  @media screen and (max-width: 576px) {
    .phone-download {
      width: 30%;
    }
  }
}

</style>
