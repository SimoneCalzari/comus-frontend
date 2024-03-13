<script>
export default {
  name: "AppPageLoader",
};
</script>

<template>

  <div class="loading  d-flex justify-content-center align-items-center flex-column">
    <img src="/img/logo/big-purple-orange.svg" alt="logo" />
    <div class="d-flex justify-content-center my-3">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.loading {
  background-color: $custom-white ;
  height: 87vh;
  img{
    width: 200px;
  }
}
.spinner-border{
  color: $custom-primary;
}

</style>
