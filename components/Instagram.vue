<template lang="pug">
  div.instagram
    div.left-side
    div.mid-side
      h2 @littleknitsstory
      Button.button Follow
    div.right-side
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
@import '../assets/globals.scss';
.instagram {
  .mid-side {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      line-height: 2;
      font-weight: normal;
    }
    .button {
      background: $color-main;
      color: #fff;
      &:hover {
        background: darken($color-main, 1.5);
      }
    }
  }
  min-height: 200px;
  display: flex;
  align-items: stretch;
  & > * {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    & > * {
      flex: 0;
    }
    .mid-side {
      flex: 1;
    }
  }
}
.left-side {
  background-image: url('/images/bitmap/ig-left.svg');
  background-repeat: no-repeat;
  background-position: left;
}

.right-side {
  background-image: url('/images/bitmap/ig-right.svg');
  background-repeat: no-repeat;
  background-position: right;
}
</style>
