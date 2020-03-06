<template lang="pug">  
  div.reviews
    h2 {{ $t('main.last_reviews')}}
    .r
      ReviewCard
      ReviewCard
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ReviewCard from './ReviewCard.vue'

@Component({
  components: {
    ReviewCard
  }
})
export default class Reviews extends Vue {}

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
