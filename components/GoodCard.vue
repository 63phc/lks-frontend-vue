<template lang="pug">
  Card.good-card.lks-card-floating
    .controls
      .control(@click="addToCart")
        img(src="/images/shopping-bag.svg")
      .control
        img(src="/images/heart.svg")
    .thumbnail(:style='`background-image: url(${good.image_preview});`')
    .good-info
      p.good-caption {{ good.caption }}
      .color
        span Цвет
        .lks-color-circle
          .lks-color-circle-color(:style="`background: ${good.colors[0]};`")
        p.good-price {{ good.price }} 
    nuxt-link.quick-purchase(:to="`/product/${good.slug}`")
      ButtonIcon.lks-btn-icon-bordered.quick-purchase-btn(icon="/images/lightning.svg") Быстрый заказ
</template>

<script lang="ts">
import { Good } from '../assets/models.ts'
import ButtonIcon from './ButtonIcon.vue'
export default {
  props: {
    good: Good
  },
  methods: {
    addToCart() {
      this.$eventBus.$emit('cartadd', this.good)
    }
  },
  components: {
    ButtonIcon
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.good-card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .controls {
    position: absolute;
    transition: 0.4s right;
    right: -100%;
    .control {
      margin: 10px;
      border-radius: 100px;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $color-main;
      img {
        filter: brightness(10);
      }
    }
  }
  .quick-purchase {
    left: 0;
    right: 0;
    display: flex;
    transition: 0.5s bottom;
    padding: 10px;
    .quick-purchase-btn {
      width: 100%;
    }
    background: linear-gradient(to top, #fff, transparent);
    position: absolute;
    bottom: -100%;
  }
  &:hover {
    .controls {
      right: 0;
    }
    .quick-purchase {
      bottom: 0;
    }
  }
  .good-info {
    padding: 10px;
  }
  .good-price {
    font-weight: bold;
    font-size: 20px;
    color: #545353;
  }
  .thumbnail {
    background-size: cover;
    min-height: 300px;
    flex: 1;
    border-radius: 10px;
  }
  .good-caption {
    color: #000;
    font-size: 18px;
    line-height: 2;
    font-weight: normal;
  }
  .color {
    display: flex;
    float: right;
    & > span {
      margin-right: 10px;
    }
  }
  .color-circle {
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    width: 20px;
    height: 20px;
    .color-circle-in {
      opacity: 0.8;
      border-radius: 20px;
      width: 10px;
      height: 10px;
    }
  }
  .good-text {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    color: #545353;
  }
}
</style>
