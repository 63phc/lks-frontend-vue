<template lang="pug">  
  div.reviews
    h2 Последние отзывы
    .r
      ReviewCard
      ReviewCard
</template>

<script lang="ts">
import ReviewCard from '../components/ReviewCard.vue'
export default {
  components: {
    ReviewCard
  }
}
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
