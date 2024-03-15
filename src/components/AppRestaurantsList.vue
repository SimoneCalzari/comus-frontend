<script>
import { RouterLink } from "vue-router";
import store from "../store";
import axios from "axios";
export default {
  name: "AppListRestaurants",
  data() {
    return {
      store,
    };
  },
  methods: {
    getPage(new_page) {
      this.store.currentPage = new_page;
      let types_search = " ";
      if (store.typesSearched.length > 0) {
        types_search = store.typesSearched.join();
      }
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/search/" +
            types_search,
          {
            params: {
              page: this.store.currentPage,
            },
          }
        )
        .then((response) => {
          this.store.restaurants = response.data.results.data;
          this.store.firstPage = response.data.results.from;
          this.store.lastPage = response.data.results.last_page;
          this.store.totalRestaurants = response.data.results.total;
        });
    },
    previousPage() {
      if (this.store.currentPage !== this.store.firstPage) {
        this.store.currentPage--;
        let types_search = " ";
        if (store.typesSearched.length > 0) {
          types_search = store.typesSearched.join();
        }
        axios
          .get(
            this.store.api.baseUrl +
              this.store.api.apiUrls.restaurants +
              "/search/" +
              types_search,
            {
              params: {
                page: this.store.currentPage,
              },
            }
          )
          .then((response) => {
            this.store.restaurants = response.data.results.data;
            this.store.firstPage = response.data.results.from;
            this.store.lastPage = response.data.results.last_page;
            this.store.totalRestaurants = response.data.results.total;
          });
      }
    },
    nextPage() {
      if (this.store.currentPage !== this.store.lastPage) {
        this.store.currentPage++;
        let types_search = " ";
        if (store.typesSearched.length > 0) {
          types_search = store.typesSearched.join();
        }
        axios
          .get(
            this.store.api.baseUrl +
              this.store.api.apiUrls.restaurants +
              "/search/" +
              types_search,
            {
              params: {
                page: this.store.currentPage,
              },
            }
          )
          .then((response) => {
            this.store.restaurants = response.data.results.data;
            this.store.firstPage = response.data.results.from;
            this.store.lastPage = response.data.results.last_page;
            this.store.totalRestaurants = response.data.results.total;
          });
      }
    },
  },
};
</script>
<template>
  <section id="list-restaurant">
    <div class="container mb-4">
      <h1 class="text-center">I nostri ristoranti</h1>

      <div v-if="store.restaurants.length">
        <!-- restaurant number -->
        <p v-if="store.restaurants.length == 1" class="mb-4 text-center">
          Scegli il nostro ristorante per il tuo gusto preferito.
        </p>
        <p v-else class="text-center">
          La tua ricerca per categoria ti offre la scelta tra
          {{ store.totalRestaurants }} dei nostri migliori ristoranti
        </p>
        <!-- navbar -->
        <nav class="d-flex justify-content-center my-4">
          <ul class="pagination">
            <li class="page-item" @click="previousPage">
              <div class="page-link"><<</div>
            </li>
            <li
              class="page-item"
              v-for="n in store.lastPage"
              @click="getPage(n)"
            >
              <div
                class="page-link"
                :class="store.currentPage === n ? 'active-page' : ''"
              >
                {{ n }}
              </div>
            </li>
            <li class="page-item" @click="nextPage">
              <div class="page-link">>></div>
            </li>
          </ul>
        </nav>
        <!-- Restaurant Cards -->
        <div class="row justify-content-center">
          <router-link
            :to="{ name: 'restaurant', params: { slug: restaurant.slug } }"
            class="col-6 col-sm-4 col-lg-3 col-xl-3 g-3"
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
                    <span
                      class="font-secondary"
                      :class="
                        store.typesSearched.includes(category.id)
                          ? 'active'
                          : ''
                      "
                    >
                      {{ category.name_type }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <p class="text-center" v-else>
        La tua ricerca nelle nostre categorie non ha prodotto risultati
      </p>
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
    padding: 0;
    overflow: hidden;
    height: 100%;
    border-radius: $size_32;
    border: 1px solid $custom-primary;

    &:hover img {
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
    }

    .cont-img {
      width: 100%;
      overflow: hidden;
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
      transition: all 0.6s ease-in-out; //ovunque
      flex-grow: 1;

      h6 {
        color: $custom-white;
        font-family: "Bevan", serif;
        background-color: $custom-primary;
        padding: $size_8 0;
      }

      .active {
        color: $custom-primary;
        font-weight: bold;
      }
    }
  }

  a {
    text-decoration: none;
    color: $custom-white;
    font-family: "Bevan", serif;
  }
}

.active-page {
  color: $custom-white;
  background-color: $custom-primary;
}

.pagination li {
  cursor: pointer;

  .page-link {
    color: $custom-secondary;
  }
}

.grow-in-enter-active {
  transition: transform 0.5s ease-in-out;
}

.grow-in-enter {
  transform: scale(0);
}
</style>
