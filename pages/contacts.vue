<template lang="pug">
  div.layout-account
    TopHeader
    NavBar
    .lks-container
      .breadcrumb
        small Главная / Контакты
        h1.heading Контакты
      form.contact-form
        .fields
          p.heading Оставте нам сообщение
          .split
            input(type="text" placeholder="Ваше имя")
            input(type="text" placeholder="Номер телефона")
          .split
            input(type="text" placeholder="E-mail")
            input(type="text" placeholder="Компания/ автор")
          textarea(placeholder="Сообщение")
          Button.submit.lks-btn-main Отправить
          small.shaded Нажимая «Отправить», вы даете согласие на обработку персональных данных
        .info
          p.heading Контактная информация
          ul
            li
              img(src="/images/map-point.svg")
              | Serbia, Karadjordjeva 9. Rudnik
            li
              img(src="/images/phone.svg")
              | 8 800 665 00 88
            li
              img(src="/images/envelope.svg")
              | mail@gmail.com

    Instagram
    Footer
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
import Button from '../components/Button'
import Instagram from '../components/Instagram.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    TopHeader,
    Footer,
    LastPosts,
    Instagram,
    NavBar,
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.lks-container {
  .contact-form {
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    display: flex;
    background: $color-main;
    margin: 40px 0;
    .info {
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
      flex: 1;
      color: #fff;
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 10px;
      .heading {
        font-size: 20px;
      }
      ul {
        list-style-type: none;
        li {
          font-size: 18px;
          margin: 25px 0;
          img {
            margin-right: 10px;
          }
        }
      }
    }
    .fields {
      background: white;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
      flex: 2;
      display: flex;
      flex-direction: column;
      .submit {
        max-width: 300px;
        text-align: center;
        align-self: center;
        margin: 10px;
      }
      .heading {
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: normal;
        color: #545353;
        line-height: 2;
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
      }
      .shaded {
        text-align: center;
        margin: 10px;
        color: $color-shaded;
      }
      .split {
        display: flex;
        & > * {
          flex: 1;
          width: 50%;
        }
      }
      textarea,
      input {
        margin: 10px;
        background: #efefef;
        border: none;
        padding: 10px;
        font-family: sans-serif;
        font-size: 16px;
      }
      textarea {
        min-height: 120px;
        resize: none;
      }
    }
  }
}
</style>
