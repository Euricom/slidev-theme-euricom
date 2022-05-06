<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';
const props = defineProps({
  image: {
    type: String,
  },
});
const style = computed(() => handleBackground(props.image));
</script>

<template>
  <div v-if="image" class="grid grid-row-2 w-full h-full">
    <div class="w-full w-full" :style="style" />
    <div class="slidev-layout final">
      <slot />
    </div>
  </div>
  <div v-if="!image" class="slidev-layout final bg-petrol">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style></style>
