<template lang="pug">
  section
    h2 ПОСЛЕДНИЕ ПОСТЫ
    .patch-top
      img(src="/images/patch.svg")
    .patch-bottom
      img(src="/images/patch.svg")
    .ct
      AuthorCard.author(
        image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
        date="2019 Jan 12"
        text="Hello world sjfdkjskdf jksdfj ksjdfk jskfj"
        caption="Bepsu"
      )
      .posts
        PostCard(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )
        PostCard(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )
</template>

<script lang="ts">
import PostCard from '../components/PostCard.vue'
import AuthorCard from '../components/AuthorCard.vue'
export default {
  components: {
    PostCard,
    AuthorCard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';
section {
  position: relative;
  .patch-top {
    z-index: -2;
    position: absolute;
    top: -40px;
    right: -30px;
  }
  .patch-bottom {
    z-index: -2;
    position: absolute;
    bottom: -40px;
    left: -30px;
  }
  .ct {
    min-height: 429px;
    display: flex;
    @media screen and (max-width: 800px) {
      flex-direction: column;
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
  .posts {
    flex: 4;
    display: flex;
    & > * {
      margin: 10px;
      flex: 2;
    }
  }
}
</style>
