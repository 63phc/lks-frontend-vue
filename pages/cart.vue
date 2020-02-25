<template lang="pug">
  form(action="javascript:void(0)")
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path Главная / Корзина
        h2.lks-breadcrumb-heading Корзинa
    .items
      div(v-for="product in products")
        CartItem(:product="product" @remove='productRemoved')
    .lks-container
      section.delivery
        h2.lks-text-normal.lks-heading Доставка 
        .type-option.lks-flex.lks-flex-jcsb
          label(for="delivery").lks-mod-pointer
            Radio(:selected="deliveryType == 'carrier'")
            | &nbsp;&nbsp; Курьером
          input(type="radio" name="delivery" id="delivery" value="carrier" v-model="deliveryType" hidden)
          label(for="takeout").lks-mod-pointer
            Radio(:selected="deliveryType == 'takeout'")
            | &nbsp;&nbsp; Самовывоз 
          input(type="radio" name="delivery" id="takeout" value="takeout" v-model="deliveryType" hidden)
        p.lks-small Стоимость доставки по Москве составляет 300 руб. Если сумма заказа превышает 3 000 руб., то доставка бесплатная. Включая районы: Митино, Новокосино, Бутово, Коммунарка, г.Зеленоград, Люберцы.
        br
        p.lks-small Стоимость доставки заказов за пределами МКАД: при сумме заказа до 3 000 руб - 300 руб + за каждый километр (до 20 км от МКАД - 50 руб/км, от 20 км от МКАД - 60 руб/км); при сумме заказа от 3 000 руб - за каждый километр (до 20 км от МКАД - 50 руб/км, от 20 км от МКАД - 60 руб/км).
      section.buyer-info.lks-flex.lks-flex-col
        h2.lks-text-normal.lks-heading Данные получателя
        .lks-flex.lks-flex-split
          input.lks-inp(placeholder="Промо код" v-model="promocode")
          input.lks-inp(placeholder="Email" v-model="email" required type="email")
        .lks-flex.lks-flex-split
          input.lks-inp(placeholder="ФИО" v-model="fullName" required)
          input.lks-inp(placeholder="Телефон" v-model="phone" required)
        input.lks-inp(placeholder="Комментарий" v-model="comment")
        p.lks-small Важно! Просим учесть, что скидка при оформлении заказа в Корзине не проставляется. После принятия заказа в работу, менеджер интернет-магазина пересчитает его с учётом скидки и свяжется с Вами.
      section.address-to.lks-flex.lks-flex-col
        h2.lks-text-normal.lks-heading Адрес доставки
        input.lks-inp.lks-inp-bottom(placeholder="Напишите ваш адрес" v-model="address" required)
      section.total.lks-flex.lks-flex-jcfe.lks-flex-aic
        p.lks-text-normal.lks-heading Итого 2 шт: 0 рублей
        label
          input(type="submit" hidden)
          Button(@click.native="order").lks-btn-main Оформить покупку
      br
      br
    Footer
</template>

<script lang="ts">
import CartItem from '../components/CartItem.vue'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Radio from '../components/Radio.vue'
import Button from '../components/Button.vue'
import * as Storage from '../assets/storage.ts'
import * as API from '../assets/api.ts'
export default {
  mounted() {
    this.products = Storage.get('cart')
    window.addEventListener('beforeunload', e => {
      Storage.set('cart', this.products)
    })
  },
  data() {
    return {
      products: [],
      promocode: '',
      email: '',
      fullName: '',
      phone: '',
      deliveryType: 'carrier',
      address: '',
      comment: ''
    }
  },
  methods: {
    productRemoved(e) {
      this.products = this.products.filter(g => g.slug !== e.slug)
    },
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
          'Произошла ошибка при покупке, попробуйте снова, проверьте правильность данных'
        )
      } else {
        alert('Покупка прошла успешно')
        this.fullName = ''
        this.phone = ''
        this.email = ''
        this.comment = ''
        this.address = ''
      }
    }
  },
  components: {
    TopHeader,
    NavBar,
    Footer,
    Radio,
    CartItem,
    Button
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
</style>
