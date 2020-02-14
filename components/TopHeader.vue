<template lang="pug">
header
  .lang-switch
    select#lang(name='lang')
      option(value='ru-RU') Ru
      option(value='en-US') En
  .patch
    img(src='/images/patch.svg', alt='')
  .brand
    p.name Блог и магазин по вязанию
    h1.heading LITTLE KNITS STORY
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';

#lang {
  background: $color-main;
}

header {
  margin-top: 40px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.patch {
  position: absolute;
  right: 15%;
  top: -70px;
  z-index: -1;
}
.brand {
  text-align: center;
  .name {
    font-size: 14px;
    padding-bottom: 5px;
    color: #545353;
  }
  .heading {
    font-size: 36px;
    text-transform: uppercase;
    color: #8a8e99;
  }
}
.lang-switch {
  padding: 10px;
  padding-top: 30px;
  position: absolute;
  right: 21px;
  top: 0px;
  #lang {
    border: none;
    outline: none !important;
    color: #fff;
    font-weight: bold;

    &,
    * {
      font-family: 'Helvetica', -apple-system, 'Segoe UI', sans-serif;
    }
  }
  background: $color-main;
}
</style>
