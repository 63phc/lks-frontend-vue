<template lang="pug">
  client-only
    Card.post-card
      nuxt-link(:to="localePath('/blog/'+post.slug)").card-ov
        .thumbnail(:style='`background-image: url("${post.image_preview}");`')
        .post-info
          p.post-date
            small {{ post.created_at }}
          p.post-caption
            strong {{ post.title }}
          p.post-text {{ post.content.replace(/<\/?[^>]+(>|$)/g, "").split(" ").slice(0, 25).join(" ") }}...
          .lks-flex.lks-flex-jcc.read-more
            nuxt-link(:to="localePath('/blog/'+post.slug)")
              Button.lks-btn-main.lks-mod-text-center {{ $t('blog.read') }}
</template>

<script lang="ts">
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import * as models from '../assets/models'
import { Prop, Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Button,
    Card
  }
})
export default class PostCard extends Vue {
  @Prop({ required: true })
  post!: models.Post
}

Vue.component("PostCard", PostCard)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

.post-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: 0.5s box-shadow;
  position: relative;
  .card-ov {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }
  .read-more {
    visibility: hidden;
    position: absolute;
    bottom: 10px;
    background: white;
    padding-top: 10px;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.3s opacity;
  }
  &:hover {
    .read-more {
      visibility: visible;
      opacity: 1;
    }
    border-radius: 10px;
    box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.1);
  }
  .post-info {
    padding: 10px;
    max-height: 300px;
    overflow: hidden !important;
    overflow: auto;
  }
  .thumbnail {
    background-size: cover;
    background-position: center;
    margin: -10px;
    min-height: 200px;
    flex: 1;
  }
  .post-date {
    font-size: 12px;
    color: $color-shaded;
    line-height: 17px;
  }
  .post-caption {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    color: $color-text;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .post-text {
    max-height: 200px;
    font-size: 18px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 25px;
    color: $color-text;
  }
}
</style>
