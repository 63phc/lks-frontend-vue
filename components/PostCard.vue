<template lang="pug">
  Card.post-card
    .thumbnail(:style='`background-image: url(${image});`')
    .post-info
      p.post-date
        small {{ date }}
      p.post-caption
        strong {{ caption }}
      p.post-text {{ text }}
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  .post-info {
    padding: 10px;
  }
  .thumbnail {
    background-size: cover;
    flex: 1;
  }
  .post-date {
    font-size: 12px;
    color: #c4c4c4;
    line-height: 17px;
  }
  .post-caption {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    color: #545353;
    font-weight: bold;
  }
  .post-text {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    color: #545353;
  }
}
</style>
