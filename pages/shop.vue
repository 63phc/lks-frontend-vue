<template lang="pug">
  div.shop
    TopHeader
    NavBar(:links="links")
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path
          nuxt-link(:to="localePath('/')")
            | {{ $t('breadcrumbs.index') }} / 
          | {{ $t('breadcrumbs.shop' )}}
      .lks-flex.shop-ui
        aside
          CategorizedMenu(:categories="categories" @select="setCategory")
          // PriceRange.gap
          // ColorCard.gap
          Button.lks-btn-bordered.lks-mod-fill.lks-mod-text-center.gap(@click.native="clearFilter") {{ $t('shop.clear_filter') }}
        main
          div(v-for="product in products").product
            GoodCard(:good="product")
          p(@click="loadMore" v-if="areEntriesPaged").lks-see-more {{ $t('misc.see_more') }}
    Footer(:links="links")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
import GoodCard from '../components/GoodCard.vue'
import CategorizedMenu from '../components/CategorizedMenu.vue'
import * as models from '../assets/models'
import * as API from '../assets/api'


const PAGE_SIZE = 6

@Component({
  components: {
    Button,
    GoodCard,
    CategorizedMenu,
    TopHeader,
    NavBar,
    Footer
  }
})
export default class ShopPage extends Vue {
  links: Array<models.MenuEntry> = []
  productsRaw: Array<models.Product> = []
  categorySelected: string = ''
  offset: number = 0
  categories: Array<models.Category> = []
  areEntriesPaged = false

  get products(): Array<models.Product> {
    if (this.categorySelected === '') {
      return this.productsRaw
    }
    return this.productsRaw.filter(
      (e: models.Product) =>
        e.categories.findIndex((g: any) => g.slug === this.categorySelected) >
        -1
    )
  }

  get priceMax(): number {
    return Math.max(...this.productsRaw.map((e: any) => parseInt(e.price)))
  }

  async asyncData() {
    return {
      links: await API.getMenuEntries(),
      productsRaw: await API.getProducts(PAGE_SIZE, 0),
      categories: await API.getCategories()
    }
  }
  

  mounted(): void {
    this.offset = PAGE_SIZE
    this.$forceUpdate()
    this.checkEntriesPaging()
  }

  async loadMore() {
    this.productsRaw = await API.getProducts(PAGE_SIZE + this.offset, 0)
    this.offset += PAGE_SIZE
    this.checkEntriesPaging()
  }

  async checkEntriesPaging() {
    var entries = await API.getProducts(-1, this.offset)
    this.areEntriesPaged = entries.length > 0;
  }

  setCategory(e: string): void {
    this.categorySelected = e
  }

  clearFilter(): void {
    this.categorySelected = ''
    this.$forceUpdate()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.shop {
  .shop-ui {
    @media screen and (max-width: 793px) {
      flex-direction: column;
      // .product {
      //   width: 100%;
      //   margin: 0;
      //   margin-top: 20px;
      // }
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
      @media screen and (max-width: 1286px) {
        width: calc(50% - 20px)
      }
      @media screen and (max-width: 595px) {
        width: calc(100%);
        margin-left: 0;
      }
      margin: 10px;
      min-width: 200px;
      display: inline-block;
    }
  }
}
</style>
