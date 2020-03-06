<template lang="pug">
  .item.lks-flex.lks-flex-jcsb(v-if="product")
    .picture(:style="`background-image: url(${product.image_preview})`")
    .description.lks-flex.lks-flex-jscb.lks-flex-col
      .title {{ product.title }}
      //- .article Артикул:  product.around 
      .color.lks-flex.lks-flex-jcsb
        span {{ $t('product.color') }} &nbsp;
        .lks-color-circle
          .lks-color-circle-color(:style="`background-color: ${product.colors[0]};`")
    .control.lks-flex
      .add.lks-mod-pointer(@click="add") +
      .counter {{ product.count }}
      .sub.lks-mod-pointer(@click="subtract") -
    .price.lks-flex.lks-flex-jcsb.lks-flex-aic
      span {{ $t('product.price') }}:
      .lks-price-now {{ product.price }}
      img(src="/images/ruble.svg")
      .remove(@click="$emit('remove', product)") x
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import * as models from '../assets/models'
@Component
export default class CartItem extends Vue {
  @Prop({ required: true })
  product!: models.Product

  add() {
    this.product.count += 1
    this.$forceUpdate()
  }

  subtract() {
    if (this.product.count > 1) {
      this.product.count -= 1
    }
  }
}

Vue.component('CartItem', CartItem)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.item {
  margin-bottom: 15px;
  @media screen and (max-width: 936px) {
    .color {
      justify-content: flex-start;
    }
    padding-top: 20px;
    flex-direction: column;
    & > * {
      margin-bottom: 20px;
    }
    .picture {
      align-self: center;
    }
  }
  padding: 0 15%;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  .picture {
    height: 120px;
    width: 120px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
  }
  .description {
    justify-content: space-around;
    font-size: 14px;
    color: $color-text;
    .title {
      font-size: 20px;
      color: #000;
    }
  }
  .control {
    align-items: center;
    text-align: center;
    min-width: 150px;
    align-self: center;
    border-radius: 50px;
    background: #eee;
    color: $color-text;
    .counter {
      flex: 2;
    }
    .add,
    .sub {
      padding: 5px;
      margin: 5px;
      flex: 2;
    }
    .add {
      border-right: 1px solid #ccc;
    }
    .sub {
      border-left: 1px solid #ccc;
    }
  }
  .price {
    span {
      color: #000;
      margin-right: 10px;
    }
    & > * {
      color: $color-text;
    }
  }
}
</style>
