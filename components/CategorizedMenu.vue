<template lang="pug">
  Card.categorized-menu.lks-card-floating
    ul.categories
      li.category
        span Sample text
        ul.subcategories
          li.subcategory Doug
          li.subcategory Dimmadome
          li.subcategory The owner of
          li.subcategory Dimmsdale
      li.category.selected
        span Menu entry 2
        ul.subcategories
          li.subcategory Doug
          li.subcategory Dimmadome
          li.subcategory The owner of
          li.subcategory Dimmsdale
</template>

<script lang="ts">
import Card from '../components/Card.vue'
export default {
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
