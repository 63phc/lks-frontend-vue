<template>
  <header>
    <div class="lang-switch">
      <select name="lang" id="lang">
        <option value="ru-RU">Ru</option>  
        <option value="en-US">En</option>  
      </select>  
    </div>
    <div class="patch">
      <img src="/patch.svg" alt="">
    </div>
    <div class="brand">
      <p class="name">Блог и магазин по вязанию</p>
      <h1 class="heading">LITTLE KNITS STORY</h1>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$main: #e0c0c3;

#lang {
  background: $main;
}

header {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.patch {
  position: absolute;
  right: 15%;
  top: -50px;
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
  background: $main;
}
</style>
