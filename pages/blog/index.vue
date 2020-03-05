<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .featured
        BlogSlider(:posts="posts")
      .posts
        div(v-for="post in posts").post
          PostCard(
            :post="post"
          )

        p(@click="seeMore").lks-see-more {{ $t('misc.see_more') }}
    Footer
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
  posts: Array<models.Post> = []
  offset: number = 0

  async mounted() {
    this.posts = await API.getPosts(10, this.offset)
    this.offset = 10
    this.$forceUpdate()
  }

  async seeMore() {
    this.posts = await API.getPosts(10 + this.offset, 0)
    this.offset += 10
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
