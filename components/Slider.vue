<template>
  <div class="slider">
    <div class="images">
      <div class="image" v-for="image in images" :key="image">
        <img :src="image.src" :alt="image.alt"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
