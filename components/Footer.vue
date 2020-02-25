<template lang="pug">
  footer
    .lks-container.lks-flex.lks-flex-col
      nav
        div
          h2 Навигация
          ul
            li(v-for='link in links', :key='link.url')
              nuxt-link(:to='{path: link.url}' v-if="!isExternal(link.url)")
                | {{ link.name }}
              a(:href='link.url' v-if="isExternal(link.url)")
                | {{ link.name }}
        div
          h2 Личный кабинет
          ul
            li
              nuxt-link(to="/login") Войти
            li 
              nuxt-link(to="/cart") Корзина
            li 
              nuxt-link(to="/saved") Сохраненные товары
      .subscribe-input
        input(v-model='email', type='text', placeholder='Ваш E-mail')
        button(@click="subscribe") Подписатся
      p.subtitle
        | Мы проводим специальные акции для наших клиентов. оформите подписку и мы
        | будем держать вас в курсе
      //- .buttons-social.lks-flex
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-facebook.svg', alt='f')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-instagram.svg', alt='i')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-vk.svg', alt='vk')
        .lks-btn-social
          img.lks-btn-social-icon(src='/images/logo-pinterest.svg', alt='[')
    hr
    .lks-container
      .copyright.lks-flex
        p Little Knits Story 2017 | All Rights Reserved
        img(src='/images/cactus-logo.svg', alt='Cactus Vision')
        p Политика конфеденциальности
</template>

<script lang="ts">
import * as API from '../assets/api.ts'

export default {
  data() {
    return {
      email: '',
      links: []
    }
  },
  async mounted() {
    this.links = await API.getMenuEntries()
  },
  methods: {
    async subscribe() {
      const response = await API.subscribe(this.email)
      if (response.success) {
        this.$eventBus.$emit('notify', 'Успешно подписаны')
      } else if (response.error === 'EMAIL_INVALID') {
        this.$eventBus.$emit('notify', 'Неправильный Email')
      } else if (response.error === 'EMAIL_TAKEN') {
        this.$eventBus.$emit('notify', 'Уже подписаны')
      }
    },
    isExternal(url: String) {
      return url.search(/http(s?):\/\//) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';

footer {
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
    width: 50%;
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
    width: 30%;
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
