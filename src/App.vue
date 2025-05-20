<script setup lang="ts">
//
</script>

<template>
  <PrimevueToast />
  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {
      theme: "light",
    };
  },

  mounted() {
    this.setTheme();
  },

  methods: {
    setTheme() {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        this.theme = storedTheme;
      }

      localStorage.setItem("theme", this.theme);

      document.body.classList.add(`${this.theme}`);
    },
  },
};
</script>

<style scoped lang="scss">
//
</style>
