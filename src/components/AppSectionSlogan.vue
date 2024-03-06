<script>
export default {
  name: "SectionSlogna",
};
</script>

<template>
  <!--section slogan-->
  <section id="slogan" class="d-flex align-items-center">
    <div class="w-25">
      <h2 class="display-3">Gusto<br> in viaggio, qualità<br> in ogni boccone.</h2>
      <img src="../../public/img/logo/logo-orange-purple.svg" class="img-fluid" alt="logo-orange-purple.svg">
    </div>
  </section>
  <!--section slogan-->
</template>

<style scoped lang="scss">
//importazione file variables


@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/typography.scss';

#slogan {
  background-image: url(../../public/img/hamburger.jpg);
  background-size: 150%;
  background-position: left;
          
  h2 {
    font-family: "Bevan", serif;
    top: 5rem;
    padding: $size-48 $size-16 0;
    color: $custom-primary;
    font-weight: 900;
  }

  img {
    width: 12.5rem;
    padding: $size-16 $size-16 $size-48;
  }
}    
</style>

