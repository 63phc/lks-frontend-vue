<template lang="pug">
  div
    .options
      nuxt-link(to="/login").option Вход
      nuxt-link(to="/register").option.selected Регистрация
    .fields
      input.lks-inp.lks-inp-bordered(placeholder="Ваш адрес эл. почты")
      input.lks-inp.lks-inp-bordered(placeholder="Пароль" type="password")
      input.lks-inp.lks-inp-bordered(placeholder="Повторите пароль" type="password")
      Button.lks-btn-main.lks-mod-text-center Зарегистрироватся
      small Если вы создаёте учётную запись, вы автоматически соглашаетесь с Политикой конфиденциальности
    
</template>

<script lang="ts">
import Button from '../components/Button.vue'

export default {
  layout: 'account',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/globals.scss';
.fields {
  small {
    color: #545353;
    display: block;
    text-align: center;
  }
}
</style>
