<template>
  <default-slide v-bind="defaultAttrs">
    <div class="big-content w-full grid min-h-[400px]" :class="positionClass">
      <div>
        <slot />
      </div>
    </div>
  </default-slide>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import omit from "lodash-es/omit";
import DefaultSlide from "./default.vue";
const attrs = useAttrs();
const positionClass = computed(() =>
  attrs?.position === "top" ? "justify-center pt-8" : "place-content-center"
);
const defaultAttrs = computed(() => ({
  ...omit(attrs, "position"),
  ...attrs,
}));
</script>

<style lang="postcss">
.slidev-layout .big-content {
  h1 {
    @apply text-5xl;
  }
  p,
  li {
    @apply text-3xl pb-2;
  }
}
</style>
