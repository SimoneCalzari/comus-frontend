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
  <!-- <div class="menu-item d-flex position-relative h-100 border">
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
      <div type="button" class="m-1 custom-btn" @click="$emit('newItem')">
        +
      </div>
      <div type="button" class="m-1 custom-btn" @click="$emit('removeItem')">
        -
      </div>
    </div>
  </div> -->
  <router-link
    :to="{ name: 'restaurant', params: { slug: restaurant.slug } }"
    class="col-3 g-3"
    v-for="restaurant in store.restaurants"
  >
    <div class="card-restaurant d-flex flex-column align-items-center">
      <!-- img -->
      <div class="cont-img">
        <img
          :src="`${store.api.baseUrl}/storage/${restaurant.img}`"
          alt="immagine ristorante"
        />
      </div>
      <!-- name -->
      <div class="cont-text">
        <h6 class="text-center">
          {{ restaurant.name_restaurant }}
        </h6>
        <!-- types -->
        <ul class="p-0">
          <li v-for="category in restaurant.types" class="text-center">
            <span>
              {{ category.name_type }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';
.menu-item {
  padding: 0;
  overflow: hidden;
  height: 100%;
  // border-radius: $size_32;

  .cont-img {
    overflow: hidden;
    //border-radius: $size_32;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .cont-info {
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

    span {
      color: $custom-secondary;
    }
  }
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
