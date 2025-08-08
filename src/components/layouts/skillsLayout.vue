<template>
  <div>
    <fieldset>
      <legend>
        {{ legend }}
      </legend>
      <slot>
      </slot>
    </fieldset>
  </div>
</template>

<script lang="ts">
export default {
  name: "skills-layout",
  props: {
    legend: {
      type: String,
      required: true
    }
  },
};
</script>
