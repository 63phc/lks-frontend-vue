<template>
  <div>
    <TopHeader></TopHeader>
    <NavBar></NavBar>
    <Slider :slides="slides"></Slider>
    blahblahblah
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import * as API from '../assets/api.ts'
import TopHeader from '../components/TopHeader.vue'
import Slider from '../components/Slider.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

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
    Footer
  }
}
</script>

<style>
</style>
