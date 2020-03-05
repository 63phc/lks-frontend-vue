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
import Instagram from '../components/Instagram.vue'
import LastPosts from '../components/LastPosts.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    LastPosts,
    TopHeader,
    NavBar,
    Instagram,
    Footer
  }
})
export default class Authors extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
</style>
