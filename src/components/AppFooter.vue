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
    <div class="footer-top pt-3">
      <div class="row">
        <!-- sinistra -->
        <div class="box-sx col-6 col-sm-4">
          <ul>
            <li v-for="menu_1 in menus_1">
              <a href="#">{{ menu_1 }}</a>
            </li>
          </ul>
        </div>
        <!-- centro -->
        <div class="box-ct col-6 col-sm-4">
          <ul>
            <li v-for="menu_2 in menus_2">
              <a href="#">{{ menu_2 }}</a>
            </li>
          </ul>
        </div>
        <!-- destra -->
        <div class="box-dx col-12 col-sm-4">
          <div class="row">
            <!-- logo -->
            <div
              class="col-6 col-sm-12 d-flex justify-content-center align-items-center"
            >
              <div class="cont-img">
                <img src="/img/logo/logo-sm-purple.svg" alt="logo-footer" />
              </div>
            </div>
            <!-- socials -->
            <div class="col-6 col-sm-12">
              <ul class="d-flex justify-content-around m-0 mt-3">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="m-0 mt-3 text-center fs-6 text-body-secondary">
        Copyright © 2024 Comus Italia. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
ul {
  padding: 0;
}
a {
  text-decoration: none;
}

li {
  padding: $size-8 0;
}

footer {
  padding: 10px 30px;
  background-color: $custom-light-p;

  .box-sx a,
  .box-ct a {
    color: $custom-white;

    &:hover {
      color: $custom-secondary;
    }
  }

  .box-dx {
    i {
      font-size: $size-32;
      color: $custom-white;

      &:hover {
        color: $custom-secondary;
      }
    }
  }

  .cont-img {
    width: 100px;

    img {
      width: 100%;
    }
  }
}
</style>
