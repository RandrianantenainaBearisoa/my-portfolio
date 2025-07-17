<template>
  <div
    class="progress-bar-container"
    :style="containerStyle"
  >
    <div
      class="progress-bar-fill"
      :style="fillStyle"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type CSSProperties } from 'vue';
export default defineComponent({
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    height: {
      type: Number,
      default: 18,
    },
    color: {
      type: String,
      default: '#42b983',
    },
    backgroundColor: {
      type: String,
      default: '#e0e0e0',
    },
    borderRadius: {
      type: Number,
      default: 5,
    },
  },
  setup(props) {
    const containerStyle = computed<CSSProperties>(() => ({
      width: '100%',
      height: `${props.height}px`,
      backgroundColor: props.backgroundColor,
      borderRadius: `${props.borderRadius}px`,
      overflow: 'hidden',
      position: 'relative' as const,
    }));

    const fillStyle = computed<CSSProperties>(() => ({
      width: `${props.progress}%`,
      height: '100%',
      backgroundColor: props.color,
      borderRadius: `${props.borderRadius}px`,
      transition: 'width 0.5s ease-in-out',
      position: 'absolute' as const,
      top: 0,
      left: 0,
    }));

    return {
      containerStyle,
      fillStyle,
    };
  },
});
</script>

<style scoped>
.progress-bar-container {
  /*  */
}

.progress-bar-fill {
  /*  */
}
</style>
