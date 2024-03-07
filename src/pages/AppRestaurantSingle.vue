<script>
import axios from 'axios';
import store from '../store';

 export default{
  name: 'AppRestaurantSingle',
  data(){
    return {
      store,
      restaurant:{}
    };
  },
  methods: {
    getSingleRestaurant() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants + '/' + this.$route.params.slug).catch((error)=>{console.log(error)})
        .then((response) => {
          this.restaurant = response.data.results;
          console.log(response.data.results);
        });
    },
  },
  created(){
   this.getSingleRestaurant();
  }
 }
</script>
<template>
  <h2>{{ restaurant.restaurant.name_restaurant  }}</h2>
<ul>
  <li v-for="dish in restaurant.dishes">{{ dish.name }}</li>
</ul>
</template>
<style scoped lang="scss">
</style>