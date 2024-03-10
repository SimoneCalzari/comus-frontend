<script>
export default {};
</script>

<template>
  <main>
    <div class="container">
      <h1 class="py-2">La pagina cercata non esiste</h1>
      <router-link :to="{ name: 'home' }" class="btn btn-primary mb-3">
        Torna alla Home
      </router-link>
    </div>
  </main>
</template>
