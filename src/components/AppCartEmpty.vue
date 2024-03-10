<script>
export default {
    name: 'AppCartEmpty',
}
</script>

<template>
    <div class="container info-restaurant">
      <h3 class="fs-1">Preview carello</h3>
        <p>empty</p>
    </div>
  </template>
  
  <style scoped lang="scss">
  @import "../assets/scss/partials/variables.scss";
  
  //messo solo per veder e carello distinto
  .info-restaurant {
    border-radius: 10px 50px 10px 10px;
    padding: $size_16;
    background-color: $custom_light_p;
    color: $custom-secondary;
  }
  </style>
  