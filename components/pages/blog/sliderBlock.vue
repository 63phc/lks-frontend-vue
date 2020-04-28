<template lang="pug">
  .slider__blog
    .slider__blog__img__wrap
      img(src="../../../assets/images/blogslider.png",).slider__img
    .slider__blog__content
      .slider__blog__title__wrap
        h2.slider__blog__title {{slideData.title}}
      .slider__blog__txt__wrap
        p.slider__blog__txt__data {{slideData.created_at}}<br>
         <span class="slider__data__time">{{time}}</span>
        p.slider__blog__txt(v-html="slideData.content")
        p.slider__blog__author <span class="slider__author__txt">Автор:</span> {{author}}
      .button__slide__wrap
        a.slide__button(:href="`/blog/${slideData.id}`") Читать
</template>

<script>
export default {
  props: {
    slideData: {}
  },
  data() {
    return {
      time: '17:59',
      author: 'Катя Анаприенко'
    }
  }
}
</script>

<style lang="scss" scoped>
.slider__blog {
  margin-bottom: 40px;
  display: flex;
  color: black;
  @include md {
    display: flex;
    flex-direction: column;
  }
  .slider__blog__img__wrap {
    margin-right: 58px;
    display: flex;
    justify-content: center;
    @include md {
      margin: 0;
    }
    .slider__img {
      display: block;
      object-fit: cover;
      @include md {
        height: 300px;
      }
    }
  }
  .slider__blog__content {
    .button__slide__wrap {
      display: flex;
      justify-content: flex-end;
      .slide__button {
        background: #e0c0c3;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        padding: 11px 46px;
        font-size: $fontSize3;
        color: $white;
      }
    }
    .slider__blog__title__wrap {
      margin-bottom: 10px;
      max-width: 438px;
      width: 100%;
      line-height: $lineHeight4;
    }
    .slider__blog__author {
      font-size: $fontSize1;
      .slider__author__txt {
        font-weight: bold;
      }
    }
    .slider__blog__txt__wrap {
      margin-bottom: 30px;
      width: 100%;
      font-size: $fontSize4;
      line-height: 28px;
      text-align: justify;
      .slider__blog__txt {
        margin-bottom: 17px;
      }
      .slider__blog__txt__data {
        margin-bottom: 16px;
        display: block;
        font-size: $fontSizesm;
        color: $neutral;
        line-height: 17px;
      }
    }
  }
}
</style>
