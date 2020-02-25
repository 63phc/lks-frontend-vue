<template lang="pug">
  .slider
    transition-group(name='slides')
      .slide.lks-flex(v-for='(post, index) in posts', v-show='currentPost == index', :key='index')
        .image(:style="`background-image: url(${post.image_preview})`")
        article.content.lks-flex.lks-flex-col
          h1.title.lks-heading {{ post.title }}
          small.date.lks-date 
            | {{ post.created_at }}
          p.text.lks-paragraph {{ post.content.replace(/<\/?[^>]+(>|$)/g, "").split(" ").slice(0, 100).join(" ") }}...
          address.author.lks-author
            b Автор:
            |  {{ post.author_name }}
          .controls.lks-flex.lks-flex-jcsb.lks-flex-aic
            .indicator.lks-flex
              div(v-for="(point, pointIndex) in posts")
                .lks-slider-dot.dot(:class="(currentPost === pointIndex) ? 'lks-slider-dot-selected' : ''")
            .lks-flex
              .arrows.lks-flex.lks-flex-aic
                .arrow.lks-mod-pointer.lks-roundpad.shade-left(@click="prevSlide")
                  img(src="/images/blog-slider-arrow-left.svg")
                .arrow.lks-mod-pointer.lks-roundpad.shade-right(@click="nextSlide")
                  img(src="/images/blog-slider-arrow-right.svg")
              nuxt-link(:to="'/blog/'+post.slug")
                Button.lks-btn-main.lks-mod-center Читать
</template>

<script lang="ts">
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentPost: 1
    }
  },
  methods: {
    prevSlide() {
      this.currentPost -= 1
      if (this.currentPost < 0) this.currentPost = this.posts.length - 1
    },
    nextSlide() {
      this.currentPost += 1
      if (this.currentPost >= this.posts.length) this.currentPost = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');

.slides-enter-active,
.slides-leave-active {
  transition: opacity 0.5s;
}

.slides-enter, .slides-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slider {
  height: 40vh;
  .text {
    overflow: auto;
  }
  .slide {
    position: absolute;
    height: 40vh;
    .image {
      flex: 1;
      background-size: cover;
      @media screen and(max-width: 550px) {
        display: none;
      }
    }
    .content {
      flex: 2;
      margin: 40px;
      .title {
        width: 50%;
        min-width: 200px;
      }
      .date {
        margin-bottom: 10px;
      }
      .author {
        margin: 20px 0;
      }
      .controls {
        .indicator {
          @media screen and(max-width: 400px) {
            display: none;
          }
          .dot {
            margin: 0 2px;
          }
        }
        .arrows {
          margin-right: 10%;
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
        }
      }
    }
  }
}
</style>