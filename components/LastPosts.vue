<template lang="pug">
  client-only
    div
      slot
      section
        .patch-top
          img(src="/images/patch.svg")
        .patch-bottom
          img(src="/images/patch.svg")
        .ct
          AuthorCard.author(:author="author")
          div.posts-wrapper
            .posts
              div(v-for="post in posts.slice(0, 10)" :style="`transform: translateX(${-slide*100}%) translateX(${-slide*20}px);`")
                PostCard(:post="post")

            .controls
              .arrows.lks-flex.lks-flex-aic
                .arrow.lks-mod-pointer.lks-roundpad.shade-left(@click="slide -= 1")
                  img(src="/images/blog-slider-arrow-left.svg")
                .arrow.lks-mod-pointer.lks-roundpad.shade-right(@click="slide += 1")
                  img(src="/images/blog-slider-arrow-right.svg")

            .overlay


</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
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
  slide: Number = 0

  @Watch('slide')
  watchSlide()
  {
    if (this.slide > 10-3) this.slide = 8;
    if (this.slide < 0) this.slide = 0;
  }
}

Vue.component("LastPosts", LastPosts)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
h2 {
  margin: 10px;
  margin-bottom: 0;
  color: #545353;
  font-size: 18px;
  line-height: 4;
}
.posts-wrapper {
  display: flex;
}
section {
  display: flex;
  position: relative;

  .patch-top {
    z-index: -10;
    position: absolute;
    top: -40px;

    right: -30px;
  }
  .patch-bottom {
    z-index: -2;
    position: absolute;
    bottom: -40px;
    left: -20px;
  }
  .ct {
    position: relative;
    margin-bottom: 30px;
    min-height: 500px;
    overflow:hidden;
    display: flex;

    .overlay {
      z-index: 30;
      position: absolute;
      left: 90%;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(to right, transparent, #fff);
    }
    .controls {
      position: absolute;
      right: 5px;
      bottom: 5px;
      z-index: 1000;
    }
    @media screen and (max-width: 850px) {
      margin: 0 -5%;
      flex-direction: column;

      .author {
        margin: 0 30px;
      }
      .posts-wrapper {
        margin: 0 30px;
      }
      .posts div {
        max-height: 450px;
      }
      .controls {
        margin-bottom: 60px;
      }
      .overlay {
        display: none;
      }
    }

  }

  .author {
    flex: 1.3;
    margin: 10px;
    min-width:250px;
  }
  .posts {
    position: relative;
    flex: 4;
    overflow: hidden;
    display: flex;
    & > * {
      transition: 1s transform;
      background: white;
      min-width: 300px;
      max-height: 460px;
      margin: 10px;
      flex: 2;
      height: 100%;
    }
  }
  .controls
  {
    display: flex;
    align-self: flex-end;
  }
}
.arrow {
  &.shade-right {
    background: linear-gradient(
      to right,
      transparent 50%,
      #e5e5e5 50%
    );
  }

  &.shade-left {
    background: linear-gradient(
      to left,
      transparent 50%,
      #e5e5e5 50%
    );
  }
}
</style>
