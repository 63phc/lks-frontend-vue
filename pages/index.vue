<template lang="pug">
  div
    TopHeader
    NavBar
    Slider(:slides='slides')
    .lks-container
      div(v-for="author in authors")
        LastPosts(:author="author" :posts="posts")
          h2 {{ $t('main.last_posts') }}
        Goods(:goods="products")
    //-  Reviews
    Instagram.inst
    Footer
</template>

<script lang="ts">
import * as API from '../assets/api'
import TopHeader from '../components/TopHeader.vue'
import Slider from '../components/Slider.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
import Reviews from '../components/Reviews.vue'
import Goods from '../components/Goods.vue'
import Instagram from '../components/Instagram.vue'
import Notification from '../components/Notification.vue'
import { Component, Vue } from 'nuxt-property-decorator'
import * as models from '../assets/models'

@Component({
  components: {
    TopHeader,
    Slider,
    NavBar,
    Footer,
    LastPosts,
    Reviews,
    Goods,
    Instagram,
    Notification
  }
})
export default class Index extends Vue {
  notifVisible: Boolean = false
  slides: Array<models.Slide> =  []
  authors: Array<models.Author> = []
  posts: Array<models.Post> = []
  products: Array<models.Product> = []

  mounted() {
    this.authors = this.authors.sort(e => Math.random() - 0.5).slice(0, 2)
  }

  async asyncData() {
    return {
      slides: await API.getSliderImages(),
      authors: await API.getAuthors(),
      posts: await API.getPosts(-1, -1),
      products: await API.getProducts(-1, -1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
</style>
