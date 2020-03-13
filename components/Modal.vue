<template lang="pug">
  div
    .modal-modal
      .modal-title.lks-flex
        h3.lks-font-normal.lks-heading {{ title }}
        .lks-mod-pointer.modal-close(@click="visible = false; $emit('close')") &times;
      .modal-body
        slot
    div.modal-shadow.lks-flex.lks-flex-jcc.lks-flex-aic(v-show="visible" @click="visible = false; $emit('close')")

</template>

<script lang="ts">
import { Prop, Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop()
  visible: Boolean = true
  @Prop()
  title: String = ''
}

Vue.component("Modal", Modal)
</script>

<style lang="scss" scoped>
.modal-modal {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  background: #fff;
  position: fixed;
  top: 50%;
  z-index: 69420;

  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 800px) {
    height: 100%;
    widows: 100%;
    .pmodal-product-data {
      flex-direction: column;
    }
    .pmodal-fields {
      flex-direction: column;
    }
  }
}
.modal-body {
  padding: 10px;
}
.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 42069;
}
.modal-title {
  padding: 10px;
  border-bottom: 1px solid #eee;
  line-height: 2;
  text-align: center;
  h3 {
    flex: 1;
  }
}
</style>
