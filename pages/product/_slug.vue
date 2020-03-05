<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      Product(:product="product")
      .specs
        .lks-big-text {{ $t('product.specs.title') }}
        p.spec-subtitle {{ $t('product.specs.subtitle' )}}
        table
          tr
            td {{ $t('product.specs.which.weight') }}
            td {{ product.properties.weight }}{{ $t('misc.measurement_g') }}
          tr
            td {{ $t('product.specs.which.height') }}
            td {{ product.properties.height }}{{ $t('misc.measurement_cm') }}
          tr
            td {{ $t('product.specs.which.type') }}
            td {{ product.properties.type_product }}
          tr
            td {{ $t('product.specs.which.material') }}
            td {{ product.properties.material }}
      .last-posts
        //- .lks-big-text ПОСЛЕДНИЕ ПОСТЫ
        //- LastPosts(:author="authors[0]" :posts="posts")
    Instagram
    Footer
</template>
<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import NavBar from '../../components/NavBar.vue'
import Instagram from '../../components/Instagram.vue'
import LastPosts from '../../components/LastPosts.vue'
import Product from '../../components/Product.vue'
import * as API from '../../assets/api'
import { Component, Vue } from 'nuxt-property-decorator'
import * as models from '../../assets/models'

@Component({
  components: {
    TopHeader,
    Footer,
    NavBar,
    Instagram,
    LastPosts,
    Product
  }
})
export default class ProductSlug extends Vue {
  product!: models.Product
  author!: models.Author
  posts: Array<models.Post> = []
  slug: string = ''

  mounted() {
    this.slug = this.$route.params.slug
  }

  async asyncData({ app, params }: any) {
    return {
      product: await API.getProduct(params.slug)
    }
  }

  validate({ params }: any) {
    return true
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
.specs {
  color: $color-text;
  .spec-subtitle {
    line-height: 3;
  }
  table {
    width: 100%;
    td {
      padding: 10px 0;
    }
  }
}
.last-posts {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
