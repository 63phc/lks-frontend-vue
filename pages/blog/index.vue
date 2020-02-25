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

        p(@click="seeMore").lks-see-more Смотреть еще
    Footer
</template>

<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import BlogSlider from '../../components/BlogSlider.vue'
import PostCard from '../../components/PostCard.vue'
import NavBar from '../../components/NavBar.vue'
import * as API from '../../assets/api.ts'
export default {
  components: {
    TopHeader,
    Footer,
    BlogSlider,
    NavBar,
    PostCard
  },
  async mounted() {
    this.posts = await API.getPosts(10, this.offset)
    this.offset = 10
    this.$forceUpdate()
  },
  methods: {
    async seeMore() {
      this.posts = await API.getPosts(10 + this.offset, 0)
      this.offset += 10
    }
  },
  data() {
    return {
      posts: [],
      offset: 0
    }
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
