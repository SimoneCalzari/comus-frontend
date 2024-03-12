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
          <h2 class="display-4">Gusto in viaggio, qualità in ogni boccone.</h2>
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
  background-image: url('/img/slogan-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    font-family: 'Bevan', serif;
    padding: $size-48 $size-16 0;
    color: $custom-primary;
    font-weight: 900;
  }

  .custom-img {
    width: 12.5rem;
    padding: $size-16 $size-16 $size-48;
  }
}
</style>
