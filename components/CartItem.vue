<template lang="pug">
  .item.lks-flex.lks-flex-jcsb(v-if="product")
    nuxt-link(:to="localePath(`/product/${product.slug}`)").picture(:style="`background-image: url(${product.image_preview})`")
    .description.lks-flex.lks-flex-jscb.lks-flex-col
      nuxt-link(:to="localePath(`/product/${product.slug}`)").title {{ product.title }}
      .article {{ $t('product.code') }}: {{ product.code }}
      .color.lks-flex(v-if="product.colors[0]")
        span {{ $t('product.color') }} &nbsp;
        .lks-color-circle
          .lks-color-circle-color(:style="`background-color: ${product.colors[0]};`")
    .control.lks-flex
      .add.lks-mod-pointer(@click="subtract") -
      .counter {{ product.count }}
      .sub.lks-mod-pointer(@click="add") +
    .price.lks-flex.lks-flex-jcsb.lks-flex-aic
      span {{ $t('product.price') }}:
      .lks-price-now {{ parseInt(product.price) }}
        small
          | &nbsp;
          sup {{ product.price.split('.')[1], '00' }}
      img(src="/images/ruble.svg")
      .remove(@click="$emit('remove', product)") &times;
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
  position: relative;
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
    flex-shrink: 0.15;
    width: 120px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
  }
  .description {
    justify-content: space-around;
    width: 30%;
    margin-left: 20px;
    font-size: 14px;
    color: $color-text;
    .title {
      font-size: 20px;
      color: #000;
    }
  }
  .control {
    width: 200px;
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
    width: 20%;
    span {
      color: #000;
      margin-right: 10px;
    }
    & > * {
      color: $color-text;
    }
  }
  .remove {
    position: absolute;
    font-size: 40px;
    top: 10px;
    right: 10%;
  }
}
</style>
