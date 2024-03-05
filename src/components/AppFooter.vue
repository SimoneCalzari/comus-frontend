<script>
export default {
  name: 'Footer',
  data() {
    return {
      menus_1:['Lista Ristoranti', 'Area Ristoratore', 'Lavora con Noi', 'Aiuto'],
      menus_2:['Informativa sulla Privacy', 'Informativa relativa ai cookie', 'Termini & Condizioni', 'Informazioni sul packaging'],
    };
  },
};
</script>

<template>
  <footer>
    <!--footer-top-->
    <div id="footer-top" class="container-fluid row">
      <!--menu 1-->
      <ul class="col-md-3 col-sm-12 py-md-0 py-sm-4">
        <li v-for="menu_1 in menus_1" class="text-md-start text-sm-center">
          <a href="#" class="custom-text">{{ menu_1 }}</a>
        </li>
      </ul>
      <!--/menu 1-->
      <!--menu 2-->
      <ul class="col col-md-3 col-sm-12 py-md-0 py-sm-4">
        <li v-for="menu_2 in menus_2" class="text-md-start text-sm-center">
          <a href="#" class="custom-text">{{ menu_2 }}</a>
        </li>
      </ul>
      <!--/menu 2-->
      <!--socials-->
      <ul class="d-flex gap-4 col-md-3 col-sm-12 justify-content-center py-md-0 py-sm-4">
        <li class="">
          <a href="#" class="custom-text"><i class="fa-brands fa-square-x-twitter"></i></a>
        </li>
        <li>
          <a href="#" class="custom-text"><i class="fa-brands fa-youtube"></i></a>
        </li>
        <li>
          <a href="#" class="custom-text"><i class="fa-brands fa-square-instagram"></i></a>
        </li>
        <li>
          <a href="#" class="custom-text"><i class="fa-brands fa-square-facebook"></i></a>
        </li>
      </ul>
      <!--/socials-->
      <!--logo-->
      <div class="col-md-3 col-sm-12 py-md-0 py-sm-4 d-flex justify-content-center">
        <img class="img-fluid" src="../../public/img/logo.png" alt="Comus_logo.jpg">
      </div>
      <!--/logo-->
    </div>
    <!--/footer-top-->
    <!--footer-bottom-->
    <div id="footer-bottom" class="container-fluid row d-flex justify-content-center align-items-center">
      <div class="col-md-6 col-sm-12">
        <ul class="d-flex flex-row align-items-center justify-content-center gap-4 m-0">
          <li>
            <img class="costum-download rounded-2" src="../../public/img/app-store.png" alt="app-store.png">
          </li>
          <li>
            <img class="costum-download rounded-2 " src="../../public/img/app-gallery.png" alt="app-gallery.png">
          </li>
          <li>
            <img class="costum-download rounded-2" src="../../public/img/google-play.png" alt="google-play.png">
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12 py-md-0 py-sm-4 text-start">
        <h5 class="text-md-start text-sm-center">Copyright © 2024 Comus Italia. All Rights Reserved.</h5>
      </div>
    </div>
    <!--/footer-bottom-->
  </footer>
</template>


<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

footer {
  padding: $size_16;
  background-color: $custom-light-p; // solo per vedere ora il logo poi $custom-primary;

  #footer-top {
    padding: $size_8 0;
    li {
    padding: $size_8 0;

      a {
      color: $custom-white;
      text-decoration: none;

        i {
          font-size: $size_32;
        }
      }
    }
  }
  
  #footer-bottom {
    padding: $size_8 0;
    .costum-download {
    width: 6.25rem;
  }

  h5 {
    color: $custom-text;
    font-size: $size_8;
  }

  }
}
</style>
