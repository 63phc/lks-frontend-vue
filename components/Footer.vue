<template lang="pug">
  footer
    form.lks-container.lks-flex.lks-flex-col(action="javascript:void(0)")
      nav
        div
          h2 {{ $t('footer.navigation') }}
          ul
            li(v-for='link in links', :key='link.url')
              nuxt-link(:to='localePath(link.url)' v-if="!isExternal(link.url)")
                | {{ link.name }}
              a(:href='link.url' v-if="isExternal(link.url)")
                | {{ link.name }}
        div
          h2 {{ $t('footer.personal_panel') }}
          ul
            li
              nuxt-link(:to="localePath('/login')") {{ $t('footer.login') }}
            li 
              nuxt-link(:to="localePath('/cart')") {{ $t('footer.cart') }}
            li 
              nuxt-link(:to="localePath('/saved')") {{ $t('footer.saved') }}
      br
      .subscribe-input
        input(v-model='email', type='text', :placeholder='$t("footer.email")')
        button(@click="subscribe") {{ $t('footer.subscribe') }}
      br
      p.subtitle
        | {{ $t('footer.notice') }}
      //- .buttons-social.lks-flex
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-facebook.svg', alt='f')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-instagram.svg', alt='i')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-vk.svg', alt='vk')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-pinterest.svg', alt='[')
    br
    hr
    .lks-container
      .copyright.lks-flex
        p Little Knits Story 2017 | All Rights Reserved
        img(src='/images/cactus-logo.svg', alt='Cactus Vision')
        p {{ $t('footer.privacy_policy') }}
</template>

<script lang="ts">
import * as API from '../assets/api'
import * as models from '../assets/models'
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class Footer extends Vue {
  email: string = ''
  @Prop()
  links: Array<models.MenuEntry> = []

  async subscribe() {
    const response = await API.subscribe(this.email)
    if (response.success) {
      (this as any).$eventBus.$emit('notify', (this as any).$t('notifications.email_success'))
    } else if (response.error === 'EMAIL_INVALID') {
      (this as any).$eventBus.$emit('notify', (this as any).$t('notifications.email_fail_invalid_email'))
    } else if (response.error === 'EMAIL_TAKEN') {
      (this as any).$eventBus.$emit('notify', (this as any).$t('notifications.email_fail_already_subscribed'))
    }
  }
  
  isExternal(url: String) {
    return url.search(/http(s?):\/\//) > -1
  }
}

Vue.component("Footer", Footer)
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

footer {
  a {
    color: #666 !important;
  }
  border-top: 1px solid #e5e5e5;
  hr {
    border: 0.5px solid #e5e5e5;
  }
  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    li {
      margin-right: 10px;
    }
  }
  nav {
    color: #545353;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
      align-self: center;
      flex-direction: column;
    }
    h2 {
      font-weight: normal;
      margin-bottom: 10px;
    }
  }
  .subscribe-input {
    margin-bottom: 10px;
    margin-top: 20px;
    background: #f0f0f0;
    align-self: center;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    width: 70%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }

    input,
    button {
      font-size: 16px;
      outline: none !important;
    }
    input {
      width: 100%;
      background: none;
      padding: 10px 15px;
      color: #545353;
      border: none;
    }
    button {
      background: $color-main;
      color: #fff;
      border-radius: 50px;
      padding: 10px 30px;
      border: none;
      cursor: pointer;
      &:hover {
        background: darken($color-main, 2);
      }
    }
  }
  .subtitle {
    align-self: center;
    color: $color-shaded;
    width: 80%;
    padding-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .buttons-social {
    width: 300px;
    margin: 24px 0;
    justify-content: space-between;
    align-self: center;
  }
  .copyright {
    justify-content: space-between;
    align-items: center;
    color: $color-shaded;
    margin: 30px 0;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      * {
        margin: 10px 0;
      }
    }
  }
}
</style>
