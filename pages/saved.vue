<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
    .lks-container
      .lks-breadcrumb
        small.lks-breadcrumb-path {{ $t('saved.breadcrumbs') }}
        h2.lks-heading.lks-font-normal {{ $t('saved.title') }}
      .products
        .product(v-for="product in products").product
          GoodCard(:good="product" @click.native="update")
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
    this.products = Storage.get('saved')
  }

  mounted() {
    this.products = Storage.get('saved')
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
</style>
