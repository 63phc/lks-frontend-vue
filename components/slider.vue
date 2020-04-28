<template lang="pug">
  .slider
    .slider__wrap(ref="sliderWrap")
      ul.slider__line(ref="sliderLine")
        li.slider__line__item(v-for="item of news")
          SliderBlock.slide(:slideData="item")
</template>

<script lang="JavaScript">
import SliderBlock from '~/components/pages/blog/sliderBlock.vue'

export default {
  components: {
   SliderBlock
  },
  data () {
    return {
      offset: 0,
      news: []
    }
  },
  // такуюже offset = x
  mounted() {
    this.createSlider()
    window.addEventListener('resize', this.resize)
    this.getData()
  },
  destroyed() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    getData() {
      fetch('http://dev.backend.littleknitsstory.com/api/posts/',{
        method: 'GET'
      }).then((response) => {
              /* eslint-disable */
        return response.json()
      }).then((json) => {
        this.news=json
        this.createSlider()
      })
    },
    // вынести в блоg
    //создать data
    createSlider () {
      const { prev, next, sliderLine, sliderWrap } = this.$refs
      const lineWidth = sliderWrap.offsetWidth + 40;
      const slidesCount = this.news.length - 1;
      let { offset } = this

      function prevHandler() {
        if (offset < 0) {
          offset = offset + lineWidth;
          sliderLine.style.left = offset +'px';
        }
      }

      function nextHandler() {
        console.log(lineWidth)
        if (offset <= -(slidesCount*lineWidth)) {
            return;
        }
        offset = offset - lineWidth;
        sliderLine.style.left = offset + 'px';
      }

      prev.onclick = prevHandler
      next.onclick = nextHandler
    },
    resize(){
      /* eslint-disable */
       this.createSlider();
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 100%;
  max-width: $widthContainer1;
  &__wrap {
    overflow: hidden;
  }
  &__line {
    display: flex;
    position: relative;
    transition: all ease 1s;
    left: 0;
    &__item {
      margin-right: 40px;
      width: 100%;
      flex-shrink: 0;
      &:last-child {
        margin-right: 0;
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
}
</style>
