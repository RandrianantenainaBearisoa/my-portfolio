<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" :fill="fill">
    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    size: {
      type: String,
      default: "24",
    },
    fill: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
