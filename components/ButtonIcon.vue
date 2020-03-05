<template lang="pug">
  Button.lks-btn-icon
    .lks-btn-icon-text
      slot
    .lks-btn-icon-icon
      img(:src='icon', alt='Icon not found')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Button from './Button.vue'
@Component({
  components: {
    Button
  }
})
export default class ButtonIcon extends Vue {
  @Prop()
  icon!: string
}

Vue.component('ButtonIcon', ButtonIcon)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
