<template lang="pug">
  menu.lks-card.lks-card-floating
    ul.controls
      //- li
      //-   img(src='/images/log-out.svg', alt='')
      li
        nuxt-link(:to="localePath('/cart')")
          img(src='/images/shopping-bag.svg', alt='')
          .dot(:class="hasProducts ? 'lit' : ''")
      li
        nuxt-link(:to="localePath('/saved')")
          img(src='/images/heart.svg', alt='')
          .dot(:class="hasSaved ? 'lit' : ''")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as API from '../assets/api'
import * as models from '../assets/models'
import * as Storage from '../assets/storage'

@Component
export default class BottomProductsControls extends Vue {
  hasProducts: boolean = false
  hasSaved: boolean = false

  mounted() {
    this.hasProducts = Storage.get('cart') ? Storage.get('cart').length > 0 : false;
    this.hasSaved = Storage.get('saved') ? Storage.get('saved').length > 0 : false;
    setInterval(() => {
      this.hasProducts = Storage.get('cart') ? Storage.get('cart').length > 0 : false;
      this.hasSaved = Storage.get('saved') ? Storage.get('saved').length > 0 : false;
    }, 1000)
    // Poll for cart changes
  }
}
Vue.component('BottomProductsControls', BottomProductsControls)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
menu {
  position: fixed;
  left: 10px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  z-index: 20000;
  bottom: 10px;
  padding: 221px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  margin-bottom: 0 !important;
  border-radius: 10px;
  .controls {
    align-items: center;
    display: flex;
    padding: 0 10px;
    margin-bottom: -5px;
    list-style-type: none;
    li:first-child {
      padding-left: 0;
    }
    li {
      padding-left: 30px;
    }
  }
}
.dot {
  width: 5px;
  height: 5px;
  background: gray;
  border-radius: 10px;
  position: relative;
  top: -25px;
  left: 20px;
  &.lit {
    background: crimson;
  }
}
</style>
