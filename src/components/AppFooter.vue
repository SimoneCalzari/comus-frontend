<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      menus_1: [
        'Lista Ristoranti',
        'Area Ristoratore',
        'Lavora con Noi',
        'Aiuto',
      ],
      menus_2: [
        'Informativa sulla Privacy',
        'Informativa relativa ai cookie',
        'Informazioni sul packaging',
        'Termini & Condizioni',
      ],
    };
  },
};
</script>

<template>
  <!-- Wave -->
  <div class="wave"></div>
  <footer>
    <!--lista menu footer: sinistra, centro, destra-->
    <div id="footer-top" class="justify-content-center">
      <div
        class="row container d-flex justify-content-center align-items-center"
      >
        <!-- sinistra -->
        <div class="custom-box-sx col-lg-4 col-6 text-center">
          <ul class="text-center text-md-center p-0">
            <li v-for="menu_1 in menus_1">
              <a href="#">{{ menu_1 }}</a>
            </li>
          </ul>
        </div>
        <!-- /sinistra-->
        <!-- centro -->
        <div class="custom-box-ct col-lg-4 col-6">
          <ul class="text-center text-md-center p-0">
            <li v-for="menu_2 in menus_2">
              <a href="#">{{ menu_2 }}</a>
            </li>
          </ul>
        </div>
        <!-- /centro -->
        <!-- destra -->
        <div class="custom-box-dx col-lg-4 col-6">
          <div class="row align-items-center flex-column">
            <!-- logo -->
            <div class="col-md-6 col-sm-12 d-flex justify-content-center">
              <img
                src="/img/logo/small-light.svg"
                class="cont-image"
                alt="logo-footer"
              />
            </div>
            <!-- /logo -->
            <!-- socials -->
            <div class="col-md-6 col-sm-12 pt-4">
              <ul class="col d-flex p-0 d-flex justify-content-center gap-3">
                <!-- twitter -->
                <li>
                  <a href="https://twitter.com/i/flow/login" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <!-- /twitter -->
                <!-- youtube -->
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <!-- /youtube -->
                <!-- instagram -->
                <li>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <!-- /instagram -->
                <!-- facebook -->
                <li>
                  <a
                    href="https://m.facebook.com/login/?locale=it_IT"
                    target="_blank"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <!-- facebook -->
              </ul>
            </div>
          </div>
        </div>
        <!-- /destra -->
      </div>
    </div>
    <!--lista menu footer: sinistra, centro, destra-->
    <!-- copyright -->
    <div id="footer-bottom">
      <p class="m-0 mt-3 text-center fs-6">
        Copyright © 2024 Comus Italia. All Rights Reserved.
      </p>
    </div>
    <!-- /copyright -->
  </footer>
</template>

<style scoped lang="scss">
//importazione fogli stili
@import '../assets/scss/partials/variables.scss';
@import '../assets/scss/partials/reset.scss';

a {
  text-decoration: none;
  color: $custom_white;

  &:hover {
    color: $custom-secondary;
    transition: 0.6s ease-in-out;
  }
}

li {
  padding: $size-8 0;
}

.wave {
  background-image: url(img/wave-orange.svg);
  background-size: cover;
  height: 100px;
}

footer {
  padding: $size_24 $size_16;
  background-color: $custom-primary;

  #footer-top {
    padding: $size_16 0;
  }

  .row {
    margin: 0 auto;
  }

  .cont-image {
    width: 100px;
  }

  .custom-box-dx {
    i {
      color: $custom-white;
      font-size: $size_24;

      &:hover {
        color: $custom-secondary;
        transition: 0.6s ease-in-out;
      }

      .custom-box-ct a {
        color: $custom-white;
      }
    }
  }
}
</style>
