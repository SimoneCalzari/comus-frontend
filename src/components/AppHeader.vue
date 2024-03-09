<script>
import store from "../store";
export default {
  name: "Header",
  data() {
    return {
      store,
    };
  },
  methods: {
    totalItemsCart() {
      let total = 0;
      this.store.cart.forEach((item) => {
        total += item.quantity;
      });
      return total;
    },
  },
};
</script>

<template>
  <header>
    <!-- navbar -->
    <nav class="navbar d-flex align-item-center">
      <div class="custom-logo">
        <router-link :to="{ name: 'home' }">
          <img src="/img/logo/big-white-orange.svg" alt="logo" />
        </router-link>
      </div>

      <div class="costum-links">
        <ul class="d-flex m-0 gap-4">
          <li class="d-flex align-items-center">
            <a class="nav-link" href="#">Lista ristoranti</a>
          </li>
          <li class="d-flex align-items-center">
            <a class="nav-link" href="http://127.0.0.1:8000"
              >Area Ristoratori</a
            >
          </li>
          <li class="d-flex align-items-center">
            <router-link :to="{ name: 'cart' }">
              <i class="fa-solid fa-cart-shopping">
                <div id="items-cart">{{ totalItemsCart() }}</div>
              </i>
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
  background-color: $custom-secondary;
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
        color: $custom-white;

        &:hover {
          color: $custom-primary;
          transition: bottom 0.3s ease-in-out;
        }

        i {
          padding: $size_8 $size_16;
          background-color: $custom-light_p;
          color: $custom-primary;
          border-radius: $size_8;
          position: relative;
          #items-cart {
            position: absolute;
            color: white;
            top: -10px;
            right: -10px;
            background-color: $custom-primary;
            width: 25px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            text-align: center;
            vertical-align: middle;
            line-height: 25px;
            font-size: 12px;
          }

          &:hover {
            color: $custom-secondary;
            transition: bottom 0.3s ease-in-out;
          }
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
