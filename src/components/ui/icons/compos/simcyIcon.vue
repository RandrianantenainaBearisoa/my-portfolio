<script setup lang="ts">
import simcyCreative from "@/components/ui/icons/image/simcyCreative.avif";
</script>

<template>
  <div>
    <img :src="simcyCreative" alt="" :width="size" :height="size" style="border-radius: 500px;">
  </div>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: "24px",
    },
  },
};
</script>
