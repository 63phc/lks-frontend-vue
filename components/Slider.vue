<template lang="pug">
  .slider
    transition-group(name='slides')
      .slide(v-for='(slide, index) in slides', v-show='currentSlide == index', :key='index', :style='`background-image: url(${slide.image_src})`')
        .buttons
          .btn-nav(@click='prevSlide')
            img(src='/images/left-arrow.svg', alt='<')
          .btn-nav(@click='nextSlide')
            img(src='/images/right-arrow.svg', alt='>')
        .side
          .circle
            div
              h1 {{ slide.title }}
              p {{ slide.subtitle }}
              nuxt-link(:to="localePath('/shop')").btn-shop
                ButtonIcon(icon='/images/shopping-cart.svg') {{ $t('main.slider_catalog')}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ButtonIcon from './ButtonIcon.vue'
import * as models from '../assets/models'

@Component({
  components: {
    ButtonIcon
  }
})
export default class Slider extends Vue {
  @Prop({ required: true })
  slides!: Array<models.Slide>

  currentSlide: number = 0
  
  prevSlide() {
    this.currentSlide -= 1
    if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1
  }

  nextSlide() {
    this.currentSlide += 1
    if (this.currentSlide >= this.slides.length) this.currentSlide = 0
  }
}

Vue.component('Slider', Slider)
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
  height: 60vh;
  @media screen and (max-height: 550px) {
    height: 90vh;
  }
}

.slide {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  height: 60vh;
  @media screen and (max-height: 550px) {
    height: 90vh;
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-between;
}

.btn-nav {
  padding: 20px;
  background: #3e4148;
  color: white;
  font-weight: bold;
  line-height: 0.5;
  font-size: 20px;
  margin-left: 10px;
  border-radius: 100%;
  cursor: pointer;
}
.buttons {
  display: flex;
  margin-left: 40px;
  margin-bottom: 10px;
  align-self: flex-end;
}
.btn-shop {
  display: flex;
  justify-content: flex-end;
}
.side {
  width: 50vw;
  display: flex;
}
.circle {
  align-self: center;
  background: $color-main;
  height: 150%;
  display: flex;
  align-items: center;
  width: 200vw;
  position: relative;
  border-radius: 100% 0 0 100%;
  color: white;
  & > div {
    height: 66.66666%;
    width:90%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-left: 20%;
    h1 {
      font-family: 'Pacifico', serif;
    }
    p {
      margin: 40px 0px;
      line-height: clamp(100%, 2vw, 200%);
      font-size: 20px;
    }
  }
}
.rect {
  background: $color-main;
  width: 100%;
}

@media screen and (max-width: 637px) {
  .buttons {
    display: none;
  }
  .side {
    width: 100vw;
  }
  .circle {
    width: 100vw;
  }
}
</style>
