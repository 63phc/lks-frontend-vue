<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .featured
        BlogSlider
      .posts
        PostCard.post(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )
        PostCard.post(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )
        PostCard.post(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )
        PostCard.post(
          image="https://rosinevolution.com/wp-content/uploads/2017/09/rosin-collection-paper.jpg"
          date="2019 Jan 12"
          text="Hello world"
          caption="Top text"
        )

        p.lks-see-more Смотреть еще
    Footer
</template>

<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'
import Footer from '../../components/Footer.vue'
import BlogSlider from '../../components/BlogSlider.vue'
import PostCard from '../../components/PostCard.vue'
import NavBar from '../../components/NavBar.vue'

export default {
  components: {
    TopHeader,
    Footer,
    BlogSlider,
    NavBar,
    PostCard
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
.posts {
  margin-top: 30px;
  .post {
    display: inline-flex;
    margin: 10px;
    width: 32%;
    width: calc(33% - 20px);
    min-width: 200px;
    @media screen and (max-width: 825px) {
      width: calc(50% - 20px);
    }
    @media screen and (max-width: 550px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
}
</style>
