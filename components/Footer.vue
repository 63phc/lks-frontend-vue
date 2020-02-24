<template lang="pug">
  footer
    .lks-container.lks-flex.lks-flex-col
      nav
        div
          h2 Навигация
          ul
            li Блог
            li Магазин
            li О нас
            li Портфолио
            li Контакты
        div
          h2 Личный кабинет
          ul
            li Войти
            li Корзина
            li Сохраненные товары
      .subscribe-input
        input(v-model='email', type='text', placeholder='Ваш E-mail')
        button Подписатся
      p.subtitle
        | Мы проводим специальные акции для наших клиентов. оформите подписку и мы
        | будем держать вас в курсе
      .buttons-social.lks-flex
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
export default {
  data() {
    return {
      email: ''
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
