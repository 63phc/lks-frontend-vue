<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        small.lks-breadcrumb-path Главная / Сохраненные товары
        h2.lks-heading.lks-font-normal Сохраненные товары
      .products
        .product(v-for="product in products").product
          GoodCard(:good="product" @click.native="update")
    Footer
</template>

<script lang="ts">
import * as Storage from '../assets/storage.ts'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import GoodCard from '../components/GoodCard.vue'
import ProductModal from '../components/ProductModal.vue'
export default {
  components: {
    TopHeader,
    NavBar,
    Footer,
    GoodCard,
    ProductModal
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    update() {
      this.products = Storage.get('saved')
    }
  },
  mounted() {
    this.products = Storage.get('saved')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.products {
  .product {
    display: inline-block;
    margin: 10px;
    width: 32%;
    width: calc(33% - 20px);
    min-width: 200px;
    @media screen and (max-width: 825px) {
      width: calc(50% - 20px);
    }
    @media screen and (max-width: 550px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
}
</style>
