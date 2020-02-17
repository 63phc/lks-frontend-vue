<template lang="pug">
  Card.author-card
    img(src="/images/circles.svg").circles
    div(style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/61/Trappista_cheese_original.jpg);").author-img
    h2 
      | Об
      br 
      | авторе
    .social
      img(src="/images/logo-vk.svg")
      img(src="/images/logo-facebook.svg")
      img(src="/images/logo-instagram.svg")
      img(src="/images/logo-vk.svg")
    .bottom
      b Authour hosdhfjshdfiajs
      p klsflasjdf ;lajsdfklj aslkjdf lkasjd lsdj
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';

.author-card {
  padding: 20px;
  border-radius: 10px;
  background: $color-main;
  box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.15);
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
    padding: 10px;
    right: 0;
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
