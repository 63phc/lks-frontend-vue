<template lang="pug">
  div.pmodal-shadow.lks-flex.lks-flex-jcc.lks-flex-aic(v-show="visible")
    Modal(:visible="visible" title="Быстрая покупка" v-if="!hasBought" @close="$emit('close')")
      .pmodal-body
        .lks-flex.lks-flex-split.pmodal-product-data
          .pmodal-picture(:style="`background-image: url(${product.image_preview})`")
          .pmodal-info
            .lks-product-name {{ product.title }}
            //- .lks-small Артикул: 2348028
            br
            .pmodal-price.lks-flex.lks-flex-jcsb
              h2.lks-heading.lks-flex.lks-flex-aic {{ parseInt(product.price) }}
                img(src="/images/ruble.svg" style="filter: brightness(0.5)")
              div.lks-flex.lks-flex-aic
                span Цвет &nbsp;&nbsp;
                .lks-color-circle
                  .lks-color-circle-color(:style="`background: ${product.colors[0]}`")
            br
            .pmodal-sale Скидка -{{ product.sale }}р
            br
        .lks-flex.lks-flex-split.pmodal-fields
          input(placeholder="Ваше имя" v-model="name").lks-inp
          input(type="tel" placeholder="Номер телефона" v-model="phone").lks-inp
        .lks-flex.lks-flex-jcc
          Button.lks-btn-main(@click.native="quickOrder") Отправить
        br
        .lks-small.lks-mod-text-center Нажимая «Отправить», вы даете согласие на обработку персональных данных
    Modal(:visible="visible" title="Спасибо" v-if="hasBought" @close="hasBought = false; $emit('close')")
      p.lks-paragraph Ваша заявка принята. В Ближайшее время с вами свяжется наш менеджер
</template>

<script lang="typescript">
import Button from '../components/Button.vue'
import Modal from '../components/Modal.vue'
import { Product } from '../assets/models.ts'
import * as API from '../assets/api.ts'
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    product: Product
  },
  data() {
    return {
      hasBought: false,
      name: "",
      phone: ""
    }
  },
  methods: {
    quickOrder: async function() {
      const res = await API.quickOrder(this.product, this.name, this.phone)
      if (res.length > 0) {
        alert('Произошла ошибка при покупке, попробуйте снова, проверьте правильность данных')
      }
      else {
        this.hasBought = true;
      }
    }
  },
  components: {
    Button,
    Modal,
    Product
  }
}
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
