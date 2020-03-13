<template lang="pug">
  div  
    .lks-breadcrumb
      .lks-breadcrumb-path
        nuxt-link(:to="localePath('/')")
          | {{ $t('breadcrumbs.index') }} / 
        | {{ $t('breadcrumbs.login' )}}
    .options
      nuxt-link(:to="localePath('/login')").option.selected {{ $t('account.login.title') }}
      nuxt-link(:to="localePath('/register')").option {{ $t('account.register.title') }}
    .fields
      input.lks-inp.lks-inp-bordered(:placeholder="$t('account.email')")
      input.lks-inp.lks-inp-bordered(:placeholder="$t('account.pass')" type="password")
      Button.lks-btn-main.lks-mod-text-center {{ $t('account.login.login') }}
    
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
@import '../assets/lks-fw/lks-fw.scss';
</style>
