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
  <section id="list-restaurant">
    <div class="container-md">
      <h1 class="text-center">I nostri ristoranti</h1>
      <div v-if="store.restaurants.length">
        <div class="row flex-row gap-4 justify-content-center">
          <p v-if="store.restaurants.length == 1" class="mb-4 text-center">
            è presente un ristorante
          </p>
          <p v-else class="text-center">
            Sono presenti {{ store.restaurants.length }} ristoranti
          </p>

          <div class="card-restaurant " v-for="restaurant in store.restaurants" >
            <transition name="grow-in">
              <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="d-flex flex-column" >
                <div class="cont-img">
                  <img  :src="`${store.api.baseUrl}/storage/${restaurant.img}`" alt="immagine ristorante" />
                </div>
                <div class="cont-text flex-grow-1 d-flex flex-column justify-content-center">
                  <h4 class="text-center">
                    {{ restaurant.name_restaurant }}
                  </h4>



                  <span v-for="category in restaurant.types" class="text-center" >{{ category.name_type }}</span>



                </div>
              </router-link>
            </transition>
          </div>
        </div>
      </div>
      <h3 v-else>La ricerca non ha prodotto risultati</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

#list-restaurant {
  padding: $size_48 0;
  max-width: 80%;
  margin: 0 auto;

  h1 {
    color: $custom-secondary;
    font-family: "Bevan", serif;
    padding: $size_48 0 0;
  }
  p {
    color: $custom_secondary;
  }

  .card-restaurant {
    width: calc((100% - 100px) / 5);
    padding: 0;
    overflow: hidden;


    &:hover img {
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
    }

    .cont-img {
      width: 100%;
      height: calc(100vw / 8);
      overflow: hidden;
      border-radius: $size_32;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .cont-text {
      background-color: $custom_primary;
      border-radius: $size_32;
      transition: all 0.6s ease-in-out; //ovunque

      &:hover {
        background-color: $custom-light;
      }
    }
  }

  a {
    text-decoration: none;
    color: $custom-white;
    font-family: "Bevan", serif;
  }
}

@media screen and (max-width: 1200px) {
  #list-restaurant {
    .card-restaurant {
      width: calc((100% - 80px) / 4);
    }
  }
}
@media screen and (max-width: 992px) {
  #list-restaurant {
    .card-restaurant {
      width: calc((100% - 60px) / 3);
    }
  }
}
@media screen and (max-width: 768px) {
  #list-restaurant {
    .card-restaurant {
      width: calc((100% - 40px) / 2);
    }
  }
}
@media screen and (max-width: 576px) {
  #list-restaurant {
    .card-restaurant {
      width: calc((100% - 20px) / 1);
    }
  }
}

.grow-in-enter-active {
  transition: transform 0.5s ease-in-out;
}
.grow-in-enter {
  transform: scale(0);
}
</style>
