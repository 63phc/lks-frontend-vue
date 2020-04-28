<template lang="pug">
    .breadCrumbs
      p.crumbs Главная / Блог
</template>

<style lang="scss" scoped>
.breadCrumbs {
  margin: 0 auto;
  max-width: $widthContainer1;
  width: 100%;
  margin-bottom: 24px;
  @include lg {
    padding: 0 40px;
  }
  @include md {
    padding: 0 40px;
  }
  @include xs {
    padding: 0 10px;
  }
}
// ===media==
// ==== media xs===
// ==media md ===
</style>
