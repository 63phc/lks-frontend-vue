<template lang="pug">
  Card.product.lks-flex.lks-flex-jcsb
    .product-share
      .lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-facebook.svg")
      .lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-instagram.svg")
      .lks-btn-social
        img.lks-btn-social-icon(src="/images/logo-vk.svg")
    .product-image(style="background-image: url(https://occ-0-586-590.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABceL_FxRrEg1Jm2LyiYugCJwBkJ2v4GmCBWQ_JNLBXCu1tpO1CMoOxGk9R74PCzrCR0FLIrjdgZlyIHnZEuiHArY6C9G.jpg?r=a82)")
    .product-info
      .lks-flex.lks-flex-aic.lks-flex-jcsb.product-name
        div
          strong.lks-product-name Cheburashka
          strong.sale.lks-sale -15%
        ButtonIcon.lks-btn-icon-main(icon='/images/instagram-purple.svg') Подписатся на инстаграм 
      p.lks-product-text.product-text Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.
      .price.lks-flex.lks-flex-jcsb.lks-flex-aic
        .product-amount.lks-flex.lks-flex-aic
          .subtract.lks-mod-pointer.lks-roundpad -
          span.counter 1
          .add.lks-mod-pointer.lks-roundpad +
        .product-price-tag.lks-flex.lks-flex-aic.lks-flex-jcsb
          .price-label.lks-flex.lks-flex-jcsb
            img(src="/images/ruble.svg")
            .lks-price-now 2555
            strike.lks-price-old 2955
          .product-color
            .lks-color-circle
              .lks-color-circle-color(style="background: red")
          .product-size.lks-flex.lks-aic
            img(src="/images/height.svg")
            .lks-product-size 40 см
          Button.lks-btn-main.favorite.lks-flex.lks-flex-aic.lks-flex-jcc
            img(src="/images/heart.svg")
      .controls.lks-mod-text-center.lks-flex
        ButtonIcon.lks-btn-icon-main(icon="/images/bolt-pink.svg") Быстрый заказ
        ButtonIcon.lks-btn-icon-main(icon="/images/cart-pink.svg") Добавить в корзину

</template>

<script lang="ts">
import Card from '../components/Card.vue'
import ButtonIcon from '../components/ButtonIcon'
import Button from '../components/Button'

export default {
  components: {
    Card,
    ButtonIcon,
    Button
  }
}
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
    width: 400px;
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
