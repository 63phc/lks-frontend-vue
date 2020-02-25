<template lang="pug">
  div.shop
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path Главная / Магазин / Мягкие игрушки
      .lks-flex.shop-ui
        aside
          CategorizedMenu(:categories="categories" @select="setCategory")
          // PriceRange.gap
          // ColorCard.gap
          Button.lks-btn-bordered.lks-mod-fill.lks-mod-text-center.gap(@click.native="clearFilter") Отчистить фильтр
        main
          div(v-for="product in products").product
            GoodCard(:good="product")
          p(@click="loadMore").lks-see-more Смотреть еще
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
import * as API from '../assets/api.ts'

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
  },
  async mounted() {
    this.productsRaw = await API.getProducts(10, this.offset)
    this.categories = await API.getCategories()
    this.offset = 10
  },
  methods: {
    async loadMore() {
      this.productsRaw = await API.getProducts(10 + this.offset, 0)
      this.offset += 10
    },
    setCategory(e) {
      this.categorySelected = e
    },
    clearFilter() {
      this.categorySelected = ''
      this.$forceUpdate()
    }
  },
  computed: {
    products() {
      if (this.categorySelected === '') {
        return this.productsRaw
      }
      return this.productsRaw.filter(
        e => e.categories.findIndex(g => g.slug === this.categorySelected) > -1
      )
    },
    priceMax() {
      return Math.max(...this.productsRaw.map(e => parseInt(e.price)))
    }
  },
  data() {
    return {
      categorySelected: '',
      productsRaw: [],
      offset: 0,
      categories: []
    }
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
      display: inline-block;
    }
  }
}
</style>
