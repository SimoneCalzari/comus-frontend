<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <!-- navbar -->
    <nav class="navbar d-flex align-item-center">
      <div class="custom-logo">
        <router-link :to="{ name: 'home' }">
          <img src="/img/logo/big-white-orange.svg" alt="logo"/>
        </router-link>
      </div>
      
      <div class="costum-links">
        <ul class="d-flex m-0 gap-4">
          <li class="d-flex align-items-center">
            <a class="nav-link" href="#">Lista ristoranti</a>
          </li>
          <li class="d-flex align-items-center">
            <a class="nav-link" href="#">Sei un ristoratore?</a>
          </li>
          <li class="d-flex align-items-center">
            <router-link :to="{ name: 'cart' }">
              <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- navbar -->
    </nav>
  </header>
</template>

<style scoped lang="scss">

@import "../assets/scss/partials/variables.scss";

header {
  background-color: #432456;
  padding: $size_24 $size_16;

  .custom-logo {
    width: 150px;

    img {
      width: 100%;
    }
  }

  .costum-links {

    ul {

      a {
      text-decoration: none;
      color: rgb(160, 90, 90);

      &:hover {
        color: white;
        transition: bottom 0.3s ease-in-out;
      }

      i {
        padding: $size_8 $size_16;
        background-color: red;
        border-radius: $size_8;
      }
    }
    }

    









    .cart a {
      background-color: #faebd7;
      padding: 10px 30px;
      color: #432456;
      border-radius: 10px;
      font-size: 20px;

      &:hover {
        background-color: #ffff;
      }
    }
  }
}
</style>
