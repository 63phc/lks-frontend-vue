<template lang="pug">
  .lks-card
    slot
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  
}

Vue.component('Card', Card)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
