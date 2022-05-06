<script setup lang="ts">
const props = defineProps({
  author: String,
});
</script>

<template>
  <div class="slidev-layout quote">
    <div class="my-auto w-200 border-solid border-red-400 p-7">
      <slot />
      {{ author }}
    </div>
  </div>
</template>

<style></style>
