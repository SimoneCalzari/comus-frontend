<script>
import axios from 'axios';
import store from '../store';
import AppCart from '../components/AppCart.vue';
import AppDish from '../components/AppDish.vue';
import AppPageLoader from '../components/AppPageLoader.vue';

export default {
  name: 'AppRestaurantSingle',
  components: { AppDish, AppCart, AppPageLoader },
  data() {
    return {
      store,
      restaurant: '',
      modalOn: false,
      currentModal: '',
      isLoading: true,
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
            '/' +
            this.$route.params.slug
        )
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          this.restaurant = response.data.results;
          this.isLoading = false;
          console.log('restaurant', this.restaurant);
        });
    },
    removeToCart(dish) {
      // Trova il piatto nel carrello
      const item = this.store.cart.find((item) => item.id === dish.id);

      if (item) {
        // Diminuisci la quantità se è maggiore di 1
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          // Rimuovi il piatto dal carrello se la quantità è 1
          this.store.cart = this.store.cart.filter(
            (item) => item.id !== dish.id
          );
        }
        // Aggiorna il carrello nel local storage
        localStorage.setItem('dishes', JSON.stringify(this.store.cart));
      }
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
        localStorage.setItem('dishes', JSON.stringify(this.store.cart));
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
        localStorage.setItem('dishes', JSON.stringify(this.store.cart));
        return;
      }
      // se il piatto è già nel carrello store devo trovarlo e aumentare la sua quantità di uno
      for (let i = 0; i < this.store.cart.length; i++) {
        if (dish.id === this.store.cart[i].id) {
          this.store.cart[i].quantity++;
          localStorage.setItem('dishes', JSON.stringify(this.store.cart));
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
  <!-- jumbotron -->
  <div class="jumbotron">
    <div class="container">
      <div class="info-restaurant row">
        <div class="col-5">
          <!-- img -->
          <div class="cont-img m-2" v-if="restaurant">
            <img
              :src="`${store.api.baseUrl}/storage/${restaurant.restaurant.img}`"
              alt="piatto"
            />
          </div>
        </div>

        <div class="col-7">
          <!-- restaurant info -->
          <div class="info-restaurant">
            <h1 v-if="restaurant">
              {{ restaurant.restaurant.name_restaurant }}
            </h1>

            <h5 v-if="restaurant">
              <i class="fa-solid fa-location-dot"></i>
              {{ restaurant.restaurant.address }}
            </h5>
            <h5 v-if="restaurant">
              <i class="fa-solid fa-phone"></i>
              {{ restaurant.restaurant.phone_number }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- jumbotron -->

  <main>
    <!-- LOADER -->
    <AppPageLoader v-if="isLoading" />
    <div v-else class="row m-0">
      <!-- lista piatti -->
      <div class="col-12 col-sm-8 py-4">
        <h5 v-if="restaurant.dishes.length === 1">É presente 1 piatto</h5>
        <h5 v-else>Sono presenti: {{ restaurant.dishes.length }} piatti</h5>

        <ul class="d-flex flex-wrap row p-0">
          <li
            class="col-6 col-md-4 col-lg-3 col-xl-3 my-2"
            v-for="dish in restaurant.dishes"
          >
            <AppDish
              :dish_new="dish"
              @newItem="addToCart(dish)"
              @removeItem="removeToCart(dish)"
            />
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

      <!-- CART -->
      <div class="col-4 d-none d-sm-block p-0">
        <AppCart />
      </div>

      <!-- -------------- -->
      <div class="cart-btn d-block d-sm-none d-flex justify-content-center">
        <button
          class="custom-btn-2 px-5"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Vai al carrello
        </button>

        <div
          class="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small py-0">
            <AppCart />
          </div>
        </div>
      </div>
      <!-- -------------- -->
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.jumbotron {
  background-color: $custom-secondary;

  .cont-img {
    border-radius: 30px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .info-restaurant {
    // border-radius: 10px 50px 10px 10px;
    // padding: $size_16;
    // color: $custom-secondary;

    h1 {
      color: $custom_white;
    }

    h5 {
      color: $custom_white;
      i {
        font-size: $size_16;
      }
    }
  }
}

.menu {
  background-color: $custom_light;
}

.cart-btn {
  position: fixed;
  bottom: 20px;
  padding: 0;
}

.offcanvas-bottom {
  max-height: none;
  height: auto;
}
</style>
