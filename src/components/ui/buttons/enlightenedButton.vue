<template>
  <div class="link-container">
    <a :href="url" :class="usedClass" :target="(newTab ? '_blank' : '')">
      <slot>
      </slot>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "enlightened-button",
  props: {
    usedClass: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    newTab: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
@import '@/assets/styles/components/ui/buttons/buttons.scss';
</style>
