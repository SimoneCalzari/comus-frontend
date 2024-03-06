<script>
import AppHeader from './components/AppHeader.vue';
import AppHome from './pages/AppHome.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome,
    AppFooter,
  },
};
</script>

<template>
  <!--header-->
  <AppHeader />
  <!--/header-->
  <!--router-view-->
  <router-view></router-view>
  <!--/router-view-->
  <!--footer-->
  <AppFooter />
  <!--footer-->
</template>

<style></style>
./components/AppFooter.vue
