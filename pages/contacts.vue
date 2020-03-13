<template lang="pug">
  div.layout-account
    TopHeader
    NavBar(:links="links")
    .lks-container
      .lks-breadcrumb
        .lks-breadcrumb-path
          nuxt-link(:to="localePath('/')")
            | {{ $t('breadcrumbs.index') }} / 
          | {{ $t('breadcrumbs.contacts' )}}
      .error(v-if="errors.length > 0")
        div(v-for="error in errors") {{ error }}
      form(action="javascript:void(0)" @submit="submit").contact-form
        .fields
          p.heading {{ $t('contacts.leave_a_message') }}
          .split
            input(type="text" :placeholder="$t('contacts.form.name')" v-model="name")
            input(type="text" :placeholder="$t('contacts.form.phone')" v-model="phone")
          .split
            input(type="text" :placeholder="$t('contacts.form.email')" v-model="email" required)
            input(type="text" :placeholder="$t('contacts.form.company')" v-model="company")
          textarea(:placeholder="$t('contacts.form.message')" v-model="message" required)
          button
            Button.submit.lks-btn-main {{ $t('contacts.send') }}
          small.shaded {{ $t('contacts.form.agreement') }}
        .info
          p.heading {{ $t('contacts.contact_info') }}
          ul
            li
              img(src="/images/map-point.svg")
              | Serbia, Karadjordjeva 9. Rudnik
            li
              img(src="/images/phone.svg")
              | 8 800 665 00 88
            li
              img(src="/images/envelope.svg")
              | mail@gmail.com

    Instagram
    Footer(:links="links")
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import Footer from '../components/Footer.vue'
import LastPosts from '../components/LastPosts.vue'
import Button from '../components/Button.vue'
import Instagram from '../components/Instagram.vue'
import * as API from '../assets/api'
import * as models from '../assets/models'
import NavBar from '../components/NavBar.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    TopHeader,
    Footer,
    LastPosts,
    Button,
    Instagram,
    NavBar,
  }
})
export default class Contacts extends Vue {
  name: string = ""
  phone: string = ""
  email: string = ""
  company: string = ""
  message: string = ""

  links: Array<models.MenuEntry> = []
  errors: Array<any> = []
  async mounted() {
    this.$forceUpdate()
  }
  async submit() {
    let res = await API.contact({
      name: this.name,
      phone_number: this.phone,
      email: this.email,
      company: this.company,
      message: this.message
    })
    this.errors = []
    res.forEach((e: string) => {
      if (e == "EMAIL_REQUIRED") {
        this.errors.push((this as any).$t('contacts.email_required'))
      }
      else if (e == "MESSAGE_REQUIRED") {
        this.errors.push((this as any).$t('contacts.message_required'))
      }
    })

    if (this.errors.length === 0) {
      (this as any).$eventBus.$emit('notify', 'Успешно')
    }
  }
  async asyncData() {
    return {
      links: await API.getMenuEntries(),
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
button {
  border: none;
  background: none;
}
.lks-container {
  .error {
    border: 1px solid crimson; 
    border-radius: 5px;
    padding: 10px;
  }
  .contact-form {
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
    display: flex;
    background: $color-main;
    margin: 40px 0;
    .info {
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
      flex: 1;
      color: #fff;
      padding-top: 40px;
      padding-left: 20px;
      padding-right: 10px;
      .heading {
        font-size: 20px;
      }
      ul {
        list-style-type: none;
        li {
          font-size: 18px;
          margin: 25px 0;
          img {
            margin-right: 10px;
          }
        }
      }
    }
    .fields {
      background: white;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.05);
      flex: 2;
      display: flex;
      flex-direction: column;
      .submit {
        max-width: 300px;
        text-align: center;
        align-self: center;
        margin: 10px;
      }
      .heading {
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: normal;
        color: #545353;
        line-height: 2;
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
      }
      .shaded {
        text-align: center;
        margin: 10px;
        color: $color-shaded;
      }
      .split {
        display: flex;
        & > * {
          flex: 1;
          width: 50%;
        }
      }
      textarea,
      input {
        margin: 10px;
        background: #efefef;
        border: none;
        padding: 10px;
        font-family: sans-serif;
        font-size: 16px;
      }
      textarea {
        min-height: 120px;
        resize: none;
      }
    }
  }
}
</style>
