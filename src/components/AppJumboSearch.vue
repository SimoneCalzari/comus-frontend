<script>
export default {
  name: "AppSearch",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="container mt-5 text-left">
    <input
      class="p-2"
      list="types"
      name="type"
      id="type"
      placeholder="Scegli una categoria..."
    />
    <datalist id="types">
      <option value="fast-food"></option>
      <option value="italian"></option>
      <option value="sushi"></option>
      <option value="mexican"></option>
      <option value="pizza"></option>
      <option value="veggie"></option>
      <option value="chinese"></option>
      <option value="icecream"></option>
      <option value="coffee"></option>
      <option value="hamburger"></option>
    </datalist>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/scss/partials/variables.scss";
input {
  width: 25%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid $custom-primary;
}
</style>
