<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AppSearch from "../components/AppJumboSearch.vue";
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
    AppSearch,
  },
  setup() {
    return {};
  },
  created() {
    this.checkWidth();
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
    searchRestaurant(id) {
      store.currentType = id;
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/search/" +
            id
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
  },
  getRestaurants() {
    axios
      .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
      .then((response) => {
        this.store.restaurants = response.data.results;
      });
  },
};
</script>
<template>
  <section class="mb-3">
    <h2 class="container my-4 text-center">
      Puoi scegliere tra queste categorie di ristorante:
    </h2>
    <AppSearch />
    <swiper
      :watchSlidesProgress="true"
      :loop="true"
      :slidesPerView="slidesNumberPerView"
    >
      <swiper-slide
        @click="searchRestaurant(0)"
        :class="store.currentType === 0 ? 'active' : ''"
      >
        <img
          src="/public/img/logo/big-orange-white.svg"
          draggable="false"
          :class="store"
          id="prima-slide"
        />
        <h3 class="text-center py-3 m-0">Tutte</h3>
      </swiper-slide>
      <swiper-slide
        v-for="element in store.types"
        :class="store.currentType === element.id ? 'active' : ''"
        @click="searchRestaurant(element.id)"
      >
        <img
          :src="`${store.api.baseUrl}/storage/${element.image}`"
          draggable="false"
        />
        <h3 class="text-center py-3 m-0">{{ element.name_type }}</h3>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
h2 {
  color: $custom-secondary;
  font-family: "Bevan", serif;
}
.swiper {
  width: 100%;
  padding: 50px 0;
  .swiper-slide {
    margin: 0 10px;
    width: calc((100% - 120px) / 6) !important;
    border: 3px solid $custom-primary;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      aspect-ratio: 1/1;
      display: block;
    }
  }
}

#prima-slide {
  background-color: #432456;
}
.active {
  -webkit-box-shadow: -1px 1px 60px 1px $custom-primary;
  -moz-box-shadow: -1px 1px 60px 1px $custom-primary;
  -o-box-shadow: -1px 1px 60px 1px $custom-primary;
  box-shadow: -1px 1px 60px 1px $custom-primary;
}

@media screen and (max-width: 1200px) {
  .swiper {
    .swiper-slide {
      width: calc((100% - 100px) / 5) !important;
    }
  }
}
@media screen and (max-width: 992px) {
  .swiper {
    .swiper-slide {
      width: calc((100% - 80px) / 4) !important;
    }
  }
}
@media screen and (max-width: 768px) {
  .swiper {
    .swiper-slide {
      width: calc((100% - 60px) / 3) !important;
    }
  }
}
@media screen and (max-width: 576px) {
  .swiper {
    .swiper-slide {
      width: calc((100% - 40px) / 2) !important;
    }
  }
}
</style>
