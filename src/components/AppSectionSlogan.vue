<script>
export default {
  name: 'SectionSlogan',
};
</script>

<template>
  <!--section slogan-->
  <section id="slogan">
    <div class="container">
      <div class="row">
        <div class="col-9 col-md-8 col-xl-6">
          <h2 class="">Gusto in viaggio, qualità in ogni boccone.</h2>
          <p>
            Comus, l'app che fa danzare il gusto direttamente a casa tua!
            <br />Scopri un mondo di sapori street-style in ogni boccone, perché
            il viaggio culinario è sempre più cool con noi.<br />
            Ordina con stile, mangia con passione!
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
  background-color: $custom-secondary;

  h2 {
    font-family: 'Bevan', serif;
    padding: $size-48 0 0;
    color: $custom-primary;
    font-weight: 900;
  }

  p {
    padding: $size-48 0;
    color: $custom-primary;
  }

  .custom-img {
    width: 12.5rem;
    padding: $size-16 $size-16 $size-48;
  }
}
</style>
