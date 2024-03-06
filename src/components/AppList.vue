<script>
import store from "../store";
import axios from "axios";
export default {
  name: "AppList",
  data() {
    return {
      store,
    };
  },
  methods: {
    getRestaurants() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
        .then((response) => {
          this.store.restaurants = response.data.results;
        });
    },
  },
  created() {
    this.getRestaurants();
  },
};
</script>
<template>
  <section class="my-2">
    <h1 class="container">I ristoranti:</h1>
    <div class="container d-flex gap-5">
      <div class="restaurant-card my-5" v-for="restaurant in store.restaurants">
        <img src="/img/categories_img/sushi.jpg" alt="immagine ristorante" />
        <div class="banner p-2">Solo con Comus!</div>
        <div class="caption p-3">
          <h3>{{ restaurant.name_restaurant }}</h3>
          <p>
            <span v-for="category in restaurant.types" class="me-2 fs-5">
              {{ category.name_type }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
h1 {
  color: $custom-secondary;
}
.restaurant-card {
  -webkit-box-shadow: -1px 1px 60px 1px $custom-secondary;
  -moz-box-shadow: -1px 1px 53px 1px $custom-secondary;
  -o-box-shadow: -1px 1px 53px 1px $custom-secondary;
  box-shadow: -1px 1px 53px 1px $custom-secondary;
  border-radius: 5px;
  width: 25%;
  height: 25%;
  position: relative;
  img {
    width: 100%;
  }
  .banner {
    position: absolute;
    left: -22px;
    top: 8px;
    border-radius: 4px;
    background-color: $custom-primary;
  }
}
.restaurant-card:hover {
  -webkit-box-shadow: -1px 1px 60px 1px $custom-primary;
  -moz-box-shadow: -1px 1px 60px 1px $custom-primary;
  -o-box-shadow: -1px 1px 60px 1px $custom-primary;
  box-shadow: -1px 1px 60px 1px $custom-primary;
}
a {
  text-decoration: none;
  color: $custom-secondary;
}
</style>
