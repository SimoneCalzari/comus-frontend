<script>
import store from "../store";

export default {
  name: "AppDish",
  data() {
    return {
      store,
    };
  },
  methods: {
    getQuantity() {
      const dish = this.store.cart.filter((element) => {
        return element.id === this.dish_new.id;
      });

      if (dish.length) {
        return dish[0].quantity;
      } else {
        return 0;
      }
    },
  },
  emits: ["newItem", "removeItem"],
  props: ["dish_new"],
};
</script>

<template>
  <div class="card-dish d-flex flex-column align-items-center">
    <!-- img -->
    <div class="cont-img">
      <img
        :src="`${store.api.baseUrl}/storage/${dish_new.img}`"
        :alt="dish_new.name"
      />
    </div>
    <!-- name -->
    <div class="cont-text">
      <h6 class="text-center">
        {{ dish_new.name }}
      </h6>
      <!-- info -->
      <div class="cont-info row">
        <div
          class="col-12 col-xxl-6 d-flex align-items-center justify-content-center py-2"
        >
          <strong>{{ dish_new.price }} €</strong>
        </div>
        <!-- bottoni + - -->
        <div
          class="col-12 col-xxl-6 d-flex py-2 justify-content-center gap-3 align-items-center"
        >
          <div type="button" class="dish-btn" @click="$emit('removeItem')">
            -
          </div>
          <div>{{ getQuantity() }}</div>
          <div type="button" class="dish-btn" @click="$emit('newItem')">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

.card-dish {
  padding: 0;
  overflow: hidden;
  height: 100%;
  border-radius: $size_32;
  border: 1px solid $custom-primary;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.6s ease-in-out;
  }

  .cont-img {
    width: 100%;
    overflow: hidden;
    aspect-ratio: 4/3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .cont-text {
    width: 100%;
    transition: all 0.6s ease-in-out; //ovunque
    flex-grow: 1;

    h6 {
      color: $custom-white;
      font-family: "Bevan", serif;
      background-color: $custom-primary;
      padding: $size_8 0;
    }

    .cont-info {
      width: 90%;
      margin: 0 auto;
    }

    span {
      color: $custom-secondary;
    }
  }
}

.dish-btn {
  line-height: $size-24;
  text-align: center;
  height: $size-24;
  width: $size-24;
  background-color: $custom-secondary;
  color: $custom_white;
  border-radius: 50%;

  &:hover {
    background-color: #38242c;
  }
}
</style>
