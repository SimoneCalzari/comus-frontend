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
      errorCard: null,
    };
  },
  methods: {
    addDataOrder() {
      this.errorCard = null;
      if (store.paymentIsValid) {
        const data = {
          formData: this.formData,
          cart: this.store.cart,
          totalPrice: this.store.totalPrice,
        };

        //axios chiamata per passaggio dati
        axios
          .post(this.store.api.baseUrl + this.store.api.apiUrls.orders, data)
          .then((response) => {
            console.log(response)
            if (response.data.status) {
              this.$router.push({
                name: "confirmOrder",
              })
              this.store.cart = [];
              localStorage.setItem("dishes", JSON.stringify(this.store.cart));
            } else {
              this.$router.push({
                name: "NotFound"
              })
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.errorCard = "Metodo di pagamento obbligatorio";
      }
    },
    totalItemsCart() {
      let total = 0;
      this.store.cart.forEach((item) => {
        total += item.quantity;
      });
      return total;
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
        <h1>Il tuo carrello</h1>
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
          <form action="" method="POST" @submit.prevent="addDataOrder" id="getOrder">
            <div class="mb-3">
              <label for="customer_name" class="form-label">Nome Cognome <span class="fs-5">*</span></label>
              <input type="text" class="form-control" id="customer_name" placeholder="ex. Mario Rossi"
                v-model="formData.customer_name" required />
            </div>
            <div class="mb-3">
              <label for="delivery_address" class="form-label">Indirizzo di consegna <span class="fs-5">*</span></label>
              <input type="text" class="form-control" id="delivery_address" v-model="formData.delivery_address"
                required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Indirizzo email <span class="fs-5">*</span></label>
              <input type="email" class="form-control" id="email" placeholder="mario.rossi@esempio.com"
                v-model="formData.email" required />
            </div>
            <p v-if="errorCard" class="error">{{ errorCard }}</p>
          </form>
        </div>
        <!-- riepilogo -->
        <div class="riepilogo">
          <h4>Riepilogo</h4>
          <p>Totali piatti: {{ this.totalItemsCart() }}</p>
          <ul>
            <li v-for="dish in this.store.cart" class="d-flex">
              <span>{{ dish.quantity }}x</span>
              <p class="mx-3">{{ dish.name }}</p>
              <p>{{ dish.price }}€</p>
            </li>
          </ul>
          <p class="text-uppercase fw-bolder ">Prezzo Totale: {{ store.totalPrice }}€</p>
        </div>
        <button form="getOrder" class="btn btn-primary" type="submit">Invia</button>
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

<style scoped lang="scss">
button {
  width: 100px;
  margin: 0 auto;
}

.error {
  color: red;
}
</style>
