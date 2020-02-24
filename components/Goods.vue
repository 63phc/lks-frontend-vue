<template lang="pug">
  section
    .ct
      div(v-for="good in goods")
        GoodCard(
          :good="good"
        )
</template>

<script lang="ts">
import GoodCard from '../components/GoodCard.vue'
import AuthorCard from '../components/AuthorCard.vue'
export default {
  props: {
    goods: Array
  },
  components: {
    GoodCard,
    AuthorCard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
section {
  .ct {
    justify-content: center;
    display: flex;
    @media screen and (max-width: 900px) {
      display: block;
      & > * {
        display: inline-flex;
        width: 45%;
      }
    }
    @media screen and (max-width: 670px) {
      display: flex;
      flex-direction: column;
      & > * {
        display: block;
        width: 100%;
      }
    }
    & > * {
      flex: 1;
      margin: 10px;
    }
  }
  h2 {
    margin: 10px;
    margin-bottom: 0;
    line-height: 4;
  }
  .author {
    flex: 1;
    margin: 10px;
  }
}
</style>
