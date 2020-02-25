<template lang="pug">
  Card.categorized-menu.lks-card-floating
    ul.categories
      li(v-for="(category, index) in categories" @click="select(index)" :class="selected == index ? 'selected' : ''").category.lks-mod-pointer
        span {{category.title}}
</template>

<script lang="ts">
import Card from '../components/Card.vue'
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    select(id) {
      this.selected = id
      this.$emit('select', this.categories[id].slug)
    }
  },
  data() {
    return {
      selected: -1
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/lks-fw/lks-fw.scss';
.categorized-menu {
  padding: 16px 0 !important;
  .categories {
    list-style-type: none;
    color: #545353;
    .category {
      background: #fff;
      .subcategories {
        display: none;
        color: #545353;
        list-style-type: none;
        .subcategory {
          background: #f7f7f7;
        }
      }
      &.selected {
        color: #fff;
        background: $color-main;
        .subcategories {
          display: block;
        }
      }
    }
  }
  .category span,
  .subcategory {
    display: block;
    padding: 10px;
    padding-left: 10%;
  }
}
</style>
