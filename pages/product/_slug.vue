<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
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
        h1.lks-big-text {{ $t('product.last_posts') }}
        LastPosts(:author="author" :posts="posts")

      .popular
        h1.lks-big-text {{ $t('product.popular') }}
        Goods(:author="author" :goods="goods")
    Instagram
    Footer(:links="links")
</template>
<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import NavBar from '../../components/NavBar.vue'
import Instagram from '../../components/Instagram.vue'
import LastPosts from '../../components/LastPosts.vue'
import Product from '../../components/Product.vue'
import Goods from '../../components/Goods.vue'
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
    Product,
    Goods
  }
})
export default class ProductSlug extends Vue {
  links: Array<models.MenuEntry> = []
  product!: models.Product
  author!: models.Author
  posts: Array<models.Post> = []
  goods: Array<models.Product> = []
  slug: string = ''

  mounted() {
    this.slug = this.$route.params.slug
    this.$forceUpdate()
  }

  async asyncData({ app, params }: any) {
    return {
      links: await API.getMenuEntries(),
      product: await API.getProduct(params.slug),
      author: (await API.getAuthors())[0],
      posts: (await API.getPosts(-1, -1)).slice(-2),
      goods: (await API.getProducts(-1, -1)).slice(-4),
    }
  }

  validate({ params }: any) {
    return params.slug.length > 0
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
.specs {
  color: $color-text;
  margin: 30px;
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
.last-posts, .popular {
  margin-top: 30px;
  margin-bottom: 50px;
  h1 {
    padding: 10px;
    line-height: 2;
  }
}
</style>
