<template lang="pug">
 div
   nuxt
   Notification(@hide="hideNotif" :visible="notifVisible") {{ notifText }}
   ProductModal(@close="hideModal" :product="productModalProduct" :visible="productModalVisible")
</template>

<script>
import Notification from '../components/Notification.vue'
import ProductModal from '../components/ProductModal.vue'
import * as Storage from '../assets/storage.ts'

export default {
  mounted() {
    this.$eventBus.$on('cartadd', e => {
      this.$eventBus.$emit('notify', `Товар "${e.title}" добавлен`)
      if (Storage.get('cart') === null) Storage.set('cart', [])
      const o = Storage.get('cart')
      const hasProduct = o.filter(g => g.slug === e.slug)[0]
      if (hasProduct) {
        hasProduct.count += 1
        this.$eventBus.$emit(
          'notify',
          `Товар "${e.title}" добавлен (${hasProduct.count})`
        )
        Storage.set('cart', o)
      } else {
        Storage.push('cart', e)
      }
    })
    this.$eventBus.$on('saved', e => {
      this.$eventBus.$emit('notify', `Товар "${e.title}" сохранен`)
      if (Storage.get('saved') == null) Storage.set('saved', [])
      const hasProduct = Storage.get('saved').find(g => g.slug === e.slug)
      if (hasProduct) {
        this.$eventBus.$emit('notify', `Товар "${e.title}" убран из любимых`)
        Storage.set(
          'saved',
          Storage.get('saved').filter(e => e.slug !== hasProduct.slug)
        )
      } else {
        Storage.push('saved', e)
      }
    })
    this.$eventBus.$on('notify', e => {
      this.notifVisible = true
      this.notifText = e
      this.$forceUpdate()
    })
    this.$eventBus.$on('quickbuy', e => {
      this.productModalVisible = true
      this.productModalProduct = e
      this.$forceUpdate()
    })
  },
  data() {
    return {
      notifText: '',
      notifVisible: false,
      productModalVisible: false,
      productModalProduct: { colors: [] }
    }
  },
  methods: {
    hideModal: function() {
      this.productModalVisible = false
    },
    hideNotif: function() {
      this.notifVisible = false
    }
  },
  components: {
    Notification,
    ProductModal
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
