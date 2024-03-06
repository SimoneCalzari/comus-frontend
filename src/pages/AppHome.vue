<script>
//importazione file components
import AppJumbotron from "../components/AppJumbotron.vue";
import AppSectionSlogan from "../components/AppSectionSlogan.vue";

export default {
  name: "Home",
  components: {
    AppJumbotron,
    AppSectionSlogan,
  },
};
</script>

<template>
  <!-- <AppJumbotron /> -->
  <AppSectionSlogan />
</template>
