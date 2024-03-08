<script>
import { RouterLink } from "vue-router";
import store from "../store";
export default {
  name: "AppListRestaurants",
  data() {
    return {
      store,
    };
  },
  methods: {
   
  },

  created() {
    
  },
};
</script>
<template>
  <section class="container" id="costum-restaurants">
    <h2 class="display-5 text-center">I nostri ristoranti</h2>
    <div v-if="store.restaurants.length">
      <div class="row g-2 g-lg-3">
        <div class="col-sm-12 col-md-4 restaurant-card" v-for="restaurant in store.restaurants">
          <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug }}">
            <img :src="`${store.api.baseUrl}/storage/${restaurant.img}`" alt="immagine ristorante"/>
            <div class="banner p-2">Solo con Comus!</div>
            <div class="caption">
              <h3>{{ restaurant.name_restaurant }}</h3>
              <p>
                <span v-for="category in restaurant.types">
                  {{ category.name_type }}
                </span>
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    
    <h3 v-else>Nessun Risultato</h3>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";


#costum-restaurants {
  padding-bottom: $size_48;

  h2 {
    color: $custom-secondary;
    font-family: "Bevan", serif;
    padding: $size_48;
  }
  .restaurant-card {
    -webkit-box-shadow: -1px 1px 20px 1px $custom-secondary;
    -moz-box-shadow: -1px 1px 20px 1px $custom-secondary;
    -o-box-shadow: -1px 1px 20px 1px $custom-secondary;
    box-shadow: -1px 1px 20px 1px $custom-secondary;
    border-radius: $size_8;
    position: relative;


    img {
      height: 70%;
      width: 100%; 
      object-fit: cover
    }

    .banner {
      position: absolute;
      left: -20px;
      top: $size_8;
      border-radius: $size_8;
      background-color: $custom-primary;
      color: $custom-white ;
    }
    .caption {
      padding-bottom: $size_16;
    }
  }
  .restaurant-card:hover {
    -webkit-box-shadow: -1px 1px 20px 1px $custom-primary;
    -moz-box-shadow: -1px 1px 20px 1px $custom-primary;
    -o-box-shadow: -1px 1px 20px 1px $custom-primary;
    box-shadow: -1px 1px 20px 1px $custom-primary;
  }
  a {
    text-decoration: none;
    color: $custom-secondary;
  }
}


</style>
