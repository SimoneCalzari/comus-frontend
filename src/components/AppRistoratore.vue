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
  <section id="ristoratore">
    <div class="container">
      <div class="row text-center">
        <!-- colonna testo e bottone -->
        <div class="col-md-6 col-sm-12">
          <h2>Vuoi unirti al team di Comus?</h2>
          <p>
            Registrati e inizia a vendere sul nostro portale
          </p>
          <a class="costum-btn-primary" href="http://127.0.0.1:8000/">Registrati</a>
        </div>
        <!-- /colonna testo e bottone -->
        <!-- immagine lavora con noi -->
        <div class="col-md-6 col-sm-12">
          <img src="/img/work-with-us.png" class="costum-cont-img" alt="work-with-us.png" />
        </div>
        <!-- immagine lavora con noi -->
      </div>
    </div>
  </section>
  <!-- section ristoratore -->
</template>

<style scoped lang="scss">
//importazione file variables

@import "../assets/scss/partials/variables.scss";
a {
  text-decoration: none;
}

#ristoratore {
  padding: $size_48 0;

  h2 {
    font-family: "Bevan", serif;
  }
  .costum-btn-primary {
    background-color: red;
    color: white;
    border-radius: $size_8;
    padding: $size_8 $size_16;
  }

  .costum-cont-img {
    margin-top: $size_8;
    width: 100%;
  }
}
</style>