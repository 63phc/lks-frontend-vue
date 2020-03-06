<template lang="pug">
  div.pmodal-shadow.lks-flex.lks-flex-jcc.lks-flex-aic(v-show="visible")
    Modal(:visible="visible" :title="$t('product.quick_purchase')" v-if="!hasBought" @close="$emit('close')")
      .pmodal-body
        .lks-flex.lks-flex-split.pmodal-product-data
          .pmodal-picture(:style="`background-image: url(${product.image_preview})`")
          .pmodal-info
            .lks-product-name {{ product.title }}
            //- .lks-small Article: 2348028
            br
            .pmodal-price.lks-flex.lks-flex-jcsb
              h2.lks-heading.lks-flex.lks-flex-aic {{ parseInt(product.price) }}
                img(src="/images/ruble.svg" style="filter: brightness(0.5)")
              div.lks-flex.lks-flex-aic
                span {{ $t('product.color') }} &nbsp;&nbsp;
                .lks-color-circle
                  .lks-color-circle-color(:style="`background: ${product.colors[0]}`")
            br
            .pmodal-sale {{ $t('product.sale') }} -{{ product.sale }} {{$t('product.rub') }}
            br
        .lks-flex.lks-flex-split.pmodal-fields
          input(:placeholder="$t('product.modal.name')" v-model="name").lks-inp
          input(type="tel" :placeholder="$t('product.modal.phone_number')" v-model="phone").lks-inp
        .lks-flex.lks-flex-jcc
          Button.lks-btn-main(@click.native="quickOrder") {{ $t('product.modal.send') }}
        br
        .lks-small.lks-mod-text-center {{ $t('product.modal.agreement') }}
    Modal(:visible="visible" :title="$t('product.modal.thanks')" v-if="hasBought" @close="hasBought = false; $emit('close')")
      p.lks-paragraph {{ $t('product.modal.accepted') }}
</template>

<script lang="ts">
import Button from '../components/Button.vue'
import Modal from '../components/Modal.vue'
import * as models from '../assets/models'
import * as API from '../assets/api'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    Button,
    Modal
  }
})
export default class ProductModal extends Vue {
  @Prop()
  visible: Boolean = false
  @Prop({ required: true })
  product!: models.Product

  hasBought: Boolean = false
  name: string = ''
  phone: string = ''

  async quickOrder() {
    const res = await API.quickOrder(this.product, this.name, this.phone)
    if (res.length > 0) {
      alert((this as any).$t('notifications.buy_error'))
    }
    else {
      this.hasBought = true;
    }
  }
}

Vue.component('ProductModal', Vue)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.pmodal-sale {
  padding: 5px 20px;
  color: #fff;
  border-radius: 20px;
  display: inline-block;
  background: $color-main;
}
.pmodal-modal {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 500px;
  @media screen and (max-width: 800px) {
    height: 100%;
    align-self: stretch;
    .pmodal-product-data {
      flex-direction: column;
    }
    .pmodal-fields {
      flex-direction: column;
    }
  }
  background: white;
  & > * {
    margin-bottom: 20px;
  }
}
.pmodal-fields {
  margin: 0 4px;
  margin-bottom: 20px;
  & > * {
    margin: 4px;
  }
}

.pmodal-info {
  & > * {
    margin: 4px;
  }
}

.pmodal-picture {
  min-height: 200px;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
