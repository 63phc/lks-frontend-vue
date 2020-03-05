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
    ul.links
      li(v-for='link in links', :key='link.url')
        nuxt-link(:to='localePath(link.url)' v-if="!isExternal(link.url)")
          | {{ link.name }}
        a(:href='link.url' v-if="isExternal(link.url)")
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
import { Component, Vue } from 'nuxt-property-decorator'
import * as API from '../assets/api'
import * as models from '../assets/models'

@Component
export default class NavBar extends Vue {
  links: Array<models.MenuEntry> = []

  async mounted() {
    this.links = await API.getMenuEntries()
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
  margin: 0 15%;
  display: flex;
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

nav > ul {
  margin: 0 20px;
  flex: 1;
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 1192px) {
  nav {
    margin: 0;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 847px) {
  nav {
    flex-direction: column;
    & > ul {
      padding-top: 10px;
    }
    & > .social {
      order: 0;
    }
    & > .controls {
      order: 1;
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
