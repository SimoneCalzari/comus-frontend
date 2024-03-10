<script>
import store from "../store";

export default {
  name: "AppDish",
  data() {
    return {
      store,
    };
  },
  methods: {},
  emits: ["newItem"],
  props: ["dish_new"],
};
</script>

<template>
  <div class="menu-item p-3 d-flex position-relative h-100">
    <div class="dish-img m-1">
      <img src="" alt="piatto" />
    </div>
    <div class="info ms-3">
      <h3>{{ dish_new.name }}</h3>
      <p>{{ dish_new.price }} €</p>
    </div>
    <div
      class="custom-btn mt-5 position-absolute"
      @click="$emit('newItem')"
      href="#"
    >
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.menu-item {
  border: 1px solid $custom-primary;
  border-radius: 10px 25px 10px 10px;
  color: $custom-secondary;
  background-color: $custom-lighter_p;
}
.custom-btn {
  bottom: 5px;
  right: 5px;
  text-decoration: none;
  font-size: $size-16;
  cursor: pointer;
  padding: $size_8;
}
</style>
