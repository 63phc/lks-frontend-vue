<template>
  <div class="slider">
    <transition-group name="slides">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="slide" 
        :style="`background-image: url(${slide.image_src})`"
        v-show="currentSlide == index"
      >
        <div class="buttons">
          <div class="btn" @click="prevSlide">
            <img src="/images/left-arrow.svg" alt="<">
          </div>
          <div class="btn" @click="nextSlide">
            <img src="/images/right-arrow.svg" alt=">">
          </div>
        </div>
        <div class="side"> 
          <div class="circle">
            <div>
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.subtitle }}</p>
            </div>
          </div>
          <div class="rect"></div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
export default {
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
@import '../assets/globals.scss';

.slides-enter-active,
.slides-leave-active {
  transition: opacity 0.5s;
}

.slides-enter, .slides-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 20px;
  background: #3e4148;
  color: white;
  font-weight: bold;
  line-height: 0.5;
  font-size: 20px;
  margin-left: 10px;
  border-radius: 100%;
}
.buttons {
  display: flex;
  margin-bottom: 10px;
  align-self: flex-end;
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
    padding-top: 20%;
    padding-left: 20%;
  }
}
.rect {
  background: $color-main;
  width: 100%;
}
</style>
