<template lang="pug">
  Card.review-card.lks-card-floating
    img(src="/images/circles.svg").circles
    div(:style="`background-image: url(${review.image_preview});`").good-img
    h2 
      | {{ review.title }}
    StarRating(:amount="review.rating").stars
    p {{ review.comment }}
    br
    small {{ $t('blog.author') }}
    br
    strong {{ review.author }}


</template>

<script lang="ts">
import StarRating from './StarRating.vue'
import * as models from '../assets/models'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    StarRating
  }
})
export default class ReviewCard extends Vue {
  @Prop({ required: true })
  review!: models.Review
}

Vue.component("ReviewCard", ReviewCard)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

.review-card {
  height: 300px;
  padding: 20px;
  background: $color-main;
  color: #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
  p {
    width: 60%;
    font-size: 20px;
    max-height: 150px;
    overflow: auto;
    text-align: justify;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .stars {
    line-height: 2;
  }
  .circles {
    right: -50px;
    position: absolute;
    z-index: -2;
  }
  .good-img {
    position: absolute;
    right: -10%;
    top: 10%;
    z-index: -1;
    width: 15vw;
    height: 15vw;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 100%;
    background-size: cover;
  }
  b {
    text-align: center;
  }
}
</style>
