<template lang="pug">
  section
    .ct
      GoodCard(
        image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
        date="2019 Jan 12"
        text="Hello world"
        caption="Top text"
      )
      GoodCard(
        image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
        date="2019 Jan 12"
        text="Hello world"
        caption="Top text"
      )
      GoodCard(
        image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
        date="2019 Jan 12"
        text="Hello world"
        caption="Top text"
      )
      GoodCard(
        image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
        date="2019 Jan 12"
        text="Hello world"
        caption="Top text"
      )
</template>

<script lang="ts">
import GoodCard from '../components/GoodCard.vue'
import AuthorCard from '../components/AuthorCard.vue'
export default {
  components: {
    GoodCard,
    AuthorCard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';
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
