<script>
import store from '../store';
export default {
  name: "AppCart",
  data(){
    return{
      store,  
    };
  },
}

</script>

<template>
    
    <div class="container">
        <div v-for="dish in this.store.cart" class="cart-item">
        {{ dish.name }}
        </div>
    </div>
    

</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";


</style>
