<script>
//importazione file components
import AppPageLoader from '../components/AppPageLoader.vue';
import AppJumbotron from '../components/AppJumbotron.vue';
import AppRestaurantList from '../components/AppRestaurantsList.vue';
import AppSectionSlogan from '../components/AppSectionSlogan.vue';

import AppRistoratore from '../components/AppRistoratore.vue';
import AppFaq from '../components/AppFaq.vue';
import AppDownload from '../components/AppDownload.vue';

export default {
  name: 'Home',
  components: {
    // AppPageLoader,
    AppJumbotron,
    AppRestaurantList,
    AppSectionSlogan,
    AppRistoratore,
    AppFaq,
    AppDownload,
  },
  data() {
    return { loading: true };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Imposto il tempo di caricamento a 3 secondi
  },
};
</script>

<template>


  <main>
    <AppJumbotron />
    <AppRestaurantList />
    <AppSectionSlogan />
    <AppRistoratore />
    <AppDownload />
    <AppFaq />
  </main>
  
  </template>


