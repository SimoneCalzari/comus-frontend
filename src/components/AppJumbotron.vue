<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import AppSearch from "../components/AppJumboSearch.vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    AppSearch,
  },
  setup() {
    return {};
  },
};

// export default {
//   name: "Jumbotron",
// };
</script>
<template>
  <section class="mb-5 pb-5">
    <h2 class="container mt-5 mb-3">
      Puoi scegliere tra queste categorie di ristorante:
    </h2>
    <!-- <AppSearch /> -->
    <swiper :watchSlidesProgress="true" :slidesPerView="5" class="mySwiper">
      <swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/italiano.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/sushi.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/messicano.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/pizza.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/pesce.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/cinese.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/gluten-free.jpg"
            draggable="false" /></a></swiper-slide
      ><swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/kebab.jpg"
            draggable="false" /></a
      ></swiper-slide>
      <swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/steakhouse.jpg"
            draggable="false" /></a
      ></swiper-slide>
      <swiper-slide
        ><a href="#"
          ><img
            src="../../public/img/categories_img/fast-food.jpg"
            draggable="false" /></a
      ></swiper-slide>
    </swiper>
  </section>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
h2 {
  color: $custom-secondary;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: calc(100% / 12 - 80px);
  height: 310px;
  margin: 10px;
  img{
    
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
