<template lang="pug">
  Card.color-card.lks-card-floating
    ul.colors
      li.lks-color-circle
        .lks-color-circle-color(style="background: red;")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Card from './Card.vue'

// TODO: FINISH THIS COMPONENT
@Component({
  components: {
    Card
  }
})
export default class ColorCard extends Vue {}

</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
