<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path
          nuxt-link(:to="localePath('/')")
            | {{ $t('breadcrumbs.index') }} / 
          | {{ $t('breadcrumbs.saved' )}}
      .products
        .product(v-for="product in products").product
          GoodCard(:good="product" @click.native="update")
      div(v-if="isEmpty").cart-empty
        h1 {{ $t('saved.empty') }}
    Footer(:links="links")
</template>

<script lang="ts">
import * as Storage from '../assets/storage'
import { Component, Vue } from 'nuxt-property-decorator'
import * as models from '../assets/models'
import * as API from '../assets/api'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import GoodCard from '../components/GoodCard.vue'

@Component({
  components: {
    TopHeader,
    NavBar,
    Footer,
    GoodCard
  }
})
export default class SavedPage extends Vue {
  links: Array<models.MenuEntry> = []
  products: Array<models.Product> = []

  update() : void {
    this.products = Storage.get('saved') ? Storage.get('saved') : [];
  }

  mounted() {
    this.products = Storage.get('saved') ? Storage.get('saved') : [];
    this.$forceUpdate()
  }

  get isEmpty() {
    return this.products.length === 0;
  }

  async asyncData() {
    return {
      links: await API.getMenuEntries(),
    }
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
    width: calc(25% - 20px);
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
.cart-empty {
  display: flex;
  justify-content: center;
  font-size: 3vw;
  @media screen and(max-width: 800px) {
    font-size: 18px;
  }
  h1 {
    line-height: 3;
    font-weight: 100;
    color: #444;
  }
}
</style>
