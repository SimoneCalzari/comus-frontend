<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHome from './pages/AppHome.vue';

export default {
    name: 'App',
    components: {
    AppHeader,
    AppFooter,
    AppHome
  }
};
</script>

<template>
    <AppHeader />
    <AppHome />
    <AppFooter />

   
</template>
