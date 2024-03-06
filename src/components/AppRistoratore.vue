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
    <div class="container-sm">
      <div class="row">
        <div class="cont-sx col-12 col-lg-6">
          <div class="row text-center">
            <div class="cont-text col-12 col-sm-9 col-lg-12 mt-5 p-0">
              <h2>Vuoi unirti al team di Comus?</h2>
              <p>
                Registrati e inizia a vendere sul nostro portale
              </p>
            </div>
            <div
              class="col-12 col-sm-3 col-lg-12 d-flex align-items-center justify-content-center"
            >
              <a class="custom-btn mt-5" href="http://127.0.0.1:8000/"
                >Registrati</a
              >
            </div>
          </div>
        </div>
        <div class="cont-dx col-12 col-lg-6">

          <div class="cont-img">
            <img src="/img/work-with-us.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

a {
  text-decoration: none;
}

.ristoratore {
  h2 {
    font-family: "Bevan", serif;
  }
  
  .cont-sx {
    height: 100%;
  }

  .cont-dx {
    .cont-img {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100%;
        width: 90%;
      }
    }
  }
}
</style>
