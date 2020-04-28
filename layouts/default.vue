<template lang="pug">
  DefaultLayoutComponent
    nuxt
</template>

<script lang="ts">
import DefaultLayoutComponent from '../components/DefaultLayoutComponent.vue'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    DefaultLayoutComponent,
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style>

</style>
