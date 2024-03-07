<script>
import store from "../store";
import axios from "axios";

export default {
  name: "AppSearch",
  data() {
    return {
      store,
      currentType: [],
    };
  },
  methods: {
    getTypes() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.types)
        .then((response) => {
          this.store.types = response.data.results;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchRestaurant() {
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/search/" +
            this.currentType
        )
        .then((response) => {
          this.store.restaurants = response.data.results;
          console.log(this.store.restaurants);
          if (!response.data.success) {
            this.getRestaurants();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRestaurants() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
        .then((response) => {
          this.store.restaurants = response.data.results;
        });
    },
  },

  created() {
    this.getTypes();
  },
};
</script>
<template>
  <div class="container mt-1 text-left">
    <select
      class="form-select"
      v-model="currentType"
      @change="searchRestaurant"
      aria-label="Default select example"
    >
      <option selected value="">Tutte le categorie</option>
      <option v-for="category in store.types" :value="category.id">
        {{ category.name_type }}
      </option>
    </select>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
input {
  width: 25%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid $custom-primary;
}
</style>
