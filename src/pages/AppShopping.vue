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
      }
    };
  },
  methods: {
    addDataOrder() {
      console.log('ho cliccato');
      console.log(this.formData.customer_name);
      console.log(this.formData.delivery_address);
      console.log(this.formData.email);
      const data = {
        formData: this.formData,
        cart: this.store.cart,
        totalPrice: this.store.totalPrice,
      }
      console.log(data.totalPrice);

      //axios chiamata per passaggio dati
      axios
        .post(this.store.api.baseUrl + this.store.api.apiUrls.orders, data)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error);
        })
    }
  },
  components: {
    AppPayment,
  },
};
</script>

<template>
  <main>
    <h3>Inserisci dati ordine</h3>
    <form action="" method="POST" @submit.prevent="addDataOrder">
      <div class="mb-3">
        <label for="customer_name" class="form-label">Nome Cognome</label>
        <input type="text" class="form-control" id="customer_name" placeholder="ex. Mario Rossi"
          v-model="formData.customer_name">
      </div>
      <div class="mb-3">
        <label for="delivery_address" class="form-label">Indirizzo di consegna</label>
        <input type="text" class="form-control" id="delivery_address" v-model="formData.delivery_address">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="formData.email">
      </div>
      Lista Piatti
      <ul>
        <li v-for="dish in this.store.cart">
          {{ dish.name }}
        </li>
      </ul>
      <h4>Prezzo Finale: {{ this.store.totalPrice }} €</h4>
      <button class="btn btn-primary" type="submit">Invia</button>
    </form>
    <div>

    </div>
    <AppPayment />
  </main>
</template>

<style scoped lang="scss"></style>
