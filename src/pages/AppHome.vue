<script>
//importazione file components

import AppJumbotron from "../components/AppJumbotron.vue";
import AppRestaurantList from "../components/AppRestaurantsList.vue";
import AppSectionSlogan from "../components/AppSectionSlogan.vue";

import AppRistoratore from "../components/AppRistoratore.vue";
import AppFaq from "../components/AppFaq.vue";
import AppDownload from "../components/AppDownload.vue";

export default {
  name: "Home",
  components: {
    AppJumbotron,
    AppRestaurantList,
    AppSectionSlogan,
    AppRistoratore,
    AppFaq,
    AppDownload,
  },
};
</script>

<template>
  <AppJumbotron />
  <AppRestaurantList />
  <AppSectionSlogan />
  <AppRistoratore />
  <AppDownload />
  <AppFaq />
</template>
