<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path Главная / Корзина
        h2.lks-breadcrumb-heading Корзинa
    .items
      CartItem(
        name="Mebeab"
        article="2342894"
        color= "red"
        :count="4"
        :price="50000"
      )
    .lks-container
      section.delivery
        h2.lks-text-normal.lks-heading Доставка 
        .type-option.lks-flex.lks-flex-jcsb
          label
            input(type=radio hidden name="delivery" value="carrier")
            Radio(:selected="true")
            | &nbsp;&nbsp; Курьером
          label
            input(type=radio hidden name="delivery" value="takeout")
            Radio
            | &nbsp;&nbsp; Самовывоз 
        p.lks-small Стоимость доставки по Москве составляет 300 руб. Если сумма заказа превышает 3 000 руб., то доставка бесплатная. Включая районы: Митино, Новокосино, Бутово, Коммунарка, г.Зеленоград, Люберцы.
        br
        p.lks-small Стоимость доставки заказов за пределами МКАД: при сумме заказа до 3 000 руб - 300 руб + за каждый километр (до 20 км от МКАД - 50 руб/км, от 20 км от МКАД - 60 руб/км); при сумме заказа от 3 000 руб - за каждый километр (до 20 км от МКАД - 50 руб/км, от 20 км от МКАД - 60 руб/км).
      section.buyer-info.lks-flex.lks-flex-col
        h2.lks-text-normal.lks-heading Данные получателя
        .lks-flex.lks-flex-split
          input.lks-inp(placeholder="Промо код")
          input.lks-inp(placeholder="Email")
        .lks-flex.lks-flex-split
          input.lks-inp(placeholder="ФИО")
          input.lks-inp(placeholder="Телефон")
        input.lks-inp(placeholder="Комментарий")
        p.lks-small Важно! Просим учесть, что скидка при оформлении заказа в Корзине не проставляется. После принятия заказа в работу, менеджер интернет-магазина пересчитает его с учётом скидки и свяжется с Вами.
      section.address-to.lks-flex.lks-flex-col
        h2.lks-text-normal.lks-heading Адрес доставки
        input.lks-inp.lks-inp-bottom(placeholder="Напишите ваш адрес")
      section.total.lks-flex.lks-flex-jcfe.lks-flex-aic
        p.lks-text-normal.lks-heading Итого 2 шт: 0 рублей
        Button.lks-btn-main Оформить покупку

    Footer
</template>

<script lang="ts">
import CartItem from '../components/CartItem.vue'
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Radio from '../components/Radio.vue'
import Button from '../components/Button.vue'
export default {
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
