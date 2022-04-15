<script setup lang="ts">
const props = defineProps({
  author: String,
});
</script>

<template>
  <div class="slidev-layout quote">
    <div class="my-auto w-full">
      <slot />
      {{ author }}
    </div>
  </div>
</template>

<style lang="postcss"></style>
