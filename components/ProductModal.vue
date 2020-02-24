<template lang="pug">
  div.pmodal-shadow.lks-flex.lks-flex-jcc.lks-flex-aic(v-show="visible")
    Modal(title="Быстрая покупка" v-if="!hasBought")
      .pmodal-body
        .lks-flex.lks-flex-split.pmodal-product-data
          .pmodal-picture
          .pmodal-info
            .lks-product-name Медведь цветной
            .lks-small Артикул: 2348028
            br
            .pmodal-price.lks-flex.lks-flex-jcsb
              h2.lks-heading 12555p
              div.lks-flex.lks-flex-aic
                span Цвет &nbsp;&nbsp;
                .lks-color-circle
                  .lks-color-circle-color(style="background: red")
            br
            .pmodal-sale Скидка -4000р
            br
        .lks-flex.lks-flex-split.pmodal-fields
          input(placeholder="Ваше имя").lks-inp
          input(placeholder="Номер телефона").lks-inp
        .lks-flex.lks-flex-jcc
          Button.lks-btn-main Отправить
        br
        .lks-small.lks-mod-text-center Нажимая «Отправить», вы даете согласие на обработку персональных данных
    Modal(title="Спасибо" v-if="hasBought")
      p.lks-paragraph Ваша заявка принята. В Ближайшее время с вами свяжется наш менеджер
</template>

<script lang="typescript">
import Button from '../components/Button.vue'
import Modal from '../components/Modal.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasBought: true 
    }
  },
  components: {
    Button,
    Modal
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
  @media screen and (max-width: 500px) {
    height: 100%;
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
</style>
