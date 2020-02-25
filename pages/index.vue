<template lang="pug">
  div
    TopHeader
    NavBar
    Slider(:slides='slides')
    .lks-container
      div(v-for="author in authors")
        LastPosts(:author="author" :posts="posts")
          h2 ПОСЛЕДНИЕ ПОСТЫ
        Goods(:goods="products")
    //-  Reviews
    Instagram.inst
    Footer
</template>

<script lang="ts">
import * as API from '../assets/api.ts'
import TopHeader from '../components/TopHeader.vue'
import Slider from '../components/Slider.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
import Reviews from '../components/Reviews.vue'
import Goods from '../components/Goods.vue'
import Instagram from '../components/Instagram.vue'
import Notification from '../components/Notification.vue'
export default {
  components: {
    TopHeader,
    NavBar,
    Slider,
    Footer,
    LastPosts,
    Goods,
    Reviews,
    Instagram,
    Notification
  },
  data() {
    return {
      notifVisible: false,
      slides: [],
      authors: [],
      posts: [],
      products: []
    }
  },
  async mounted() {
    this.slides = await API.getSliderImages()
    this.authors = await API.getAuthors()
    this.authors = this.authors.sort(e => Math.random() - 0.5).slice(0, 2)
    this.posts = await API.getPosts(-1, -1)
    this.products = await API.getProducts(-1, -1)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
</style>
