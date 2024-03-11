<script>
export default {
  name: "SectionSlogna",
};
</script>

<template>
  <!--section slogan-->
  <section id="slogan">
    <div class="col-3">
      <h2 class="display-4">
        Gusto in viaggio, qualità in ogni boccone.
      </h2>
      <img src="/img/logo/big-orange-white.svg" class="custom-img img-fluid" alt="logo-orange-purple.svg"/>
    </div>
  </section>
  <!--section slogan-->
</template>

<style scoped lang="scss">
//importazione file variables
@import "../assets/scss/partials/variables.scss";
@import "../assets/scss/partials/typography.scss";

#slogan {
  background-image: url('/img/hamburger.jpg');
  background-size: 200%;
  background-position: left;

  h2 {
    font-family: "Bevan", serif;
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
