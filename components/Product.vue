<template lang="pug">
  Card.product.lks-flex.lks-flex-jcsb
    .product-share
      a(:href="`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`").lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-facebook.svg")
      a(:href="`https://www.instagram.com/?url=${fullUrl}`").lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-instagram.svg")
      a(:href="`https://vk.com/share.php?url=${fullUrl}`").lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-vk.svg")
    .product-image(:style="`background-image: url(${product.image_preview})`")
    .product-info
      .lks-flex.lks-flex-aic.lks-flex-jcsb.product-name
        div
          strong.lks-product-name {{ product.name }}
          strong.sale.lks-sale -{{ Math.round(parseInt(product.sale)/(parseInt(product.price)+parseInt(product.sale))*100) }}%
        a(href="https://www.instagram.com/katyaanaprienko/")
          ButtonIcon.lks-btn-icon-main(icon='/images/instagram-purple.svg') {{ $t('product.subscribe')}}
      p.lks-product-text.product-text(v-html="product.description")
      .price.lks-flex.lks-flex-jcsb.lks-flex-aic
        .product-amount.lks-flex.lks-flex-aic
          .subtract.lks-mod-pointer.lks-roundpad(@click="subtract") -
          span.counter {{ count }}
          .add.lks-mod-pointer.lks-roundpad(@click="add") +
        .product-price-tag.lks-flex.lks-flex-aic.lks-flex-jcsb
          .price-label.lks-flex.lks-flex-jcsb
            img(src="/images/ruble.svg")
            .lks-price-now {{ parseInt(product.price) }}
            strike.lks-price-old {{ parseInt(product.price) + parseInt(product.sale)}}
          .product-color
            .lks-color-circle
              .lks-color-circle-color(:style="`background: ${product.colors[0]}`")
          .product-size.lks-flex.lks-aic
            img(src="/images/height.svg")
            .lks-product-size {{ product.properties.height }} см
          Button(@click.native="$eventBus.$emit('saved', product)").lks-btn-main.favorite.lks-flex.lks-flex-aic.lks-flex-jcc
            img(src="/images/heart.svg")
      .controls.lks-mod-text-center.lks-flex
        ButtonIcon.lks-btn-icon-main(icon="/images/bolt-pink.svg" @click.native="$eventBus.$emit('quickbuy', product)") {{ $t('product.quick_purchase')}}
        ButtonIcon.lks-btn-icon-main(icon="/images/cart-pink.svg" @click.native="$eventBus.$emit('cartadd', product)") {{ $t('product.add')}}

</template>

<script lang="ts">
import Card from '../components/Card.vue'
import ButtonIcon from '../components/ButtonIcon.vue'
import Button from '../components/Button.vue'
import * as models from '../assets/models'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    Card,
    Button,
    ButtonIcon
  }
})
export default class Product extends Vue {
  @Prop()
  product!: models.Product

  count: number = 1

  add() {
    this.count += 1
  }

  subtract() {
    if (this.count > 1) {
      this.count -= 1
    }
  }

  get fullUrl() {
    return window.location
  }
}

Vue.component('Product', Product)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.product {
  @media screen and (max-width: 1060px) {
    flex-direction: column;
    .product-image {
      min-height: 300px;
    }
    .product-share {
      display: flex;
      & > * {
        margin-right: 20px;
      }
    }
  }
  @media screen and (max-width: 682px) {
    .price,
    .controls,
    .product-name {
      & > * {
        margin-bottom: 15px;
      }
      flex-direction: column;
    }
    .product-price-tag {
      .product-size {
        display: none;
      }
      width: 100% !important;
    }
  }
  .product-share {
    & > * {
      margin-bottom: 20px;
    }
  }
  .product-image {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    flex: 1;
  }
  & > * {
    margin: 0 10px;
  }
  .product-info {
    flex: 2;
    .product-text {
      margin-top: 10px;
    }

    & > * {
      margin-top: 30px;
    }
  }
  .product-name {
    .sale {
      margin-left: 22px;
    }
  }
  .controls {
    & > * {
      margin-right: 20px;
    }
  }
  .price {
    .product-amount {
      line-height: 0.5;
      .add,
      .subtract {
        padding: 15px;
      }
      color: #fff;
      background: $color-main;
      border-radius: 500px;
    }
    & > * {
      margin-right: 10px;
    }
  }
  .product-price-tag {
    width: 420px;
    padding: 24px 20px;
    background: $color-main;
    border-radius: 10px;
    & > * {
      margin-right: 20px;
    }
    position: relative;
    .favorite {
      position: absolute;
      right: 0;
      transform: translateX(45px);
      width: 50px;
      height: 50px;
      padding: 0;
      img {
        filter: brightness(100);
      }
    }
  }
  .product-size {
    & > * {
      margin-right: 10px;
    }
  }
}
</style>
