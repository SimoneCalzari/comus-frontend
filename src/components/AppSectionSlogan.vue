<script>
export default {
  name: "SectionSlogna",
};
</script>

<template>
  <section class="py-5" id="slogan">
    <div class="container d-flex justify-content-between">
      <div class="cont-sx">
        <h3>Non resisto più</h3>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
//importazione file variables
@import "../assets/scss/partials/variables.scss";
#slogan {
  background-image: url(/img/hamburger.jpg);
  background-size: contain;
  width: 100vw;
  height: 50vh;
  color: $custom-primary;

  h2 {
    top: 5rem;
    padding: 0 $size_16;
    color: $custom-primary;
    font-size: 40px;
  }
}
</style>

//to do layouts
