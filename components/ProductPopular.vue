<template lang="pug">
  div(style="position:relative")
    nuxt-link(:to="localePath('/product/'+good.slug)")
      Card.popular-card.lks-card-floating
        .left
          h3.title
            | {{ good.title }}
          .price-tag
            |{{ parseInt(good.price) }}
            img(src="/images/ruble.svg")
        .right
          .thumbnail(:style="`background-image: url(${good.image_preview})`")
    .lks-btn.lks-btn-main.lks-flex.lks-flex-aic.lks-flex-jcc.btn-cart.btn-add-cart-popular(@click="addToCart")
      | +

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
export default class ProductPopular extends Vue {
  @Prop({ required: true })
  good!: models.Product


  addToCart() {
    (this as any).$eventBus.$emit('cartadd', this.good)
  }
}

Vue.component('ProductPopular', ProductPopular)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.title {
  line-height: 2;
  font-size: clamp(16px, 1vw, 30px);
  font-weight: normal;
  color: #333;
}

.popular-card {
  display: flex;
  position: relative;
  margin-bottom: 100px;
  @media screen and(max-width: 420px) {
    .price-tag {
      font-size: 25px;
    }
    .title {
      font-size: 1.2em;
    }
  }
  .left {
    flex: 1;
  }
}

.thumbnail {
  width: 125px;
  height: 125px;
  background-size: cover;

}
.btn-add-cart-popular {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  max-width: 50px;
  min-height: 50px;
  padding: 0;
  font-size: 40px;
}
.price-tag {
  font-size: 30px;
  font-weight: bold;
  line-height: 2;
  color: #555;
  img {
    margin-left: 4px;
    filter: brightness(0.4);
    width: 12px;
  }
}
</style>
