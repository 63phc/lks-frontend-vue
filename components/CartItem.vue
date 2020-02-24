<template lang="pug">
  .item.lks-flex.lks-flex-jcsb
    .picture(style="background-image: url(/images/patch.svg)")
    .description.lks-flex.lks-flex-jscb.lks-flex-col
      .title {{ name }}
      .article Артикул: {{ article }}
      .color.lks-flex.lks-flex-jcsb
        span Цвет
        .lks-color-circle
          .lks-color-circle-color(:style="`background-color: ${color};`")
    .control.lks-flex
      .add +
      .counter {{ count }}
      .sub -
    .price.lks-flex.lks-flex-jcsb.lks-flex-aic
      span Стоимость:
      .lks-price-now {{ price }}
      img(src="/images/ruble.svg")
      .remove x
</template>

<script lang="typescript">
export default {
  props: {
    name: String,
    article: String,
    color: String,
    count: Number,
    price: Number
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.item {
  margin-bottom: 15px;
  @media screen and (max-width: 936px) {
    padding-top: 20px;
    flex-direction: column;
    & > * {
      margin-bottom: 20px;
    }
    .picture {
      align-self: center;
    }
  }
  padding: 0 15%;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  .picture {
    height: 120px;
    width: 120px;
  }
  .description {
    justify-content: space-around;
    font-size: 14px;
    color: $color-text;
    .title {
      font-size: 20px;
      color: #000;
    }
  }
  .control {
    align-items: center;
    text-align: center;
    min-width: 150px;
    align-self: center;
    border-radius: 50px;
    background: #eee;
    color: $color-text;
    .counter {
      flex: 2;
    }
    .add,
    .sub {
      padding: 5px;
      margin: 5px;
      flex: 2;
    }
    .add {
      border-right: 1px solid #ccc;
    }
    .sub {
      border-left: 1px solid #ccc;
    }
  }
  .price {
    span {
      color: #000;
      margin-right: 10px;
    }
    & > * {
      color: $color-text;
    }
  }
}
</style>
