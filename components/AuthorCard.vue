<template lang="pug">
  Card.author-card.lks-card-floating
    img(src="/images/circles.svg").circles
    div(:style="`background-image: url(${author.avatar})`").author-img
    h2 
      | Об
      br 
      | авторе
    .social
      div(v-if="author.vk_profile")
        img(src="/images/logo-vk.svg")
      div(v-if="author.vk_profile")
        img(src="/images/logo-facebook.svg")
      div(v-if="author.vk_profile")
        img(src="/images/logo-instagram.svg")
      div(v-if="author.vk_profile")
        img(src="/images/logo-telegram.svg")
    .bottom
      b {{ `${author.first_name} ${author.last_name}` }}
      p {{ author.about }}
</template>

<script lang="ts">
import { Author } from '../assets/models.ts'

export default {
  props: {
    author: Author
  }
}
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
    @media screen and (max-width: 800px) {
      left: 70px;
    }
  }
  .author-img {
    position: absolute;
    right: -20%;
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
