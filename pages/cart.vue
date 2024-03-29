<template lang="pug">
  client-only
    form(action="javascript:void(0)" @submit="order")
      TopHeader
      NavBar(:links="links")
      .lks-container
        .lks-breadcrumb
          .lks-breadcrumb-path
            nuxt-link(:to="localePath('/')")
              | {{ $t('breadcrumbs.index') }} / 
            | {{ $t('breadcrumbs.cart' )}}
      br
      .items
        div(v-for="product in products")
          CartItem(:product="product" @remove='productRemoved')

      div(v-if="!isEmpty")
        .lks-container
          section.delivery
            h2.lks-text-normal.lks-heading {{ $t('cart.delivery.title') }} 
            .type-option.lks-flex.lks-flex-jcsb
              label(for="delivery").lks-mod-pointer
                Radio(:selected="deliveryType == 'carrier'")
                | &nbsp;&nbsp; {{ $t('cart.delivery.carrier') }}
              input(type="radio" name="delivery" id="delivery" value="carrier" v-model="deliveryType" hidden)
              label(for="takeout").lks-mod-pointer
                Radio(:selected="deliveryType == 'takeout'")
                | &nbsp;&nbsp; {{ $t('cart.delivery.takeout') }} 
              input(type="radio" name="delivery" id="takeout" value="takeout" v-model="deliveryType" hidden)
            p.lks-small {{ $t('cart.delivery.notice') }}
            br
            p.lks-small {{ $t('cart.delivery.notice_bottom') }}
          section.buyer-info.lks-flex.lks-flex-col
            h2.lks-text-normal.lks-heading {{ $t('cart.receiver_info.title') }}
            .lks-flex.lks-flex-split
              input.lks-inp(:placeholder="$t('cart.receiver_info.promo')" v-model="promocode")
              input.lks-inp(:placeholder="$t('cart.receiver_info.email')" v-model="email" required type="email")
            .lks-flex.lks-flex-split
              input.lks-inp(:placeholder="$t('cart.receiver_info.full_name')" v-model="fullName" required)
              input.lks-inp(:placeholder="$t('cart.receiver_info.phone')" v-model="phone" required)
            input.lks-inp(:placeholder="$t('cart.receiver_info.comment')" v-model="comment")
            p.lks-small {{ $t('cart.receiver_info.notice') }}
          section.address-to.lks-flex.lks-flex-col
            h2.lks-text-normal.lks-heading {{ $t('cart.address.title') }}
            input.lks-inp.lks-inp-bottom(:placeholder="$t('cart.address.address')" v-model="address" required)
          section.total.lks-flex.lks-flex-jcfe.lks-flex-aic
            p.lks-text-normal.lks-heading {{ $t('cart.total.total') }} {{ productsTotal }} {{ $t('cart.total.items') }}: {{ priceTotal }} {{ $t('cart.total.rub') }}
            label
              input(type="submit" hidden)
              Button.lks-btn-main {{ $t('cart.total.perform') }}
          br
          br
      div(v-if="isEmpty").cart-empty
        h1 {{ $t('cart.empty') }}
      Footer(:links="links")
</template>

<script lang="ts">
import * as Storage from '../assets/storage'
import * as API from '../assets/api'
import * as models from '../assets/models'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import CartItem from '../components/CartItem.vue'
import Radio from '../components/Radio.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    TopHeader,
    CartItem,
    Radio,
    NavBar,
    Footer
  }
})
export default class Cart extends Vue {
  links: Array<models.MenuEntry> = []
  products: Array<any> = []
  promocode: string = ''
  email: string = ''
  fullName: string = ''
  phone: string = ''
  deliveryType: string = 'carrier'
  address: string = ''
  comment: string = ''

  mounted() {
    this.$forceUpdate()
    if (process.client)
      setTimeout(() => {
        this.$forceUpdate();
      }, 1000)
    this.products = Storage.get('cart') ? Storage.get('cart') : [];
    if (process.client)
      window.addEventListener('beforeunload', e => {
        Storage.set('cart', this.products)
      })
  }

  async asyncData() {
    return {
      links: await API.getMenuEntries(),
    }
  }
 
  
  productRemoved(e: models.Product) {
    this.products = this.products.filter(g => g.slug !== e.slug)
    Storage.set('cart', this.products)
  }

  get productsTotal() {
    return this.products.map(e => e.count).reduce((a, b) => a + b, 0)
  }

  get priceTotal() {
    return this.products.map((e: any) => parseInt(e.price)*e.count).reduce((a, b) => a + b, 0);
  }

  get isEmpty() {
    return this.products.length === 0;
  }

  async order() {
    const res = await API.order(
      this.products,
      this.fullName,
      this.phone,
      this.email,
      this.comment,
      this.address
    )
    if (res.error) {
      alert(
        (this as any).$t('notifications.buy_error')
      )
    } else {
      alert((this as any).$t('notifications.buy_success'))
      this.fullName = ''
      this.phone = ''
      this.email = ''
      this.comment = ''
      this.address = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
.buyer-info {
  input {
    margin: 5px;
  }
}
.type-option {
  margin: 10px 0;
  max-width: 300px;
}
section {
  margin-top: 40px;
}
.lks-flex-split {
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
}
.total {
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
  p {
    margin-right: 20px;
  }
}
.cart-empty {
  display: flex;
  justify-content: center;
  font-size: 3vw;
  @media screen and(max-width: 800px) {
    font-size: 18px;
  }
  h1 {
    line-height: 3;
    font-weight: 100;
    color: #444;
  }
}
</style>
