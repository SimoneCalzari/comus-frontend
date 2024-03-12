<script>
import { RouterLink } from 'vue-router';
import store from '../store';
export default {
  name: 'AppListRestaurants',
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <section id="custom-restaurants">
    <h2 class="text-center fs-1">I nostri ristoranti</h2>
    <div v-if="store.restaurants.length">
      <div class="row flex-row gap-4 justify-content-center">
        <h3 v-if="store.restaurants.length === 1" class="mb-4 text-center">
          è presente un ristorante
        </h3>
        <h3 v-else class="mb-4 text-center">
          Sono presenti {{ store.restaurants.length }} ristoranti
        </h3>

        <div
          class="card-restaurant col-lg-2 col-md-4 col-12"
          v-for="restaurant in store.restaurants"
        >
          <router-link
            :to="{ name: 'restaurant', params: { slug: restaurant.slug } }"
            class="d-flex flex-column"
          >
            <div class="cont-img">
              <img
                :src="`${store.api.baseUrl}/storage/${restaurant.img}`"
                alt="immagine ristorante"
              />
            </div>
            <div class="flex-grow-1 d-flex flex-column justify-content-center">
              <h5 class="text-center py-3 fs-4 mb-0">
                {{ restaurant.name_restaurant }}
              </h5>
              <span v-for="category in restaurant.types" class="text-center">{{
                category.name_type
              }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <h3 v-else>La ricerca non ha prodotto risultati</h3>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#custom-restaurants {
  padding: $size_48 0;
  max-width: 80%;
  margin: 0 auto;

  h2 {
    color: $custom-secondary;
    font-family: 'Bevan', serif;
    // padding: $size_48;
  }
  .card-restaurant {
    border: 3px solid $custom-secondary;
    border-radius: $size_32;
    // width: calc((100% - 100px) / 5);
    padding: 0;
    overflow: hidden;
    &:hover {
      border: 3px solid $custom-primary;
    }

    &:hover img {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }

    .cont-img {
      width: 100%;
      height: calc(100vw / 8);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    // .caption {
    //   padding-bottom: $size_16;
    // }
  }

  a {
    text-decoration: none;
    color: $custom-secondary;
  }
}
// @media screen and (max-width: 1200px) {
//   #custom-restaurants {
//     .card-restaurant {
//       width: calc((100% - 80px) / 4);
//     }
//   }
// }
// @media screen and (max-width: 992px) {
//   #custom-restaurants {
//     .card-restaurant {
//       width: calc((100% - 60px) / 3);
//     }
//   }
// }
// @media screen and (max-width: 768px) {
//   #custom-restaurants {
//     .card-restaurant {
//       width: calc((100% - 40px) / 2);
//     }
//   }
// }
// @media screen and (max-width: 576px) {
//   #custom-restaurants {
//     .card-restaurant {
//       width: calc((100% - 20px) / 1);
//     }
//   }
</style>
