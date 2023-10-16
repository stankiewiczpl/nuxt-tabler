<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ' d-flex flex-column'
  }
})
</script>

<template>
  <div class="page page-center">
    <slot />
  </div>
</template>

<style scoped>
.page-center {
  justify-content: center;
}
</style>
