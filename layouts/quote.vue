<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";
const props = defineProps({
  author: String,
  background: String,
});
const style = computed(() => handleBackground(props.background));
</script>

<template>
  <div class="slidev-layout quote bg-petrol" :style="style">
    <div class="my-auto w-full">
      <div class="my-auto w-200 border-solid border-red-400 p-7">
        <slot />
        {{ author }}
      </div>
    </div>
  </div>
</template>

<style></style>
