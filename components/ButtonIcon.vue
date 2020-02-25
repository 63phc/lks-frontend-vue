<template lang="pug">
  Button.lks-btn-icon
    .lks-btn-icon-text
      slot
    .lks-btn-icon-icon
      img(:src='icon', alt='Icon not found')
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
