<script>
import AppPayment from "../components/AppPayment.vue";
import store from "../store";
import axios from "axios";
export default {
  name: "AppCart",
  data() {
    return {
      store,
      formData: {
        customer_name: null,
        delivery_address: null,
        email: null,
        totalPrice: null,
      },
    };
  },
  methods: {
    addDataOrder() {
      if (store.paymentIsValid) {
        const data = {
          formData: this.formData,
          cart: this.store.cart,
          totalPrice: this.store.totalPrice,
        };

        //axios chiamata per passaggio dati
        axios
          .post(this.store.api.baseUrl + this.store.api.apiUrls.orders, data)
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
      } else {
        const errorCard = "Metodo di pagamento obbligatorio";
        return errorCard;
      }
    },
  },
  components: {
    AppPayment,
  },
};
</script>

<template>
  <main>
    <div class="container border pt-3 pb-5">
      <div v-if="store.cart.length" class="d-flex flex-column gap-4">
        <h1>Il tuo carrello</h1>
        <!-- riepilogo -->
        <div class="riepilogo border border-primary">
          <h4>Riepilogo</h4>
          <ul class="border">
            <li v-for="dish in this.store.cart" class="d-flex">
              <span>{{ dish.quantity }}x</span>
              <p class="mx-3">{{ dish.name }}</p>
              <p>{{ dish.price }}€</p>
            </li>
          </ul>
          <strong>Totale: {{ store.totalPrice }}€</strong>
        </div>
        <!-- dati di consegna -->
        <div class="ship-data border border-warning">
          <h4>Dati di consegna</h4>
          <p class="mb-0 fs-5">
            I campi contrassegnati con <span class="fs-5">*</span> sono
            obbligatori
          </p>
          <form action="" method="POST" @submit.prevent="addDataOrder">
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
            <p>{{ addDataOrder() }}</p>
            <button class="btn btn-primary" type="submit">Invia</button>
          </form>
        </div>

        <div class="payment border border-danger">
          <h4>Dati di pagamento</h4>
          <AppPayment />
        </div>
      </div>
      <div v-else class="text-center py-5">
        <h4>Il tuo carrello è vuoto</h4>
        <router-link :to="{ name: 'home' }">
          Torna a fare acquisti
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>
