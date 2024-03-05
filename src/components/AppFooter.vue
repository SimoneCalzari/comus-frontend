<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<template>
  <footer class="p-4">
    <div class="row">
      <ul class="col-md-3 col-sm-12">
        <li>
          <a href="#" class="custom-text">Lista Ristoranti</a>
        </li>
        <li>
          <a href="#">Aera Ristoratore</a>
        </li>
        <li>
          <a href="#">Lavora con noi</a>
        </li>
        <li>
          <a href="#">Aiuto</a>
        </li>
      </ul>
      <ul class="col col-md-3 col-sm-12">
        <li>
          <a href="#">Informativa sulla Privacy</a>
        </li>
        <li>
          <a href="#">Informativa relativa ai cookie</a>
        </li>
        <li>
          <a href="#">Temini & Condizioni</a>
        </li>
        <li>
          <a href="#">Informazioni sul packaging</a>
        </li>
      </ul>
      <ul class="col col-md-3 col-sm-12">
        <li>
          <a href="#">x</a>
        </li>
        <li>
          <a href="#">YouTube</a>
        </li>
        <li>
          <a href="#">instagram</a>
        </li>
        <li>
          <a href="#">LinkeIn</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
      </ul>
      <div class="col col-md-3 col-sm-12">
        <img class="w-25" src="../../public/img/logo.png" alt="Comus_logo.jpg">
      </div>
    </div>
    <div class="col text-center py-4">Copyright © 2024 Comus Italia. All Rights Reserved.</div>
    <!-- <ul class="d-flex flex-row gap-4">
      <li class="">
        <img src="../../public/img/app-store.png" alt="">
      </li>
      <li>
        <img src="../../public/img/app-gallery.png" alt="">
      </li>
      <li>
        <img src="../../public/img/google-play.png" alt="">
      </li>
      <span>Copyright © 2024 Comus Italia. All Rights Reserved.</span>
    </ul> -->
  </footer>
</template>


<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

footer {

  background-color: $custom-primary;
  a {
    color: $custom-white;
    text-decoration: none;
  }
  span {
    color: $custom-text;
  }
}
  
</style>
