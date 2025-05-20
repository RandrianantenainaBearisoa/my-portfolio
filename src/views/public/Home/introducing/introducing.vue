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
        <h2 class="regular-font">
          HELLO, <br>
          I'm RANDRIANANTENAINA Bearisoa
        </h2>
        <h3>
          A Full Stack Web Developer
        </h3>
      </div>
    </div>
    <div class="description">
      <h3 class="regular-font-italic">
        I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. I have
        experience in both front-end and back-end development, and I am always eager to learn new technologies and
        improve my skills.
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  color: var(--text-color-01);
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
      width: 20%;
      display: flex;
      justify-content: center;

      img {
        height: 200px;
        padding: 5px;
        border: 5px solid white;
        border-radius: calc(infinity * 1px);
      }
    }

    .intro-container {
      width: 40%;
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
    }
  }
}
</style>
