
<template lang="pug">
  Card.lks-card-floating.notif(v-show="visible")
    .lks-paragraph
      slot

</template>

<script lang="ts">
import Card from '../components/Card.vue'
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

@Component({
  components: {
    Card
  }
})
export default class Notification extends Vue {
  @Prop()
  visible: Boolean = false

  @Watch('visible')
  onVisibleChanged() {
    setTimeout(() => {
      this.visible = false
      this.$emit('hide')
    }, 5000)
  }
}

Vue.component("Notification", Notification)
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
