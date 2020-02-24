<template lang="pug">
  .slider
    //- transition-group(name='slides')
    .slide.lks-flex <!-- (v-for='(slide, index) in slides', v-show='currentSlide == index', :key='index') -->
      .image(style="background-image: url(https://cdn.fstoppers.com/styles/full/s3/media/2020/01/09/10_values_you_need_to_know_in_landscape_photography04.jpg)")
      article.content.lks-flex.lks-flex-col
        h1.title.lks-heading White shark monkeyface prickleback bluefish kuhli loach; large-e
        small.date.lks-date 
          | 13 ноября 2018 г. 
          br 
          | 17:56
        p.text.lks-paragraph Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. 
        address.author.lks-author
          b Автор:
          |  Катя Анаприенко
        .controls.lks-flex.lks-flex-jcsb.lks-flex-aic
          .indicator.lks-flex
            .lks-slider-dot.dot
            .lks-slider-dot.lks-slider-dot-selected.dot
            .lks-slider-dot.dot
            .lks-slider-dot.dot
          .lks-flex
            .arrows.lks-flex.lks-flex-aic
              .arrow.lks-mod-pointer.lks-roundpad.shade-left
                img(src="/images/blog-slider-arrow-left.svg")
              .arrow.lks-mod-pointer.lks-roundpad.shade-right
                img(src="/images/blog-slider-arrow-right.svg")
            Button.lks-btn-main.lks-mod-center Читать
</template>

<script lang="ts">
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    prevSlide() {
      this.currentSlide -= 1
      if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1
    },
    nextSlide() {
      this.currentSlide += 1
      if (this.currentSlide >= this.slides.length) this.currentSlide = 0
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
  .slide {
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
