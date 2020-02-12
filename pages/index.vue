<template>
  <div>
    <TopHeader></TopHeader>
    <NavBar></NavBar>
    <Slider :images="slider_images"></Slider>
  </div>
</template>

<script lang="ts">
import * as API from '../assets/api.ts'
import TopHeader from '../components/TopHeader.vue'
import Slider from '../components/Slider.vue'
import NavBar from '../components/NavBar.vue'

export default {
  data() {
    return {
      slider_images: []
    }
  },
  async mounted() {
    this.slider_images = await API.getSliderImages()
    alert(this.slider_images)
  },
  components: {
    TopHeader: TopHeader,
    NavBar: NavBar,
    Slider: Slider
  }
}
</script>

<style>
</style>
