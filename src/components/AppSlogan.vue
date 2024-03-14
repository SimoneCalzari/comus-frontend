<script>
export default {
  name: 'AppSlogan',
};
</script>

<template>
  <!--section slogan-->
  <section id="slogan">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6 col-lg-6">
          <div class="card-slogan">
            <h2>Gusto in viaggio, qualità in ogni boccone.</h2>
          <p>
            Comus, l'app che rivoluziona il delivery food!
            copri sapori street-style in ogni boccone, rendendo il viaggio culinario ancora più emozionante.
            <br>
            Ordina con stile, gustando con passione a casa tua!
          </p>
          <div class="cont-img">
            <img
              src="/img/logo/big-orange-white.svg"
              class="custom-img img-fluid"
              alt="logo-orange-purple.svg"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--section slogan-->
</template>

<style scoped lang="scss">
//importazione file variables
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/typography.scss';

#slogan {
  // background-image: url('/img/slogan-bg.png');
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: $custom-light;
  // background-image: url('/img/delivery_food.jpg');
  // background-size: cover;
  // background-repeat: no-repeat; 
  // background-position: bottom;
  padding: $size_48 0;

  .card-slogan {
    //card 
    // padding: $size_8;
    // border-radius: $size_32;
    // border: 1px solid $custom-primary;
    // background-color: $custom-white;

    .custom-img {
      width: 160px;
      padding: $size-16;
    }

    h2 {
      font-family: 'Bevan', serif;
      padding: $size-16 0 0;
      color: $custom-secondary;
      font-weight: 900;
    }

    p {
      color: $custom-secondary;
    }
  }
}
</style>
