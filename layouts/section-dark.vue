<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";
const props = defineProps({
  background: String,
});
const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div class="slidev-layout section-dark w-full h-full grid" :style="style">
    <div class="my-auto text-center">
      <slot />
    </div>
  </div>
</template>

<style></style>
