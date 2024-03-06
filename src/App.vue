<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHome from './pages/AppHome.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppHome,
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