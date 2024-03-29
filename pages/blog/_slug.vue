<template lang="pug">
  div
    TopHeader
    NavBar(:links="links")
    .lks-container(v-if="post !== null")
      .lks-breadcrumb
        .lks-breadcrumb-path
          nuxt-link(:to="localePath('/')")
            | {{ $t('breadcrumbs.index') }} / 
          nuxt-link(:to="localePath('/blog')") 
            | {{ $t('breadcrumbs.blog') }} / 
          | {{ $t('breadcrumbs.article' )}}
      .lks-container
        h1.lks-heading.lks-mod-text-center {{ post.title }}
        small.lks-date
          | {{ post.created_at }}
        address.author.lks-author
          b {{ $t('blog.author') }}:
          |  {{ post.author_name }}
        article.lks-paragraph(v-html='post.content')
      h1.lks-heading &nbsp; {{ $t('blog.suggested') }}
      .suggested-articles
        .post(v-for="suggestedPost in suggestedPosts")
          PostCard(:post="suggestedPost")

    Footer(:links="links")
</template>

<script lang="ts">
import * as API from '../../assets/api'
import { Component, Vue } from 'nuxt-property-decorator'
import * as models from '../../assets/models'
import TopHeader from '../../components/TopHeader.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import PostCard from '../../components/PostCard.vue'

@Component({
  components: {
    TopHeader,
    NavBar,
    PostCard,
    Footer
  }
})
export default class BlogSlug extends Vue {
  post!: models.Post
  suggestedPosts: Array<models.Post> = []
  links: Array<models.MenuEntry> = []

  async asyncData({ params }: any) {
    return {
      links: await API.getMenuEntries(),
      suggestedPosts: await API.getPosts(4, 0),
      post: await API.getPost(params.slug)
    }
  }

  async mounted() {
    this.$forceUpdate()
  }

  validate({ params }: any) {
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
