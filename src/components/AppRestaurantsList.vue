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
};
</script>
<template>
  <section id="costum-restaurants">
    <div class="container-fluid">
      <h2 class="text-center fs-1">I nostri ristoranti</h2>
      <div v-if="store.restaurants.length">
        <h3 class="mb-4 text-center">
          Sono presenti {{ store.restaurants.length }} ristoranti
        </h3>
        <div class="restaurants d-flex justify-content-center flex-wrap">
          <div class="restaurant-card" v-for="restaurant in store.restaurants">
            <router-link
              :to="{ name: 'restaurant', params: { slug: restaurant.slug } }"
              class="d-flex flex-column h-100"
            >
              <img
                :src="`${store.api.baseUrl}/storage/${restaurant.img}`"
                alt="immagine ristorante"
              />
              <div
                class="caption p-2 border flex-grow-1 d-flex flex-column justify-content-center"
              >
                <h4 class="fw-bold text-center">
                  {{ restaurant.name_restaurant }}
                </h4>
                <p class="mb-0 fs-5 text-center">
                  <span v-for="category in restaurant.types" class="me-2">
                    {{ category.name_type }}
                  </span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <h3 v-else>La ricerca non ha prodotto risultati</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

#costum-restaurants {
  padding-bottom: $size_48;

  h2 {
    color: $custom-secondary;
    font-family: "Bevan", serif;
    // padding: $size_48;
  }
  .restaurant-card {
    -webkit-box-shadow: -1px 1px 20px 1px $custom-secondary;
    -moz-box-shadow: -1px 1px 20px 1px $custom-secondary;
    -o-box-shadow: -1px 1px 20px 1px $custom-secondary;
    box-shadow: -1px 1px 20px 1px $custom-secondary;
    border-radius: $size_8;
    width: calc((100% - 100px) / 5);
    margin: 10px;
    overflow: hidden;
    img {
      aspect-ratio: 4/3;
      width: 100%;
      display: block;
    }
    // .caption {
    //   padding-bottom: $size_16;
    // }
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
@media screen and (max-width: 1200px) {
  #costum-restaurants {
    .restaurant-card {
      width: calc((100% - 80px) / 4);
    }
  }
}
@media screen and (max-width: 992px) {
  #costum-restaurants {
    .restaurant-card {
      width: calc((100% - 60px) / 3);
    }
  }
}
@media screen and (max-width: 768px) {
  #costum-restaurants {
    .restaurant-card {
      width: calc((100% - 40px) / 2);
    }
  }
}
@media screen and (max-width: 576px) {
  #costum-restaurants {
    .restaurant-card {
      width: calc((100% - 20px) / 1);
    }
  }
}
</style>
