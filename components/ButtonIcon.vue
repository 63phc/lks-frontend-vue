<template lang="pug">
  Button
    .inner-text
      slot
    .btn-icon
      img(:src='icon', alt='Icon not found')
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },

  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';

.btn {
  padding: 4px;
  display: inline-flex;
  justify-content: space-between;
  .btn-icon {
    box-sizing: border-box;
    background: $color-main;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 300px;
    width: 40px;
  }
  .inner-text {
    padding: 10px 20px;
  }
}
</style>
