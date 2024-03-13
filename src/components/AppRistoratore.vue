<script>
export default {
  name: 'AppRistoratore',
  data() {
    return {};
  },
};
</script>

<template>
  <!-- section ristoratore -->
  <section id="ristoratore1">
    <div class="d-flex flex-column flex-md-row g-0 container-md justify-content-center align-items-center text-center">
      <!-- colonna testo e bottone -->
      <div class="col-md-6 col-12 d-flex align-items-center justify-content-center flex-column">
        <h2>Vuoi unirti al team di Comus?</h2>
        <p>Registrati e inizia a vendere sul nostro portale</p>
        <button class="custom-btn align-self-center" href="http://127.0.0.1:8000/">Registrati</button>
      </div>
      <!-- /colonna testo e bottone -->
      <!-- immagine lavora con noi -->
      <div class="custom-cont-img col-md-6 col-12">
        <img class="w-75" src="/img/work-with-us.png" alt="work-with-us.png" />
      </div>
      <!-- immagine lavora con noi -->
    </div>

  </section>
  <!-- section ristoratore -->




</template>

<style scoped lang="scss">
//importazione file variables

@import '../assets/scss/partials/variables.scss';

a {
  text-decoration: none;
}

#ristoratore1 {
  padding: $size_48 0;

  h2 {
    font-family: 'Bevan', serif;
  }

  .custom-cont-img {
    margin-top: $size_8;
  }
}

#ristoratore2 {
  padding: $size_48 0;

  h2 {
    font-family: 'Bevan', serif;
  }


  .custom-cont-img {
    margin-top: $size_8;
    width: 100%;
  }

  // Media queries
  @media screen and (max-width: 1200px) {}

  @media screen and (max-width: 992px) {
    .custom-cont-img {
      width: 70%;
    }
  }

  @media screen and (max-width: 768px) {
    .custom-cont-img {
      width: 60%;
    }
  }

  @media screen and (max-width: 576px) {
    .custom-cont-img {
      width: 50%;
    }
  }
}
</style>
