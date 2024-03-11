<script>
export default {
  name: "AppFooter",
  data() {
    return {
      menus_1: [
        "Lista Ristoranti",
        "Area Ristoratore",
        "Lavora con Noi",
        "Aiuto",
      ],
      menus_2: [
        "Informativa sulla Privacy",
        "Informativa relativa ai cookie",
        "Termini & Condizioni",
        "Informazioni sul packaging",
      ],
    };
  },
};
</script>

<template>
  <footer>
    <!--lista menu footer: sinistra, centro, destra-->
    <div id="footer-top">
      <div class="row align-items-md-start align-items-sm-center">
        <!-- sinistra -->
        <div class="custom-box-sx col-md-4 col-sm-12">
          <ul class="text-md-start text-center p-0">
            <li v-for="menu_1 in menus_1">
              <a href="#" target="_blank">{{ menu_1 }}</a>
            </li>
          </ul>
        </div>
        <!-- /sinistra-->
        <!-- centro -->
        <div class="custom-box-ct col-md-4 col-sm-12">
          <ul class="text-md-start text-center p-0">
            <li v-for="menu_2 in menus_2">
              <a href="#" target="_blank">{{ menu_2 }}</a>
            </li>
          </ul>
        </div>
        <!-- /centro -->
        <!-- destra -->
        <div class="custom-box-dx col-md-4 col-sm-12">
          <div class="row align-items-center flex-md-column">
            <!-- logo -->
            <div class="col-md-6 col-sm-12 d-flex justify-content-center">
                <img src="/img/logo/logo-sm-snow.svg" class="cont-image" alt="logo-footer" />
            </div>
            <!-- /logo -->
            <!-- socials -->
            <div class="col-md-6 col-sm-12 pt-4">
              <ul class="col d-flex p-0 d-flex justify-content-center gap-3">
                <!-- twitter -->
                <li>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <!-- /twitter -->
                <!-- youtube -->
                <li>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <!-- /youtube -->
                <!-- instagram -->
                <li>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <!-- /instagram -->
                <!-- facebook -->
                <li>
                  <a href="#" target="_blank">
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
      <p class="m-0 mt-3 text-center fs-6 text-body-secondary">
        Copyright © 2024 Comus Italia. All Rights Reserved.
      </p>
    </div>
    <!-- /copyright -->
  </footer>
</template>

<style scoped lang="scss">
//importazione fogli stili
@import "../assets/scss/partials/variables.scss";
@import "../assets/scss/partials/reset.scss";

li {
  padding: $size-8 0;
}

footer {
  padding: $size_24 $size_16;
  background-color: $custom-primary;

  #footer-top {
    padding: $size_16 0;
    .custom-box-sx a,
    .custom-box-ct a{
      color: $custom-white;

      &:hover {
        color: $custom-secondary;
      }
    }
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
      }

      .custom-box-ct a {
      color: $custom-white;

      
    }
    }
  }
 } 
  
</style>