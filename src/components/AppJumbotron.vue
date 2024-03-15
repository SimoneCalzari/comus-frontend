<script>
import AppPageLoader from "./AppPageLoader.vue";
import store from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      isLoading: true,
    };
  },
  components: {
    AppPageLoader,
  },
  created() {
    this.getTypes();
    this.getRestaurants();
  },
  methods: {
    getTypes() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.types)
        .then((response) => {
          this.store.types = response.data.results;
          this.isLoading = false;
          this.store.typesSearched = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchRestaurants(id) {
      // controllo se l'id è già nel mio array
      if (store.typesSearched.includes(id)) {
        // cerco l index dell id nell'array
        const index = store.typesSearched.indexOf(id);
        // rimuovo l id dall array
        store.typesSearched.splice(index, 1);
      } else {
        // aggiungo l id all array
        store.typesSearched.push(id);
      }
      // stringa con tipi da cercare separati da virgole
      const types_search = store.typesSearched.join();
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
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants, {
          params: {
            page: this.store.currentPage,
          },
        })
        .then((response) => {
          this.store.restaurants = response.data.results.data;
          this.store.firstPage = response.data.results.from;
          this.store.lastPage = response.data.results.last_page;
          this.store.totalRestaurants = response.data.results.total;
        });
    },
  },
};
</script>
<template>
  <section id="jumbotron">
    <h2 class="text-center">
      Scegli la tua categoria ristorante e delizia il tuo palato
    </h2>

    <AppPageLoader v-if="isLoading" />

    <div v-else class="container-md d-flex flex-wrap justify-content-center">
      <div class="container text-center py-4">
        <a href="#list-restaurant" class="text-decoration-none custom-btn"
          >Vai ai ristoranti</a
        >
      </div>

      <div
        class="card-type"
        v-for="element in store.types"
        @click.stop="searchRestaurants(element.id)"
      >
        <!-- image -->

        <div
          class="card-img"
          :class="store.typesSearched.includes(element.id) ? 'active' : ''"
        >
          <img
            :src="`${store.api.baseUrl}/storage/${element.image}`"
            class="card-img-top"
            alt="..."
          />
        </div>

        <!-- info -->
        <div class="card-info">
          <h6 class="text-center">{{ element.name_type }}</h6>
        </div>
      </div>

      <!-- <div class="container text-center">
        <div v-show="store.typesSearched.length" class="text-white">
          <a href="#list-restaurant" class="text-decoration-none"

            >vai ai ristoranti</a
          >
        </div>
      </div> -->
    </div>
  </section>
  <!-- Wave -->
  <div class="wave"></div>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

#jumbotron {
  background-color: $custom-secondary;

  h2 {
    color: $custom-white;
    width: 80%;
    margin: 0 auto;
    padding: $size-24 0;
  }
  .card-type {
    width: calc((100% - 12vw) / 6);
    margin: 1vw;
    cursor: pointer;

    &:hover .card-img img {
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
      z-index: -1;
    }

    .card-img {
      aspect-ratio: 1/1;
      overflow: hidden;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;

        &:hover {
          transform: scale(1.1);
          transition: all 0.6s ease-in-out;
          z-index: -1;
        }
      }
    }
    .cont-btn {
      margin: $size_48 0;
    }
    .active {
      border: 5px solid $custom-primary;
    }
  }
  .card-info {
    h6 {
      color: $custom-white;
      background-color: $custom-primary;
      border-radius: $size_32;
      padding: $size_8 0;
      margin-top: $size_8;

      &:hover {
        background-color: $custom-light;
        transition: all 0.6s ease-in-out;
      }
    }
  }

  // Media queries
  @media screen and (max-width: 1200px) {
    .card-type {
      width: calc((100% - 10vw) / 5);
    }
  }

  @media screen and (max-width: 992px) {
    .card-type {
      width: calc((100% - 8vw) / 4);
    }
  }

  @media screen and (max-width: 768px) {
    .card-type {
      width: calc((100% - 6vw) / 3);
    }
  }

  @media screen and (max-width: 576px) {
    .card-type {
      margin: 4vw;
      width: calc((100% - 16vw) / 2);
    }
  }
}

.wave {
  background-image: url(img/wave-dark.svg);
  background-size: cover;
  height: 100px;
  transform: scale(1, -1);
}
</style>
