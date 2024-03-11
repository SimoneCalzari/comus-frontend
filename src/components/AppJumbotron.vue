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
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
        .then((response) => {
          this.store.restaurants = response.data.results;
        });
      this.store.typesSearched = [];
    },
  },
};
</script>
<template>
  <section class="mb-3" @click="clearRestaurants">
    <div class="d-flex flex-wrap justify-content-center">
      <div
        class="card-type"
        v-for="element in store.types"
        :class="store.typesSearched.includes(element.id) ? 'active' : ''"
        @click.stop="searchRestaurants(element.id)"
      >
        <!-- image -->
        <div class="card-img">
          <img
            :src="`${store.api.baseUrl}/storage/${element.image}`"
            class="card-img-top"
            alt="..."
          />
        </div>
        <!-- info -->
        <div class="card-info">
          <h5 class="text-center py-3 fs-4 mb-0">{{ element.name_type }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

h2 {
  color: $custom-secondary;
  font-family: 'Bevan', serif;
}

.card-type {
  width: calc((100% - 12vw) / 6);
  border-radius: 30px;
  margin: 1vw;
  cursor: pointer;
  border: 3px solid $custom-secondary;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  .card-img {
    width: 100%;
    height: calc(100vw / 8);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .card-info {
    h5 {
      color: $custom-primary;
      font-family: 'Bevan', serif;
    }
  }
}

.active {
  border: 3px solid $custom-primary;
}

// Media queries
@media screen and (max-width: 1200px) {
  .card-type {
    width: calc((100% - 10vw) / 5);

    .card-img {
      height: calc(100vw / 5);
    }
  }
}
@media screen and (max-width: 992px) {
  .card-type {
    width: calc((100% - 8vw) / 4);

    .card-img {
      height: calc(100vw / 4);
    }
  }
}
@media screen and (max-width: 768px) {
  .card-type {
    width: calc((100% - 6vw) / 3);

    .card-img {
      height: calc(100vw / 3);
    }
  }
}
@media screen and (max-width: 576px) {
  .card-type {
    width: calc((100% - 4vw) / 2);

    .card-img {
      height: calc(100vw / 2);
    }
  }
}
</style>
