<script setup lang="ts">
//
</script>

<template>
  <RouterView />
</template>

<script lang="ts">
export default {
  data() {
    return {
      theme: "light",
      schemes: "schemes-02",
    };
  },

  mounted() {
    this.setTheme();
  },

  methods: {
    setTheme() {
      const storedTheme = localStorage.getItem("theme");
      const storedSchemes = localStorage.getItem("schemes");
      if (storedTheme) {
        this.theme = storedTheme;
      }
      if (storedSchemes) {
        this.schemes = storedSchemes;
      }

      localStorage.setItem("theme", this.theme);
      localStorage.setItem("schemes", this.schemes);

      document.body.classList.add(`${this.theme}`);
      document.body.classList.add(`${this.schemes}`);
    },
  },
};
</script>

<style scoped lang="scss">
// 
</style>
