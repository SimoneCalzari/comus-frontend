<script>
import AppPayment from '../components/AppPayment.vue';
import store from '../store';
import axios from 'axios';
export default {
  name: 'AppCart',
  data() {
    return {
      store,
      formData: {
        customer_name: null,
        delivery_address: null,
        email: null,
        totalPrice: null,
        phone_number: null,
      },
      isSubmitting: false,
      errorCard: null,
      isOrderConfirmed: false,
    };
  },
  methods: {
    addDataOrder() {
      this.isSubmitting = true;
      this.errorCard = null;
      if (store.paymentIsValid) {
        const data = {
          formData: this.formData,
          cart: this.store.cart,
          totalPrice: this.store.totalPrice,
        };
        // mostro loader intanto che rimando alla pagina di avvenuto pagamento
        this.isOrderConfirmed = true;
        //axios chiamata per passaggio dati
        axios
          .post(this.store.api.baseUrl + this.store.api.apiUrls.orders, data)
          .then((response) => {
            console.log(response);
            if (response.data.status) {
              this.$router.push({
                name: 'confirmOrder',
              });
              this.store.cart = [];
              localStorage.setItem('dishes', JSON.stringify(this.store.cart));
            } else {
              this.$router.push({
                name: 'NotFound',
              });
            }
            this.isOrderConfirmed = false;
            this.isSubmitting = false;
          })
          .catch((error) => {
            console.log(error);
            this.isSubmitting = false;
          });
      } else {
        this.errorCard = 'Metodo di pagamento obbligatorio';
        this.isSubmitting = false;
      }
    },
    totalItemsCart() {
      let total = 0;
      this.store.cart.forEach((item) => {
        total += item.quantity;
      });
      return total;
    },
    getRestaurant() {
      // Check if the cart has at least one item
      if (this.store.cart.length > 0) {
        const restaurantId = this.store.cart[0].restaurant_id;

        // Check if restaurantId is valid
        if (restaurantId) {
          // Find the restaurant by its ID
          const currentRestaurant = this.store.restaurants.find(
            (restaurant) => restaurant.id === restaurantId
          );

          // Check if the restaurant exists
          if (currentRestaurant) {
            return [currentRestaurant.slug, currentRestaurant.name_restaurant];
          }
        }
      }

      // Return default values or fallback
      return ['default-slug', 'Ristorante Sconosciuto'];
    },
  },
  components: {
    AppPayment,
  },
};
</script>

<template>
  <main>
    <div class="container py-4">
      <div v-if="store.cart.length" class="d-flex flex-column gap-4">
        <header class="d-flex justify-content-between align-items-center">
          <h1>Il tuo carrello</h1>
          <router-link
            class="custom-btn text-decoration-none"
            :to="{ name: 'restaurant', params: { slug: getRestaurant()[0] } }"
            >Torna da {{ getRestaurant()[1] }}</router-link
          >
        </header>
        <!-- metodo pagamento -->
        <div class="payment">
          <h4>Dati di pagamento</h4>
          <AppPayment />
        </div>
        <!-- dati di consegna -->
        <div class="ship-data">
          <h4>Dati di consegna</h4>
          <p class="mb-0 fs-5">
            I campi contrassegnati con <span class="fs-5">*</span> sono
            obbligatori
          </p>
          <form
            action=""
            method="POST"
            @submit.prevent="addDataOrder"
            id="getOrder"
          >
            <div class="mb-3">
              <label for="customer_name" class="form-label"
                >Nome Cognome <span class="fs-5">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="customer_name"
                placeholder="ex. Mario Rossi"
                v-model="formData.customer_name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="delivery_address" class="form-label"
                >Indirizzo di consegna <span class="fs-5">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="delivery_address"
                v-model="formData.delivery_address"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone_number" class="form-label fw-medium"
                >Telefono<span class="fs-5 px-1">*</span></label
              >
              <input
                id="phone_number"
                type="number"
                class="form-control"
                v-model="formData.phone_number"
                required
                min="1"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"
                >Indirizzo email <span class="fs-5">*</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="mario.rossi@esempio.com"
                v-model="formData.email"
                required
              />
            </div>
            <p v-if="errorCard" class="error">{{ errorCard }}</p>
          </form>
        </div>
        <!-- riepilogo -->
        <div class="riepilogo">
          <h4>Riepilogo</h4>
          <p>Totali piatti: {{ this.totalItemsCart() }}</p>
          <ul class="m-0">
            <li v-for="dish in this.store.cart" class="d-flex">
              <span>{{ dish.quantity }}x</span>
              <p class="mx-3">{{ dish.name }}</p>
              <p>{{ dish.price }}€</p>
            </li>
          </ul>
          <p class="text-uppercase fw-bolder">
            Prezzo Totale: {{ store.totalPrice }}€
          </p>
        </div>
        <button
          :disabled="isSubmitting"
          form="getOrder"
          class="custom-btn"
          type="submit"
        >
          Paga
        </button>
        <div class="d-flex justify-content-center" v-if="isOrderConfirmed">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div v-else class="text-center bordino">
        <h4 class="my-5">Il tuo carrello è vuoto</h4>
        <router-link
          :to="{ name: 'home' }"
          class="custom-btn text-decoration-none"
        >
          Torna a fare acquisti
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

button {
  width: 100px;
  margin: $size_16 auto $size_48;
}

.payment,
.ship-data,
.riepilogo {
  padding: $size_32 0 0;
}

.error {
  //rosso come gli errori nella carta
  color: rgb(197, 26, 26);
}

.spinner-border {
  color: $custom-primary;
  width: 4rem;
  height: 4rem;
}
.bordino {
  padding: 120px 0;
}
</style>
