<script>
import axios from "axios";
import store from "../store";
import AppCart from "../components/AppCart.vue";
import AppDish from "../components/AppDish.vue";

export default {
  name: "AppRestaurantSingle",
  components: { AppDish, AppCart },
  data() {
    return {
      store,
      restaurant: "",
      modalOn: false,
      currentModal: "",
    };
  },
  methods: {
    toogleModal(id) {
      // dico che la modale che si apre è quella del piatto corrente tramite id
      this.currentModal = id;
      // faccio toogle di modalOn
      this.modalOn = !this.modalOn;
    },
    getSingleRestaurant() {
      axios
        .get(
          this.store.api.baseUrl +
            this.store.api.apiUrls.restaurants +
            "/" +
            this.$route.params.slug
        )
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          this.restaurant = response.data.results;
        });
    },
    addToCart(dish) {
      // se provo ad aggiungere un piatto da un altro ristorante ho due casi
      if (
        this.store.cart.length > 0 &&
        this.store.cart[0].restaurant_id !== dish.restaurant_id
      ) {
        // la modale di avvertimento che si svuoterà il carrello viene mostrata e la funzione si interrompe
        if (!this.modalOn) {
          this.toogleModal(dish.id);
          return;
        }
        // la modale di avvertimento + già aperta, al click sul suo svuota svuotiamo il carrello, chiudiamo la modale e proseguiamo col codice fuori da questo if
        this.store.cart = [];
        this.toogleModal(dish.id);
      }

      // caso a carrello vuoto pusho il piatto direttamente
      if (!this.store.cart.length) {
        // creo oggetto copia del piatto aggiungendo la quantita
        const dishWithQuantity = { ...dish, quantity: 1 };
        // pusho la copia piatto nel carrello store
        this.store.cart.push(dishWithQuantity);
        // metto il carrello store TUTTO nel local storage alla key 'dishes'
        localStorage.setItem("dishes", JSON.stringify(this.store.cart));
        return;
      }
      // se arrivo qua il carrello non è vuoto e devo verificare se ho già il piatto passato alla funzione nel carrello
      let isInCart = false;
      for (let i = 0; i < this.store.cart.length; i++) {
        if (dish.id === this.store.cart[i].id) {
          isInCart = true;
          break;
        }
      }
      // se il piatto non è nel carrello faccio come nel caso a carrello vuoto
      if (!isInCart) {
        // creo oggetto copia del piatto aggiungendo la quantita
        const dishWithQuantity = { ...dish, quantity: 1 };
        // pusho la copia piatto nel carrello store
        this.store.cart.push(dishWithQuantity);
        // metto il carrello store TUTTO nel local storage alla key 'dishes'
        localStorage.setItem("dishes", JSON.stringify(this.store.cart));
        return;
      }
      // se il piatto è già nel carrello store devo trovarlo e aumentare la sua quantità di uno
      for (let i = 0; i < this.store.cart.length; i++) {
        if (dish.id === this.store.cart[i].id) {
          this.store.cart[i].quantity++;
          localStorage.setItem("dishes", JSON.stringify(this.store.cart));
          return;
        }
      }
    },
  },
  created() {
    this.getSingleRestaurant();
  },
};
</script>

<template>
  <main>
    <div class="container my-5 position-relative">
      <div class="info-restaurant d-flex">
        <div class="left-img m-2" v-if="restaurant">
          <img
            :src="`${store.api.baseUrl}/storage/${restaurant.restaurant.img}`"
            alt="piatto"
          />
        </div>

        <div class="caption d-flex flex-column justify-content-between">
          <h1 v-if="restaurant">{{ restaurant.restaurant.name_restaurant }}</h1>
          <div>
            <h5 v-if="restaurant">{{ restaurant.restaurant.address }}</h5>
            <h5 v-if="restaurant">{{ restaurant.restaurant.phone_number }}</h5>
          </div>
        </div>
      </div>

      <div class="menu">
        <ul class="d-flex flex-wrap row p-0">
          <li class="col-4 my-2" v-for="dish in restaurant.dishes">
            <AppDish :dish_new="dish" @newItem="addToCart(dish)" />
            <!-- Modal -->
            <div
              class="modal bg-dark"
              style="--bs-bg-opacity: 0.8"
              :class="modalOn && currentModal === dish.id ? 'd-block' : ''"
              @click.self="toogleModal(dish.id)"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title fs-5">
                      Conferma svuotamento carrello
                    </h3>
                    <button
                      type="button"
                      class="btn-close"
                      @click="toogleModal(dish.id)"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Se aggiungi un piatto di un altro ristorante il carrello
                    verrà svuotato, vuoi procedere comunque?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="toogleModal(dish.id)"
                    >
                      Annulla
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      @click="addToCart(dish)"
                    >
                      Conferma
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal -->
          </li>
        </ul>
      </div>
       <div class="cart-position position-absolute">
      <AppCart />
    </div>
    </div>
   
    

    
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
.left-img {
  width: 40%;

  img {
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
}
.info-restaurant {
  border-radius: 10px 50px 10px 10px;
  padding: $size_16;
  background-color: $custom_light_p;
  color: $custom-secondary;
}

.menu {
  border-radius: 10px 10px 10px 50px;
  padding: $size_16;
  margin-top: $size_8;
  background-color: $custom_light_p;
}
.cart-position{
  top: 20px;
  right: -20px;
}
</style>
