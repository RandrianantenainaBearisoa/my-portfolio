<script setup lang="ts">
import progessBarCustom from '../progessbar/progessBarCustom.vue'
import i18n from '@/plugins/i18n'

const progress_bar_height = 5
</script>

<template>
  <div class="lang-container">
    <div class="title">
      {{ language.lang }}
    </div>
    <hr />
    <div class="progessbar-container">
      <div class="label">{{ i18n.global.t('labels.skill.listening') }}</div>
      <div class="progress-bar">
        <progess-bar-custom
          :progress="language.listen"
          color="#4b749fed"
          :height="progress_bar_height"
        ></progess-bar-custom>
      </div>
    </div>
    <hr />
    <div class="progessbar-container">
      <div class="label">{{ i18n.global.t('labels.skill.reading') }}</div>
      <div class="progress-bar">
        <progess-bar-custom
          :progress="language.read"
          color="#4b749fed"
          :height="progress_bar_height"
        ></progess-bar-custom>
      </div>
    </div>
    <hr />
    <div class="progessbar-container">
      <div class="label">{{ i18n.global.t('labels.skill.writing') }}</div>
      <div class="progress-bar">
        <progess-bar-custom
          :progress="language.write"
          color="#4b749fed"
          :height="progress_bar_height"
        ></progess-bar-custom>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'language-card',
  props: {
    language: {
      type: {
        lang: String,
        listen: String,
        read: String,
        write: String,
        icon: String,
      },
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.lang-container {
  height: 130px;
  width: 100%;
  margin: auto;
  padding: 5px;
  border: solid;
  border-radius: 10px;
  background-color: #ffffff;
  color: #4b749fed;

  .title {
    width: 100%;
    text-align: center;
    font-size: medium;
  }

  hr {
    width: 80%;
    margin: 3px auto;
    border: none;
    border-top: 1px solid #4b749fed;
  }

  .progessbar-container {
    padding: 0px 5px;
    display: flex;
    align-items: center;
    height: 21px;

    .label {
      width: 20%;
      font-size: smaller;
    }

    .progress-bar {
      width: 75%;
    }
  }
}
</style>
