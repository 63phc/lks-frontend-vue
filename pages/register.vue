<template lang="pug">
  div
    .options
      nuxt-link(:to="localePath('/login')").option {{ $t('account.login.title') }}
      nuxt-link(:to="localePath('/register')").option.selected {{ $t('account.register.title') }}
    .fields
      input.lks-inp.lks-inp-bordered(:placeholder="$t('account.email')")
      input.lks-inp.lks-inp-bordered(:placeholder="$t('account.pass')" type="password")
      input.lks-inp.lks-inp-bordered(:placeholder="$t('account.register.repeat')" type="password")
      Button.lks-btn-main.lks-mod-text-center {{ $t('account.register.register') }}
      small {{ $t('account.register.agreement') }}
    
</template>

<script lang="ts">
import Button from '../components/Button.vue'
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'account',
  components: {
    Button
  }
})
export default class Login extends Vue {}
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
