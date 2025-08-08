<script setup lang="ts">
import i18n from "@/plugins/i18n";
import { timelineLayout } from "@/components/layouts";
</script>

<template>
  <div class="timeline-container">
    <timeline-layout :events="timelineDatas" />
  </div>
</template>

<script lang="ts">
export default {
  name: "personal-journey",
  mounted() {
    console.log("");
  },
  computed: {
    timelineDatas() {
      if (i18n.global.locale === "en")
        return i18n.global.messages.en.timelineData;
      return i18n.global.messages.fr.timelineData;
    },
  },
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
