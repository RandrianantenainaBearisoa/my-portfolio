<template>
  <div class="lang-section" @click="toggleLang">
    <div>
      {{ currentLang }}
    </div>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';

export default {
  data() {
    return {
      current_lang: i18n.global.locale.charAt(0).toUpperCase() + i18n.global.locale.slice(1),
    };
  },
  setup() {
    const { locale } = useI18n();

    return {
      locale
    };
  },
  computed: {
    currentLang() {
      return this.current_lang;
    },
  },
  methods: {
    toggleLang() {
      if ((this.currentLang === "Fr")) {
        this.current_lang = "En";
        this.locale = "en";
      } else {
        this.current_lang = "Fr";
        this.locale = "fr";
      }
      localStorage.setItem('lang', this.current_lang.toLowerCase());
    },
  }
};
</script>

<style lang="scss" scoped>
.lang-section {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 50%;
  left: 0;
  border-radius: 500px;
  display: flex;
  background: #243748;
  background: radial-gradient(circle, #243748e6 0%, #4b749fed 100%);
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
