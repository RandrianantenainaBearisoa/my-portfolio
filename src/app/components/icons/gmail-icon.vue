<template>
  <svg
    id="Gmail_48"
    :width="size"
    :height="size"
    :fill="color"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="48" height="48" stroke="none" fill="#000000" opacity="0" />

    <g transform="matrix(0.96 0 0 0.96 24 24)">
      <path
        style="
          stroke: none;
          stroke-width: 1;
          stroke-dasharray: none;
          stroke-linecap: butt;
          stroke-dashoffset: 0;
          stroke-linejoin: miter;
          stroke-miterlimit: 4;
          fill-rule: nonzero;
          opacity: 1;
        "
        transform=" translate(-25, -24.68)"
        d="M 12 23.403 L 12 23.39 L 12 10.389 L 11.88 10.3 L 11.870000000000001 10.3 L 9.14 8.28 C 7.47 7.04 5.09 7.1 3.61 8.56 C 2.62 9.54 2 10.9 2 12.41 L 2 16.012 L 12 23.403 z M 38 23.39 L 38 23.403000000000002 L 48 16.012 L 48 12.41 C 48 10.92 47.4 9.56 46.42 8.58 C 44.96 7.123 42.655 6.952 40.996 8.177 L 38.12 10.3 L 38 10.389 L 38 23.39 z M 14 24.868 L 24.406 32.56 C 24.759 32.821000000000005 25.241999999999997 32.821000000000005 25.595 32.56 L 36 24.868 L 36 11.867 L 25 20 L 14 11.867 L 14 24.868 z M 38 25.889 L 38 41 C 38 41.552 38.448 42 39 42 L 45.5 42 C 46.881 42 48 40.881 48 39.5 L 48 18.497 L 38 25.889 z M 12 25.889 L 2 18.497 L 2 39.5 C 2 40.881 3.119 42 4.5 42 L 11 42 C 11.552 42 12 41.552 12 41 L 12 25.889 z"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "GmailIcon",

  props: {
    size: {
      type: String,
      default: "24",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  margin: 2px;
}
</style>
