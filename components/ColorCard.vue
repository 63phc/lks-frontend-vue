<template lang="pug">
  Card.color-card.lks-card-floating
    ul.colors
      li.lks-color-circle
        .lks-color-circle-color(style="background: red;")
</template>

<script lang="ts">
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
