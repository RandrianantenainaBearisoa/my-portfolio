<script setup lang="ts">
import timelineData from "./timelineData.json";
import { timelineLayout } from "@/components/layouts";
</script>

<template>
  <div class="timeline-container">
    <timeline-layout :events="timelineData" />
  </div>
</template>

<script lang="ts">
export default {
  name: "personal-journey",
};
</script>

<style lang="scss" scoped>
.timeline-container {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(180deg, #add8e6 0%, #ffffff 100%);
}
</style>
