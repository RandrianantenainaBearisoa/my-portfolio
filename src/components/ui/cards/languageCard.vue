<script setup lang="ts">
import progessBarCustom from '../progessbar/progessBarCustom.vue';
</script>

<template>
  <div class="lang-container">
    <div class="title">
      {{ language.lang }}
    </div>
    <hr>
    <div class="progessbar-container">
      <div class="label">Listening</div>
      <div class="progress-bar">
        <progess-bar-custom :progress="language.listen" color="#4b749fed"></progess-bar-custom>
      </div>
    </div>
    <hr>
    <div class="progessbar-container">
      <div class="label">Reading</div>
      <div class="progress-bar">
        <progess-bar-custom :progress="language.read" color="#4b749fed"></progess-bar-custom>
      </div>
    </div>
    <hr>
    <div class="progessbar-container">
      <div class="label">Writing</div>
      <div class="progress-bar">
        <progess-bar-custom :progress="language.write" color="#4b749fed"></progess-bar-custom>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "language-card",
  props: {
    language: {
      type: {
        lang: String,
        listen: String,
        read: String,
        write: String,
        icon: String
      },
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.lang-container {
  height: 180px;
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
    font-size: large;
  }

  hr {
    width: 80%;
  }

  .progessbar-container {
    padding: 0px 5px;
    display: flex;
    align-items: center;
    height: 21px;

    .label {
      width: 30%;
    }

    .progress-bar {
      width: 70%;
    }
  }
}
</style>
