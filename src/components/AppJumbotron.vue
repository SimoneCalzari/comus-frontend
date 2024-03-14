<script>
import AppPageLoader from './AppPageLoader.vue';
import store from '../store';
import axios from 'axios';

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
            '/search/' +
            types_search

        )
        .then((response) => {
          this.store.restaurants = response.data.results;
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
    // clearRestaurants() {
    //   axios
    //     .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
    //     .then((response) => {
    //       this.store.restaurants = response.data.results;
    //     });
    //   this.store.typesSearched = [];
    // },
  },
};
</script>
<template>
  <section id="jumbotron">
    <h2 class="text-light text-center  ">Seleziona uno o più categorie</h2>
    <AppPageLoader v-if="isLoading" />
    <div v-else class="container-md d-flex flex-wrap justify-content-center">

      <div class="container text-center">
        <div v-show="store.typesSearched.length" class="text-white">
          <a href="#list-restaurant" class="text-decoration-none"
            >vai ai ristoranti</a
          >
        </div>
      </div>
      <div
        class="card-type"
        v-for="element in store.types"
        @click.stop="searchRestaurants(element.id)"
      >

        <!-- image -->

        <div class="card-img" :class="store.typesSearched.includes(element.id) ? 'active' : ''">
          <img :src="`${store.api.baseUrl}/storage/${element.image}`" class="card-img-top" alt="..." />
        </div>

        <!-- info -->
        <div class="card-info">
          <h6 class="text-center">{{ element.name_type }}</h6>
        </div>
      </div>
      <div class="container text-center">
        <div v-show="store.typesSearched.length" class="text-white">
          <a href="#list-restaurant" class="text-decoration-none"
            >vai ai ristoranti</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#jumbotron {
  background-color: $custom-secondary;
  padding: $size_48 0;

  .card-type {
    width: calc((100% - 12vw) / 6);
    margin: 1vw;
    cursor: pointer;

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
          transition: transform 0.6s ease-in-out;
          z-index: -1;
        }
      }
    }

    .active {
      border: 5px solid $custom-primary;
    }

    .card-info {
      h6 {
        color: $custom-white;
        background-color: $custom-primary;
        border-radius: $size_32;
        padding: $size_8 0;
        margin-top: $size_8;
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
</style>
