<template lang="pug">
  section
    slot
    .patch-top
      img(src="/images/patch.svg")
    .patch-bottom
      img(src="/images/patch.svg")
    .ct
      AuthorCard.author(:author="author")
      .posts
        div(v-for="post in posts.slice(0, 2)")
          PostCard(:post="post")

        
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as models from '../assets/models'
import AuthorCard from './AuthorCard.vue'
import PostCard from './PostCard.vue'

@Component({
  components: {
    AuthorCard,
    PostCard
  }
})
export default class LastPosts extends Vue {
  @Prop({ required: true })
  author!: models.Author
  @Prop({ required: true })
  posts!: Array<models.Post>
}

Vue.component("LastPosts", LastPosts)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
section {
  position: relative;
  .patch-top {
    z-index: -2;
    position: absolute;
    top: -40px;
    right: -30px;
  }
  .patch-bottom {
    z-index: -2;
    position: absolute;
    bottom: -40px;
    left: -30px;
  }
  .ct {
    min-height: 429px;
    display: flex;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 600px) {
      .posts {
        flex-direction: column;
      }
    }
  }
  h2 {
    margin: 10px;
    margin-bottom: 0;
    line-height: 4;
  }
  .author {
    flex: 1.3;
    margin: 10px;
    min-width:250px;
  }
  .posts {
    flex: 4;
    display: flex;
    & > * {
      margin: 10px;
      flex: 2;
    }
  }
}
</style>
