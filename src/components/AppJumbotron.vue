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
    clearRestaurants() {
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.restaurants)
        .then((response) => {
          this.store.restaurants = response.data.results;
        });
      this.store.typesSearched = [];
    },
    activeBorder(){
      document.getElementById("border-circle")
      element.classList.add("active-border");
    }
  },
};
</script>
<template>
  <section id="jumbotron" @click="clearRestaurants">
    <div class="container-md d-flex flex-wrap justify-content-center">
      <div
        class="card-type"
        v-for="element in store.types"
        @click.stop="searchRestaurants(element.id)"
      >
        <!-- image -->
        <div id="border-circle" @click="activeBorder()">
          <div class="card-img">
          <img
            :src="`${store.api.baseUrl}/storage/${element.image}`"
            class="card-img-top"

            alt="..."
          />
        </div>

        </div>
        
        <!-- info -->
        <div class="card-info">
          <h6 class="text-center">{{ element.name_type }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";

#jumbotron {
  background-color: $custom-secondary;
  padding: $size_48 0;

  .card-type {
    width: calc((100% - 12vw) / 6);
    // border-radius: 30px;
    margin: 1vw;
    cursor: pointer;

    .card-img {
      width: 100%;
      height: calc(100vw / 12);
      overflow: hidden;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    // .card-img:active{
    //   border: $size_8 solid $custom-primary;
    //   border-radius: 50%;
    //   z-index: 99;
    // }
    #border-circle{
      border: $size_8 solid $custom-secondary;
      border-radius: 50%;
      // &:active{border: $size_8 solid $custom-primary;}
    }
    .active-border{
      border: $size_8 solid $custom-primary;
    }      

    &:hover img {
      transform: scale(1.1);
      transition: transform 0.6s ease-in-out;
      z-index: -1;
    }

    .card-info {
      h6 {
      color: $custom-white;
      font-family: "Bevan", serif;
      background-color: $custom-primary;
      border-radius: $size_32;
      padding: $size_8 0;
      margin-top: $size_8;
    }
  }  
}

// //active solo sull'immagine da valutare in base alla shape di Alby
// .active {
//   border:$size_8 solid $custom-primary;
//   border-radius: 50%;
// }


// Media queries
@media screen and (max-width: 1200px) {
  .card-type {
    width: calc((100% - 10vw) / 5);

    .card-img {
      height: calc(100vw / 6);
    }
  }
}
@media screen and (max-width: 992px) {
  .card-type {
    width: calc((100% - 8vw) / 4);

    .card-img {
      height: calc(100vw / 6);
    }
  }
}
@media screen and (max-width: 768px) {
  .card-type {
    width: calc((100% - 6vw) / 3);

    .card-img {
      height: calc(100vw / 3);
    }
  }
}
@media screen and (max-width: 576px) {
  .card-type {
    width: calc((100% - 4vw) / 4);

    .card-img {
      height: calc(100vw / 4);
    }
  }
}
}

</style>
