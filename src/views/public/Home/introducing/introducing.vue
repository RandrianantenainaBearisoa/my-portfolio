<script setup lang="ts">
import _profile from '@/assets/img/profilepic/picpro.jpg';
</script>

<template>
  <div class="header-container">
    <div class="title">
      <div class="pic-container">
        <img :src="_profile" alt="">
      </div>
      <div class="intro-container">
        <h1 class="regular-font-italic">
          HELLO, I'm RANDRIANANTENAINA Bearisoa
        </h1>
        <h2>
          A Full Stack Web Developer
        </h2>
      </div>
    </div>
    <div class="description">
      <h3 class="light-font-italic">
        I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. I have
        experience in both front-end and back-end development, and I am always eager to learn new technologies and
        improve my skills.
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  padding: 10px;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .pic-container {
      width: 30%;
      display: flex;
      justify-content: center;

      img {
        height: 200px;
        border-radius: calc(infinity * 1px);
      }
    }

    .intro-container {
      width: 30%;
      padding: 20px;
    }
  }

  .description {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    h3 {
      text-align: center;
      font-size: 1.2em;
      color: var(--text-color);
    }
  }
}
</style>
