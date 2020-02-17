<template lang="pug">
  div
    TopHeader
    NavBar
    Slider(:slides='slides')
    .container
      LastPosts
      Goods
      Reviews
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
export default {
  data() {
    return {
      slides: []
    }
  },
  async mounted() {
    this.slides = await API.getSliderImages()
  },
  components: {
    TopHeader,
    NavBar,
    Slider,
    Footer,
    LastPosts,
    Goods,
    Reviews,
    Instagram
  }
}
</script>

<style lang="scss">
@import '../assets/globals.scss';
.inst {
  margin: 40px 0;
}
</style>
