<template lang="pug">
  Card.lks-card-floating.notif(v-show="visible")
    .lks-paragraph
      slot

</template>

<script lang="ts">
import Card from '../components/Card.vue'

export default {
  props: {
    visible: Boolean
  },
  watch: {
    visible: function() {
      setTimeout(() => {
        this.visible = false
      }, 5000)
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.notif {
  z-index: 5000;
  background: white;
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
