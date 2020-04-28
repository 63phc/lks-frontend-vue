  <template lang="pug">
    li.other__blog__card__item
      .other__blog__card__content
        .other__blog__card__img__wrap
          img(src="../../../assets/images/otherBlogs.png", alt="alt").other__blog__card__img
        p.other__blog__card__data {{ cardData.created_at }}
        .other__blog__card__txt__wrap
          p.other__blog__card__title {{ cardData.title }}
          p.other__blog__card__txt__wrap(v-html="cardData.content") 
        .button__wrap
          nuxt-link.card__button(:to="`/blog/${cardData.id}`") Читать
</template>

<script>
export default {
  props: {
    cardData: {}
  }
}
</script>

<style lang="scss" scoped>
.other__blog__card__item {
  @include md {
    margin-bottom: 40px;
  }
  &:hover {
    .button__wrap {
      .card__button {
        display: inline-block;
        opacity: 1;
      }
    }
  }
  .button__wrap {
    display: flex;
    justify-content: center;

    .card__button {
      padding: 11px 46px;
      display: block;
      background: #e0c0c3;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      border-radius: 30px;
      font-size: $fontSize3;
      margin: 0 auto;
      color: $white;
      letter-spacing: 1px;
      font-family: Helvetica;
      opacity: 0;
    }
  }
  .other__blog__card__content {
    padding-bottom: 16px;
    &:hover {
      box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
    }
  }
  .other__blog__card__img {
    width: 100%;
    @include md {
      width: 70%;
    }
  }
  .other__blog__card__img__wrap {
    margin-bottom: 16px;
    @include md {
      width: auto;
      display: flex;
      justify-content: center;
    }
  }
  .other__blog__card__txt__wrap {
    overflow: hidden;
    max-height: 190px;
    margin-bottom: 24px;
    font-size: $fontSize3;
    line-height: 25px;
    text-align: center;
    padding: 0 12px;
    @include md {
      font-size: $fontSize1;
    }
  }
  .other__blog__card__data {
    margin-left: 12px;
    margin-bottom: 16px;
    color: $neutral;
  }
  .other__blog__card__title {
    margin-bottom: 16px;
    font-weight: bold;
    @include md {
      font-size: $fontSize2;
    }
  }
}
</style>
