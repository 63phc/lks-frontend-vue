<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
    .lks-container
      LastPosts
    Instagram.inst
    Footer(:links="links")
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import * as API from '../assets/api'
import * as models from '../assets/models'
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
export default class Authors extends Vue {
  links: Array<models.MenuEntry> = []
  async asyncData() {
    return {
      links: await API.getMenuEntries(),
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
