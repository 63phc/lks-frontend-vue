<template>
  <nav>
    <ul class="social">
      <li>
        <img src="/images/logo-vk.svg" alt="">
      </li>
      <li>
        <img src="/images/logo-facebook.svg" alt="">
      </li>
      <li>
        <img src="/images/logo-instagram.svg" alt="">
      </li>
      <li>
        <img src="/images/logo-pinterest.svg" alt="">
      </li>
    </ul>
    <ul class="links">
      <li v-for="link in links" :key="link.url">
        <nuxt-link :to="{path: link.url}">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="controls">
      <li>
        <img src="/images/log-out.svg" alt="">
      </li>
      <li>
        <img src="/images/shopping-bag.svg" alt="">
      </li>
      <li>
        <img src="/images/heart.svg" alt="">
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import * as API from '../assets/api.ts'

export default {
  data() {
    return {
      links: []
    }
  },

  async mounted() {
    this.links = await API.getMenuEntries()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';

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
    }
  }
}
</style>
