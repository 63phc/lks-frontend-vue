<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      Product
      .specs
        .lks-big-text Характеристики
        p.spec-subtitle Общие характеристики
        table
          tr
            td Тип
            td Функции
          tr
            td Тип
            td Функции
          tr
            td Тип
            td Функции
          tr
            td Тип
            td Функции
          tr
            td Тип
            td Функции
          tr
            td Тип
            td Функции
      .last-posts
        .lks-big-text ПОСЛЕДНИЕ ПОСТЫ
        LastPosts
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

export default {
  components: {
    TopHeader,
    Footer,
    NavBar,
    Instagram,
    Product,
    LastPosts
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
