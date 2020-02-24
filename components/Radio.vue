<template lang="pug">
  div(:class="selected ? 'lks-radio lks-radio-selected' : 'lks-radio'")
    .lks-radio-circle
</template>

<script lang="typescript">
export default {
  props: {
    selected: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
</style>
