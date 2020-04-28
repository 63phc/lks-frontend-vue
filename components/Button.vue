<template lang="pug">
  button.lks-btn
    slot
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Button extends Vue {}
Vue.component('Button', Button)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw';
</style>
