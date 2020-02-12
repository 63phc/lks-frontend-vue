<template>
  <div>
    <TopHeader></TopHeader>
    <NavBar></NavBar>
    <Slider :slides="slides"></Slider>
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
      slides: []
    }
  },
  async mounted() {
    this.slides = await API.getSliderImages()
    alert(JSON.stringify(this.slides))
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
