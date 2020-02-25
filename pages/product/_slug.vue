<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      Product(:product="product")
      .specs
        .lks-big-text Характеристики
        p.spec-subtitle Общие характеристики
        table
          tr
            td Вес
            td {{ product.properties.weight }}г
          tr
            td Высота
            td {{ product.properties.height }}см
          tr
            td Тип
            td {{ product.properties.type_product }}
          tr
            td Материал
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
import Product from '../../components/Product.vue'
import LastPosts from '../../components/LastPosts.vue'
import * as API from '../../assets/api.ts'

export default {
  components: {
    TopHeader,
    Footer,
    NavBar,
    Instagram,
    Product,
    LastPosts
  },
  async mounted() {
    this.slug = this.$route.params.slug
    this.product = await API.getProduct(this.slug)
  },
  data() {
    return {
      product: { colors: [], properties: [] },
      author: null,
      posts: [],
      slug: ''
    }
  },
  validate({ params }) {
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
