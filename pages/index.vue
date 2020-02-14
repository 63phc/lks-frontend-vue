<template lang="pug">
  div
    TopHeader
    NavBar
    Slider(:slides='slides')
    LastPosts
    Footer
</template>

<script lang="ts">
import * as API from '../assets/api.ts'
import TopHeader from '../components/TopHeader.vue'
import Slider from '../components/Slider.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
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
    LastPosts
  }
}
</script>

<style>
</style>
