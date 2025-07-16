<script setup lang="ts">
import sqlImage from "@/components/ui/icons/image/sql.png";
</script>

<template>
  <div>
    <img :src="sqlImage" alt="" :width="size" :height="size" style="border-radius: 500px;">
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
