<template lang="pug">
  Card.price-range.lks-card-floating
    p.title Цена
    .range
      .line
      .line-in-range
      .point-1.point
        .price 300rub
      .point-2.point
        .price 600rub
</template>

<script lang="ts">
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.price-range {
  padding: 20px 16px !important;
  .title {
    font-size: 20px;
    color: #545353;
  }
  .range {
    margin-top: 30px;
    position: relative;
    .line {
      width: 100%;
      height: 2px;
      background: $color-shaded;
    }
    .line-in-range {
      background: $color-main;
      height: 2px;
      position: absolute;
      left: 20%;
      transform: translateY(-100%);
      right: calc(60% - 20%);
    }
    .point-1 {
      left: 20%;
    }
    .point-2 {
      left: 60%;
    }
    .point {
      width: 12px;
      height: 12px;
      position: absolute;
      background: $color-main;
      transform: translateY(-50%);
      border-radius: 10px;
      .price {
        color: #545353;
        transform: translate(-50%, -100%);
      }
    }
  }
}
</style>
