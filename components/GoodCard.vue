<template lang="pug">
  Card.good-card.lks-card-floating
    .controls
      .control.lks-mod-pointer(@click="addToCart")
        img(src="/images/shopping-bag.svg")
        .dot(:class="hasProduct ? 'lit' : ''")
      .control.lks-mod-pointer(@click="saveProduct")
        img(src="/images/heart.svg")
        .dot(:class="hasSaved ? 'lit' : ''")
    nuxt-link(:to="localePath(`/product/${good.slug}`)" style="text-decoration: underline").thumbnail-container
      .thumbnail(:style='`background-image: url(${good.image_preview});`')
    .good-info
      p.good-caption {{ good.title }}
      .color.lks-flex.lks-flex-jcsb
        div.lks-flex
          div.lks-flex(v-if="good.colors[0]")
            span {{ $t('product.color') }} &nbsp;
            .lks-color-circle
              .lks-color-circle-color(:style="`background: ${good.colors[0]};`")
        p.good-price.lks-flex.lks-flex-aic {{ parseInt(good.price) }} 
          img(src="/images/ruble.svg" style="filter: brightness(0.5)")
    .quick-purchase(@click="quickBuy")
      ButtonIcon.lks-btn-icon-bordered.quick-purchase-btn(icon="/images/lightning.svg") {{ $t('product.quick_purchase') }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as models from '../assets/models'
import * as Storage from '../assets/storage'
import Card from './Card.vue'
import ButtonIcon from './ButtonIcon.vue'

@Component({
  components: {
    Card,
    ButtonIcon
  }
})
export default class GoodCard extends Vue {
  @Prop({ required: true })
  good!: models.Product

  // Dummy variable to force vue to recalculate property
  rdummy: boolean = false

  addToCart() {
    (this as any).$eventBus.$emit('cartadd', this.good)
    this.rdummy = !this.rdummy;
  }

  saveProduct() {
    (this as any).$eventBus.$emit('saved', this.good)
    this.rdummy = !this.rdummy;
  }

  quickBuy() {
    (this as any).$eventBus.$emit('quickbuy', this.good)
  }

  get hasSaved() {
    if (this.rdummy) void(0);
    return Storage.get('saved') ? Storage.get('saved').findIndex((e: models.Product) => e.id == this.good.id) > -1 : false;
  }

  get hasProduct() {
    if (this.rdummy) void(0);
    return Storage.get('cart') ? Storage.get('cart').findIndex((e: models.Product) => e.id == this.good.id) > -1 : false;
  }
}

Vue.component('GoodCard', GoodCard)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.dot {
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  right: 5px;
  &.lit {
    background: crimson;
  }
}

.good-card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 400px;
  max-height: 400px;
  min-height: 400px;
  .controls {
    position: absolute;
    transition: 0.4s right;
    z-index: 40;
    right: -100%;
    .control {
      margin: 10px;
      margin-right: 20px; 
      border-radius: 100px;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: center;
      background: $color-main;
      img {
        filter: brightness(10);
        width: 50%;
      }
    }
  }
  .quick-purchase {
    left: 0;
    right: 0;
    display: flex;
    transition: 0.5s bottom;
    padding: 10px;
    line-height: 10px;
    .quick-purchase-btn {
      width: 100%;
    }
    background: linear-gradient(to top, #fff, transparent);
    position: absolute;
    bottom: -100%;
  }
  .thumbnail {
    height: 300px;
    display: block;
    border-radius: 7px;
    margin: -5px;
    overflow: hidden;
    transition: 0.5s all;
  }
  &:hover {
    .thumbnail {
      transform: scaleY(0.8) translateY(-37px);
      background-size: 160% 160%;
      @media screen and (max-width: 670px) {
        background-size: 125% 200%;
      }
      z-index: -4;
    }
    .good-info {
      bottom: 55px;
    }
    .controls {
      right: 0;
    }
    .quick-purchase {
      bottom: 0;
    }
  }
  .good-info {
    position: relative;
    padding: 10px;
    bottom: 0;
    transition: .5s bottom;
  }
  .good-price {
    font-weight: bold;
    font-size: 20px;
    color: #545353;
  }
  .thumbnail {
    background-position: center;
    background-size: 120% 100%;
    @media screen and (max-width: 670px) {
      background-size: 100% 150%;
    }
    background-repeat: no-repeat;
    max-height: 300px;
    min-height: 250px;
    flex: 1;
    border-radius: 10px;
  }
  .good-caption {
    
    color: #000;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: normal;
  }
  .color {
    display: flex;
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
