<template lang="pug">
header
  .lang-switch
    select#lang(name='lang' @change='changeLocale' :value='currentLang')
      option(value='ru') Ru
      option(value='en') En
  .patch
    img(src='/images/patch.svg', alt='')
  .brand
    p.name {{ $t("top_header.slogan") }}
    h1.heading 
      nuxt-link(:to="localePath('/')" ) LITTLE KNITS STORY
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import * as Storage from '../assets/storage'

@Component
export default class TopHeader extends Vue {
  get currentLang() {
    return Storage.get('lang');
  }
  isCurrent(url) {
    return $nuxt.$route.path === url;
  }
  changeLocale(e) {
    Storage.set('lang', e.target.value);
    this.$nuxt.$router.replace({ path: this.switchLocalePath(e.target.value) })
  }
}

Vue.component('TopHeader', TopHeader)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

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
    a {
      color: #8a8e99;
    }
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
