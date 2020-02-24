<template lang="pug">
  div
    .options
      nuxt-link(to="/login").option.selected Вход
      nuxt-link(to="/register").option Регистрация
    .fields
      input.lks-inp.lks-inp-bordered(placeholder="Ваш адрес эл. почты")
      input.lks-inp.lks-inp-bordered(placeholder="Пароль" type="password")
      Button.lks-btn-main.lks-mod-text-center Войти
    
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
@import '../assets/lks-fw/lks-fw.scss';
</style>
