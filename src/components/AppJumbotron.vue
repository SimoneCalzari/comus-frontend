<script>
import store from '../store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
    };
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
    clearRestaurants() {
      // Resetto l'array
      this.store.typesSearched = [];
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
        .then((response) => {
          this.store.restaurants = response.data.results;
        });
    },
  },
};
</script>
<template>
  <section id="custom-categories" @click="clearRestaurants" class="border">
    <div class="row flex-wrap justify-content-center">
      <div
        class="card-type col-2"
        v-for="element in store.types"
        :class="store.typesSearched.includes(element.id) ? 'active' : ''"
        @click.stop="searchRestaurants(element.id)"
      >
        <img :src="`${store.api.baseUrl}/storage/${element.image}`" alt="..." />
        <h5 class="text-center">{{ element.name_type }}</h5>
      </div>
      <!-- NEW -->
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

#custom-categories {
  max-width: 70%;
  margin: 0 auto;
  padding: $size-48 0;
  color: $custom-primary;

  .row {
    padding: 0;
    gap: $size_16;

    .card-type {
      padding: 0;
      border-radius: $size_32;
      border: 4px solid $custom-secondary;
      overflow: hidden;

      img {
        object-fit: cover;
        aspect-ratio: 1/1;
        width: 100%;

        h5 {
          color: $custom-primary;
          font-family: 'Bevan', serif;
        }
      }
    }
  }
}

.active {
  -webkit-box-shadow: 1px 1px 10px 1px $custom-secondary;
  -moz-box-shadow: -1px 1px 10px 1px $custom-secondary;
  -o-box-shadow: -1px 1px 10px 1px $custom-secondary;
  box-shadow: -1px 1px 10px 1px $custom-secondary;
}
@media screen and (max-width: 1200px) {
  .card-type {
    width: calc((100% - 10vw) / 6);
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
    width: calc((100% - 4vw) / 2);
  }
}
</style>
