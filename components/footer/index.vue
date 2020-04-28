<template lang="pug">
    footer.footer__component
      .footer__component__top__bar
        .footer__panel
          .footer__panel__navigation__wrap
            h3.footer__panel__navigation__title Навигация
            ul.footer__panel__navigation__list
              li.footer__panel__navigation__item
                a(href="#").footer__panel__navigation__link Блог
              li.footer__panel__navigation__item
                a(href="#").footer__panel__navigation__link Магазин
              li.footer__panel__navigation__item
                a(href="#").footer__panel__navigation__link О нас
              li.footer__panel__navigation__item
                a(href="#").footer__panel__navigation__link Портфолио
              li.footer__panel__navigation__item
                a(href="#").footer__panel__navigation__link Контакты
          .footer__panel__controls__wrap
            h3.footer__panel__controls__title Личный кабинет
            ul.footer__panel__controls__list
              li.footer__panel__controls__item
                a(href="#").footer__panel__controls__link Войти
              li.footer__panel__controls__item
                a(href="#").footer__panel__controls__link Корзина
              li.footer__panel__controls__item
                a(href="#").footer__panel__controls__link Сохраненные товары
        form.footer__form
          input.footer__input(
            type='sumbit'
            placeholder='Ваш E-mail'
            )
          button.footer__button Подписаться
        .footer__informations__txt__wrap
            p.footer__form__txt
              | Мы проводим специальные акции для наших клиентов.
              | оформите подписку и мы будем держать вас в курсе
        .footer__social__list__wrap
          ul.footer__social__list
            li.footer__social__list__item
              a(href="#").footer__social__item__link
                img(src="../../assets/images/svg/fbFooter.svg", alt="alt")
            li.footer__social__list__item
              a(href="#").footer__social__item__link
                img(src="../../assets/images/svg/instagramFooter.svg", alt="alt")
            li.footer__social__list__item
              a(href="#").footer__social__item__link
                img(src="../../assets/images/svg/vkFooter.svg", alt="alt")
            li.footer__social__list__item
              a(href="#").footer__social__item__link
                img(src="../../assets/images/svg/prsFooter.svg", alt="alt")
      .footer__component__bottom__bar
        .copyright__wrap Little Knits Story 2017 | All Rights Reserved
        .footer__logo
          img(src="../../assets/images/logo_footer.png", alt="alt").footer__logo__img
        .privacy__policy
          a(href="#").privacy__policy__link Политика конфеденциальности
</template>

<style lang="scss" scoped src="./index.scss">
</style>
