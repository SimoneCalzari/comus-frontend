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
  <section id="list-restaurant">
    <div class="container">
      <h1 class="text-center">I nostri ristoranti</h1>

      <div v-if="store.restaurants.length">
        <!-- restaurant number -->
        <p v-if="store.restaurants.length == 1" class="mb-4 text-center">
          è presente un ristorante
        </p>
        <p v-else class="text-center">
          Sono presenti {{ store.restaurants.length }} ristoranti
        </p>

        <!-- Restaurant Cards -->
        <div class="row">
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
        </div>
      </div>
      <h3 v-else>La ricerca non ha prodotto risultati</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#list-restaurant {
  padding: $size_48 0;
  max-width: 80%;
  margin: 0 auto;

  h1 {
    color: $custom-secondary;
    font-family: 'Bevan', serif;
    padding: $size_48 0 0;
  }

  p {
    color: $custom_secondary;
  }

  .card-restaurant {
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

      span {
        color: $custom-secondary;
      }
    }
  }

  a {
    text-decoration: none;
    color: $custom-white;
    font-family: 'Bevan', serif;
  }
}

// @media screen and (max-width: 1200px) {
//   #list-restaurant {
//     .card-restaurant {
//       width: calc((100% - 80px) / 4);
//     }
//   }
// }
// @media screen and (max-width: 992px) {
//   #list-restaurant {
//     .card-restaurant {
//       width: calc((100% - 60px) / 3);
//     }
//   }
// }
// @media screen and (max-width: 768px) {
//   #list-restaurant {
//     .card-restaurant {
//       width: calc((100% - 40px) / 2);
//     }
//   }
// }
// @media screen and (max-width: 576px) {
//   #list-restaurant {
//     .card-restaurant {
//       width: calc((100% - 20px) / 1);
//     }
//   }
// }

.grow-in-enter-active {
  transition: transform 0.5s ease-in-out;
}
.grow-in-enter {
  transform: scale(0);
}
</style>
