<template lang="pug">
  Card.post-card
    .thumbnail(:style='`background-image: url(${image});`')
    .post-info
      p.post-date
        small {{ post.created_at }}
      p.post-caption
        strong {{ post.title }}
      p.post-text {{ post.content.replace(/<\/?[^>]+(>|$)/g, "").split(" ").slice(0, 25).join(" ") }}...
      .lks-flex.lks-flex-jcc.read-more
        Button.lks-btn-main.lks-mod-text-center Читать
</template>

<script lang="ts">
import Button from '../components/Button.vue'
import Card from '../components/Card.vue'
import { Post } from '../assets/models.ts'
export default {
  props: {
    post: Post
  },

  components: {
    Button,
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

.post-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: 0.5s box-shadow;
  .read-more {
    visibility: hidden;
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
    overflow: auto;
  }
  .thumbnail {
    background-size: cover;
    background-position: center;
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
    font-size: 18px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 25px;
    color: $color-text;
  }
}
</style>
