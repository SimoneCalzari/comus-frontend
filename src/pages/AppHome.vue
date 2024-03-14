<script>
//importazione file components
import AppPageLoader from "../components/AppPageLoader.vue";
import AppJumbotron from "../components/AppJumbotron.vue";
import AppRestaurantList from "../components/AppRestaurantsList.vue";
import AppSlogan from "../components/AppSlogan.vue";

import AppRistoratore from "../components/AppRistoratore.vue";
import AppFaq from "../components/AppFaq.vue";
import AppDownload from "../components/AppDownload.vue";

export default {
  name: "Home",
  components: {
    // AppPageLoader,
    AppJumbotron,
    AppRestaurantList,
    AppSlogan,
    AppRistoratore,
    AppFaq,
    AppDownload,
  },
  data() {
    return { loading: true };
  },
  mounted() {
  },
};
</script>

<template>
  <!-- <loading v-if="loading">
    <AppPageLoader />
  </loading> -->
  <main>
    <AppJumbotron />
    <AppRestaurantList />
    <AppSlogan />
    <AppRistoratore />
    <AppDownload />
    <AppFaq />
  </main>
</template>
