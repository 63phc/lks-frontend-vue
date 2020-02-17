<template lang="pug">
  Card.good-card
    .thumbnail(:style='`background-image: url(${image});`')
    .good-info
      p.good-caption {{ caption }}
      .color
        span Цвет
        .color-circle(style="background: rgba(255, 0, 0, 0.1);")
          .color-circle-in(style="background: red;")
      p.good-price 15 000р
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
.good-card {
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 100%;
  .good-info {
    padding: 10px;
  }
  .good-price {
    font-weight: bold;
    font-size: 20px;
    color: #545353;
  }
  .thumbnail {
    background-size: cover;
    min-height: 300px;
    flex: 1;
    border-radius: 10px;
  }
  .good-caption {
    color: #000;
    font-size: 18px;
    line-height: 2;
    font-weight: normal;
  }
  .color {
    display: flex;
    float: right;
    & > span {
      margin-right: 10px;
    }
  }
  .color-circle {
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    width: 20px;
    height: 20px;
    .color-circle-in {
      opacity: 0.8;
      border-radius: 20px;
      width: 10px;
      height: 10px;
    }
  }
  .good-text {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    color: #545353;
  }
}
</style>
