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
  emits: ["newItem" , "removeItem"],
  props: ["dish_new"],
};
</script>

<template>
  <div class="menu-item p-3 d-flex position-relative h-100">
    <div class="dish-img m-1">
      <img
        :src="`${store.api.baseUrl}/storage/${dish_new.img}`"
        alt="piatto"
        class="img-fluid"
      />
    </div>
    <div class="info ms-3">
      <h3>{{ dish_new.name }}</h3>
      <h5>{{ dish_new.price }} €</h5>
    </div>
    <div class="d-flex shrink-0 align-items-end">
      <div type="button" class="m-1 custom-btn" @click="$emit('newItem')">+</div>
      <div type="button" class="m-1 custom-btn" @click="$emit('removeItem')">-</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.menu-item {
  border: 1px solid $custom-primary;
  border-radius: 10px 25px 10px 10px;
  color: $custom-secondary;
  background-color: $custom-light;
}
.custom-btn{
  bottom: 5px;
  right: 5px;
  text-decoration: none;
  font-size: $size-16;
  font-weight: 700;
  cursor: pointer;
}
</style>
