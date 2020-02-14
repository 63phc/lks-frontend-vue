<template>
  <div class="btn">
    <slot />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  background: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 13px 30px;
  font-size: 18px;
  border-radius: 500px;
  font-weight: medium;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #656d6d;
  transition: background 0.4s;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
}
</style>
