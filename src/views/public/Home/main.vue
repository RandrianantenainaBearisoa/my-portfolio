<script setup lang="ts">
import Intro from './introducing/introducing.vue';
import Contact from "@/app/components/contact/contact.vue"
</script>

<template>
  <div class="content-container">
    <div class="introduction-container">
      <Intro />
    </div>
    <div class="menu-container">
      <router-link to="#">
        <div class="menu">
          <h1 class="regular-font-italic">About me</h1>
        </div>
      </router-link>
      <router-link to="#">
        <div class="menu">
          <h1 class="regular-font-italic">My skills</h1>
        </div>
      </router-link>
      <router-link to="#">
        <div class="menu">
          <h1 class="regular-font-italic">My projects</h1>
        </div>
      </router-link>
    </div>
  </div>
  <div class="contact-container">
    <Contact />
  </div>
</template>

<style scoped lang="scss">
.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  backdrop-filter: var(--backdrop-filter);

  .introduction-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-container {
    width: 80%;
    display: flex;
    justify-content: space-around;

    .menu {
      padding: 0px 20px;
      border: 1px solid var(--text-color);
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background: var(--text-color);
        color: var(--background-color);
        transition: all 0.3s ease;
      }
    }
  }
}

.contact-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  backdrop-filter: var(--backdrop-filter);
}
</style>
