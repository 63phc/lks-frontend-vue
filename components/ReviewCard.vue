<template lang="pug">
  Card.review-card.lks-card-floating
    img(src="/images/circles.svg").circles
    div(style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/6/61/Trappista_cheese_original.jpg);").good-img
    h2 
      | Медведь цветной
    StarRating.stars
    p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    br
    small Автор
    br
    strong Мария Мария


</template>

<script lang="ts">
import StarRating from './StarRating.vue'

export default {
  components: {
    StarRating
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

.review-card {
  padding: 20px;
  background: $color-main;
  color: #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
  p {
    width: 60%;
    font-size: 20px;
    text-align: justify;
  }
  .stars {
    line-height: 2;
  }
  .circles {
    right: -50px;
    position: absolute;
    z-index: -2;
  }
  .good-img {
    position: absolute;
    right: -10%;
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
