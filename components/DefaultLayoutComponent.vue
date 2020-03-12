<template lang="pug">
 div
   slot
   Notification(@hide="hideNotif" :visible="notifVisible") {{ notifText }}
   ProductModal(@close="hideModal" :product="productModalProduct" :visible="productModalVisible")
</template>

<script lang="ts">
import Notification from '../components/Notification.vue'
import ProductModal from '../components/ProductModal.vue'
import * as Storage from '../assets/storage'
import { Component, Vue } from 'nuxt-property-decorator'


@Component({
  components: {
    Notification,
    ProductModal
  }
})
export default class DefaultLayoutComponent extends Vue {
  mounted() {
    let self = this;
    (this as any).$eventBus.$on('cartadd', (e: any) => {
      (this as any).$eventBus.$emit('notify', `${(self as any).$t('notifications.product')} "${e.title}" ${(self as any).$t('notifications.actions.added')}`)
      if (Storage.get('cart') === null) Storage.set('cart', [])
      const o = Storage.get('cart')
      const hasProduct = o.filter((g: any) => g.slug === e.slug)[0]
      if (hasProduct) {
        hasProduct.count += 1;
        (this as any).$eventBus.$emit(
          'notify',
          `${(self as any).$t('notifications.product')} "${e.title}" ${(self as any).$t('notifications.actions.added')} (${hasProduct.count})`
        )
        Storage.set('cart', o)
      } else {
        Storage.push('cart', e)
      }
    });
    (this as any).$eventBus.$on('saved', (e: any) => {
      (this as any).$eventBus.$emit('notify', `${(self as any).$t('notifications.product')} "${e.title}" ${(self as any).$t('notifications.actions.saved')}`)
      if (Storage.get('saved') == null) Storage.set('saved', [])
      const hasProduct = Storage.get('saved').find((g: any) => g.slug === e.slug)
      if (hasProduct) {
        (this as any).$eventBus.$emit('notify', `${(self as any).$t('notifications.product')} "${e.title}" ${(self as any).$t('notifications.actions.unsaved')}`)
        Storage.set(
          'saved',
          Storage.get('saved').filter((g: any) => g.slug !== hasProduct.slug)
        )
      } else {
        Storage.push('saved', e)
      }
    });
    (this as any).$eventBus.$on('notify', (e: any) => {
      this.notifVisible = true
      this.notifText = e
      this.$forceUpdate()
    });
    (this as any).$eventBus.$on('quickbuy', (e: any) => {
      this.productModalVisible = true
      this.productModalProduct = e
      this.$forceUpdate()
    });
  }

  notifText: string = ''
  notifVisible: Boolean = false
  productModalVisible: Boolean = false
  productModalProduct: any = { colors: [] }

  hideModal() {
    this.productModalVisible = false
  }

  hideNotif() {
    this.notifVisible = false
  }
}

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
