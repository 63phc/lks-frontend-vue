<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      LastPosts
    Instagram.inst
    Footer
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
export default {
  components: {
    TopHeader,
    NavBar,
    Footer,
    LastPosts
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
</style>
