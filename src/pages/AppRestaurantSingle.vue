<script>
import axios from "axios";
import store from "../store";
import AppDish from "../components/AppDish.vue"

export default {
  name: "AppRestaurantSingle",
  components: {AppDish},
  data() {
    return {
      store,
      restaurant: {},
    };
  },
  methods: {
    getSingleRestaurant() {
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/" +
            this.$route.params.slug
        )
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          this.restaurant = response.data.results;
          console.log(response.data.results);
        });
    },
  },
  created() {
    this.getSingleRestaurant();
  },
};
</script>










<template>
  <div class="container my-5">
    <div class="info-restaurant d-flex">
      <div class="left-img m-2">
        <img
          :src="`${store.api.baseUrl}/storage/${restaurant.restaurant.img}`"
          alt=""
        />
      </div>

      <div class="caption d-flex flex-column justify-content-between">
        <h1>{{ restaurant.restaurant.name_restaurant }}</h1>
        <div>
          <h5>{{ restaurant.restaurant.address }}</h5>
          <h5>{{ restaurant.restaurant.phone_number }}</h5>
        </div>
      </div>
    </div>

    <div class="menu">
      <ul class="d-flex flex-wrap row p-0">
        <li class="col-4 my-2" v-for="dish in restaurant.dishes"> <AppDish :dish="dish" /> </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.left-img{
  width: 40%;

  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
}
.info-restaurant {
  border-radius: 10px 50px 10px 10px;
  padding: $size_16;
  background-color: $custom_light_p;
  color: $custom-secondary;
}

.menu {
  border-radius: 10px 10px 10px 50px;
  padding: $size_16;
  margin-top: $size_8;
  background-color: $custom_light_p;
}

</style>
