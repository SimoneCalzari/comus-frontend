<script>
import store from '../store';
import axios from 'axios';

export default {
    name: 'AppConfirmOrder',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="text-center py-5">
        <h2 class="text-center">Conferma ordine</h2>
        <h6>L'ordine è andato a buon fine</h6>
        
        <router-link :to="{ name: 'home' }">
          Torna a fare acquisti
        </router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>