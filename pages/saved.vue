<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        small.lks-breadcrumb-path Главная / Сохраненные товары
        h2.lks-heading.lks-font-normal Сохраненные товары
      .products
        ProductModal.modal
        GoodCard.product
        GoodCard.product
        GoodCard.product
        GoodCard.product
        GoodCard.product
    Footer
</template>

<script lang="ts">
import * as API from '../assets/api.ts'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import GoodCard from '../components/GoodCard.vue'
import ProductModal from '../components/ProductModal.vue'
export default {
  data() {
    return {
      slides: []
    }
  },
  async mounted() {
    this.slides = await API.getSliderImages()
  },
  components: {
    TopHeader,
    NavBar,
    Footer,
    GoodCard,
    ProductModal
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.products {
  .product {
    box-sizing: border-box;
    width: calc(25% - 20px);
    margin: 10px;
    min-width: 200px;
    display: inline-flex;
  }
}
</style>
