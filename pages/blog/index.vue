<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path
          nuxt-link(:to="localePath('/')")
            | {{ $t('breadcrumbs.index') }} /
          | {{ $t('breadcrumbs.blog' )}}
      br
      .featured
        BlogSlider(:posts="posts")
      .posts
        div(v-for="post in posts").post
          PostCard(
            :post="post"
          )

        p(@click="seeMore" v-if="arePostsPaged").lks-see-more {{ $t('misc.see_more') }}
    Footer(:links="links")
</template>

<script lang="ts">
import * as API from '../../assets/api'
import { Component, Vue } from 'nuxt-property-decorator'
import * as models from '../../assets/models'
import BlogSlider from '../../components/BlogSlider.vue'
import PostCard from '../../components/PostCard.vue'
import TopHeader from '../../components/TopHeader.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'


const PAGE_SIZE = 6;

@Component({
  components: {
    BlogSlider,
    PostCard,
    TopHeader,
    NavBar,
    Footer
  }
})
export default class BlogIndex extends Vue {
  links: Array<models.MenuEntry> = []
  posts: Array<models.Post> = []
  offset: number = 0
  arePostsPaged = false

  async mounted() {
    this.offset = PAGE_SIZE
    this.$forceUpdate()
    this.checkPostsPaging()
  }

  async asyncData() {
    return {
      links: await API.getMenuEntries(),
      posts: await API.getPosts(PAGE_SIZE, 0),
    }
  }

  async checkPostsPaging() {
    var posts = await API.getPosts(-1, this.offset)
    this.arePostsPaged = posts.length > 0;
  }

  async seeMore() {
    this.posts = await API.getPosts(PAGE_SIZE + this.offset, 0)
    this.offset += PAGE_SIZE
    this.checkPostsPaging()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
.posts {
  margin-top: 30px;
  .post {
    display: inline-block;
    margin: 10px;
    width: 32%;
    width: calc(33% - 20px);
    min-width: 200px;
    @media screen and (max-width: 825px) {
      width: calc(50% - 20px);
    }
    @media screen and (max-width: 550px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
}
</style>