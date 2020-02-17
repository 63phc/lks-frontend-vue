<template lang="pug">
  div.stars-rating
    .stars-fill(:style="`width: ${(amount/5)*100}%;`")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
    .stars-shaded
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
      img(src="/images/star.svg")
</template>

<script lang="ts">
export default {
  props: {
    amount: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.stars-rating {
  position: relative;
  overflow: hidden;
}
.stars-fill {
  position: absolute;
  img {
    margin-right: 10px;
  }
}
.stars-shaded {
  opacity: 0.5;
  img {
    margin-right: 10px;
  }
}
</style>
