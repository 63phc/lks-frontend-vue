<template lang="pug">
  div
    TopHeader
    NavBar
    .lks-container
      h1.err {{error.statusCode}}
      p.error-subtitle(v-if="error.statusCode === 404")
        | {{ $t('error.e404.error_type' )}}
      p.error-text(v-if="error.statusCode === 404")
        | {{ $t('error.e404.subtitle' )}}
        nuxt-link(:to="localePath('/')") {{ $t('error.e404.subtitle_link' )}}
    Footer
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  props: ['error'],
  components: {
    TopHeader,
    NavBar,
    Footer
  }
})
export default class ErrorLayout extends Vue{}

</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.inst {
  margin: 40px 0;
}
.lks-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .error-subtitle {
    font-size: 5vw;
    color: $color-shaded;
  }
  .error-text {
    color: #656d6d;
    width: 35vw;
  }
}
.err {
  margin-top: 100px;
  line-height: 0.8;
  font-size: 20vw;
  color: $color-main;
}
</style>
