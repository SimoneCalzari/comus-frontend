<script>
import AppPayment from '../components/AppPayment.vue';

export default {
  name: 'AppCart',
  data() {
    return {};
  },

  components: {
    AppPayment,
  },
};
</script>

<template>
  Carrello
  <AppPayment />
</template>

<style scoped lang="scss">
@use '../assets/scss/general.scss' as *;
</style>
