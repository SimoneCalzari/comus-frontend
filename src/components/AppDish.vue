<script>
import store from '../store';

export default {
  name: 'AppDish',
  data() {
    return {
      store,
    };
  },
  methods: {},
  emits: ['newItem', 'removeItem'],
  props: ['dish_new'],
};
</script>

<template>
  <div class="card-dish d-flex flex-column align-items-center">
    <!-- img -->
    <div class="cont-img">
      <img :src="`${store.api.baseUrl}/storage/${dish_new.img}`" alt="piatto" />
    </div>
    <!-- name -->
    <div class="cont-text">
      <h6 class="text-center">
        {{ dish_new.name }}
      </h6>
      <!-- info -->
      <div class="cont-info row">
        <div
          class="col-12 col-lg-6 d-flex align-items-center justify-content-center"
        >
          <strong>{{ dish_new.price }} €</strong>
        </div>
        <!-- bottoni + - -->
        <div class="col-12 col-lg-6 d-flex p-0 justify-content-around">
          <div type="button" class="dish-btn" @click="$emit('removeItem')">
            -
          </div>
          <div type="button" class="dish-btn" @click="$emit('newItem')">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.card-dish {
  padding: 0;
  overflow: hidden;
  height: 100%;
  border-radius: $size_32;
  border: 1px solid lightgrey;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.6s ease-in-out;
  }

  .cont-img {
    width: 100%;
    overflow: hidden;
    border-radius: $size_32;
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
    border-radius: 0 0 $size_32 $size_32;
    transition: all 0.6s ease-in-out; //ovunque
    flex-grow: 1;

    h6 {
      color: $custom-white;
      font-family: 'Bevan', serif;
      background-color: $custom-primary;
      border-radius: $size_32;
      padding: $size_8 0;
      margin-top: $size_8;
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
  background-color: $custom-secondary;
  color: $custom_white;
  padding: $size-8 $size-16;
  border-radius: $size-8;
}
</style>
