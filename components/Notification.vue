
<template lang="pug">
  Card.lks-card-floating.notif(v-show="visible" :class="anim ? 'notif-appear' : ''")
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

  anim: Boolean = false

  @Watch('visible')
  onVisibleChanged() {
    this.anim = true;
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
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);
  * {
    color: #fff !important;
  }
  position: fixed;
  top: 10px;
  right: 10px;
}
.notif-appear {
  animation: notif-appear 1s;
}


@keyframes notif-appear {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0);
  }
}
</style>
