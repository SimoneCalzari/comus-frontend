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
  <div class="menu-item p-3 d-flex position-relative">
    <div class="dish-img m-1">
      <img src="" alt="piatto" />
    </div>
    <div class="info ms-3">
      <h3>{{ dish_new.name }}</h3>
      <h5>{{ dish_new.price }} €</h5>
    </div>
    <div
      class="custom-btn mt-5 position-absolute"
      @click="$emit('newItem')"
      href="#"
    >
      +
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
  font-weight: 700;
  cursor: pointer;
}
</style>
