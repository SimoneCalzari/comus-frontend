<script>
export default {
  name: 'Wave',
  data() {},
  methods: {},
};
</script>

<template>
  <div class="wave reverse"></div>
</template>

<style scoped lang="scss">
@import '../assets/scss/partials/variables.scss';

.wave {
  background-image: url(img/wave.png);
  background-size: cover;
  height: 100px;
  transform: scale(1, -1);
}

.reverse {
  translate: rotateX(0.5) turn;
}
</style>
