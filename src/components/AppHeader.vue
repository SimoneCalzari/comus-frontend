<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<template>
  <header class="d-flex justify-content-between">
    <div class="cont-logo">
      <router-link :to="{ name: 'home' }">
        <img src="/img/logo/logo-orange-white.svg" alt="logo"
      /></router-link>
    </div>
    <ul class="btns mb-0">
      <li>
        <a href="#ristoranti">Lista ristoranti</a>
      </li>
      <li>
        <a href="#ristoratore">Sei un ristoratore?</a>
      </li>
      <li class="cart">
        <router-link :to="{ name: 'cart' }">
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/general.scss" as *;

header {
  background-color: #432456;
  padding: 10px 30px;

  .cont-logo {
    width: 150px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;

    a {
      text-decoration: none;
      color: #ffff;

      &:hover {
        color: #faebd7;
        text-decoration: underline;
        transition: bottom 0.3s ease-in-out;
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
