<template lang="pug">
  .container
    img(src="../../assets/images/HeaderBgImg.png", alt="alt").bg__img__top
    vHeader
    breadCrumbs
    vSectionContent(v-if="newsData" :newsData="newsData")
    section.other__blogs
      h3.other__blogs__title Другие блоги
      ul.other__blogs__list
        listCard.other__blogs__list__card(v-for="item of news" :key="item.id" :cardData="item")
    vFooter
    
</template>

<script>
import vHeader from '~/components/header/index.vue'
import vSectionContent from '~/components/sectionContent.vue'
import listCard from '~/components/pages/blog/listCard.vue'
import breadCrumbs from '~/components/pages/blog/breadCrumbs.vue'
import vFooter from '~/components/footer/index.vue'

export default {
  components: {
    vHeader,
    vSectionContent,
    listCard,
    breadCrumbs,
    vFooter
  },
  data() {
    return {
      newsData: {},
      news: []
    }
  },
  mounted() {
    this.getData()
    this.getList()
  },
  methods: {
    getData() {
      const { id } = this.$route.params
      // eslint-disable-next-line no-console
      console.log(this.$route)
      fetch(`http://dev.backend.littleknitsstory.com/api/posts/${id}`, {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.newsData = json
        })
    },
    getList() {
      const { id } = this.$route.params

      fetch('http://dev.backend.littleknitsstory.com/api/posts/', {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(json => {
          const filteredJson = json.filter(el => {
            return el.id !== Number(id)
          })
          this.news = filteredJson
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  .bg__img__top {
    position: absolute;
    right: 220px;
    z-index: -1;
    @include md {
      top: 40px;
      right: 50px;
    }
  }
  .other__blogs {
    margin: 0 auto;
    width: 100%;
    max-width: 1110px;
    @include lg {
      max-width: 700px;
    }
    @include md {
    }
  }
  .other__blogs__list {
    margin: 0 -15px;
    display: flex;
    flex-wrap: wrap;
    &__card {
      width: 33.33%;
      padding: 0 15px;
      margin-bottom: 32px;
      @include md {
        width: 100%;
      }
    }
    @include lg {
      margin: 0 -25px;
    }
    @include md {
      margin: 0;
      padding: 0 10px;
    }
  }
  .other__blogs__title {
    margin-bottom: 24px;
    @include lg {
      text-align: center;
    }
    @include md {
      text-align: center;
    }
  }
}
</style>
