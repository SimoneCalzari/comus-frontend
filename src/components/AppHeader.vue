<script>
import store from '../store';
export default {
  name: 'Header',
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
  mounted() {
    this.store.cart = JSON.parse(localStorage.getItem('dishes')) || [];
    this.store.totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
  },
};
</script>

<template>
  <header>
    <!-- navbar -->
    <nav class="navbar d-flex align-item-center justify-content-between">
      <div class="custom-logo">
        <router-link :to="{ name: 'home' }">
          <img src="/img/logo/logo-orange-light.svg" alt="logo-comus" />
        </router-link>
      </div>

      <div class="custom-links">
        <ul class="d-flex m-0 gap-3 p-0">
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
@import '../assets/scss/partials/variables.scss';

header {
  background-color: $custom-secondary;
  padding: $size_24 $size_16;

  .custom-logo {
    max-width: 120px;

    img {
      width: 100%;
    }
  }

  .custom-links {
    ul {
      a {
        text-decoration: none;
        color: $custom-primary;

        &:hover {
          color: $custom-light;
          transition: 0.6s ease-in-out;
        }

        i {
          padding: $size_8 $size_16;
          background-color: $custom-primary;
          color: $custom-white;
          border-radius: $size_8;
          position: relative;

          &:hover {
            background-color: $custom-light;
            transition: 0.6s ease-in-out;
          }

          #items-cart {
            position: absolute;
            color: $custom_secondary;
            top: -10px;
            right: -10px;
            background-color: $custom-white;
            width: 25px;
            aspect-ratio: 1/1;
            border-radius: 50%;
            text-align: center;
            vertical-align: middle;
            line-height: 25px;
            font-size: 12px;

            &:hover {
              color: $custom-light;
              transition: 0.6s ease-in-out;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 575px) {
  .navbar {
    display: flex;
    flex-direction: column;
  }
  .custom-logo {
    margin: 0 auto;
  }
  .custom-links {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      margin: 5px 10px;
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 40px;
    }
  }
}
</style>
