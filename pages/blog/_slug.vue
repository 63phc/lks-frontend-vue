<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container(v-if="post !== null")
      .lks-container
        h1.lks-heading.lks-mod-text-center {{ post.title }}
        small.lks-date
          | {{ post.created_at }}
        address.author.lks-author
          b Автор:
          |  {{ post.author_name }}
        article.lks-paragraph(v-html='post.content')
      h1.lks-heading &nbsp; Предложенные посты
      .suggested-articles
        .post(v-for="suggestedPost in suggestedPosts")
          PostCard(:post="suggestedPost")

    Footer
</template>

<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import PostCard from '../../components/PostCard.vue'
import * as API from '../../assets/api.ts'

export default {
  components: {
    TopHeader,
    NavBar,
    Footer,
    PostCard
  },
  async mounted() {
    this.post = await API.getPost(this.$route.params.slug)
    this.suggestedPosts = await API.getPosts(4, 0)
  },
  data() {
    return {
      post: null,
      suggestedPosts: []
    }
  },

  validate({ params }) {
    return true
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
article {
  img {
    width: 100%;
  }
}
.suggested-articles {
  .post {
    display: inline-flex;
    margin: 10px;
    width: 32%;
    width: calc(33% - 20px);
    min-width: 200px;
    @media screen and (max-width: 1032px) {
      width: calc(50% - 20px);
    }
    @media screen and (max-width: 689px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
}
article {
  margin-bottom: 60px;
}
</style>
