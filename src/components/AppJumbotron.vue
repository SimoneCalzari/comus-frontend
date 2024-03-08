<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import store from "../store";
import axios from "axios";

// Import Swiper styles
import "swiper/css";

export default {
  data() {
    return {
      store,
      slidesNumberPerView: 6,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
  created() {
    this.checkWidth();
    this.getTypes();
    this.getRestaurants();
  },
  methods: {
    checkWidth() {
      setInterval(() => {
        const viewWidth = window.innerWidth;
        if (viewWidth > 1200) {
          this.slidesNumberPerView = 6;
          return;
        }
        if (viewWidth > 992) {
          this.slidesNumberPerView = 5;
          return;
        }
        if (viewWidth > 768) {
          this.slidesNumberPerView = 4;
          return;
        }
        if (viewWidth > 576) {
          this.slidesNumberPerView = 3;
          return;
        }
        this.slidesNumberPerView = 2;
      }, 1000);
    },
    getTypes() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.types)
        .then((response) => {
          this.store.types = response.data.results;
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchRestaurant(id) {
      // controllo se l'id è già nel mio array
      if (store.typesearch.includes(id)) {
        // cerco l index dell id nell'array
        const index = store.typesearch.indexOf(id);
        store.typesearch.splice(index, 1);
      } else {
        store.typesearch.push(id);
      }
      // stringa con tipi da cercare separati da virgole
      const types_search = store.typesearch.join();
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
    <h2 class="my-4 text-center">
      Puoi scegliere tra queste categorie di ristorante:
    </h2>
    <div class="container d-flex flex-wrap row-cols-4">
      <div
        @click="searchRestaurant(element.id)"
        v-for="element in store.types"
        class="card"
      >
        <img
          :src="`${store.api.baseUrl}/storage/${element.image}`"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ element.name_type }}</h5>
        </div>
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

.card {
  cursor: pointer;
}
</style>

<!-- <swiper 
  :watchSlidesProgress="true"
  :slidesPerView="slidesNumberPerView"
  draggable="false"
>
  <swiper-slide
    v-for="element in store.types"
    :class="store.currentType === element.id ? 'active' : ''"
    @click="searchRestaurant(element.id)"
  >
    <img :src="`${store.api.baseUrl}/storage/${element.image}`" />
    <h3 class="text-center py-3 m-0">{{ element.name_type }}</h3>
  </swiper-slide>
</swiper> -->
