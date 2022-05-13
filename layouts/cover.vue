<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";
const props = defineProps({
  background: String,
  author: String,
  location: String,
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});
const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div class="slidev-layout cover bg-petrol" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style></style>
