<template lang="pug">
  .section__content__component
    img(src="../assets/images/OtherImg.png", alt="alt").content__bg__img__right
    img(src="../assets/images/OtherImg.png", alt="alt").content__bg__img__left
    .section__content
      .section__content__title__wrap
        h2.section___content__title {{ newsData.title }}
      .blog__author
        .content__data__author
          p.content__data
           span.content__data__time {{ newsData.created_at }}<br> {{ time }}
          p.content__author(v-if="newsData.author") <span class="author__txt">Автор:</span> {{ newsData.author }}
        .blog__author__txt__wrap(v-html="newsData.content")
</template>

<script>
export default {
  props: {
    // TODO: Здесь приходит объект с данными, по этой ссылку приходит
    // http://dev.backend.littleknitsstory.com/api/posts/1/ вот тут пример этого объекта
    // вместо картинок и текста вставить просто v-html newsData.content
    newsData: {}
  },
  data() {
    return {
      time: '12: 30'
    }
  }
}
</script>

<style lang="scss" scoped>
.section__content__component {
  position: relative;
  .content__bg__img__right {
    position: absolute;
    right: 328px;
    @include lg {
      right: 0;
    }
    @include md {
      right: 50px;
    }
  }
  .content__bg__img__left {
    position: absolute;
    left: 326px;
    top: 300px;
    @include md {
      left: 50px;
      top: 600px;
    }
  }
  .section__content {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: $widthContainer2;
    &_title {
      @include md {
        line-height: $lineHeight1;
      }
    }
    @include lg {
      padding: 0 50px;
      &__title {
        line-height: $lineHeight3;
      }
    }
    @include md {
      padding: 0 40px;
    }
    @include xs {
      padding: 0 10px;
    }
  }
  .blog__author__txt__wrap {
    padding: 0 50px;
    margin-bottom: 40px;
    width: 100%;
    text-align: justify;
  }
  .content__author {
    font-size: $fontSize1;
  }
  .content__data {
    color: $neutral;
    margin-bottom: 15px;
    @include lg {
      margin-bottom: 5px;
    }
    &__author {
      margin-left: 56px;
      margin-bottom: 24px;
      line-height: 24px;
      @include lg {
        font-size: $fontSize1;
      }
      @include md {
        margin: 0 0 20px;
      }
    }
    @include md {
      margin: 0 0 10px;
      font-size: $fontSize1;
      line-height: $lineHeight1;
    }
  }
  .section__content__title__wrap {
    padding: 0 40px;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
    line-height: $lineHeight4;
    @include md {
      line-height: $lineHeight1;
    }
  }
  .blog__author {
    position: relative;
    font-size: $fontSize4;
    &__txt {
      line-height: $lineHeight3;
      font-family: $ffHelv;
      @include lg {
        padding: 0 20px;
        font-size: $fontSize2;
      }
      @include md {
        font-size: $fontSize1;
        line-height: $lineHeight2;
        &__wrap {
          padding: 0;
        }
      }
    }
    &__img__wrap {
      width: 100%;
      margin-bottom: 24px;
    }
    &__img {
      width: 100%;
    }
    &__top__txt {
      margin-bottom: 50px;
      @include md {
        margin: 0 0 20px;
      }
    }
    &__comment {
      margin-bottom: 16px;
      width: 100%;
      text-align: left;
      @include lg {
        font-size: $fontSize3;
      }
      @include md {
        font-size: $fontSize2;
      }
    }
  }
  .author__img__bottom__wrap {
    margin-bottom: 12px;
  }
  .other__blogs__author__title {
    margin-bottom: 16px;
    line-height: $lineHeight3;
    @include md {
      line-height: $lineHeight2;
    }
  }
}
</style>
