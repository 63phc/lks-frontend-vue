<template lang="pug">
  section.container
    PostCard(
      image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
      date="2019 Jan 12"
      text="Hello world sjfdkjskdf jksdfj ksjdfk jskfj"
      caption="Bepsu"
    )
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
export default {
  components: {
    PostCard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';
section {
  height: 300px;
  display: flex;
  & > * {
    flex: 1;
  }
}
</style>
