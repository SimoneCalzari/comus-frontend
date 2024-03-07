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

  <div class="container">
    <div class="custom-info-restaurant">
      <h1>{{ restaurant.restaurant.name_restaurant }}</h1>
      <h5>{{ restaurant.restaurant.address }}</h5>
      <h5>{{ restaurant.restaurant.phone_number }}</h5>
      
    </div>
    
    <div class="menu">
      <!-- <form action="">
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Example label</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
        </div>
        <button type="submit">cerca</button>
      </form> -->
      <ul>
        <li v-for="dish in restaurant.dishes">{{ dish.name }}</li>
      </ul>
    </div>
  </div>

  
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

main {
  .custom-image {
    background-image: url('/public/img/hamburger.jpg');
    background-size: cover;
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    top: 0;
    height: 400px;
  }

  .custom-bg-white {
    height: calc(100% - 400px);
    
  }

  .info-restaurant {
    border: 2px solid $custom-secondary;
    border-radius: 10px 50px 10px 10px;
    padding: $size_16;
  }

  .menu {
    border: 2px solid $custom-secondary;
    border-radius: 10px 10px 10px 50px;
    padding: $size_16;
    margin-top: $size_8;
  }
}


</style>