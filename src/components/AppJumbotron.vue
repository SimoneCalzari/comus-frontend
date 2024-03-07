<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import AppSearch from '../components/AppJumboSearch.vue';
import store from '../store';
import axios from "axios";

// Import Swiper styles
import 'swiper/css';

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    AppSearch,
  },
  setup() {
    return {};
  },
  methods:{
    searchRestaurant(id) {
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/search/" +
            id
        )
        .then((response) => {
          this.store.restaurants = response.data.results;
          console.log(this.store.restaurants);
          if (!response.data.success) {
            this.getRestaurants();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
};

// export default {
//   name: "Jumbotron",
// };
</script>
<template>
  <section class="mb-3">
    <h2 class="container my-4 text-center ">
      Puoi scegliere tra queste categorie di ristorante:
    </h2>
    <AppSearch />
    <swiper  :loop="true" :watchSlidesProgress="true" :slidesPerView="5" class="mySwiper">
      <swiper-slide v-for="element in store.types">
        <img @click="searchRestaurant(element.id)"
          :src="`${store.api.baseUrl}/storage/${element.image}`"
          draggable="false"
        />
        <h3 class="text-center py-2">{{ element.name_type }}</h3>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';
h2 {
  color: $custom-secondary;
  font-family: "Bevan", serif;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  cursor: pointer;
  background-position: center;
  background-size: cover;
  width: calc(100% / 12 - 80px);
  height: 310px;
  margin: 10px;

  img {
    width: calc(100% / 10 - 50px);
    height: 300px;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-slide:hover {
  border: 5px solid $custom-primary;
  border-radius: 5px;
}
</style>
