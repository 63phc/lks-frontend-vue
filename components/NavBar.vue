<template lang="pug">
  nav
    ul.social
      li
        img(src='/images/logo-vk.svg', alt='')
      li
        img(src='/images/logo-facebook.svg', alt='')
      li
        img(src='/images/logo-instagram.svg', alt='')
      li
        img(src='/images/logo-pinterest.svg', alt='')
      li.control-adapt
        nuxt-link(:to="localePath('/cart')")
          img(src='/images/shopping-bag.svg', alt='')
      li.control-adapt
        nuxt-link(:to="localePath('/saved')")
          img(src='/images/heart.svg', alt='')
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
      li
        nuxt-link(:to="localePath('/saved')")
          img(src='/images/heart.svg', alt='')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import * as API from '../assets/api'
import * as models from '../assets/models'

@Component
export default class NavBar extends Vue {
  @Prop()
  links: Array<models.MenuEntry> = []

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

  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  position: sticky;
  align-items: center;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 50;
  margin-bottom: 10px;
  justify-content: space-between;
}

.links {
  order: 1;
  color: #545353;
  text-transform: uppercase;
  flex: 2;
  justify-content: space-between;
  a {
    color: #545353 !important;
  }
}

.controls {
  order: 1;
  align-items: center;
}

.social {
  order: 0;
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
      order: 2;
      & > * {
        font-size: 80%;
      }
    }
  }
}
</style>
