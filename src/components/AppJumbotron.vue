<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import AppSearch from "../components/AppJumboSearch.vue";
  

  // Import Swiper styles
  import 'swiper/css';

  
  export default {
    components: {
      Swiper,
      SwiperSlide,
      AppSearch
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
  <h2 class="container mt-5 mb-3">Puoi scegliere tra queste categorie di ristorante:</h2>
  <AppSearch />
  <swiper :watchSlidesProgress="true" :slidesPerView="5" class="mySwiper">
    <swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/fast-food.jpg" draggable="false" /></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/italian.jpg" draggable="false" /></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/sushi.jpg"  draggable="false"/></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/mexican.jpg"  draggable="false"/></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/pizza.jpg"  draggable="false"/></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/veggie.jpg" draggable="false" /></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/chinese.jpg" draggable="false" /></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/icecream.jpg"  draggable="false"/></a></swiper-slide
    ><swiper-slide
      ><a href="#"><img src="../../public/img/categories_img/coffee.jpg" draggable="false"
    /></a></swiper-slide>
  </swiper>
</template>
<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';
h2{
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
  width: 200px;
  height: 270px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-slide:hover{
  border: 5px solid $custom-primary;
  border-radius: 5px;
}
</style>
