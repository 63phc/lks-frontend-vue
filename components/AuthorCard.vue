<template lang="pug">
  Card.author-card.lks-card-floating
    img(src="/images/circles.svg").circles
    div(:style="`background-image: url(${author.avatar})`").author-img
    h2 
      | {{ $t('blog.about') }}
    .social
      a(v-if="author.vk_profile" :href="author.vk_profile.link")
        img(src="/images/logo-vk.svg")
      a(v-if="author.fb_profile" :href="author.fb_profile.link")
        img(src="/images/logo-facebook.svg")
      a(v-if="author.ig_profile" :href="author.ig_profile.link")
        img(src="/images/logo-instagram.svg")
      a(v-if="author.tg_profile" :href="author.tg_profile.link")
        img(src="/images/logo-telegram.svg")
    .bottom
      b {{ `${author.first_name} ${author.last_name}` }}
      p {{ author.about }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Card from './Card.vue'
import * as models from '../assets/models'

@Component({
  components: {
    Card
  }
})
export default class AuthorCard extends Vue {
  @Prop({ required: true })
  author!: models.Author
}

Vue.component('AuthorCard', AuthorCard)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

.author-card {
  padding: 20px;
  background: $color-main;
  color: #fff;
  position: relative;
  z-index: 1;
  h2 {
    text-transform: uppercase;
  }
  .social {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    & > * {
      margin: 20px 0;
      filter: brightness(3);
    }
  }
  overflow: hidden;
  .circles {
    right: -50px;
    position: absolute;
    z-index: -2;
  }
  .bottom {
    font-size: 16px;
    position: absolute;
    bottom: 0;
    max-height: 30%;
    overflow: auto;
    padding: 10px;
    right: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 1000px) {
    min-height: 350px;
  }
  .author-img {
    position: absolute;
    right: -60px;
    top: 10%;
    z-index: -1;
    width: 15vw;
    height: 15vw;
    min-width: 200px;
    min-height: 200px;
    max-width: 300px;
    max-height: 300px;
    border-radius: 100%;
    background-size: cover;
  }
  b {
    text-align: center;
  }
}
</style>
