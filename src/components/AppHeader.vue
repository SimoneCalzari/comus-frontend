<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<template>
  <header class="d-flex justify-content-between">
    <div class="cont-logo">
      <router-link :to="{ name: 'home' }">
        <img src="../../public/img/comus.svg" alt="logo"
      /></router-link>
    </div>
    <ul class="btns mb-0">
      <li>
        <a href="">Lista ristoranti</a>
      </li>
      <li>
        <a href="">Sei un ristoratore?</a>
      </li>
      <li class="btn btn-danger rounded m-2">Carrello</li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/general.scss' as *;

header {
  background-color: #432456;
  padding: 10px 20px;

  .cont-logo {
    width: 150px;
    border: 1px solid red;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
