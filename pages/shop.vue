<template lang="pug">
  div.shop
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path Главная / Магазин / Мягкие игрушки
      .lks-flex.shop-ui
        aside
          CategorizedMenu
          PriceRange.gap
          ColorCard.gap
          Button.lks-btn-bordered.lks-mod-fill.lks-mod-text-center.gap Отчистить фильтр
        main
          GoodCard.product
          GoodCard.product
          GoodCard.product
          GoodCard.product
          GoodCard.product
          p.lks-see-more Смотреть еще
    Footer
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import CategorizedMenu from '../components/CategorizedMenu.vue'
import GoodCard from '../components/GoodCard.vue'
import PriceRange from '../components/PriceRange.vue'
import ColorCard from '../components/ColorCard.vue'
import Button from '../components/Button.vue'

export default {
  components: {
    TopHeader,
    NavBar,
    Footer,
    CategorizedMenu,
    GoodCard,
    PriceRange,
    ColorCard,
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.shop {
  .shop-ui {
    @media screen and (max-width: 700px) {
      flex-direction: column;
      .product {
        width: 100%;
        margin: 0;
        margin-top: 20px;
      }
    }
  }
  aside {
    flex: 1;
    margin-top: 20px;
    .gap {
      margin-top: 30px;
    }
  }
  main {
    flex: 3;
    margin-left: 10px;
    .product {
      box-sizing: border-box;
      width: calc(33% - 20px);
      margin: 10px;
      min-width: 200px;
      display: inline-flex;
    }
  }
}
</style>
