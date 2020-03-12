<template lang="pug">  
  div.reviews
    h2 {{ $t('main.last_reviews')}}
    .r
      div(v-for="review in reviews")
        ReviewCard(:review="review")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ReviewCard from './ReviewCard.vue'
import * as models from '../assets/models'

@Component({
  components: {
    ReviewCard
  }
})
export default class Reviews extends Vue {
  @Prop()
  reviews: Array<models.Review> = []
}

Vue.component('Reviews', Reviews)
</script>

<style lang="scss">
.reviews {
  & > h2 {
    margin: 10px;
    line-height: 3;
  }
  .r {
    display: flex;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    & > * {
      margin: 10px;
      flex: 1;
    }
  }
}
</style>
