<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };

// export default {
//   name: "Jumbotron",
// };

</script>
<template>
  <h2 class="container mt-5">Puoi scegliere tra queste categorie di ristorante:</h2>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper container"
  >
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
  width: 400px;
  height: 400px;
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
