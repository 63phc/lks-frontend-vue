<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .lks-container
        h1.lks-heading.lks-mod-text-center Hello world
        small.lks-date
          | 13 ноября 2018 г
          br
          | 17:56
        address.author.lks-author
          b Автор:
          |  Катя Анаприенко
        article.lks-paragraph(v-html='text')
      .suggested-articles
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
    Footer
</template>

<script lang="ts">
import TopHeader from '../../components/TopHeader.vue'

import NavBar from '../../components/NavBar.vue'

import Footer from '../../components/Footer.vue'

import PostCard from '../../components/PostCard.vue'

export default {
  data() {
    return {
      text:
        '<p><img alt="" src="/media/uploads/2020/01/06/img_8351.jpg" style="border-style:solid; border-width:10px; height:200px; width:200px" /></p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
    }
  },

  components: {
    TopHeader,
    NavBar,
    Footer,
    PostCard
  },

  validate({ params }) {
    return true
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/lks-fw/lks-fw.scss';
article {
  img {
    width: 100%;
  }
}
.suggested-articles {
  .post {
    display: inline-flex;
    margin: 10px;
    width: 32%;
    width: calc(33% - 20px);
    min-width: 200px;
    @media screen and (max-width: 1032px) {
      width: calc(50% - 20px);
    }
    @media screen and (max-width: 689px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
}
</style>
