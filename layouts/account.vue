<template lang="pug">
  DefaultLayout
    div.layout-account
      TopHeader
      .lks-container.lks-flex.lks-flex-col.account-form
        form
          nuxt
        .quick
          p {{ $t('account.quick_access') }}
          .buttons-social.lks-flex
            .lks-btn-social
              img.lks-btn-social-icon(src='/images/logo-facebook.svg', alt='f')
            .lks-btn-social
              img.lks-btn-social-icon(src='/images/logo-instagram.svg', alt='i')
            .lks-btn-social
              img.lks-btn-social-icon(src='/images/logo-vk.svg', alt='vk')
            .lks-btn-social
              img.lks-btn-social-icon(src='/images/logo-pinterest.svg', alt='[')
      Footer
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
import DefaultLayout from '../components/DefaultLayoutComponent.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'default',
  components: {
    TopHeader,
    DefaultLayout
  }
})
export default class AccountLayout extends Vue {}
</script>

<style lang="scss">
@import '../assets/lks-fw/lks-fw.scss';
.layout-account {
  .account-form {
    align-items: center;
    form {
      margin: 0 35%;
      .fields {
        margin-top: 30px;
        & > * {
          margin: 10px 0;
          width: 100%;
        }
      }
      .options {
        display: flex;
        align-items: flex-end;
        .option {
          font-size: 20px;
          margin-right: 10px;
          color: #333;
          &.selected {
            font-size: 24px;
          }
        }
      }
    }
  }
  .buttons-social {
    width: 300px;
    margin: 24px 0;
    justify-content: space-between;
    align-self: center;
  }
  .quick {
    p {
      text-align: center;
      font-size: 20px;
      color: #545353;
    }
  }
}
</style>
