<script>
import store from "../store";
import axios from "axios";

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
            "/search/" +
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
  },
};
</script>
<template>
  <section class="mb-3">
    <h2 class="my-4 px-1 text-center">
      Puoi scegliere tra queste categorie di ristorante:
    </h2>
    <div class="d-flex flex-wrap justify-content-center">
      <div
        class="card-type"
        v-for="element in store.types"
        :class="store.typesSearched.includes(element.id) ? 'active' : ''"
        @click="searchRestaurants(element.id)"
      >
        <img
          :src="`${store.api.baseUrl}/storage/${element.image}`"
          class="card-img-top"
          alt="..."
        />
        <h5 class="text-center py-3 fs-4 mb-0">{{ element.name_type }}</h5>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

h2 {
  color: $custom-secondary;
  font-family: "Bevan", serif;
}

.card-type {
  margin: 1vw;
  width: calc((100% - 12vw) / 6);
  cursor: pointer;
  border: 3px solid $custom-primary;
  border-radius: 10px;
  overflow: hidden;
  img {
    aspect-ratio: 1/1;
    width: 100%;
    display: block;
  }
}
.active {
  -webkit-box-shadow: -1px 1px 60px 1px $custom-secondary;
  -moz-box-shadow: -1px 1px 60px 1px $custom-secondary;
  -o-box-shadow: -1px 1px 60px 1px $custom-secondary;
  box-shadow: -1px 1px 60px 1px $custom-secondary;
}
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
    width: calc((100% - 4vw) / 2);
  }
}
</style>
