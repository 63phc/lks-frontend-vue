<template lang="pug">
  nav
    ul.social
      li
        a(href="https://vk.com/littleknitsstory" target="_blank")
          img(src='/images/logo-vk.svg', alt='')
      li
        a(href="https://www.facebook.com/littleknitsstory/" target="_blank")
          img(src='/images/logo-facebook.svg', alt='')
      li
        a(href="https://www.instagram.com/littleknitsstory/" target="_blank")
          img(src='/images/logo-instagram.svg', alt='')
      li
        a(href="https://www.pinterest.ru/littleknitsstory/" target="_blank")
          img(src='/images/logo-pinterest.svg', alt='')
      li.control-adapt
        nuxt-link(:to="localePath('/cart')")
          img(src='/images/shopping-bag.svg', alt='')
          .dot(:class="hasProducts ? 'lit' : ''")
      li.control-adapt
        nuxt-link(:to="localePath('/saved')")
          img(src='/images/heart.svg', alt='')
          .dot(:class="hasSaved ? 'lit' : ''")
    ul.links
      li(v-for='link in links', :key='link.url')
        nuxt-link(:to='localePath(link.url)' v-if="!isExternal(link.url)" :class="isCurrent(localePath(link.url)) ? 'nav-current' : ''")
          | {{ link.name }}
        a(:href='link.url' v-if="isExternal(link.url)" target="_blank")
          | {{ link.name }}
    ul.controls
      //- li
      //-   img(src='/images/log-out.svg', alt='')
      li
        nuxt-link(:to="localePath('/cart')")
          img(src='/images/shopping-bag.svg', alt='')
          .dot(:class="hasProducts ? 'lit' : ''")
      li
        nuxt-link(:to="localePath('/saved')")
          img(src='/images/heart.svg', alt='')
          .dot(:class="hasSaved ? 'lit' : ''")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as API from '../assets/api'
import * as models from '../assets/models'
import * as Storage from '../assets/storage'

@Component
export default class NavBar extends Vue {
  @Prop()
  links: Array<models.MenuEntry> = []
  hasProducts: boolean = false
  hasSaved: boolean = false

  mounted() {
    this.hasProducts = Storage.get('cart') ? Storage.get('cart').length > 0 : false;
    this.hasSaved = Storage.get('saved') ? Storage.get('saved').length > 0 : false;
    setInterval(() => {
      this.hasProducts = Storage.get('cart') ? Storage.get('cart').length > 0 : false;
      this.hasSaved = Storage.get('saved') ? Storage.get('saved').length > 0 : false;
    }, 1000)
    // Poll for cart changes
  }

  isCurrent(url: string) {
    return this.$nuxt.$route.path === url;
  }

  isExternal(url: String) {
    return url.search(/http(s?):\/\//) > -1
  }
}
Vue.component('NavBar', NavBar)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

ul {
  list-style-type: none;
}

nav {
  padding: 20px 15%;
  flex: 2;
  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: center;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 50;
  margin-bottom: 10px;
}

.links {
  order: 1;
  color: #545353;
  text-transform: uppercase;
  justify-content: space-between;
  li {
    margin: 0 1vw;
  }
  a {
    color: #545353 !important;
  }
}

.dot {
  width: 5px;
  height: 5px;
  background: gray;
  border-radius: 10px;
  position: relative;
  top: -25px;
  left: 20px;
  &.lit {
    background: crimson;
  }
}

.controls {
  order: 1;
  align-items: center;
  display: inline-flex;
  flex: 1;
  justify-content: flex-end;
  & > * {
    padding: 0 1vw;
  }
}

.social {
  order: 0;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  & > * {
    padding: 0 1vw;
  }

}
.nav-current {
  border-bottom: 2px solid $color-main;
}

nav > ul {
  margin: 0 20px;
  flex: 1;
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 1192px) {
  nav {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 10px;
  }
}

.control-adapt {
  display: none;
}
@media screen and (max-width: 847px) {
  nav {
    font-size: 13px;
    flex-direction: column;
    & > ul {
      width: 90%;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      .control-adapt {
        display: block;
      }
    }
    & > .social {
      order: 0;
      display: none;
      & > * {
        padding-right: 10px;
      }
    }
    & > .controls {
      display: none;
      order: 1;
      justify-content: flex-start;
      & > * {
        padding-right: 10px;
      }
    }
    & > .links {
      padding-top: 0;
      order: 2;
    }
  }
}
</style>
