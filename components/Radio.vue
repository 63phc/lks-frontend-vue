<template lang="pug">
  div(:class="selected ? 'lks-radio lks-radio-selected' : 'lks-radio'")
    .lks-radio-circle
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Radio extends Vue {
  @Prop()
  selected: Boolean = false
}

Vue.component('Radio', Radio)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
